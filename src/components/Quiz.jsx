import React, { useEffect } from "react";
import Question from "./Question";

export default function Quiz(props) {

// ✅ create state for trivia object
// ✅ create useEffect function to fetch 5 Qs from API, runs only once
// ✅ const [questions, setQuestions] = React.useState(null)
// create state to trigger checking answers of all questions against correct answer
// create state to track clicked/selected answers
// create conditional css to highlight selected answers
// create logic that allows only one answer to be selected, and selecting another answer deselects previous selection
// create function to be triggered by check answers button to compare selected answer with correct answer
// create conditional css that highlights correct answers green and incorrect red
// create conditional text for with score and play again button

const [questions, setQuestions] = React.useState(null)
const [checkAnswer, setCheckAnswer] = React.useState(false)

React.useEffect(() => {
    // console.log("effect ran")
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
    .then(response => response.json())
    .then(data => setQuestions(data.results))
}, [])

const clickCheck = () => {
    setCheckAnswer(true)
}

if (questions !== null) {

    return (
         <section className='quiz--container'> 
            <Question questions={questions[0]} checkAnswer={checkAnswer} />
            <Question questions={questions[1]} checkAnswer={checkAnswer} />
            <Question questions={questions[2]} checkAnswer={checkAnswer} />
            <Question questions={questions[3]} checkAnswer={checkAnswer} />
            <Question questions={questions[4]} checkAnswer={checkAnswer} />
            <button className="check--btn" onClick={clickCheck}>Check Answers</button>
        </section>
    )
}
}