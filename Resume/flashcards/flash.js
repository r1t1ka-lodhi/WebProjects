const flashcards=[
    {question: "What is the difference between var ,const and let?", answer:"in javascript the ,var is function scoped and can be redeclared,let and const preventing "},
    { question: "What is a closure in JavaScript?", answer: "A closure is a function that retains access to its outer scope even after the outer function has finished executing." },
    { question: "What is the event loop in JavaScript?", answer: "The event loop is a mechanism that allows JavaScript to handle asynchronous operations by continuously checking the call stack and the callback queue." }
]
let currIndex=0;
const questionE1=document.getElementById("question");
const answerE1=document.getElementById("answer");
const toggleButton=document.getElementById("toggle");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const progressBar=document.getElementById("progress");
const progressText= document.getElementById("progress-text");

function upadteFlashcard(){
    questionE1.textContent=flashcards[currIndex].question;
    answerE1.textContent=flashcards[currIndex].answer;
    answerE1.classList.add("hidden");
    toggleButton.textContent="Show Answer";


    let progressPercent=((currIndex+1)/flashcards.length)*100;
    progressBar.style.width=`${progressPercent}%`;
    progressBar.textContent=`${Math.round(progressPercent)}%`;

}

toggleButton.addEventListener("click",()=>{
    if (answerE1.classList.contains("hidden")) {
        answerE1.classList.remove("hidden");
        toggleButton.textContent="Hide Answer";
    }
    else{
        answerE1.classList.add("hidden");
        toggleButton.textContent="Show Answer";
    }
});

prev.addEventListener("click",()=>{
    if(currIndex>0){
        currIndex--;
        upadteFlashcard();
    }
})
next.addEventListener("click",()=>{
    if (currIndex<flashcards.length-1) {
        currIndex++;
        upadteFlashcard();        
    }
})

upadteFlashcard();


// const flashcards = [
//     { question: "What is the difference between var, let, and const?", answer: "var is function-scoped; let and const are block-scoped. let allows re-assignment, const prevents it. However, const objects can have their contents modified." },
//     { question: "What is a closure in JavaScript?", answer: "A closure is a function that retains access to its outer scope even after the outer function has finished executing." },
//     { question: "What is the event loop in JavaScript?", answer: "The event loop is a mechanism that allows JavaScript to handle asynchronous operations by continuously checking the call stack and the callback queue." }
// ];

// let currentIndex = 0;

// const questionEl = document.getElementById("question");
// const answerEl = document.getElementById("answer");
// const toggleButton = document.getElementById("toggle");
// const prevButton = document.getElementById("prev");
// const nextButton = document.getElementById("next");
// const progressBar = document.getElementById("progress");
// const progressText = document.getElementById("progress-text");

// function updateFlashcard() {
//     questionEl.textContent = flashcards[currentIndex].question;
//     answerEl.textContent = flashcards[currentIndex].answer;
//     answerEl.classList.add("hidden");
//     toggleButton.textContent = "Show Answer";
    
//     let progressPercent = ((currentIndex + 1) / flashcards.length) * 100;
//     progressBar.style.width = `${progressPercent}%`;
//     progressText.textContent = `${Math.round(progressPercent)}%`;
// }

// toggleButton.addEventListener("click", () => {
//     if (answerEl.classList.contains("hidden")) {
//         answerEl.classList.remove("hidden");
//         toggleButton.textContent = "Hide Answer";
//     } else {
//         answerEl.classList.add("hidden");
//         toggleButton.textContent = "Show Answer";
//     }
// });

// prevButton.addEventListener("click", () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//         updateFlashcard();
//     }
// });

// nextButton.addEventListener("click", () => {
//     if (currentIndex < flashcards.length - 1) {
//         currentIndex++;
//         updateFlashcard();
//     }
// });

// updateFlashcard();
