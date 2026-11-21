# 共通テンプレート方式

全巻物は同じ `master.webp` を使用し、魔法の絵だけを `emblems/` から載せ替える。`frames/` は固定座標から生成した属性・段階ごとの装飾。紙・帯・封蝋・宝石に画像生成由来の位置ずれが起きない構造に変更。各属性で同段階のSVG形状は同一、色だけを変えている。

`templates/` の共通型を編集し、`node scripts/build-scroll-frames.cjs` で全属性の装飾へ反映する。同じ段階の形状が属性ごとに変わらないことをテストで確認。

正確な配置と段階仕様は `layout.json` に記載。魔法の絵の表示枠も全35種で同一。旧35枚の一体画像は互換用に保持し、新表示では使用しない。

## 旧画像の記録

# 巻物イラスト

全35魔法にそれぞれ個別生成した羊皮紙のイラストを使用。暖色の輪郭線、セル塗り、属性色のリボン・封蝋、魔法の効果を表す紋章を共通仕様にした。画像内の点は装飾として扱い、正確な段階はゲーム内のテキストで表示する。

各画像は組み込み画像生成で作成し、透過WebPへ縮小。ゲーム内の巻物選択（戦闘・探索）、持ち物、練魔台、スキルツリーで共通利用。

| ファイル | 魔法 | 段階 | 使用場面 |
| --- | --- | --- | --- |
| fire1.webp | ファイア | 1 | battle |
| fire2.webp | トーチカ | 2 | explore |
| fire3.webp | 火炎の障壁 | 3 | battle |
| fire4.webp | フレイムピラー | 4 | battle |
| fire5.webp | 不死鳥の炎 | 5 | both |
| water1.webp | ウォーターシールド | 1 | both |
| water2.webp | アイシクルアロー | 2 | explore |
| water3.webp | 凍結 | 3 | battle |
| water4.webp | フルウォッシュ | 4 | both |
| water5.webp | タイダルウェイブ | 5 | battle |
| wind1.webp | 浮遊 | 1 | explore |
| wind2.webp | 風の導き | 2 | explore |
| wind3.webp | ライトニング | 3 | battle |
| wind4.webp | 突風 | 4 | battle |
| wind5.webp | マージウィンド | 5 | both |
| earth1.webp | 鉄壁 | 1 | battle |
| earth2.webp | 地ならし | 2 | explore |
| earth3.webp | トラップ | 3 | battle |
| earth4.webp | ゴーレム召喚 | 4 | battle |
| earth5.webp | アースシェイク | 5 | explore |
| light1.webp | キュア | 1 | both |
| light2.webp | 召喚 | 2 | explore |
| light3.webp | バッファー | 3 | battle |
| light4.webp | ホーリーグレイル | 4 | both |
| light5.webp | ジャッジメント | 5 | battle |
| dark1.webp | ダークウェーブ | 1 | battle |
| dark2.webp | ドレインタッチ | 2 | battle |
| dark3.webp | デスクラウド | 3 | battle |
| dark4.webp | ネクロマンス | 4 | both |
| dark5.webp | 悪魔化 | 5 | battle |
| time1.webp | スロウ | 1 | battle |
| time2.webp | ヘイスト | 2 | battle |
| time3.webp | リコール | 3 | battle |
| time4.webp | ストップ | 4 | battle |
| time5.webp | タイムトラベル | 5 | explore |
