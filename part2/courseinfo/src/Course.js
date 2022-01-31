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

const Total = (props) => {
    const total = props.course.parts.reduce((previousValue, currentValue) => ({ exercises: previousValue.exercises + currentValue.exercises }))

    return (
        <>
            <p><b>There are a total of {total.exercises} exercises in this course.</b></p>
        </>
    )
}
export default Course