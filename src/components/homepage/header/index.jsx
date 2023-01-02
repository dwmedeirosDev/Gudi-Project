import React from "react";
import * as S from "./style";
import Logo1 from "../../../assets/logo/logo1.png"
import Logo2 from "../../../assets/logo/logo2.png";
import Menu from "../../../assets/menu/hamburguer-menu.png";

export default function Header(){
    return(
        <S.Header>
            <S.Figure_Logo>
            <S.Logo1 src={Logo1} alt="logo1"/>
            <S.Logo2 src={Logo2} alt="Logo2"/>
            </S.Figure_Logo>
            <S.Navbar>
            <S.Main_Menu>
                <S.Menu_Li>Sobre</S.Menu_Li>
                <S.Menu_Li>Benefícios</S.Menu_Li>
                <S.Menu_Li>Contato</S.Menu_Li>
            </S.Main_Menu>
                <S.Schedule1>AGENDAR</S.Schedule1>          
            </S.Navbar>
            <S.Menu_Hamburguer src={Menu} alt="Menu Hamburguer"/>
        </S.Header>
    )
}