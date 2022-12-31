import React from "react";
import * as S from "./style";
import Logo1 from "../../../assets/logo/logo1.png"
import Logo2 from "../../../assets/logo/logo2.png";
import Menu from "../../../assets/menu/hamburguer-menu.png";

export default function Header(){
    return(
        <S.Header>
            <S.FigureLogo>
            <S.Logo1 src={Logo1} alt="logo1"/>
            <S.Logo2 src={Logo2} alt="Logo2"/>
            </S.FigureLogo>
            <S.Navbar>
            <S.MainMenu>
                <S.MenuLi>Sobre</S.MenuLi>
                <S.MenuLi>Benefícios</S.MenuLi>
                <S.MenuLi>Contato</S.MenuLi>
            </S.MainMenu>
                <S.Schedule1>AGENDAR</S.Schedule1>          
            </S.Navbar>
            <S.MenuHamburguer src={Menu} alt="Menu Hamburguer"/>
        </S.Header>
    )
}