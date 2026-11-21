const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'../assets/scrolls'),layout=JSON.parse(fs.readFileSync(path.join(root,'layout.json'),'utf8'));
fs.mkdirSync(path.join(root,'frames'),{recursive:true});
for(let rank=1;rank<=5;rank++){const template=fs.readFileSync(path.join(root,'templates','rank-'+rank+'.svg'),'utf8');for(const [element,color] of Object.entries(layout.elementColors))fs.writeFileSync(path.join(root,'frames',element+rank+'.svg'),template.replaceAll('ELEMENT_COLOR',color));}
