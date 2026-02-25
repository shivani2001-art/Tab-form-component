import { NavLink } from "react-router-dom";

function Interests({formstate,setformstate}) {
    const {interests} = formstate
    return(
        <>
         <label>Interests:</label>
         <input type="text" value={interests} onChange={e => setformstate(prev => ({...prev,interests:e.target.value}))}/>
         <NavLink to="/settings">Next</NavLink>
        </>
    )
}

export default Interests;