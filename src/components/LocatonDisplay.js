import React from 'react'
import { useLocation } from 'react-router-dom';
function LocatonDisplay() {
    const location = useLocation();
  return (
    <div>
          <h2 data-testid="location-display">{location.pathname}</h2>
    </div>
  )
}

export default LocatonDisplay
