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

지금 마주한 문제.
배열에서 받아온 명언 'x'이 있고 보기 버튼을 눌렀을 때 다시 'x'가 나온다면, 화면의 전환이 없음.
사용자로 하여금 동작하지 않았나? 하고 혼란을 줄 수 있음.
수정 ㄱㄱ

인덱스 + 1을 한다면?
>> 그리고 최대 길이에 도달한다면... 0번으로 되돌리기??

// 배열 인덱스라고 칠 녀석
lastIndex = -1;

1. const i = 랜덤 함수 실행.
2. if (i === lastIndex) {
  i += i;
} else if (i === 배열.length) {
  i = 0;
}
lastIndex = i;
return 명언[i];
