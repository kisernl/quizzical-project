import React from "react";

export default function Start(props) {
    return (
        <section className='start--container'> 
            <h1 className='quiz--title'>Quizzical</h1>
            <p className='quiz--description'>5 random questions to test your trivia skills!</p>
            <button onClick={props.toggleOn} className='start--btn'>Start Quiz</button>
        </section>
      );
}