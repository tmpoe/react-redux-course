import Header from "./components/Header/Header"
import Result from "./components/Result/Result"
import UserInput from "./components/UserInput/UserInput"
import { useState } from 'react'

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  const inputIsValid = userInput.duration > 0

  function handleInvestmentDataChange(event) {
    const { id, value } = event.target
    console.log(id, value)
    setUserInput({ ...userInput, [id]: parseInt(value) })
  }

  return (
    <>
      <Header />
      <UserInput handleInvestmentDataChange={handleInvestmentDataChange} userInput={userInput} />
      {inputIsValid ? <Result investmentData={userInput} /> : <p className="center">Please enter a valid duration</p>}
    </>
  )
}

export default App
