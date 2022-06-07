const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
const ctx = canvas.getContext('2d');
const eraser = document.querySelector('.eraser');
const blackPencil = document.querySelector('.pencil');
const normWidth = document.querySelector('.norm-width');
const mediumWidth = document.querySelector('.medium-width');
const wideWidth = document.querySelector('.wide-width');

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

normWidth.addEventListener('click', ()=>{
    ctx.lineWidth = 1;
})

mediumWidth.addEventListener('click', ()=>{
    ctx.lineWidth = 4;
})

wideWidth.addEventListener('click', ()=>{
    ctx.lineWidth = 8;
})