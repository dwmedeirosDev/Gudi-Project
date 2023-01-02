import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`

export const Figure_Logo = styled.figure`
    display: flex;
    align-items: center;
    margin-left: 3%;
`

export const Logo1 = styled.img`
    display: none;

    @media (max-width: 468px){
       display: flex;
    }
`

export const Logo2 = styled.img`
    display: flex;

    @media (max-width: 468px){
        display: none;
    }
`

export const Navbar = styled.nav`
    display: flex;
    justify-content:space-evenly;
    margin-right: 2%;
`

export const Main_Menu = styled.ul`
    width: 30vw;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 910px){
        display: none;
    }

`

export const Menu_Li = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 2%;
    font-family: ArgentumRegular;
    color: #005BD5;
    cursor: pointer;
    transition: 0.1s all;

    &:hover{
        transform: scale(1.1);
    }

    @media (max-width: 910px){
        display: none;
    }
`

export const Schedule1 = styled.button`
    width: 120px;
    padding: 10px;
    text-align: center;
    border-radius: 30px;
    border: none;
    background-color: #005BD5;
    color: #FFFFFF;
    font-family: ArgentumRegular;
    letter-spacing: 3px;
    cursor: pointer;
    transition: 0.1s all;

    &:hover{
        transform: scale(1.1);
    }

    @media (max-width: 910px){
        display: none;
    }
`

export const Menu_Hamburguer = styled.img`
    width: 40px;
    display: none;

    @media (max-width: 910px){
        display: flex;
        margin-right: 4%;
        cursor: pointer;
        
        &:hover{
        transform: scale(1.1);
        }
    }
`