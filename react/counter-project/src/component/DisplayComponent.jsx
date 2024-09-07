import React from 'react'

function DisplayComponent( {count} ) { // props, we are taking the values using destructuring, there are many other ways to do it. Explore it from google.
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default DisplayComponent
