# Visual direction — v0.4

Original project illustrations generated for this game: slightly pop Japanese fantasy RPG, clear anime contours, blue-green ancient stone, leaf green and warm golden light. No third-party character assets.

- `ruins.webp`: 1536×1024, hand-painted sunlit overgrown temple courtyard with open central floor. Background used for exploration, base and battle.
- `seal.webp`: 256×256 RGBA, chunky square blue-green stone, gold inset border and turquoise geometric rune. Unopened map tile.
- `slime.webp`: 720×658 RGBA, expressive turquoise jelly slime, mint crystal sprout and cheeky smile. Normal battle enemy.

The transparent sprites preserve alpha. Outputs were converted to WebP and sized for the game. The three assets total approximately 602 KiB. Source generated PNGs remain in the generation outputs; the game references only the files in this directory.

## Generation briefs

1. Background: slightly pop welcoming hand-painted anime fantasy ruin, not dark fantasy; sunlit blue-green mossy courtyard, crystal ornaments, warm golden daylight, central floor for tile board or monster overlays; no characters, text, UI or watermark.
2. Tile: one isolated square stone tile on true transparency; blue-green stone, softly beveled corners, golden inset border, simple glowing turquoise diamond rune, small moss details, top-down view; no text or opaque backdrop.
3. Slime: one isolated expressive turquoise cave slime on true transparency, crystal sprout, determined oval navy eyes and cheeky smile; clean cel shading and subtle contact shadow, no sticker border, text or backdrop.

Only the cave slime received a new enemy illustration in this first visual pass. Strong and rare enemies retain distinct symbolic representations until their own assets are created.

## v0.5 ピクシー
- `pixie.webp`: 透明背景の男性ピクシー。緑の葉衣装・短髪・4枚の羽・光の杖。組込み画像生成で作成し、縦横720px以内に最適化。
- 制作指示: cheerful hand-painted anime fantasy; male adult pixie, mischievous smile, leaf tunic, shorts, boots, four translucent wings, glowing wand; fully clothed; transparent; no text.

### ピクシー改訂
丸顔、大きな緑の瞳、赤い頬、ふわっとした短髪、細身の体格へ改訂。緑の葉衣装・4枚の羽・杖を維持。

## ウンディーネ
`undine.webp`: 透明背景、720px以内。組込み画像生成。可愛い男性の水精霊、短い水色髪、大きな青い瞳、青白金の衣装と短パン、流れるケープ、水流を操る全身像。明るいアニメ調の塗り。

### ウンディーネ改訂
青い鱗肌・大きなヒレ耳・水かきのある爪手・魚の尾を持つモンスター少年へ変更。手前に伸ばした手を強く短縮遠近で描き、渦巻く水流で正方形を満たす構図。ゲーム内でも拡大表示。

## 探索マス v0.7
組込み画像生成で制作。256px以内の透明WebPへ最適化。明るい手描きアニメ調、青緑と金、小さくても判別しやすいシルエット、文字や人物なし。
- `chest.webp`: 木製の丸い宝箱、金の帯と青緑の宝石。
- `healing.webp`: 苔のある石の祭壇と赤いハートクリスタル。HP回復。
- `mana.webp`: 苔のある石の祭壇と青いダイヤクリスタル、金の三日月。MP/SP回復。

## v0.8 フラットな遺跡と石版
- `ruins-flat.webp`: 既存の中庭を構図参照、剣修正版の犬獣人立ち絵を絵柄参照として組込み画像生成で描き直し。太めの輪郭、マットな平塗り、少ない段階のセル影。青緑の遺跡・苔・金・結晶を継承し、細部の筆触や細かい葉を省略。人物なし。
- `seal-flat.webp`: 同じ絵柄参照で描き直した正面の石版。青緑の石、金の枠、中央の水色ルーン。透過背景。
- 旧版 `ruins.webp` と `seal.webp` は比較用に保持。

## v0.9 — 11点の絵柄統一
全画像は剣修正版の犬獣人立ち絵をスタイル参照に組込み画像生成で制作。太めの茶色の輪郭、マットな平塗り、少ない段階のセル影、細かな質感なし、透過背景。
- マス画像（256px以内）: `chest-flat.webp` 金の帯と宝石の木箱、`healing-flat.webp` 赤いハートの祠、`mana-flat.webp` 青い結晶と三日月の祠、`merchant-flat.webp` コインを持つ成人男性たぬき獣人、`stairs-flat.webp` 石のアーチと階段、`battle-flat.webp` 交差する剣と盾。
- 敵画像（640px以内）: `slime-flat.webp` 青緑のもちっとしたスライム、`pixie-flat.webp` 成人男性の緑の羽妖精、`undine-flat.webp` 成人男性の青い鱗肌・ヒレ耳・水かき・尾の水棲モンスター、`guardian-flat.webp` 男性型の大柄な石の守護者、`wisp-flat.webp` 成人男性の銀色の霊体と炎。
- 人型の色気は成人の体格、表情、袖なしの衣装で控えめに表現。犬獣人の線と塗りを参照し、各種族の姿を新規デザイン。

### ウンディーネの攻撃構図
招くように手を差し出すポーズから、体をひねった横向きの跳躍と、水の爪を斜めに振り抜く斬撃へ変更。目は相手を鋭く見据え、牙を見せる戦闘表情。青い鱗肌・ヒレ耳・水かき・尾・成人男性の体格を維持。
