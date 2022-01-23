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
    p.innerText = input.value;
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
    const del = document.createElement('del');
    console.log(checks);
    for(let i = 0; i < item.length; i++) {
        checks[i].addEventListener('click', (e) => {
            console.log(e);
            console.log(item[i]);
            console.log(item[i].childNodes[1].textContent); // p 태그의 text 값 확인
            let pText = item[i].childNodes[1].textContent; // p 태그의 text 값 저장
            console.log(`text값 확인: ${item[0].childNodes[1].textContent}`)
            console.log(`text값 확인: ${item[1].childNodes[1].textContent}`)
            console.log(`text값 확인: ${item[2].childNodes[1].textContent}`)
            item[i].childNodes[1].textContent = ''; // p 태그의 text 삭제

            item[i].childNodes[1].append(del); // 위에서 만든 del tag를 p tag에 append
            console.log(item[i].childNodes[1].childNodes[0]); // del 태그 잘 붙었는지 확인
            item[i].childNodes[1].childNodes[0].textContent = pText; // del에 pText 값을 저장
        });
    }







        /*// chceck 이미지를 이벤트리스너로 가져옴
        console.log(e.target.parentElement);
        // check 이미지의 부모 노드의 옆의 코드를 가져옴
        const itemText = e.target.parentElement.nextSibling;
        const textCopy = itemText.textContent;
        console.log(itemText); // p.item__text
        console.log(itemText.textContent); // p.item__text 의 텍스트 내용 확인
        itemText.replaceWith(del); // del tag로 변환
        const delTag = e.target.parentElement.nextSibling;
        delTag.innerText = textCopy;
        console.log(delTag.textContent);
        //console.log(e.previousSibling.id);*/

    //console.log(`check.length: ${check.length}`);
    //console.log(`item.length: ${item.length}`);
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



