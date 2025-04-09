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


let lastIndex = -1;

// 페이드인 함수
function fadeInElement(el) {
    el.classList.remove('fade-in-show');        // 기존 효과 제거
    void el.offsetWidth;                // 브라우저 리렌더링 강제 트릭
    el.classList.add('fade-in-show');           // 다시 나타나게!
}

// 랜덤 명언 표시 함수
function getRandomQuote() {
    let i = Math.floor(Math.random() * quotes.length);
    if (i === lastIndex) {  // 만약 i 가 2번 나왔다.
        i = i + 1;          // i + 1 해서 다음 인덱스를 불러옴.
        if (i >= quotes.length) { // 근데 1 더했을 때 배열 최대 길이를 넘었다.
            i = 0;                  // 인덱스 0번으로.
        }                       // ex) 배열에 4개가 들어있다. 배열.length는 4가 나옴.
    }                           // 근데 인덱스는 0부터인걸 생각해야함. 0 1 2 3
    return i;
}

function updateQuote() {
    const i = getRandomQuote();
    lastIndex = i;      // 뽑아온 i 를 마지막 인덱스로 기억해두기. 이걸 왜 여기서 하냐면.
    $text.textContent = quotes[i].text; // 첫 진입 시 자동으로 명언 표시 쟤 때문임. 맨 처음 시작에 lastIndex를 설정해야하니까.
    $author.textContent = `- ${quotes[i].author}`;

    fadeInElement($text);
    fadeInElement($author);
}

// 이벤트 리스너 등록
$button.addEventListener('click', updateQuote);

// 첫 진입 시 자동으로 명언 표시
updateQuote();
