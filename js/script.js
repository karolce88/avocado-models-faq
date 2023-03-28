const box1 = document.querySelector('.question1')
const box2 = document.querySelector('.question2')
const box3 = document.querySelector('.question3')
const box4 = document.querySelector('.question4')
const box5 = document.querySelector('.question5')
const box6 = document.querySelector('.question6')
const box7 = document.querySelector('.question7')
const box8 = document.querySelector('.question8')
const box9 = document.querySelector('.question9')
const content1 = document.querySelector('.content1')
const content2 = document.querySelector('.content2')
const content3 = document.querySelector('.content3')
const content4 = document.querySelector('.content4')
const content5 = document.querySelector('.content5')
const content6 = document.querySelector('.content6')
const content7 = document.querySelector('.content7')
const content8 = document.querySelector('.content8')
const content9 = document.querySelector('.content9')
const icon1 = document.querySelector('.icon1')
const icon2 = document.querySelector('.icon2')
const icon3 = document.querySelector('.icon3')
const icon4 = document.querySelector('.icon4')
const icon5 = document.querySelector('.icon5')
const icon6 = document.querySelector('.icon6')
const icon7 = document.querySelector('.icon7')
const icon8 = document.querySelector('.icon8')
const icon9 = document.querySelector('.icon9')


function showContent1() {
content1.classList.toggle('show')
icon1.classList.toggle('icon-minus')
}
function showContent2() {
content2.classList.toggle('show')
icon2.classList.toggle('icon-minus')
}
function showContent3() {
content3.classList.toggle('show')
icon3.classList.toggle('icon-minus')
}
function showContent4() {
content4.classList.toggle('show')
icon4.classList.toggle('icon-minus')
}
function showContent5() {
content5.classList.toggle('show')
icon5.classList.toggle('icon-minus')
}
function showContent6() {
content6.classList.toggle('show')
icon6.classList.toggle('icon-minus')
}
function showContent7() {
content7.classList.toggle('show')
icon7.classList.toggle('icon-minus')
}
function showContent8() {
content8.classList.toggle('show')
icon8.classList.toggle('icon-minus')
}
function showContent9() {
content9.classList.toggle('show')
icon9.classList.toggle('icon-minus')
}

box1.addEventListener('click', showContent1)
box2.addEventListener('click', showContent2)
box3.addEventListener('click', showContent3)
box4.addEventListener('click', showContent4)
box5.addEventListener('click', showContent5)
box6.addEventListener('click', showContent6)
box7.addEventListener('click', showContent7)
box8.addEventListener('click', showContent8)
box9.addEventListener('click', showContent9)
