'use strict'
const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {
    const targetRect = target.getBoundingClientRect();
    console.log(`targetRect: ${targetRect}`);
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

    /*window.addEventListener('mousemove', () => {
        console.log('mouse');
    });*/

    document.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;
        console.log(`event.clientX: ${x}`);
        console.log(`event.clientY: ${y}`);

        // 'left'와 'top' 값이 마우스를 움직일때 마다 변경된다고 하면
        // CSS layout이 지속적으로 실행되서 브라우저의 성능을 저하시킴
        // 그렇기 때문에 layout를 실행시키지 않고, paint와 composition만을 실행하는 'transform'으로
        // 이미지와 좌표를 움직이는게 나음
        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;
        /*vertical.style.left = `${x}px`;
        horizontal.style.top = `${y}px`;*/

        target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfHeight}px)`;
        /*target.style.left = `${x}px`;
        target.style.top = `${y}px`;*/

        tag.style.transform = `translate(${x}px, ${y}px)`;
        /*tag.style.left = `${x}px`;
        tag.style.top = `${y}px`;*/
        tag.innerHTML = `${x}px, ${y}px`;
        //tag.style.transform = `translate(${x + 20}px, ${y + 20}px)`;

    });
});