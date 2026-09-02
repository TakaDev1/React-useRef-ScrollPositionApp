# React-useRef-ScrollPositionApp

Reactの `useRef` と `scrollIntoView()` を使って、ページ内のセクションへスクロールし、直前のセクションへ戻る処理を練習するアプリです。

## 📌 概要

長いページを想定し、ボタンをクリックすることで特定のセクションへスクロールします。

さらに、スクロールする前のセクションを `useRef` で保持し、「戻る」ボタンを押すことで前回の位置へ戻れるようにします。

## 🛠 使用技術

* React
* TypeScript
* Vite
* Tailwind CSS
* `useRef`
* `scrollIntoView()`

## 📂 ディレクトリ構成

```text
React-useRef-ScrollPositionApp/
├── src/
│   ├── components/
│   │   └── HandleScrollPosition.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── public/
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 💡 実装内容

### セクションのDOMを参照

`useRef` を使用して、各セクションのDOM要素を参照します。

```tsx
const section1 = useRef<HTMLDivElement | null>(null);
const section2 = useRef<HTMLDivElement | null>(null);
```

JSX側では `ref` 属性に指定します。

```tsx
<div ref={section1}>
  セクション1
</div>
```

### セクションへスクロール

`scrollIntoView()` を使用して、指定したセクションまでスクロールします。

```tsx
ref.current.scrollIntoView({
  behavior: "smooth",
});
```

`behavior: "smooth"` を指定することで、スムーズにスクロールできます。

### 前回のセクションを保持

`useRef` を使用して、スクロールする前のセクションを保持します。

```tsx
const prevScroll = useRef<HTMLDivElement | null>(null);
```

移動前に現在のセクションを保存します。

```tsx
prevScroll.current = section1.current;
```

### 前回の位置へ戻る

保存しておいたDOM要素に対して `scrollIntoView()` を実行します。

```tsx
const scrollBack = () => {
  prevScroll.current?.scrollIntoView({
    behavior: "smooth",
  });
};
```

## 🎨 Tailwind CSS

セクションには以下のクラスを使用しています。

```tsx
className="h-screen flex items-center justify-center"
```

| クラス              | 役割           |
| ---------------- | ------------ |
| `h-screen`       | 画面の高さいっぱいにする |
| `flex`           | Flexboxを使用する |
| `items-center`   | 縦方向に中央配置     |
| `justify-center` | 横方向に中央配置     |

ボタンには以下のクラスを使用しています。

```tsx
className="p-2 rounded text-white"
```

## 🎯 学習ポイント

### 1. `useRef` によるDOM参照

`useRef` を使用して、特定のDOM要素を直接参照する方法を学習します。

### 2. `.current` の使い方

`useRef` で取得した値は `.current` からアクセスします。

```tsx
section1.current
```

### 3. `scrollIntoView()` の使い方

特定のDOM要素までスクロールする方法を学習します。

```tsx
element.scrollIntoView({
  behavior: "smooth",
});
```

### 4. `useState` と `useRef` の違い

このアプリでは、画面表示のための状態管理ではなく、DOM要素を保持する目的で `useRef` を使用しています。

| Hook       | 主な用途                        |
| ---------- | --------------------------- |
| `useState` | 状態を管理し、変更時に再レンダリング          |
| `useRef`   | 値やDOM要素を保持し、変更しても再レンダリングしない |

## 🚀 起動方法

依存関係をインストールします。

```bash
npm install
```

開発サーバーを起動します。

```bash
npm run dev
```

表示されたURLへアクセスしてください。

## 📝 動作

1. 「セクション1へ」をクリック
2. セクション1へスムーズにスクロール
3. 「セクション2へ」をクリック
4. セクション2へスムーズにスクロール
5. 「戻る」をクリック
6. 保存していた前回のセクションへ戻る

## 📚 このアプリで学べること

* `useRef` によるDOM参照
* `useRef` の `.current`
* `scrollIntoView()` の使い方
* `behavior: "smooth"` によるスムーススクロール
* `React.RefObject` の型付け
* Tailwind CSSによるレイアウト
* ReactでのDOM操作
