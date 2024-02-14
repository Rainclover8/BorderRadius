const border =document.getElementById('border')
const border1 =document.getElementById('border1')
const border2 =document.getElementById('border2')
const border3 = document.getElementById('border3')
const border4 = document.getElementById('border4')


border1.addEventListener('click', () =>{
   border.style.borderRadius = '20px 50px'
})

border2.addEventListener('click', () =>{
    border.style.borderRadius = '10px 20px 10px 20px'
})
border3.addEventListener('click', () =>{
    border.style.borderRadius = '50px'
})
border4.addEventListener('click', () =>{
    border.style.borderRadius = '10px 20px 20px'
})