'use strict'
const main = document.querySelector('main');

const target = document.querySelector('.list__container');
const targetRect = target.getBoundingClientRect();
console.log(targetRect);

const antContainer = document.querySelector('.ant__list');
const carrotContainer = document.querySelector('.carrot__list');

const resultContainer = document.querySelector('.result__container');
const result = document.querySelector('.result__text');

const countNum = document.querySelector('.count__number');

// 버튼 가져옴
const startButton = document.querySelector('.start__button');
const stopButton = document.querySelector('.pause__button');
const restartButton = document.querySelector('.restart__button');

resultContainer.classList.add('hide');

// start 버튼 클릭 시
startButton.addEventListener('click', () => {
    playBg();
    createImg();
    updateTimer();
    playTimer = setInterval(updateTimer, 1000);
    startButton.classList.add('hide');
    stopButton.classList.add('visible');
    resultContainer.classList.add('hide');
    
    

});
// stop 버튼 클릭 시
stopButton.addEventListener('click', () => {
    startButton.classList.remove('hide');
    stopButton.classList.remove('visible');
    clearInterval(playTimer);
});

function createImg() {
    // Create Image Ant
    for(let i = 0; i < 10; i++) {
        const img = document.createElement('img');
        img.src = "/img/bug.png";
        img.classList.add(`ant`);
        // 랜덤 최대값 : Math.random() * 최대값
        // 랜덤 최소값 : ( Math.random() * ( 최대값 - 최소값 )  ) + 최소값
        const x = Math.floor((Math.random() * 1125) + 0);
        console.log(`x: ${x}`)
        const y = Math.floor((Math.random() * 215) + 0);
        console.log(`y: ${y}`)
        //img.style.transform = `translate(${x}px, ${y}px)`;
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
        antContainer.appendChild(img.cloneNode());      
    }
    // Create Image Carrot
    for(let i = 0; i < 10; i++) {
        const img = document.createElement('img');
        img.src = "/img/carrot.png";
        img.classList.add(`carrot`);
        const x = Math.floor((Math.random() * 1125) + 0);
        console.log(`x: ${x}`)
        const y = Math.floor((Math.random() * 215) + 0);
        console.log(`y: ${y}`)
        //img.style.transform = `translate(${x}px, ${y}px)`;
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
        carrotContainer.appendChild(img.cloneNode());    
    }
}


const timer = document.querySelector('.timer__number');

let TIME = 100;
let playTimer;
// 타이머 감소 함수
function updateTimer() {
    const seconds = TIME % 60;
    timer.innerText = `0:${seconds < 0 ? `0${seconds}` : seconds}`;
    if(seconds == 0) {
        resultContainer.classList.remove('hide');
        clearInterval(playTimer);
        stopBg();
        gameOverAlert();
        return;
    } else {
        TIME--;
    }
    
}

function gameOverAlert() {
    // result__container 에 display none 없애는 거
    alertEffSound();
    result.innerText = "Game Over....😭"
    return;
}

function gameWinAlert() {
    // result__container 에 display none 없애는 거
    alertEffSound();
    result.innerText = "You Win!! 🤗"
    return;
}

clickImageAndCount();
function clickImageAndCount() {
    carrotContainer.addEventListener('click', event => {
        if(event.target.className == 'carrot') {
            event.target.remove();
            carrotPullSound();
            let num = countNum.innerText;
            num = parseInt(num) + 1;
            countNum.innerText = num;
            if(countNum.innerText == 10) {
                resultContainer.classList.remove('hide');
                stopBg();
                playGameWinAudio();
                clearInterval(playTimer);
                gameWinAlert();
            }
        }
    });

    antContainer.addEventListener('click', event => {
        if(event.target.className == 'ant') {
            console.log(`You clicked ant!`);
            antPullSound();
            stopBg();
            clearInterval(playTimer);
            resultContainer.classList.remove('hide');
            gameOverAlert();
        }
    });
}

// 배경음악 Play & Stop 기능
const bgAudio = new Audio();
bgAudio.src = "/sound/bg.mp3";
function playBg() {
    bgAudio.play();
}

function stopBg() {
    bgAudio.pause();
}

// Game Win 효과음
const gameWinAudio = new Audio();
gameWinAudio.src = "/sound/game_win.mp3";
function playGameWinAudio() {
    gameWinAudio.play();
}

// When click carrot img effect sound
const carrotSound = new Audio();
carrotSound.src = "/sound/carrot_pull.mp3";
function carrotPullSound() {
    carrotSound.play();
}

// When click ant img effect sound
const antSound = new Audio();
antSound.src = "/sound/bug_pull.mp3";
function antPullSound() {
    antSound.play();
}

// When Pop up alert effect sound
const alertSound = new Audio();
alertSound.src = "/sound/alert.wav";
function alertEffSound() {
    alertSound.play();
}