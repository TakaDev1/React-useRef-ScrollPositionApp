import React, { useRef } from "react";

const HandleScrollPosition = () => {
  const section1 = useRef<HTMLDivElement | null>(null);
  const section2 = useRef<HTMLDivElement | null>(null);
  const prevScroll = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      // 現在のスクロール位置にいる要素を保存
      prevScroll.current = document.elementFromPoint(
        window.innerWidth / 2,
        window.innerHeight / 2,
      ) as HTMLDivElement;

      // 指定したセクションへ移動
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollBack = () => {
    prevScroll.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* 操作用ボタン */}
      <div className="fixed top-0 left-0 p-4 space-x-2">
        <button
          className="p-2 bg-blue-500 rounded text-white"
          onClick={() => scrollToSection(section1)}
        >
          セクション1へ
        </button>

        <button
          className="p-2 bg-green-500 rounded text-white"
          onClick={() => scrollToSection(section2)}
        >
          セクション2へ
        </button>

        <button className="p-2 bg-gray-500 rounded text-white" onClick={scrollBack}>
          戻る
        </button>
      </div>

      {/* セクション1 */}
      <div ref={section1} className="h-screen flex items-center justify-center bg-yellow-200">
        セクション1
      </div>

      {/* セクション2 */}
      <div ref={section2} className="h-screen flex items-center justify-center bg-pink-200">
        セクション2
      </div>
    </div>
  );
};

export default HandleScrollPosition;
