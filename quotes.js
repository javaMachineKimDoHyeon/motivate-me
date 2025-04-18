// 명언 데이터
const quotes = [
    { text: "성공은 최종 목적지가 아니라, 여정이다.", author: "벤 스위트랜드" },
    { text: "당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 당신의 믿음대로 될 것이다.", author: "헨리 포드" },
    { text: "가장 큰 영광은 한 번도 실패하지 않음이 아니라, 실패할 때마다 다시 일어서는 데 있다.", author: "넬슨 만델라" },
    { text: "인생은 우리가 만드는 것이다. 항상 그렇게 되어 왔다, 항상 그렇게 될 것이다.", author: "그랜드 마스터 오그웨이" },
    { text: "행복은 준비된 자에게 온다.", author: "토마스 에디슨" },
    { text: "삶은 모험이거나 아무것도 아니다.", author: "헬렌 켈러" },
    { text: "성공은 열정을 잃지 않고 실패를 거듭할 수 있는 능력이다.", author: "윈스턴 처칠" },
    { text: "당신의 시간이 제한되어 있으니, 다른 사람의 삶을 사느라 시간을 낭비하지 마라.", author: "스티브 잡스" },
    { text: "삶은 자전거를 타는 것과 같다. 균형을 유지하려면 계속 움직여야 한다.", author: "알버트 아인슈타인" },
    { text: "자신을 아는 것이 모든 지혜의 시작이다.", author: "아리스토텔레스" },
    { text: "사랑은 두 사람이 서로를 바라보는 것이 아니라, 함께 같은 방향을 바라보는 것이다.", author: "앙투안 드 생텍쥐페리" },
    { text: "기회는 준비된 자에게만 미소 짓는다.", author: "루이 파스퇴르" },
    { text: "성공은 행동과 일치하는 꿈이다.", author: "마이클 카민스키" },
    { text: "인생에서 가장 중요한 두 날은 당신이 태어난 날과 그 이유를 찾는 날이다.", author: "마크 트웨인" },
    { text: "작은 일에 충실한 사람이 큰 일에도 충실하다.", author: "예수 그리스도" },
    { text: "성공은 최선을 다한 후에 오는 것이다.", author: "존 우든" },
    { text: "당신이 할 수 있는 일을 하라. 당신이 가진 것으로, 당신이 있는 곳에서.", author: "시어도어 루스벨트" },
    { text: "인생은 우리가 숨 쉬는 횟수로 측정되는 것이 아니라, 숨 막히는 순간들로 측정된다.", author: "마야 안젤루" },
    { text: "당신이 두려워하는 일을 매일 하라.", author: "랄프 왈도 에머슨" },
    { text: "성공은 당신이 원하는 것을 얻는 것이다. 행복은 당신이 가진 것을 원하는 것이다.", author: "데일 카네기" },
    { text: "당신이 세상에서 보고 싶은 변화가 되어라.", author: "마하트마 간디" },
    { text: "인생은 10%가 당신에게 일어나는 일이고, 90%는 그것에 어떻게 반응하는가이다.", author: "찰스 R. 스윈돌" },
    { text: "당신의 꿈이 당신의 두려움보다 더 커야 한다.", author: "스티브 하비" },
    { text: "행복은 방향이지 목적지가 아니다.", author: "시드니 J. 해리스" },
    { text: "성공은 작은 노력이 반복된 결과이다.", author: "로버트 콜리어" },
    { text: "불가능은 단지 가능성을 시험해보라는 다른 말이다.", author: "익명" },
    { text: "자신을 믿는 순간, 당신은 이미 절반은 이긴 것이다.", author: "시어도어 루스벨트" },
    { text: "실패는 성공의 어머니이다.", author: "속담" },
    { text: "어둠 속에서도 별은 빛난다.", author: "마틴 루터 킹 주니어" },
    { text: "희망은 절망의 반대말이 아니라, 그것을 이겨내는 힘이다.", author: "데스몬드 투투" },
    { text: "행복은 우리의 마음속에 있다.", author: "플라톤" },
    { text: "지식보다 더 중요한 것은 상상력이다.", author: "알버트 아인슈타인" },
    { text: "성공은 운이 아니라 준비된 기회의 결과다.", author: "오프라 윈프리" },
    { text: "가장 어두운 밤도 끝나고 해는 뜬다.", author: "빅토르 위고" },
    { text: "노력 없는 재능은 아무것도 아니다.", author: "요한 세바스찬 바흐" },
    { text: "할 수 있다고 믿는다면, 절반은 이룬 것이다.", author: "시어도어 루스벨트" },
    { text: "당신이 포기하지 않는다면, 실패는 존재하지 않는다.", author: "채드윅 보스만" },
    { text: "강한 자가 이기는 것이 아니라, 이기는 자가 강한 것이다.", author: "프란츠 베켄바워" },
    { text: "오늘 걷지 않으면 내일은 뛰어야 한다.", author: "속담" },
    { text: "작은 차이가 큰 차이를 만든다.", author: "존 우든" },
    { text: "두려움은 일시적이고, 후회는 영원하다.", author: "랜스 암스트롱" },
    { text: "자신을 이기는 것이 가장 위대한 승리다.", author: "플라톤" },
    { text: "매일 조금씩, 그러나 멈추지 말 것.", author: "한현민" },
    { text: "희망은 길을 만든다.", author: "루신" },
    { text: "고통 없이는 얻는 것도 없다.", author: "벤저민 프랭클린" },
    { text: "실패는 성공으로 가는 또 다른 길이다.", author: "토마스 에디슨" },
    { text: "비판은 피드백이다.", author: "사이먼 사이넥" },
    { text: "도전 없이는 변화도 없다.", author: "조엘 브라운" },
    { text: "목표 없는 삶은 나침반 없는 항해와 같다.", author: "지그 지글러" }
];