## **問題5：スクロール位置を保持して戻る**

長いページで、スクロール位置を保持し、ボタンで前回位置に戻れるコンポーネントを作成せよ。

---

### **条件**

(1) 前回スクロール位置は `useRef` で保持
(2) TailwindCSS でボタンは `p-2 rounded text-white`、セクションは `h-screen flex items-center justify-center`
(3) スクロールは `scrollIntoView({ behavior: "smooth" })`