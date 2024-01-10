// const App = () => {
// 	const course = 'Half Stack application development'
// 	const part1 = 'Fundamentals of React'
// 	const exercises1 = 10
// 	const part2 = 'Using props to pass data'
// 	const exercises2 = 7
// 	const part3 = 'State of a component'
// 	const exercises3 = 14

// 	return (
// 		<div>
// 			<h1>{course}</h1>
// 			<p>
// 				{part1} {exercises1}
// 			</p>
// 			<p>
// 				{part2} {exercises2}
// 			</p>
// 			<p>
// 				{part3} {exercises3}
// 			</p>
// 			<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
// 		</div>
// 	)
// }

const Header = (props) => {
	console.log(props)

	return <h1>{props.course}</h1>
}

// The Part component is responsible for displaying the text content for each part of the course
const Part = (props) => {
	console.log(props)

	return <p>{props.part} {props.exercises}</p>
}

const Content = (props) => {
	console.log(props)

	return (
		<div>
			<Part part={props.part1} exercises={props.exercises1} />
			<Part part={props.part2} exercises={props.exercises2} />
			<Part part={props.part3} exercises={props.exercises3} />
		</div>
	)
}

const App = () => {
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14 

	return (
		<div>
			<Header course={course} />
			<Content 
				part1={part1} exercises1={exercises1}
				part2={part2} exercises2={exercises2}
				part3={part3} exercises3={exercises3}
			/>
		</div>
	)
}

export default App