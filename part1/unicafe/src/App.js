import React, { useState } from 'react'


const Header = () => (
  <h1>Please give your feedback!</h1>
)

const Button = (props) => (
  <button onClick={props.handleClick}> {props.text} </button>
)

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)
const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const percentage = (props.good / total) * 100
  const average = (props.good - props.bad) / total
  if (total > 0) {
    return (
      <>
        <table>
          <tbody>
            <tr><th>Statistics</th></tr>
            <StatisticsLine text="Good" value={props.good} />
            <StatisticsLine text="Neutral" value={props.neutral} />
            <StatisticsLine text="Bad" value={props.bad} />
            <StatisticsLine text="Total" value={total} />
            <StatisticsLine text="Average" value={average} />
            <StatisticsLine text="Positive Percentage" value={percentage + " %"} />
          </tbody>
        </table>
      </>
    )
  }
  return (<h4><br></br>Please give at least one feedback to show statistics</h4>)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header />
      <Button handleClick={() => setGood(good + 1)} text="Good :)" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral :|" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad :(" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App