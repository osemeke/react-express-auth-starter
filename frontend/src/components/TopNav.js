import { NavLink } from "react-router-dom"

const TopNav = () => {
    return (<>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
    </>)
}

export default TopNav
