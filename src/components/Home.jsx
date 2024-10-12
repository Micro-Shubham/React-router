
import React from 'react'
import { useNavigate } from 'react-router-dom'

 const Home = () => {
const navigate = useNavigate()
function handleClicked() {
  navigate('/about')
}
  return (
    <div>
      Home Page
      <button onClick={handleClicked}>
        Move to about Page
      </button>

    </div>
  )
}
export default Home
