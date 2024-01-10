import styled from "styled-components";
import "react-datepicker/dist/react-datepicker.css"

import bg from './img/bg.png';
import { MainLayout } from "./styles/Layouts";
import Orb from "./components/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";
import { useMemo, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Incomes from "./components/Incomes/Incomes";
import Expenses from "./components/Expenses/Expenses";
import { useGlobalContext } from './context/globalContext'

function App() {
  const [active, setActive] = useState(1)

  useGlobalContext()

  const orbMemo = useMemo(() => {
    return <Orb />
  }, [])

  const displayData = () => {
    switch(active) {
      case 1:
        return <Dashboard/>
      case 2:
        return <Dashboard/>
      case 3: 
        return <Incomes/>
      case 4:
        return <Expenses/>
      default:
        return <Dashboard/>
    }
  }

  return (
    <AppStyled>
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
        <MainSection>
          {displayData()}
        </MainSection>
      </MainLayout>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${bg});
  position: relative;
`;

const MainSection = styled.div`
  flex: 1; 
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export default App
