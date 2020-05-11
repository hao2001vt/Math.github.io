const select = document.querySelector('.selection')
const start = document.querySelector('.start')
const title = document.querySelector('.content-title-text')
const titleWrapper = document.querySelector('.content-title')
const startTime = document.querySelector('.start-time')
const questionWrapper = document.querySelector('.question-wrapper')
const question = document.querySelector('.question')
const result = document.querySelector('.result')
const sendResult = document.querySelector('.send')
const next = document.querySelector('.next')
const status = document.querySelector('.status')
const satusValue = document.querySelector('.status-value')
let classSelect = null
let currentQuestion =0 
const player = new Audio()
const audioErr ='/assest/img/err.mp3'
const audioSuccess ='/assest/img/success.mp3'
const math1 =[
    {
        question : " Viết tiếp số vào chỗ trống:  5, 10, 15, …",
        answer:20
    },
    {
        question :"Tính : 6+2 =",
        answer:8
    },
    {
        question :"Tính : 6+5 =",
        answer:11
    },
    {
        question :"Tính : 6+1 =",
        answer:7
    },
    {
        question :"Tính : 5+2 =",
        answer:7
    },
    {
        question :"Tính : 7+2 =",
        answer:9
    }
]
const math2 =[
    {
        question : " Chọn số bé nhất có một chứ số trong dãy số sau : 0, 10, 9, 1",
        answer:0
    },
    {
        question : " Chọn số lớn nhất có một chữ số trong dãy số sau : 0, 9, 5, 99 ",
        answer:9
    },
    {
        question : "Số liền sau của số 39 là ?",
        answer:40
    },
    {
        question : " Số liền trước của 70 là ?",
        answer:69
    },
    {
        question : " Số liền sau của 99 là ?",
        answer:100
    },
    {
        question : "Chọn số lớn nhất có hai chữ số trong dãy số sau : 9, 99, 10, 88 ?",
        answer:99
    },
    {
        question : "40 + 10 + 10 =",
        answer:60
    },
    {
        question : "60 + 20 + 10 =",
        answer:90
    },
    {
        question : "20 + 68 =",
        answer:99
    },
    {
        question : "50 + 10 +20 =",
        answer:60
    },
    {
        question : "62 + 5 =",
        answer:67
    },
    {
        question : "Một cửa hàng xe buổi sáng bán được 12 xe đạp,buổi chiều bán được 20 xe đạp.Hỏi hai buổi cửa hàng bán được bao nhiêu xe đạp ? ",
        answer:32
    },
    {
        question : "Trong thư viện có 25 học sinh trai và 32 học sinh gái,Hỏi có tất cả bao nhiêu học sinh đang ở trong thư viện",
        answer:57
    },
    {
        question : "10cm = ... dm",
        answer:1
    },
    {
        question : "3dm + 2dm = ...dm",
        answer:5
    },
    {
        question : "1dm = ...cm",
        answer:10
    },
    {
        question : "3dm = ...cm",
        answer:30
    },
    {
        question : "64 - 44 = ...",
        answer:20
    },
    {
        question : "30dm - 22dm = ...dm",
        answer:8
    },
]
let tmp=[]
function getValue(){
    classSelect = parseInt(select.value)
    if(classSelect === 1){
        tmp = [...math1];
    }
    if(classSelect ===2 ){
        tmp=[...math2]
    }
}
function getQuestion(){
    titleWrapper.style.display="none"
    startTime.style.display ="none"
    questionWrapper.style.display="block"
    result.style.display="block"
    sendResult.style.display="block"
    question.innerHTML = "Câu " + (currentQuestion+1) + ':' + tmp[currentQuestion].question
}
start.addEventListener('click', () =>{
    title.innerHTML = "Toán học lớp" + ' ' + classSelect
    select.style.display ="none"
    start.style.display = "none"
    startTime.style.display="block"
})

startTime.addEventListener('click', getQuestion)
sendResult.addEventListener('click', () =>{
    if(result.value == tmp[currentQuestion].answer){
        next.style.display="block"
        status.style.display="block"
        satusValue.innerHTML="Đúng rồi"
        player.src = audioSuccess
        player.play()
    }
    else{
        status.style.display="block"
        satusValue.innerHTML="Sai rồi"
        player.src = audioErr
        player.play()
    }
})
next.addEventListener('click', () =>{
    next.style.display='none'
    status.style.display='none'
    currentQuestion++
    result.value=''
    getQuestion()
})