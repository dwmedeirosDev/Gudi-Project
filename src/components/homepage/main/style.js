import styled from "styled-components";
import BackgroundCar from "../../../assets/background/background-car.png";

export const Main = styled.main`
`

export const Background = styled.div`
    background-image: url(${BackgroundCar});
    background-size: cover;
    
    height: 70vh;
    display: flex;
    align-items: center;
    @media (max-width: 850px){  
        justify-content: center;
    }
`

export const Search = styled.div`
    display: flex;
    flex-direction: column;
    height: 45vh;
    margin: 5% 0 0 4%;
    
    @media (max-width: 850px){  
        justify-content: center;
        margin: initial;
        align-items: center
    }
`

export const TextSearch = styled.h1`
    font-family: ArgentumRegular;
    color: #005BD5;
    width: 500px;
    font-size: 3.2rem;
    margin-bottom: 3%;

    @media (max-width: 850px){
        text-align: center;
    }

    @media (max-width: 520px){
        width: 100%;
    }
`

export const InputSearch = styled.input`
    font-family: ArgentumRegular;
    border-radius: 40px;
    border: none;
    width: 300px;
    padding: 7px 20px;
    margin-bottom: 4%;
    
    &::placeholder{
        color: #A9A9A9;
        font-size: 0,8rem;
    }
`

export const ScheduleSearch = styled.button`
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
`