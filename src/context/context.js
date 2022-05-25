import React, { useReducer, createContext } from "react";
import contextReducer from './contextReducer'

const initialState=JSON.parse(localStorage.getItem('transactions')) || [{"amount":15,"category":"House","type":"Expense","date":"2022-05-19","id":"98dcbd03-bca0-4044-a487-689880f5b481"},{"amount":25,"category":"Investments","type":"Income","date":"2022-05-20","id":"4ef61f82-9bfa-4f7a-b0a6-d4ca50e869dc"},{"amount":45,"category":"Food","type":"Expense","date":"2022-05-24","id":"929ba2ee-2a12-484a-a5a3-3c912a894c28"},{"amount":70,"category":"Business","type":"Income","date":"2022-05-20","id":"ebb9ddb2-f076-48a0-800c-76ba723d64e5"},{"amount":30,"category":"Travel","type":"Expense","date":"2022-05-24","id":"a3d8499e-2611-46ae-94d6-f931289ec360"},{"amount":50,"category":"Salary","type":"Income","date":"2022-05-23","id":"badb4b09-8cfe-45df-85bb-a832feb5ac47"}]

export const ExpenseTrackerContext=createContext(initialState)

export const Provider=({children})=>{
    const [transactions, dispatch] = useReducer(contextReducer, initialState)

    //Action Creators
    const deleteTransaction=(id)=>dispatch({type:'DELETE_TRANSACTION',payload:id})
    const addTransaction=(transaction)=>dispatch({type:'ADD_TRANSACTION',payload:transaction})

    const balance=transactions.reduce((acc,currVal)=>currVal.type ==='Expense'?acc-currVal.amount:acc+currVal.amount,0)
    return(
        <ExpenseTrackerContext.Provider value={{deleteTransaction,addTransaction,transactions,balance}}>
            {children}
        </ExpenseTrackerContext.Provider>
    )
}