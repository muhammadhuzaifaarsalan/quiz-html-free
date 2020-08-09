var questions = [ 
    {
        q : " Urdu was declared national language of Pakistan in:",
        options : ["April 1950","April 1955","April 1954","April 1952"],
        answer : 2
    },
    {
        q : "Lansdowne Bridge of Sukkur was completed on:",
        options : ["1886","1887","1888","1889"],
        answer : 3
    },
    {
        q : "Which is the largest lake of the Pakistan?",
        options : ["Lake Keenjhar","Lake Siaful Maluk","Manchar Lake","Satpara Lake"],
        answer : 2
    },
    {
        q : "The total length of the coastline of Pakistan?",
        options : ["650 miles","680 miles","750 miles","720 miles"],
        answer : 0
    },
    {
        q : "Who wrote the national anthem of Pakistan?",
        options : ["Allama Iqbal","Hafeez Jullundari","Mirza Adeeb","Sagar"],
        answer : 1
    },
    {
        q : "How many lines are in national anthem?",
        options : ["15","14","13","11"],
        answer : 0
    },
    {
        q : "The first Rocket launched by Pakistan was:",
        options : ["Ghauri","Rahbar","Ghaznavi","Badar"],
        answer : 1
    },
    {
        q : "The first nuclear power plant in Pakistan was established at:",
        options : ["Islamabad","Lahore","Mianwali","Karachi"],
        answer : 3
    },
    {
        q : " Which peak is located in Karakorum Range?",
        options : ["Rakaposhi"," Nanga Patbat","Takht-e-Sulaiman","K-2"],
        answer : 3
    },
    {
        q : " Name the musician who composed the national anthem?:",
        options : ["Abdul Karim Chagla","A.Rehman","A.R. Bakshi","Ustad Allah Bux"],
        answer : 0
    },
]
var quizNumber = document.getElementById("question-number")
var question = document.getElementById("question")
var options = document.getElementById("options")
var user = document.getElementById("user")
var input = document.getElementById("input")


var quizCounter = 0
var currentQuiz
var availableQuiz = questions.slice(0,)
var availableOptions 
var right = "no"
var correctCounter = 0
var wrongCounter = 0

var totalQuiz = availableQuiz.length

var total = document.getElementById("total")
total.innerHTML = totalQuiz


function getQuiz(){
    right = "no"
    options.innerHTML = ""
    user.innerHTML = input.value
    quizNumber.innerHTML = "Question "+ (quizCounter + 1 ) + " of " + totalQuiz

    var index = Math.floor(Math.random()* availableQuiz.length)

    var currentQuiz = availableQuiz[index]
    question.innerHTML = currentQuiz.q

    // remove the attemoted quiz from avaiable quiz array
    availableQuiz.splice(index, 1)
    
    
    console.log(availableQuiz)

    // set options

    availableOptions = currentQuiz.options
    var optionLen = availableOptions.length
    console.log(availableOptions)

    var correctAnswerIndex = currentQuiz.answer
    console.log(correctAnswerIndex)
    var correctAnswer = availableOptions[correctAnswerIndex]
    console.log(correctAnswer)
     
    for (i = 0 ; i < optionLen; i++){
        
        var para = document.createElement("p")

        var index = Math.floor(Math.random()* availableOptions.length)
        var currentOption = availableOptions[index]
        para.innerHTML = currentOption
        options.appendChild(para)
        if(para.innerHTML === correctAnswer){
            para.setAttribute("onclick" , "correct(this)")
            para.setAttribute("id", "correct")
        }else {
            para.setAttribute("onclick", "wrong(this)")
            
        }
        
        // remove the attemoted option from avaiable option array
        availableOptions.splice(index, 1)
        
    }

    // hide home box
    var homeBox = document.getElementById("box")
    homeBox.classList.add("hide")

    var questionBox = document.getElementById("question-box")
    questionBox.classList.remove("hide")

    // if(quizCounter < 10){
        quizCounter++
    // }
}

// function for strat quiz button

function startQuiz(){ 
    if(input.value == ""){
        alert("Enter Empoly name:")
        
    }else {
        getQuiz()
    }
}

// function for next quiz button
function nextQuiz(){
    if(right == "yes" && quizCounter <= 9){
        getQuiz()

    }else if(right == "yes" && quizCounter === 10) {
        
        var quizBox = document.getElementById("question-box")
        quizBox.classList.add("hide")

        var quizOverBox = document.getElementById("quiz-over")
        quizOverBox.classList.remove("hide")
    }
}



// onclick event on correct option

function correct(x){
    if(right == "no"){
        x.style.backgroundColor = "green"
        x.style.color = "white"
        x.style.transition = "0.5s"
        right= "yes" 
        correctCounter++
        var marker = document.getElementById("marker")
        var div =document.createElement("div")
        div.style.backgroundColor ="green"
        div.style.color ="white"
        div.innerHTML = quizCounter
        marker.appendChild(div)

    }    

}

// onclick event on wrong option
function wrong(x){
    if(right == "no"){
        x.style.backgroundColor = "red"
        x.style.color = "white"
        x.style.transition = "0.4s"
        right= "yes" 
        wrongCounter++ 
        var correctId = document.getElementById("correct")
        correctId.style.backgroundColor = "green"
        correctId.style.color = "white"
        correctId.style.transition = "0.8s"

        var marker = document.getElementById("marker")
        var div =document.createElement("div")
        div.style.backgroundColor ="red"
        div.style.color ="white"
        div.innerHTML = quizCounter
        marker.appendChild(div)
    }
}

// onclick event on see result button

function seeResult(){
    var quizOverBox = document.getElementById("quiz-over")
    quizOverBox.classList.add("hide")

    var resultBox = document.getElementById("result-box")
    resultBox.classList.remove("hide")
    // console.log(correctCounter)
    // console.log(wrongCounter)

    var resultUser = document.getElementById("result-user")
    var totalQ= document.getElementById("total-quiz")
    var totalCorrect = document.getElementById("total-correct")
    var totalWrong = document.getElementById("total-wrong")
    var totalPercentage = document.getElementById("total-percentage")
    var totalScore = document.getElementById("total-score")

    resultUser.innerHTML = input.value
    totalQ.innerHTML = totalQuiz
    totalCorrect.innerHTML = correctCounter
    totalWrong.innerHTML = wrongCounter
    totalPercentage.innerHTML = (correctCounter*100/totalQuiz)+"%"
    totalScore.innerHTML = correctCounter+"/"+totalQuiz
    
}
