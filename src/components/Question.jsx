import React from "react";
import { decode } from "html-entities";
import './question.css'

export default function Question(props) {

function insertRandomly(array, correctAnswer) {
    const randomIndex = Math.floor(Math.random) * (array.length + 1);
    const newArray = [...array];
    newArray.splice(randomIndex, 0, correctAnswer);
    return newArray
}

const randomAnswers = insertRandomly(props.questions.incorrect_answers, props.questions.correct_answer);
const [isClicked, setIsClicked] = React.useState(false)
const [highlightBtn, setHighlightBtn] = React.useState(null);
const [isDisabled, setIsDisabled] = React.useState(false);

const clickAnswer = (index) => {
    setHighlightBtn(index)
    setIsClicked(true)
}

React.useEffect(() => {
   if (props.checkAnswer === true) {
    setIsDisabled(true)
   }
}, [props.checkAnswer])

// ✅ create onClick that highlights selected answer
// ✅ use state to track and allow only one selected answer for question
// create function that checks highlighted answer with correct answer
    // all correct answers turn green, but if selected answer is other than correct it turns red

    return (
        <section className="question--container">
            <p className="question">{decode(props.questions.question)}</p>
            <div>
                {randomAnswers.map((answer, index) => (
                    <button
                        key={index}
                        className="answer"
                        onClick={() => clickAnswer(index)}
                        style={{
                            backgroundColor: highlightBtn === index ? "#D6DBF5" : "transparent",
                            ...(highlightBtn === index && { border: "solid #D6DBF5 .1rem" }),
                        }}
                        disabled={isDisabled}
                    >
                        {decode(answer)}
                    </button>
                ) )}
                
            </div>
            <hr />
        </section>

    )
}


{/* <button className="answer">{decode(props.questions.incorrect_answers[0])}</button>
<button className="answer">{decode(props.questions.incorrect_answers[1])}</button>
<button className="answer">{decode(props.questions.incorrect_answers[2])}</button>
<button className="answer">{decode(props.questions.correct_answer)}</button> */}

{/* <button className="answer" onClick={clickAnswer} style={{ backgroundColor: highlightBtn }}>{decode(randomAnswers[0])}</button>
<button className="answer" onClick={clickAnswer} style={{ backgroundColor: highlightBtn }}>{decode(randomAnswers[1])}</button>
<button className="answer" onClick={clickAnswer} style={{ backgroundColor: highlightBtn }}>{decode(randomAnswers[2])}</button>
<button className="answer" onClick={clickAnswer} style={{ backgroundColor: highlightBtn }}>{decode(randomAnswers[3])}</button> */}