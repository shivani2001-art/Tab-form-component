import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css'
import NavBars from "./components/Navbars";
import { useState } from "react";
import Profile from "./components/profile";
import Interests from "./components/interests";
import Settings from "./components/settings";


function App() {
  const [formstate,setformstate] = useState({
    text:"",
    num:"",
    email:"",
    interests:""
  })
  return (
    <Router>
      <NavBars />
      <Routes>
        <Route exact path="/" element={<Profile formstate={formstate} setformstate={setformstate}/>} />
        <Route path="/interests" element={<Interests formstate={formstate} setformstate={setformstate}/>} />
        <Route path="/settings" element={<Settings formstate={formstate} setformstate={setformstate}/>} />
      </Routes>
    </Router>
  )
}

// function Profile({formstate,setformstate}){
//   const {text,number,email} = formstate 
//   return <form style={{display:"flex",flexDirection:"column"}} onSubmit={(e)=>{
//     e.preventDefault()
//     console.log(formstate)
//   }}>      
//       <label>Name:</label>
//       <input type="text" value={text} onChange={() => setformstate("hello")}/>
//       <label>Age:</label>
//       <input type="number" value={number} onChange={e => setformstate(prev => ({...prev,number:e.target.value}))}/>
//       <label>Email:</label>
//       <input type="text" value={email} onChange={e => setformstate(prev => ({...prev,email:e.target.value}))}/>
//       <button type="submit">submit</button>
//   </form>
// }
// function Interests(){
//   return "interests"
// }
// function Settings(){
//   return "settings"
// }

// function App(){
//   const links = ["profile", "interests", "settings"]
//   const [currentTab,setCurrentTab] = useState(links[0])
//     const [formstate,setformstate] = useState({
//     text:"",
//     num:"",
//     email:""
//   })
//   const uiDict = {
//     "profile": <Profile formstate={formstate} setformstate={setformstate}/>,
//     "interests":<Interests formstate={formstate} setformstate={setformstate}/>,
//   "settings":<Settings formstate={formstate} setformstate={setformstate}/>
//   }
//   return <div>
//     <div>
//     {links.map(link => <button style={{backgroundColor:currentTab === link ? "CornflowerBlue":"",color:"red"}} onClick={()=>setCurrentTab(link)}>{link.toUpperCase()}</button>)}
//   </div>
//   {uiDict[currentTab]}
//   </div>
// }

// class Struct {
//   constructor(compName){
//     this.compName = "App2"
//     this.state = [9,7,9]
//     this.called = 0
//   }
//   read(){
//     this.state[called]
//     this.called += 1 
//   }
//   check(){
//     return this.called === this.state.length - 1
//   }
//   mutate(val){
//     index = this.index
//     this.state[index] = 9
//   }
// }

// const appstruct = new Struct("App")
// const app2sturct = new Struct("App2")

// function App2({setParentstate}){
//   const [state,setstate] = useState(8) //called 0
//   let [state2,_i] = [null,null]
//   if(state===8) {
//   [state2,_i] = useState(7)
//   }
//   let [state3,_j] = useState(9) // called 1
//   return <><div>{state}</div><div>{state2}</div><div>{state3}</div> <button onClick={()=>setParentstate(9)}>change</button></>
// }

// function App3({setParentstate}){
//   const [state,setstate] = useState(8) //called 0
//   let [state2,_i] = [null,null]
//   if(state===8) {
//   [state2,_i] = useState(7)
//   }
//   let [state3,_j] = useState(9) // called 1
//   return <><div>{state}</div><div>{state2}</div><div>{state3}</div> <button onClick={()=>setParentstate(9)}>change</button></>
// }



// function App(){
//   const [state,setParentstate] = useState(5)
//   return <div>
//     <App2 setParentstate={setParentstate}/>
//     <App3/>
//     </div>
// }

export default App