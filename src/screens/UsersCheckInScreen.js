import React from 'react'
import CheckInCard from '../components/CheckInCard'
import { useState, useEffect } from 'react'
import produce from "immer";

function UsersCheckInScreen({people}) {
  const [peopleStatus, setPeople] = useState(people)

  const checkInAll = () => {
    console.log('peopleStatusStart:', peopleStatus)

    let ppl = produce(
      peopleStatus, 
      (draft) => {
        //let res = draft;
        console.log('draft: ',draft)
        let new_val = draft.map((person, idx) => {
          console.log('person: ',person)
          // console.log('personCheckin: ',person.checkIn)
          // console.log('person new Checkin: ',!person.checkIn)
          // console.log('idx: ',idx)
          //draft[idx].checkIn = !person.checkIn
          return {
            name : person.name,
            checkIn : !person.checkIn
          }});
        //console.log('draft',draft);
        //const new_val = draft
        return new_val


        //res
        //return draft;
        // setTimeout(() => {
        //   },100)

      })
      setPeople(ppl)
      console.log('peopleStatusEnd',peopleStatus)

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