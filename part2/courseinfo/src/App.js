const Course = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>

      {props.course.parts.map((part) =>
        <p key={part.id}>
          {part.name}: {part.exercises}
        </p>
      )}

      <Total course={props.course} />
    </>
  )
}

const Total = (props) => {
  const total = props.course.parts.reduce((previousValue, currentValue) => ({ exercises: previousValue.exercises + currentValue.exercises }))

  return (
    <>
      <p><b>There are a total of {total.exercises} exercises in this course.</b></p>
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App