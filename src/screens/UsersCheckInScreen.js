import React from 'react'
import CheckInCard from '../components/CheckInCard'
import { useState } from 'react'
import produce from "immer";

function UsersCheckInScreen({people}) {
  const [peopleStatus, setPeople] = useState(people)

  const checkInAll = () => {
    console.log('peopleStatus:', peopleStatus)

    let ppl = produce(
      peopleStatus, 
      (draft) => {
        //let res = draft;
        console.log('draft: ',draft)
        draft = peopleStatus.map((person, idx) => {
          console.log('person: ',person)
          console.log('personCheckin: ',person.checkIn)
          console.log('person new Checkin: ',!person.checkIn)
          console.log('idx: ',idx)
          return draft[idx].checkIn = !person.checkIn
        });
        //console.log('draft',draft);
    
        //res
        //return draft;
        // setTimeout(() => {
        //   },100)

      })
      setPeople(ppl)
      console.log('peopleStatus',peopleStatus)

  }

  return (
    <div>
        <h2 class="mb-5">Check-In Users</h2>
        <div className="flex justify-end">
        <button class="mb-5 border border-blue-400 p-2 bg-blue-400 rounded-lg"
        onClick = {checkInAll}
        >Check-In-All</button> 
        </div>
            {peopleStatus.map((person) => {
              return (  <CheckInCard person={person}></CheckInCard>  )        
            })
    }
    </div>
  )
}

export default UsersCheckInScreen