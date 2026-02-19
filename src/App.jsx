import { useState } from 'react'
import './App.css'

// Bill splitter:

// There should be input for amount, tax, tip and people 
// Out should be how much the amount get’s splitted for each person


function App() {

  const [amount, setAmount] = useState(0)
  const [tax, setTax] = useState(0)
  const [tip,setTip] = useState(0)
  const [people, setPeople] = useState("")
  const [totalBill, setBill] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const billSplitter = () => {
    const peopleCount = people.split(",").filter(name => name.trim() !== "").length
    if(peopleCount === 0) { 
      setBill(0);
      return;
    }
    const totalBill = (Number(amount) + Number(tax) + Number(tip)) / peopleCount
    setIsSubmitted(true)
    return setBill(totalBill)
  } 

  return (
    <>
      <label>Amount:</label>
      <input type="number" placeholder='Enter Amount' onChange={e => setAmount(e.target.value)} />
      <label>Tax:</label>
      <input type="number" placeholder='Enter Tax' onChange={e => setTax(e.target.value)}/>
      <label>Tip:</label>
      <input type="number" placeholder='Enter Tip' onChange={e => setTip(e.target.value)}/>
      <label>People:</label>
      <input type="text" placeholder='Enter People' onChange={e => setPeople(e.target.value)}/>
      <button onClick={() => billSplitter()}>Submit</button>
      {isSubmitted && people.split(",").filter(name => name.trim() !== "").map( (name, index) => (
        <div key={index}>
        {name} --- {totalBill}
        </div>
      ))}
    </>
  )
}

export default App
