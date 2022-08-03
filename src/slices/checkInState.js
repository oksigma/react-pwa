import { createSlice } from "@reduxjs/toolkit";
import { arrayMoveImmutable } from "array-move";
import produce from "immer";

export const initialState = {
    loggedIn : false,
    groups : [
        {
            name : "Esso",
            members: {
                "Leanne Graham" : {
                    checkIn : [],
                    checkOut : [],
                    checkInStatus : false
                },
                "Ervin Howell" : {
                    checkIn : [],
                    checkOut : [],
                    checkInStatus : false
                },
                "Clementine Bauch" : {
                    checkIn : [],
                    checkOut : [],
                    checkInStatus : false
                },
                "Dave Smith" : {
                    checkIn : [],
                    checkOut : [],
                    checkInStatus : false
                },
                "Mel James" : {
                    checkIn : [],
                    checkOut : [],
                    checkInStatus : false
                }
            }

        }
    ]

}

export const stateSlice = createSlice({
    name : "checkInState",
    initialState : {
        
    }
})