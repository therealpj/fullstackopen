import React, { useState } from 'react'


const Header = () => (
  <h1>Please give your feedback!</h1>
)

const Statistics = (props) => {
  return (
    <>
      <h1>Statistics</h1>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header />
      <button onClick={() => setGood(good + 1)}> Good :) </button>
      <button onClick={() => setNeutral(neutral + 1)}> Neutral :| </button>
      <button onClick={() => setBad(bad + 1)}> Bad :(</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App