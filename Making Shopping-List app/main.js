'use strict'

const input = document.querySelector('.input');
const button = document.querySelector('.button');
const items = document.querySelector('#items');



function onClick() {
    let item = document.createElement('li');
    let p = document.createElement('p');
    const item__icon = document.createElement('li');
    item__icon.classList.add('item__icon');
    let trash = '<i class="fas fa-trash-alt"></i>';
    let check = '<i class="fas fa-check"></i>';
    item__icon.innerHTML = trash + check;
    item.append(item__icon);

    item.classList.add('item');
    p.classList.add('item__text');
    let text = p.innerText;
    text = input.value;
    if(text === '') {
        input.focus();
        return;
    }
    input.value = '';

    item.append(p);
    items.appendChild(item);

    // 체크 실행함수
    // 삭제 실행 함수
    checkClick();
    deleteClick();

}


// 체크박스 이미지(버튼) 눌렀을 때 list__text에 삭제줄? 그음
function checkClick() {
    // 
    const item = document.querySelectorAll('.item');
    const checks = document.querySelectorAll('.fa-check');
    // 🔆이러면 del 요소 객체가 +Add를 누를때 마다 생성됨
    // 그러면서 append 할 때 마지막에 생성된 del이 붙게되고
    // 마지막에 붙은 del 요소에는 text가 없으므로 빈값으로 최종적으로 출력됨!🔆
    // 도움주신 Browser101 학생분들, 웹코딩 단톡방 분들 너무너무 감사합니다❗❗❗
    //const del = document.createElement('del');

    for(let i = 0; i < item.length; i++) {
        checks[i].addEventListener('click', (e) => {
            const del = document.createElement('del');
            let pText = item[i].childNodes[1].textContent; // p 태그의 text 값 저장
            item[i].childNodes[1].textContent = ''; // p 태그의 text 삭제
            item[i].childNodes[1].append(del); // 위에서 만든 del tag를 p tag에 append
            item[i].childNodes[1].childNodes[0].textContent = pText; // del에 pText 값을 저장
        });
    }
}

// 휴지통 이미지를 클릭했을 때 list가 삭제됨
function deleteClick() {
    const item = document.querySelectorAll('.item');
    const deleteList = document.querySelectorAll('.fa-trash-alt');
    for(let i = 0; i < item.length; i++) {
        deleteList[i].addEventListener('click', (e) => {
            console.log(e);
            item[i].remove();
            input.value = '';
        });
    }
}



