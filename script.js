const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
const eraser = document.querySelector('.eraser');
const blackPencil = document.querySelector('.pencil');
const normWidth = document.querySelector('.norm-width');
const mediumWidth = document.querySelector('.medium-width');
const wideWidth = document.querySelector('.wide-width');
const downloadBtn = document.querySelector('.download');

const pencil = () => {
    ctx.strokeStyle = 'black';
    canvas.addEventListener('mousemove', (e) => {
        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke();
    })  
}

canvas.addEventListener('mousedown', (e)=> {
    console.log(e);
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
    pencil();
})

canvas.addEventListener('mouseup', () => {
    ctx.beginPath();
    ctx.strokeStyle = 'transparent';
    ctx.stroke();
})

eraser.addEventListener('click', ()=>{
    canvas.style.cursor = 'cell';
    canvas.addEventListener('mousedown', (e)=> {
        ctx.strokeStyle = 'white';
        ctx.stroke();
    })
})
blackPencil.addEventListener('click', ()=>{
    canvas.style.cursor = 'crosshair';
    ctx.lineWidth = 1;
    canvas.addEventListener('mousedown', (e)=>{
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
        pencil();
        ctx.strokeStyle = 'black';
        ctx.stroke();
    })
})

normWidth.addEventListener('click', (e)=>{
    ctx.lineWidth = 1;
    e.target.style.backgroundColor = 'black';
    e.target.style.transform = 'scale(0.9)';
    mediumWidth.style.transform = 'scale(1)';
    wideWidth.style.transform = 'scale(1)';
    mediumWidth.style.backgroundColor = '#F35843';
    wideWidth.style.backgroundColor = '#F35843';
})

mediumWidth.addEventListener('click', (e)=>{
    ctx.lineWidth = 4;
    e.target.style.backgroundColor = 'black';
    e.target.style.transform = 'scale(0.9)';
    normWidth.style.transform = 'scale(1)';
    wideWidth.style.transform = 'scale(1)';
    normWidth.style.backgroundColor = '#F35843';
    wideWidth.style.backgroundColor = '#F35843';
})

wideWidth.addEventListener('click', (e)=>{
    ctx.lineWidth = 8;
    e.target.style.backgroundColor = 'black';
    e.target.style.transform = 'scale(0.9)';
    normWidth.style.transform = 'scale(1)';
    mediumWidth.style.transform = 'scale(1)';
    normWidth.style.backgroundColor = '#F35843';
    mediumWidth.style.backgroundColor = '#F35843';
})

downloadBtn.addEventListener('click', ()=>{
    const imageLink = document.createElement('a');
    imageLink.download = 'Paint1.jpg';
    imageLink.href = canvas.toDataURL('image/jpg', 1)
    imageLink.click();
})