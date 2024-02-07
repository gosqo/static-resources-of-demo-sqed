const pdfViewer = document.querySelector('#pdf-viewer');

const buttons = document.querySelectorAll('.btn');
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const target = event.target.closest('li').querySelector('ul'); // ul
        console.log(target === null ? '하위 내용이 없습니다.' : target);
        if (target && target.style.display === '') { // ul 존재하고 보이면
            target.style.display = 'none';

            // 관리 버튼 존재하면 삭제.
            const activeManageButton = document.querySelector('.manage-btn')
            if (activeManageButton) {
                activeManageButton.remove();
            }

        } else if (target && target.style.display === 'none') { //ul 존재하고, 보이지 않으면
            target.style.display = '';

            // 관리 버튼 존재한다면 삭제.
            const activeManageButton = document.querySelector('.manage-btn')
            if (activeManageButton) {
                activeManageButton.remove();
            }

            // 타겟 li 아래에 관리 버튼 추가
            makeManageButton(event);
        }
    });
});

const theYoungest = document.querySelectorAll('.youngest');

theYoungest.forEach(youngest => {
    const uri = youngest.value;
    youngest.addEventListener('click', () => {
        window.open(uri, '_blank'); // 새 탭에서 uri 에 GET 요청.
    });
});

// branch contents-separated 에서는 생략 가능.
// theYoungest.forEach((youngest) => {
//     youngest.addEventListener('click', event => {
//         const uri = event.target.value;
//         pdfViewer.setAttribute('src', uri);
//     });
// });

// 이벤트 타겟(목록 버튼) 다음에 (형제로 sibling) 관리 버튼 추가.
function makeManageButton(event) {
    // 관리 버튼 요소 생성
    const manageButton = document.createElement('button');
    manageButton.className = 'btn btn-warning manage-btn';
    manageButton.textContent = '관리';
    manageButton.style.marginLeft = '.4rem';

    // 버튼 요소 다음 형제로 manageButton 추가.
    event.target.after(manageButton);
}