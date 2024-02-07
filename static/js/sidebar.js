const pdfViewer = document.querySelector('#pdf-viewer');

const buttons = document.querySelectorAll('.btn');
console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const target = event.target.closest('li').children[1];
        console.log(target);
        if (target && target.style.display === '') {
            target.style.display = 'none';
        } else {
            target.style.display = '';
        }
    });
});

const theYoungest = document.querySelectorAll('.youngest');

theYoungest.forEach((youngest) => {
    youngest.addEventListener('click', event => {
        const uri = event.target.value;
        pdfViewer.setAttribute('src', uri);
    });
});
