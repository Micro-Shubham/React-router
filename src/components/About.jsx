import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/dashboard')
  }
  return (
    <div>About
      <button onClick={handleClick}>
        Move to dashboard
      </button>
    </div>
  )
}

export default About;