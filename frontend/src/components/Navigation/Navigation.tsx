import styled from "styled-components"
import avatar from '../../img/avatar.png'
import { menuItems } from "../../utils/menuItems";
import { signout } from "../../utils/icons";

function Navigation({active, setActive}) {

    return (
        <NavStyled>
            <UserContainer>
                <UserImg src={avatar} alt=""/>
                <TextDiv>
                    <Name>Mike</Name>
                    <Money>Your Money</Money>
                </TextDiv>
            </UserContainer>
            <MenuItems>
                {menuItems.map((item) => {
                    return <Items
                        key={item.id} onClick={() => setActive(item.id)} 
                    >
                        {item.icon}
                        <span>{item.title}</span>
                    </Items>
                })}
            </MenuItems>
            <div className="bottom-nav">
                <Items>
                    {signout} Sign Out
                </Items>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    padding: 2rem 1.5rem;
    width: 374px;
    height: 100%;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
`;

const UserContainer = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const UserImg = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    background: #fcf6f9;
    border: 2px solid #FFFFFF;
    padding: .2rem;
    box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
`;

const TextDiv = styled.div`

`;

const Name = styled.h2`
    color: rgba(34, 34, 96, 1);
`;

const Money = styled.p`
    color: rgba(34, 34, 96, .6);
`;

const MenuItems = styled.ul`
    flex: 1;
    display: flex;
    flex-direction: column;

`;

const Items = styled.li`
    display: grid;
    grid-template-columns: 40px auto;
    align-items: center;
    margin: .6rem 0;
    font-weight: 500;
    cursor: pointer;
    transition: all .4s ease-in-out;
`;

export default Navigation