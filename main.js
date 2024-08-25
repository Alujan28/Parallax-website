let text = document.getElementById('text');
let hill1 = document.getElementById('hill1');
let tree1 = document.getElementById('tree1');
let tree2 = document.getElementById('tree2');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let hill6 = document.getElementById('hill6');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    hill1.style.Top = value * -1.5 + 'px';
    tree1.style.left = value * -1.5 + 'px';
    tree2.style.left = value * 1.5 + 'px';
    hill2.style.left = value * 1.5 + 'px';
    hill3.style.left = value * -1.5 + 'px';
    hill4.style.left = value * 1.5 + 'px';
    hill5.style.left = value * -1.5 + 'px';
    hill6.style.Top = value * 1 + 'px';
});
