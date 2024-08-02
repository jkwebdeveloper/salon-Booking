import React from 'react'

function Child({ show }) {
     console.log('Child')
     return (
          <div>
               {show && <div>Child</div>}

          </div>
     )
}

export default Child