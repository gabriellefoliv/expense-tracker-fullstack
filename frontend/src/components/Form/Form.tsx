import { useState } from "react"
import { FormInput, FormStyled, InputControl, OptionStyled, SelectStyled, SubmitButton, TextAreaStyled } from "./style"
// import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { useGlobalContext } from "../../context/globalContext"

// interface InputProps {
//     name: String
//     e: any
// }

function Form() {
    const { addIncome } = useGlobalContext()

    const [inputState, setInputState] = useState({
        title: '',
        amount: '',
        date: '',
        category: '',
        description: '',
    })

    const { title, amount, category, description } = inputState;

    const handleInput = (name: string) => (e: any) => {
        setInputState({...inputState, [name]: e.target.value})
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        addIncome(inputState)
    }

    return (
        <FormStyled onSubmit={handleSubmit}>
            <InputControl>
                <FormInput type='text' value={title} name={'title'} placeholder="Salary Title" onChange={handleInput('title')}/>
            </InputControl>
            <InputControl>
                <FormInput type='text' value={amount} name={'amount'} placeholder="Salary Amount" onChange={handleInput('amount')}/>
            </InputControl>
            <InputControl>
                {/* <DatePicker id='date' placeholderText='Enter a date' selected={date} dateFormat="dd/MM/yyyy" onChange={(date: any) => {
                    setInputState({...inputState, date: date})
                }} /> */}
            </InputControl>
            <InputControl>
                <SelectStyled required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <OptionStyled value="" disabled>Select Option</OptionStyled>
                    <OptionStyled value="salary">Salary</OptionStyled>
                    <OptionStyled value="freelancing">Freelancing</OptionStyled>
                    <OptionStyled value="investiments">Investiments</OptionStyled>
                    <OptionStyled value="stocks">Stocks</OptionStyled>
                    <OptionStyled value="bitcoin">Bitcoin</OptionStyled>
                    <OptionStyled value="bank">Bank Transfer</OptionStyled>
                    <OptionStyled value="youtube">Youtube</OptionStyled>
                    <OptionStyled value="other">Other</OptionStyled>
                </SelectStyled>
            </InputControl>
            <InputControl>
                <TextAreaStyled name="description" value={description} placeholder="Add a Reference" id="description" onChange={handleInput('description')}></TextAreaStyled>
            </InputControl>
            <SubmitButton>Add Income</SubmitButton>
        </FormStyled>
    )
}


export default Form