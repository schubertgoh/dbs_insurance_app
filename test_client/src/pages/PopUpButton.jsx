import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function PopUpButton({claim}) {
    const c = claim
  return (
    <div>
            <Popup trigger=
                {<button> Click to open popup </button>}
                position="right center">
                <div>GeeksforGeeks</div>
                <h1>{claim.ClaimID}</h1>
                <button>Click here</button>
            </Popup>
    </div>
  )
}

export default PopUpButton