import Header from "./components/Header/Header"
import Result from "./components/Result/Result"
import UserInput from "./components/UserInput/UserInput"
import { useState } from 'react'

function App() {

  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  function handleInvestmentDataChange(event) {
    const { id, value } = event.target
    console.log(id, value)
    setInvestmentData({ ...investmentData, [id]: parseInt(value) })
  }

  return (
    <>
      <Header />
      <UserInput handleInvestmentDataChange={handleInvestmentDataChange} investmentData={investmentData} />
      <Result investmentData={investmentData} />
    </>
  )
}

export default App
