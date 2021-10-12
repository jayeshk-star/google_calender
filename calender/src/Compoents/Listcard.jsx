import React from 'react'
import "./Card.css"


const Listcard = () => {
  return (
    <div className="carddata">
      <div class='card border-success mb-3' style={{ maxWidth: '18rem' }}>
        <div class='card-header bg-transparent border-success'>Header</div>
        <div class='card-body text-success'>
          <h5 class='card-title'>Success card title</h5>
          <p class='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <div class='card-footer bg-transparent border-success'>Footer</div>
      </div>
    </div>
  )
}

export default Listcard