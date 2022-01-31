const Course = (props) => {
  return (
    <>
      <h2>{props.course.name}</h2>

      {props.course.parts.map((part) =>
        <p key={part.id}>
          {part.name}: {part.exercises}
        </p>
      )}

      <Total course={props.course} />
    </>
  )
}

const Header = (props) => (
  <h1>{props.heading}</h1>
)

const Total = (props) => {
  const total = props.course.parts.reduce((previousValue, currentValue) => ({ exercises: previousValue.exercises + currentValue.exercises }))

  return (
    <>
      <p><b>There are a total of {total.exercises} exercises in this course.</b></p>
    </>
  )
}

const App = () => {
  const heading = "Web Development Curriculum"
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <Header heading={heading} />
      {courses.map((course) =>
        <div key={course.id}>
          <Course course={course} />
        </div>
      )}
    </>
  )
}

export default App