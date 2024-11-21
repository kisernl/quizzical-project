import React, { useEffect } from "react";
import Question from "./Question";

export default function Quiz() {

// create state for trivia object
// create useEffect function to fetch 5 Qs from API, runs only once
const [questions, setQuestions] = React.useState(null)

React.useEffect(() => {
    console.log("effect ran")
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    .then(response => response.json())
    .then(data => setQuestions(data))
}, [])

console.log(questions)

    return (
         <section className='quiz--container'> 
            <h1 className='quiz--title'>Quiz Here</h1>
            <Question />
        </section>
    )
}