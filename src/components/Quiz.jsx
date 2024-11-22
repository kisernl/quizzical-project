import React, { useEffect } from "react";
import Question from "./Question";

export default function Quiz(props) {

// create state for trivia object
// create useEffect function to fetch 5 Qs from API, runs only once
// const [questions, setQuestions] = React.useState(null)

const [questions, setQuestions] = React.useState(null)

React.useEffect(() => {
    console.log("effect ran")
    fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple")
    .then(response => response.json())
    .then(data => setQuestions(data.results))
}, [])

if (questions !== null) {
console.log("log from Quiz: ", questions[3]);



    return (
         <section className='quiz--container'> 
            <Question questions={questions[0]} />
            <Question questions={questions[1]} />
            <Question questions={questions[2]} />
            <Question questions={questions[3]} />
            <Question questions={questions[4]} />
            <button className="check--btn">Check Answers</button>
        </section>
    )
}
}