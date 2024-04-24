import Header from "./components/Header/Header"
import Result from "./components/Result/Result"
import UserInput from "./components/UserInput/UserInput"
import { useState } from 'react'

function App() {

  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 0,
    monthlyInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  })

  function handleInvestmentDataChange(event) {
    const { id, value } = event.target
    console.log(id, value)
    setInvestmentData({ ...investmentData, [id]: parseInt(value) })
  }

  return (
    <>
      <Header />
      <UserInput handleInvestmentDataChange={handleInvestmentDataChange} />
      <Result investmentData={investmentData} />
    </>
  )
}

export default App
