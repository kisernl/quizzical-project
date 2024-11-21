import React from 'react';
import Start from './components/Start';
import Quiz from './components/Quiz';

function App() {

  const [gameOn, setGameOn] = React.useState(false)

  const toggleOn = () => {
    setGameOn(true)
  }

  return (
    <>
      <main>
        {gameOn === false && <Start toggleOn={toggleOn} />}
        {gameOn && <Quiz />}
      </main>
    </>
  );
}

export default App;
