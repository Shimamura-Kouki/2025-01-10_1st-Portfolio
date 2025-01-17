// 現在の位置を保持
let currentPosition = 0;

// ヘッダーの高さを取得
const header = document.querySelector(".tracking-nav-overlay");
const headerHeight = header.clientHeight * -1;

window.addEventListener("scroll", () => {

  // スクロール位置を保持
  let scrollPosition = document.documentElement.scrollTop;

  // スクロールに合わせて要素をヘッダーの高さ分だけ移動（表示域から隠したり表示したり）
  if (currentPosition <= scrollPosition) {
    header.style.transform = "translate(0," + headerHeight + "px)";
  } else if (currentPosition > scrollPosition) {
    header.style.transform = "translate(0, 0)";
  }
  currentPosition = document.documentElement.scrollTop;
})