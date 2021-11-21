import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value:{
        type:"",
        event:"",
        profit:0,
        expense:0,
        date:"",
        id:""
    }
    
}

const Dataslice = createSlice({
    name:'data',
    initialState,
    reducers:{
        typecheck: (state,{payload}) => {
           state.value.type = payload
        },
        eventcheck: (state,{payload}) => {
            state.value.event = payload
         },
         profitcheck: (state,{payload}) => {
            state.value.profit = +payload
         },
         expensecheck: (state,{payload}) => {
            state.value.expense = +payload
         },
         datecheck: (state,{payload}) => {
            state.value.date = payload
         },
         idcheck: (state,{payload}) => {
            state.value.id = payload
         },
         emptyvalue: (state) => {
            state.value.event = ""
            state.value.profit = 0
            state.value.expense = 0
        }

    }
})

export const {typecheck,eventcheck,profitcheck,expensecheck,datecheck,emptyvalue,idcheck} = Dataslice.actions

export default Dataslice.reducer