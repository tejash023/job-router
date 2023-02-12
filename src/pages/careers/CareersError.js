import { useRouteError, Link } from "react-router-dom"

export default function CareersError() {

  const error = useRouteError();
  return (
    <div>
      <h2>Oops! We encoutered an error.</h2>
      <p>{error.message}</p>
      <Link to='/'>Back to Home</Link>
    </div>
  )
}
