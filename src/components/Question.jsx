import React from "react";
import { decode } from "html-entities";

export default function Question(props) {

function insertRandomly(array, correctAnswer) {
    const randomIndex = Math.floor(Math.random) * (array.length + 1);
    const newArray = [...array];
    newArray.splice(randomIndex, 0, correctAnswer);
    return newArray
}

const randomAnswers = insertRandomly(props.questions.incorrect_answers, props.questions.correct_answer);

    return (
        <>
            <p className="question">{decode(props.questions.question)}</p>
            <div>
                <button className="answer">{decode(randomAnswers[0])}</button>
                <button className="answer">{decode(randomAnswers[1])}</button>
                <button className="answer">{decode(randomAnswers[2])}</button>
                <button className="answer">{decode(randomAnswers[3])}</button>
            </div>
        </>

    )
}


{/* <button className="answer">{decode(props.questions.incorrect_answers[0])}</button>
<button className="answer">{decode(props.questions.incorrect_answers[1])}</button>
<button className="answer">{decode(props.questions.incorrect_answers[2])}</button>
<button className="answer">{decode(props.questions.correct_answer)}</button> */}