const quotes = [
    {
        quote:"가장 용감한 행동은 자신을 위해 생각하고 그것을 큰소리로 외치는 것이다.",
        author:"가브리엘 샤넬",
    },
    {
        quote:"스스로를 경멸하는 사람은, 경멸하는 자신을 존중한다.",
        author:"프리드리히 니체",
    },
    {
        quote:"또 실패했는가? 괜찮다. 다시 실행하라. 그리고 더 나은 실패를 하라",
        author:"사뮈엘 베케트",
    },
    {
        quote:"어제와 똑같이 살면서 다른 미래를 기대하는 것은 정신병 초기 증세다.",
        author:"아인슈타인",
    },
    {
        quote:"나에대한 자신감을 잃으면 온 세상이 나의 적이 된다.",
        author:"랄프 왈도 에머슨",
    },
    {
        quote:"이성으로 비관해도 의지로써 낙관하라",
        author:"안토니오 그람시",
    },
    {
        quote:"스스로 자신을 존경하면 다른 사람도 그대를 존경할 것이다.",
        author:"공자",
    },
    {
        quote:"할 수 있다고 믿는 사람은 그렇게 되고, 할 수 없다고 믿는 사람도 역시 그렇게 된다.",
        author:"샤롤 드골",
    },
    {
        quote:"왜 자꾸 남이 하는 일만 선망하는가? 당신 자신이 되어라. 다른 사람의 자리는 모두 찼다.",
        author:"김난도 교수",
    },
    {
        quote:"인생에서 가장 슬픈 세가지, 할 수 있었는데, 해야 했는데, 해야만 했는데,",
        author:"루이스 E.분",
    },
    {
        quote:"비관론자는 어떤 기회가 찾아와도 어려움만을 보고, 낙관론자는 어떤 난간이 찾아와도 기회를 바라본다.",
        author:"윈스턴 처칠",
    },
    {
        quote:"남들이 당신을 어떻게 생각할까 너무 걱정하지 마라. 남들은 그렇게 당신에 대해 많이 생각하지 않는다. 당신이 동의하지 않는 한, 이세상 누구도 당신이 열등하다고 느끼게 할 수 없다.",
        author:"엘레노어 루즈벨트",
    },
    {
        quote:"스스로 알을 깨면 한 마리 병아리가 되지만, 남이 깨주면 계란 프라이가 된다.",
        author:"강진원",
    },
    {
        quote:"자신의 능력을 믿어야 한다. 그리고 끝까지 굳 세게 밀고 나가라.",
        author:"로잘린 카터",
    },
    {
        quote:"우리가 가지고 있는 15가지 재능으로 칭찬 받으려 하기보다, 가지지도 않은 한가지 재능으로 돋보이려 안달한다.",
        author:"마크 트웨인",
    },
    {
        quote:"당신이 저지를 수 있는 가장 큰 실수는 실수를 할까 두려워 하는 것이다.",
        author:"앨버트 하버드",
    },
    {
        quote:"너의 길을 가라. 남들이 무엇이라 하든지 내버려 두라.",
        author:"A.단테",
    },
    {
        quote:"누구나 재능은 있다. 드문 것은 그 재능이 이끄는 속으로 따라 들어갈 용기다.",
        author:"에리카 종",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const dailyQuote = quotes[Math.floor(Math.random()*quotes.length)]
quote.innerText = dailyQuote.quote;
author.innerText = dailyQuote.author;
