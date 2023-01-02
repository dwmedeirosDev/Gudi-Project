import styled from "styled-components";

export const ContainerContact = styled.section`
    display: flex;
    justify-content: space-evenly;
    margin: 30px 0 30px 0;

    @media (max-width: 970px){
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: ArgentumRegular;
    width: 220px;
    height: 180px;
    justify-content: space-around;
    color: #005BD5;
    margin: 10px;
`

export const ImgContact = styled.img`
    width: 200px;
`

export const ContactText = styled.a`
    list-style: none;
    text-decoration: none;
    color: #005BD5;

    &:hover{
        text-decoration: underline;
    }
`