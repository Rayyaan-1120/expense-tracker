import { useSelector } from 'react-redux'
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    collecteddata:localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [],
    expensecount:localStorage.getItem('expense') ? JSON.parse(localStorage.getItem('expense')) : 0,
    profitcount:localStorage.getItem('profit') ? JSON.parse(localStorage.getItem('profit')) : 0
}


const CollecteddataSlice = createSlice({
    name:"collecteddata",
    initialState,
    reducers:{
        formsubmit: (state,{payload}) => {
            state.collecteddata.push(payload)
            localStorage.setItem('data',JSON.stringify(state.collecteddata))
        }, 
        totalexpense: (state) => {
            const value = state.collecteddata.map(entry => {
                return entry.expense
            })

            state.expensecount = value.reduce((acc,curr) => {
                return acc + curr
            },0)
          localStorage.setItem('expense',JSON.stringify(state.expensecount))
        },
        totalprofit: (state) => {
           const value = state.collecteddata.map(entry => {
                return entry.profit
            })

            state.profitcount = value.reduce((acc,curr) => {
                return acc + curr
            },0)
            localStorage.setItem('profit',JSON.stringify(state.profitcount))

        },
        deleteitem: (state,{payload}) => {
          state.collecteddata = payload
        }
    }
})

export const {formsubmit,getlocalstorage,totalexpense,totalprofit,deleteitem} = CollecteddataSlice.actions
export default CollecteddataSlice.reducer