'use strict'

let printCoor = document.querySelector('.container');
const target = document.getElementById('target');
console.log(target);
const clientX = document.querySelector('.clientX');
const clientY = document.querySelector('.clientY');
console.log(`clientX, clientY: ${clientX}, ${clientY}`);

// 마우스의 좌표를 가져오는 함수
function getMouseCoor(e) {
    // 마우스를 Object로 또는 window.event
    console.log(`e: ${e}`);
    
    printCoor.innerHTML = 
    `clientX: ${e.clientX}, clientY: ${e.clientY}<br/>
    screenX: ${e.screenX}, screenY: ${e.screenY}`
    let x = e.clientX;
    let y = e.clientY;
    target.style.left = (x-59) + 'px';
    target.style.top = (y-59) + 'px';
    clientX.style.left = x + 'px';
    clientY.style.top = (y) + 'px';

}
// Window에 마우스이벤트 함수를 만들고 getMouseCoor 함수를 전달시킨다.
window.addEventListener('mousemove', getMouseCoor);
