import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Oops! 404 Page not found </h2>
      <p><NavLink to="/">Return to Home</NavLink></p>
      
    </div>
  )
}
