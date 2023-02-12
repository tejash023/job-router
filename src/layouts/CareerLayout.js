
import { Outlet } from 'react-router-dom'

export default function CareerLayout() {
  return (
    <div className='careers-layout'>
      <h2>Careers</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

      <Outlet />
    </div>
  )
}
