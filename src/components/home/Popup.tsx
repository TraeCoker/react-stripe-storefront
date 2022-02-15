import React from 'react'

const Popup: React.FC= ({children}) => {

  return (
    <div className="popup" id="popup">
        <div className="popup__content">
            {children}
        </div>
    </div>
  )
}

export default Popup
