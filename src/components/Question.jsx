import React, { useEffect } from "react";
import { decode } from "html-entities";
import './question.css'

export default function Question(props) {

// console.log(props.questions.correct_answer)

function insertRandomly(array, correctAnswer) {
    // console.log("array of incorrect answers: ", array)
    // console.log("correct answer: ", correctAnswer)
    const randomIndex = Math.floor(Math.random() * (array.length + 1));
    // console.log("random array position: ", randomIndex)
    const newArray = [...array];
    newArray.splice(randomIndex, 0, correctAnswer);
    // console.log(newArray)
    return newArray
}

// const randomAnswers = insertRandomly(props.questions.incorrect_answers, props.questions.correct_answer);
const [randomAnswers, setRandomAnswers] = React.useState([])
const [isClicked, setIsClicked] = React.useState(false);
const [highlightBtn, setHighlightBtn] = React.useState(null);
const [isDisabled, setIsDisabled] = React.useState(false);
const [rightAnswer, setRightAnswer] = React.useState(null);

React.useEffect(() => {
    const randomizedAnswers = insertRandomly(props.questions.incorrect_answers, props.questions.correct_answer);
    setRandomAnswers(randomizedAnswers) 
}, [props.questions.incorrect_answers, props.questions.correct_answer])

const clickAnswer = (index) => {
    setHighlightBtn(index)
    setIsClicked(true)
}

React.useEffect(() => {
   if (props.checkAnswer === true) {
    checkAnswer()
    setIsDisabled(true)
   }
}, [props.checkAnswer])

const checkAnswer = () => {
    // console.log(randomAnswers)
    // console.log(highlightBtn)
    // console.log(randomAnswers[highlightBtn])
    // console.log("correct: ", props.questions.correct_answer)
    // console.log("incorrect: ", props.questions.incorrect_answers)

     if (props.questions.correct_answer === randomAnswers[highlightBtn]) {
         console.log("CORRECT!")
         props.onCorrectAnswer()
         setRightAnswer(true) 
     } else {
        console.log("better luck next time...")
     }
}


const handleBackground = (index) => {
  let background = "";
  if (highlightBtn === index && props.checkAnswer && props.questions.correct_answer === randomAnswers[highlightBtn]) {
        background = "#94D7A2" 
  } else if (highlightBtn === index) {
        background = "#D6DBF5" 
  } else {
      background ="transparent"
  }
  return background
      }

const handleBorder = (index) => {
    let border = "";
    if (highlightBtn === index && props.checkAnswer && props.questions.correct_answer === randomAnswers[highlightBtn]) {
        border = "#94D7A2" 
    } else if (highlightBtn === index) {
        border = "#D6DBF5" 
    } 
        return border
}

const handleStyles = (index) => {
    let styles = {
    background: "transparent",
    border: "",
    fontColor: "",
    }
    if (props.checkAnswer && props.questions.correct_answer === randomAnswers[index]) {
        styles = {
        background: "#94D7A2", 
        border: "#94D7A2", 
        fontColor: "#293264",
    }
    } else if (highlightBtn === index && props.checkAnswer && props.questions.correct_answer !== randomAnswers[highlightBtn]) {
        styles = {
        background: "#F8BCBC", 
        border: "#F8BCBC", 
        fontColor: "rgb(102, 102, 102, 0.5)",
    }
    } else if (highlightBtn === index) {
        styles = {
        background: "#D6DBF5",
        border: "#D6DBF5",
        fontColor: "#293264",
        } 
    } 
        return styles
}



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
                            // backgroundColor: highlightBtn === index ? "#D6DBF5" : "transparent",
                            backgroundColor: handleStyles(index).background,
                            border: `solid ${handleStyles(index).border} .1rem`,
                            color: handleStyles(index).fontColor,
                            // ...(highlightBtn === index && { border: "solid #D6DBF5 .1rem" }),
                            // ...(props.questions.correct_answer === randomAnswers[highlightBtn] && { border: "solid #94D7A2 .1rem" }),
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

// if (highlightBtn === index && props.checkAnswer && props.questions.correct_answer === randomAnswers[highlightBtn]) {
//     styles = {
//     background: "#94D7A2", 
//     border: "#94D7A2", 
//     fontColor: "#293264",
// }