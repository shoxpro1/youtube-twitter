const button = document.querySelector('.btn')
const starIcon = document.querySelector('.staricon')
const buttonSpan = document.querySelector('.btnspan')
const pic = document.querySelector('.pic')
const a = document.querySelector('.a')
const full = document.querySelector('.full')

button.addEventListener('click', () => {
  
    if(buttonSpan.innerHTML === 'Button'){
       
        buttonSpan.innerHTML = 'Newtext';
        starIcon.className = 'fa-brands fa-twitter staricon';
        pic.innerHTML = 'Twitter';
        a.classList.add('anew')
        a.href = ("https://twitter.com")
        button.classList.add('btnnew')
        full.classList.add('fullnew')
    } else {
       
        starIcon.className = 'fa-brands fa-youtube staricon';
        buttonSpan.innerHTML = 'Button';
        pic.innerHTML = 'Youtube';
        a.classList.remove('anew')
        a.href = ("https://youtube.com")
        button.classList.remove('btnnew')
        full.classList.remove('fullnew')

    }
})