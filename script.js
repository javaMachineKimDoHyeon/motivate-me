// DOM 요소 선택
const $quoteText = document.querySelector('#quote-text'); // 명언
const $quoteAuthor = document.querySelector('#quote-author'); // 저자
const $newQuote = document.querySelector('#new-quote'); // 버튼

// 명언 데이터
const quotes = [
    {
        text: "성공은 실패를 거듭해도 열정을 잃지 않는 데 있다.",
        author: "윈스턴 처칠"
    },
    {
        text: "남들이 멈췄을 때 한 걸음 더 내딛는 사람이 된다.",
        author: "노자"
    },
    {
        text: "당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 당신 말이 맞다.",
        author: "헨리 포드"
    },
    {
        text: "불가능은 단지 가능성을 시험해보라는 다른 말이다.",
        author: "익명"
    }
];

// 랜덤 명언 표시 함수
function clickButton() {
    const randomNum = Math.floor(Math.random() * quotes.length);
    console.log(randomNum);
    $quoteText.textContent = quotes[randomNum].text;
    $quoteAuthor.textContent = quotes[randomNum].author;
}

// 이벤트 리스너 등록
    $newQuote.addEventListener('click', clickButton);