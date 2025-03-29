const Gretting = () => {
  const name = "John"
  const currentDate = new Date()
  return (
    <div>
      <h1>Hi {name} </h1>
      <p>Today is {currentDate.getDate()} / {currentDate.getDay()} / {currentDate.getFullYear()} </p>
    </div>
  )
}

export default Gretting