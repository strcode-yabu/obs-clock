# obs-clock

Clock file for OBS.

## 使い方

OBSのブラウザソースで
**[https://strcode-yabu.github.io/obs-clock/](https://strcode-yabu.github.io/obs-clock/)**
を表示する。

## 変更方法

### 文字色

カスタムCSSで下記のCSSクラス, idのcolorプロパティを変更。

- 一括設定: #clock-wrap
- 年: .yyyy
- 月: .mm
- 日: .ss
- 時: .hh
- 分: .mi
- 秒: .ss
- 年後ろ区切り: .date_sep--yyyy
- 月後ろ区切り: .date_sep--mm
- 時後ろ区切り: .time_sep--hh
- 分後ろ区切り: .time_sep--mi

```
# 例:年の色を変更
.yyyy {
  color: #c66;
}
```


### 文字サイズ

カスタムCSSで下記のCSSクラス, idのfont-sizeプロパティを変更。

- 年: .yyyy
- 月: .mm
- 日: .ss
- 時: .hh
- 分: .mi
- 秒: .ss
- 年後ろ区切り: .date_sep--yyyy
- 月後ろ区切り: .date_sep--mm
- 時後ろ区切り: .time_sep--hh
- 分後ろ区切り: .time_sep--mi

```
# 例:年のサイズを変更
.yyyy {
  font-size: 20px;
}
```

### フォント

カスタムCSSで下記のCSSクラス, idのfont-familyプロパティを変更。

- 一括設定: #clock-wrap
- 年: .yyyy
- 月: .mm
- 日: .ss
- 時: .hh
- 分: .mi
- 秒: .ss
- 年後ろ区切り: .date_sep--yyyy
- 月後ろ区切り: .date_sep--mm
- 時後ろ区切り: .time_sep--hh
- 分後ろ区切り: .time_sep--mi

```
# 例:年のフォントを変更
.yyyy {
  font-family: "メイリオ";
}
```


### 表示切り替え

カスタムCSSで下記のCSSクラスのdisplayプロパティを変更。

- 年: .yyyy
- 月: .mm
- 日: .ss
- 時: .hh
- 分: .mi
- 秒: .ss
- 年後ろ区切り: .date_sep--yyyy
- 月後ろ区切り: .date_sep--mm
- 時後ろ区切り: .time_sep--hh
- 分後ろ区切り: .time_sep--mi

```
# 例:年と年後ろ区切りを非表示変更
.yyyy,
.date_sep--yyyy {
  display: none;
}
```
