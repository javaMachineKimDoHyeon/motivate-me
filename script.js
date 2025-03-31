// DOM 요소 선택
const $text = document.querySelector('#quote-text'); // 명언
const $author = document.querySelector('#quote-author'); // 저자
const $button = document.querySelector('#new-quote'); // 버튼

// 명언 데이터
const quotes = [
    { text: "성공은 실패를 거듭해도 열정을 잃지 않는 데 있다.", author: "윈스턴 처칠" },
    { text: "남들이 멈췄을 때 한 걸음 더 내딛는 사람이 된다.", author: "노자" },
    { text: "당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 당신 말이 맞다.", author: "헨리 포드" },
    { text: "불가능은 단지 가능성을 시험해보라는 다른 말이다.", author: "익명" }
  ];

// 랜덤 명언 표시 함수
function getRandomQuote() {
    const i = Math.floor(Math.random() * quotes.length);
    return quotes[i];
}

function updateQuote() {
    const quote = getRandomQuote();
    $text.textContent = quote.text;
    $author.textContent = `- ${quote.author}`;
}

// 이벤트 리스너 등록
$button.addEventListener('click', updateQuote);

// 첫 진입 시 자동으로 명언 표시
updateQuote();
