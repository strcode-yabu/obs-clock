# obs-clock

Clock file for OBS.

## 使い方

OBSのブラウザソースで
**[https://strcode-yabu.github.io/obs-clock/](https://strcode-yabu.github.io/obs-clock/)**
を表示する。

カスタムCSSで

```css
body {
  background: transparent;
}
```

を指定する。


## 変更方法

### 文字色

カスタムCSSで下記のCSSクラス, idのcolorプロパティを変更。

- 一括設定: #clock-wrap
- 年月日一括設定: .yyyymmdd
- 年: .yyyy
- 月: .mm
- 日: .dd
- 年後ろ区切り: .date_sep--yyyy
- 月後ろ区切り: .date_sep--mm
- 時分秒一括設定: .hhmiss
- 時: .hh
- 分: .mi
- 秒: .ss
- 時後ろ区切り: .time_sep--hh
- 分後ろ区切り: .time_sep--mi

```css
/* 例:年の色を変更 */
.yyyy {
  color: #c66;
}
```


### 文字サイズ

カスタムCSSで下記のCSSクラス, idのfont-sizeプロパティを変更。

- 年月日一括設定: .yyyymmdd
- 年: .yyyy
- 月: .mm
- 日: .dd
- 年後ろ区切り: .date_sep--yyyy
- 月後ろ区切り: .date_sep--mm
- 時分秒一括設定: .hhmiss
- 時: .hh
- 分: .mi
- 秒: .ss
- 時後ろ区切り: .time_sep--hh
- 分後ろ区切り: .time_sep--mi

```css
/* 例:年のサイズを変更 */
.yyyy {
  font-size: 20px;
}
```

### フォント

カスタムCSSで下記のCSSクラス, idのfont-familyプロパティを変更。

- 一括設定: #clock-wrap
- 年月日一括設定: .yyyymmdd
- 年: .yyyy
- 月: .mm
- 日: .dd
- 年後ろ区切り: .date_sep--yyyy
- 月後ろ区切り: .date_sep--mm
- 時分秒一括設定: .hhmiss
- 時: .hh
- 分: .mi
- 秒: .ss
- 時後ろ区切り: .time_sep--hh
- 分後ろ区切り: .time_sep--mi

```css
/* 例:年のフォントを変更 */
.yyyy {
  font-family: "メイリオ";
}
```

#### Google Fontsのフォントを使う

1. Google Fontsにアクセス: [https://fonts.google.com/](https://fonts.google.com/)  
2. 使いたいフォントを選択、Google Fontsの詳しい使い方はこちらのサイトを参照: [【2019年版】Google Fontsの使い方：初心者向けに解説！ - サルワカ](https://saruwakakun.com/html-css/basic/google-fonts)
3. **To embed a font, copy the code into the \<head\> of your html** から **@import** を選択
4. `@import url('https://fonts.googleapis.com/css2?family=***');`をコピー
5. OBSのブラウザソース、カスタムCSSの先頭に貼り付け
6. **CSS rules to specify families** の`font-family: '***', sans-serif;`をコピー
7. フォントを変更したい箇所に上の例を参考に貼り付け

```css
/* 時分秒にRobotoフォントを一括指定した例 */
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.hhmiss {
  font-family: 'Roboto', sans-serif;
}

```



### 表示切り替え

カスタムCSSで下記のCSSクラスのdisplayプロパティを変更。

- 年月日一括設定: .yyyymmdd
- 年: .yyyy
- 月: .mm
- 日: .dd
- 年後ろ区切り: .date_sep--yyyy
- 月後ろ区切り: .date_sep--mm
- 時分秒一括設定: .hhmiss
- 時: .hh
- 分: .mi
- 秒: .ss
- 時後ろ区切り: .time_sep--hh
- 分後ろ区切り: .time_sep--mi

```css
/* 例:年と年後ろ区切りを非表示変更 */
.yyyy,
.date_sep--yyyy {
  display: none;
}
```
