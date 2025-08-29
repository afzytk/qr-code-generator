const inp = document.querySelector('#qr-input');
const genBtn = document.querySelector('#generate-btn');
const qrPopup = document.querySelector('#qr-popup');
const qrImg = document.querySelector('#qr-image');
const downloadBtn = document.querySelector('#download-btn');
const closeBtn = document.querySelector('#close-btn');

const url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';

genBtn.addEventListener('click', () => {
    if(!inp.value){
        alert('Enter text or URL first');
    }else{
        const imgUrl = url + inp.value;
    qrImg.setAttribute('src', imgUrl);
    setTimeout(() => {
        qrPopup.classList.add('show');
    },1000)
    }    
});

downloadBtn.addEventListener('click',() => {
     const imgUrl = url + inp.value;
     fetch(imgUrl)
     .then((res) => res.blob())
     .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'qr.jpg';
        link.click();
     })
});

closeBtn.addEventListener('click', () => {
    qrPopup.classList.remove('show');
}
)

