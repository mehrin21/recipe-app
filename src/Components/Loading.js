import React from 'react'

function Loading() {
  return (
    <div className="loader">
  <div className="loading-spinner">
    <svg className="loading-spinner__circle-svg" viewBox="25 25 50 50">
      <circle className="loading-spinner__circle-stroke" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/>
    </svg>
  </div>
</div>
  )
}

export default Loading
