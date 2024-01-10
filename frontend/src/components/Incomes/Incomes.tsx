import { useGlobalContext } from "../../context/globalContext"
import { InnerLayout } from "../../styles/Layouts"
import Form from "../Form/Form"
import { FormContainer, Income, IncomeContent, IncomesStyled, Title } from "./style"

function Incomes() {
    const { addIncome } = useGlobalContext()
    return (
        <IncomesStyled>
            <InnerLayout>
                <Title>Incomes</Title>
                <IncomeContent>
                    <FormContainer>
                        <Form/>
                    </FormContainer>
                    <Income>

                    </Income>
                </IncomeContent>
            </InnerLayout>
        </IncomesStyled>
    )
}

export default Incomes