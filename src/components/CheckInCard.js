import React from 'react'
import { useState } from 'react'

function CheckInCard( {person} ) {
    const [checkInStatus, setCheckInStatus ] = useState(person.checkIn)

    const onClick = () => {
        setCheckInStatus(!checkInStatus)
    }

  return (
    <div class="flex justify-between rounded-xl border-blue-400 border-solid border-2 bg-gray-300 p-6 mb-5">
    <button 
        class="rounded-lg border border-blue-600 bg-blue-600 p-2 px-4"
        onClick = {onClick}
        >{checkInStatus ? "Check-Out" : "Check-In"}
        
    </button>
    <div class="flex pt-2 justify-between">
      <p class="">{person.name}</p>
      {checkInStatus ? 
      <div class="border-1 h-6 w-6 rounded-full border-white bg-green-500 ml-5"></div> : 
      <div class="border-1 h-6 w-6 rounded-full border-white bg-red-500 ml-5"></div>}
    </div>
  </div>
  )
}

export default CheckInCard