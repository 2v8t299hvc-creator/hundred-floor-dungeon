const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
class Node {
 constructor(){this.children=[];this.listeners={};this.style={};this.textContent='';this.classList={values:new Set(),add:(x)=>this.classList.values.add(x),remove:(x)=>this.classList.values.delete(x),toggle:(x,force)=>{const on=force??!this.classList.values.has(x);on?this.classList.values.add(x):this.classList.values.delete(x);return on;}};}
 append(...x){this.children.push(...x);} replaceChildren(...x){this.children=x;} setAttribute(){} addEventListener(k,fn){this.listeners[k]=fn;} showModal(){} close(){}
}
const source=fs.readFileSync('index.html','utf8').split('<script>')[1].split('</script>')[0];
function game(saved,throwSave=false){const elements=new Map(),data=new Map(Object.entries(saved||{}));const math=Object.create(Math);math.random=()=>.2;const context={document:{getElementById(id){if(!elements.has(id))elements.set(id,new Node());return elements.get(id);},createElement:()=>new Node()},localStorage:{getItem:k=>data.get(k)??null,setItem(k,v){if(throwSave)throw Error('quota');data.set(k,v);}},Math:math};vm.createContext(context);vm.runInContext(source.replace(/\}\)\(\);\s*$/,`globalThis.test={fresh,makeFloor,stats,step,startBattle,turn,buy,draw,base,save,validSaved,commands,cureAmount,startNew,get state(){return state},set state(s){state=s},get saveFailed(){return saveFailed}};})();`),context);return {api:context.test,elements,data,math};}
const {api:g,data,math}=game();g.startNew();assert.equal(g.stats().hp,100);assert.equal(g.state.sp,30);assert.equal(g.validSaved(g.state),true);
// Reveal and movement are separate; events happen only on entry.
let pos=g.state.pos,i=pos%5<4?pos+1:pos-1;g.state.cells[i]={type:'battle',open:false,used:false};g.step(i);assert.equal(g.state.pos,pos);assert.equal(g.state.battle,null);g.step(i);assert.equal(g.state.pos,i);assert.equal(g.state.battle.status,'active');assert.equal(g.state.cells[i].used,true);
// Cannot move, purchase, or cast locked skills during combat.
g.state.xp=100;g.buy('arcane');assert.equal(g.state.tree.arcane,0);const sp=g.state.sp;g.turn('fire');assert.equal(g.state.sp,sp);assert.equal(g.state.battle.turn,1);
// Three ordinary attacks defeat the first-floor slime; reward is paid once.
g.state.xp=0;g.turn('attack');assert.equal(g.state.battle.enemy.hp,20);assert.equal(g.state.hp,92);g.turn('attack');g.turn('attack');assert.equal(g.state.battle.status,'won');assert.equal(g.state.xp,5);assert.equal(g.state.hp,84);g.turn('attack');assert.equal(g.state.xp,5);
// A second win unlocks a first branch; purchased nodes deduct exactly once.
g.state.battle=null;g.startBattle('battle');for(let n=0;n<3;n++)g.turn('attack');assert.equal(g.state.xp,10);g.state.battle=null;g.buy('arcane');assert.equal(g.state.xp,0);assert.equal(g.state.tree.arcane,1);assert.equal(g.commands().find(c=>c.id==='fire').unlocked,true);g.buy('arcane');assert.equal(g.state.tree.arcane,1);
// All branches, max-stat growth, costs, and healing multiplier.
g.state.xp=200;g.buy('valor');g.buy('valor');assert.equal(g.stats().hp,120);g.buy('valor');assert.equal(g.commands().find(c=>c.id==='smash').cost,3);g.buy('arcane');g.buy('arcane');assert.equal(g.stats().sp,40);g.buy('grace');g.buy('grace');g.buy('grace');assert.equal(g.stats().resist,11);assert.equal(g.cureAmount(),40);assert.equal(g.state.xp,30);
// Guard applies even against a faster opponent, SP is never negative.
g.startBattle('rare');let hp=g.state.hp;g.turn('guard');assert.equal(hp-g.state.hp,4);g.state.sp=4;const turn=g.state.battle.turn;g.turn('fire');assert.equal(g.state.battle.turn,turn);assert.equal(g.state.sp,4);
// Mid-combat save/load restores turn, enemy HP, tree, and remaining SP.
g.state.sp=10;g.turn('fire');const restored=game(Object.fromEntries(data)).api;assert.equal(restored.state.battle.turn,g.state.battle.turn);assert.equal(restored.state.battle.enemy.hp,g.state.battle.enemy.hp);assert.equal(restored.state.sp,5);assert.equal(restored.state.tree.grace,3);
// Death ends the run; a new run resets XP, tree, HP and SP.
g.state.hp=1;g.state.battle.enemy.speed=50;g.turn('attack');assert.equal(g.state.dead,true);assert.equal(g.state.battle.status,'lost');assert.equal(g.validSaved(g.state),true);g.startNew();assert.equal(g.state.xp,0);assert.equal(g.state.tree.grace,0);assert.equal(g.state.sp,30);assert.equal(g.state.hp,100);
// Flee is a turn and grants no reward; rewards cannot be replayed on the cell.
g.startBattle('battle');math.random=()=>0;g.turn('flee');assert.equal(g.state.battle.status,'escaped');assert.equal(g.state.xp,0);
// Generation stays valid, with stairs every floor and return only every tenth.
for(let f=1;f<=100;f++){const s=g.makeFloor(f,g.fresh());assert.equal(g.validSaved(s),true);assert.equal(s.cells.filter(c=>c.type==='stairs').length,1);assert.equal(s.cells.filter(c=>c.type==='return').length,f%10===0?1:0);assert.equal(s.cells.filter(c=>c.open).length,1);}
const corrupt=JSON.parse(JSON.stringify(g.makeFloor(1,g.fresh())));corrupt.cells[0].type='invalid';assert.equal(g.validSaved(corrupt),false);assert.equal(game({'hundred-floor-dungeon-v02':'invalid json'}).api.state,null);const blocked=game({},true);blocked.api.startNew();assert.equal(blocked.api.saveFailed,true);
console.log('PASS: exploration, combat, rewards, guard, SP, all nine nodes, persistence, defeat/reset, fleeing, 100-floor generation, corrupt storage, quota failure');
