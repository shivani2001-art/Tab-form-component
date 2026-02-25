import { NavLink } from "react-router-dom";

function NavBars() {
    return(
        <nav>
            <div>
                <NavLink to="/"> Profile </NavLink>
                <NavLink to="/interests" > Interest </NavLink>
                <NavLink to="/settings">Settings</NavLink>
            </div>
        </nav>
    )
}

export default NavBars;