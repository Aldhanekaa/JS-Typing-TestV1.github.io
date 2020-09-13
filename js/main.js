const text = document.querySelector('.box')
const textArea = document.querySelector('textarea');
const time = document.querySelector('h2')
const reset = document.querySelector('button.start')
const texts = [
    'abc def ghi jkl mno pqr stu vwx yz asj gfh eir mcn odk Jak Las san irp wqx utm bvy zix rcy uob vow nqi tur boz xov csw nql kil oai ech thy yan uwd fan pao bho sfh dln ito cno pan let hdn iqb zur tmw lpo ira nfo wns',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam accusantium quo optio aliquam provident libero, error, tenetur cupiditate culpa totam impedit, nihil ad illum asperiores mollitia sit fugit! Hic, id?'
]

generateLetters()
var timer = [0, 0, 0, 0];
let interval;
let i = false;

function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    time.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3] / 100) / 60);
    timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));

    if (textArea.value == text.textContent) {
        console.log('A')
        clearInterval(interval)
    } else {
        let Text = text.textContent
        let originTextMatch = Text.substring(0, textArea.value.length)
        if (textArea.value == originTextMatch) {
            textArea.style.border = '3px solid green'
        } else {
            textArea.style.border = '3px solid red'
        }
    }
}

function generateLetters() {
    const randomIndex = Math.floor(Math.random() * (texts.length - 0 + 1))
    if (texts[randomIndex] == undefined) {
        generateLetters()
    } else {
        text.innerHTML = texts[randomIndex]
    }
}
textArea.addEventListener('keypress', () => {
    if (!i) {
        i = true;
    } else {
        return;
    }
    if (i == true) {
        interval = setInterval(runTimer, 10);
    }
})

reset.addEventListener('click', () => {
    textArea.value = ''
    console.log('AA')
    clearInterval(interval)
    time.innerHTML = '00:00:00'
    i = false;
    timer = [0, 0, 0, 0];
    generateLetters()
})