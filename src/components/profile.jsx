import { NavLink } from "react-router-dom";
function Profile({formstate,setformstate}) {

  const {text,num,email} = formstate
  //newstate,setstate - usestate 
  return (
    <>
      <label>Name:</label>
      <input type="text" value={text} onChange={e => setformstate(prev => ({...prev,text:e.target.value}))}/>
      <label>Age:</label>
      <input type="number" value={num} onChange={e => setformstate(prev => ({...prev,num:e.target.value}))}/>
      <label>Email:</label>
      <input type="text" value={email} onChange={e => setformstate(prev => ({...prev,email:e.target.value}))}/>
      <NavLink to="/interests">Next</NavLink>
    </>
  )
}

export default Profile;