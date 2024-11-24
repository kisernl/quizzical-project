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
const [totalCorrect, setTotalCorrect] = React.useState(null)
const [reloadKey, setReloadKey] = React.useState(0)

React.useEffect(() => {
    // console.log("effect ran")
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
    .then(response => response.json())
    .then(data => setQuestions(data.results))
}, [reloadKey])

const clickCheck = () => {
    setCheckAnswer(true)
}

const incrementCorrectTotal = () => {
    setTotalCorrect((prevCount) => prevCount + 1)
}

const reloadData = () => {
    setReloadKey((prevKey) => prevKey + 1);
    setCheckAnswer(false);
    setTotalCorrect(0);
};


if (totalCorrect !== null) {
    console.log("Total Questions: ", questions.length)
    console.log("Total Correct Aswers: ", totalCorrect)
}


if (questions !== null) {

    return (
         <section className='quiz--container'> 
         {questions.map((question, index) => (
                <Question 
                    key={`${reloadKey}-${index}`}
                    questions={question} 
                    checkAnswer={checkAnswer} 
                    onCorrectAnswer={incrementCorrectTotal} 
                />
            ))}
            {checkAnswer === false && <button className="quiz--btn" onClick={clickCheck}>Check Answers</button>}
            {checkAnswer && <div className="score--container">
            <h3>Score:   {totalCorrect === null ? " 0" : totalCorrect}/{questions.length}</h3>
            <button className="quiz--btn" id="restart--btn" onClick={reloadData}>Play Again</button>
            </div>}
        </section>
    )
}
}

            {/* <Question questions={questions[0]} checkAnswer={checkAnswer} onCorrectAnswer={incrementCorrectTotal} />
            <Question questions={questions[1]} checkAnswer={checkAnswer} onCorrectAnswer={incrementCorrectTotal} />
            <Question questions={questions[2]} checkAnswer={checkAnswer} onCorrectAnswer={incrementCorrectTotal} />
            <Question questions={questions[3]} checkAnswer={checkAnswer} onCorrectAnswer={incrementCorrectTotal} />
            <Question questions={questions[4]} checkAnswer={checkAnswer} onCorrectAnswer={incrementCorrectTotal} /> */}