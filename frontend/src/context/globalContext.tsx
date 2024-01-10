// ts-ignore

import { useContext, useState, createContext } from "react"
import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/v1/";

interface SomeProps{
    addIncome: any
    getIncomes: any
    deleteIncome: any
    addExpense: any
    deleteExpense: any
    getExpenses: any
    expenses:any
    incomes:any
    error: any
    setError: any
    
  
}

const GlobalContext = createContext<SomeProps>(null!)



export const GlobalProvider = (children?: any) => {

    const [incomes, setIncomes] = useState([])
    const [expenses, setExpenses] = useState([])
    const [error, setError] = useState(null)

    const addIncome = async (income?: any) => {
        const response = await axios.post(`${BASE_URL}add-income`, income)
            .catch((err) => {
                setError(err.response.data.message)
            })
        console.log(response)
        getIncomes()
    }

    const getIncomes = async () => {
        const response = await axios.get(`${BASE_URL}get-incomes`)
        setIncomes(response.data)
        console.log(response.data)
    }

    const deleteIncome = async (id:number) => {
        const res = await axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
        console.log(res)
    }


    //calculate incomes
    const addExpense = async (income:any) => {
        const response = await axios.post(`${BASE_URL}add-expense`, income)
            .catch((err) =>{
                setError(err.response.data.message)
            })
            console.log(response)
        getExpenses()
    }

    const getExpenses = async () => {
        const response = await axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        console.log(response.data)
    }

    const deleteExpense = async (id:number) => {
        const res  = await axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
        console.log(res)
    }



    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            addExpense,
            getExpenses,
            deleteExpense,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}