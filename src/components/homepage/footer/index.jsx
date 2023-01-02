import React from "react";
import * as S from "./style";
import Logo2 from "../../../assets/logo/logo2.png";

export default function Footer(){
    return(
        <S.Container_Contact>
            <S.Contact>
                <S.ImgContact src={Logo2}/>
                <p><S.Contact_Text href="#">Sobre nós</S.Contact_Text></p>
                <p><S.Contact_Text href="#">Mural de memórias</S.Contact_Text></p>
                <p><S.Contact_Text href="#">Eventos Gudi</S.Contact_Text></p>
                <p><S.Contact_Text href="#">Nosso blog</S.Contact_Text></p>
            </S.Contact>
            <S.Contact>
                <h3>Contato </h3>
                <p><S.Contact_Text href="#">Sobre nós</S.Contact_Text></p>
                <p><S.Contact_Text href="#">Mural de memórias</S.Contact_Text></p>
                <p><S.Contact_Text href="#">Eventos Gudi</S.Contact_Text></p>
                <p><S.Contact_Text href="#">Nosso blog</S.Contact_Text></p>
            </S.Contact>
            <S.Contact>
                <h3>Benefícios</h3>
                <p><S.Contact_Text href="#">Conta digital Gudi</S.Contact_Text></p>
                <p><S.Contact_Text href="#">Viaje com Milhas</S.Contact_Text></p>
                <p><S.Contact_Text href="#">C6 Átomos</S.Contact_Text></p>
                <p><S.Contact_Text href="#">ID Jovem</S.Contact_Text></p>
            </S.Contact>
            <S.Contact>
                <h3>Lugares</h3>
                <p><S.Contact_Text href="#">O melhor do Brasil</S.Contact_Text></p>
                <p><S.Contact_Text href="#">Cidades frequentes</S.Contact_Text></p>
                <p><S.Contact_Text href="#">Pontos turísticos</S.Contact_Text></p>
                <p><S.Contact_Text href="#">Restaurantes</S.Contact_Text></p>
            </S.Contact>
            <S.Contact>
                <h3>Curiosidades</h3>
                <p><S.Contact_Text href="#">Cultura e tradições</S.Contact_Text></p>
                <p><S.Contact_Text href="#">Pratos típicos</S.Contact_Text></p>
                <p><S.Contact_Text href="#">Mitos brasileiros</S.Contact_Text></p>
                <p><S.Contact_Text href="#">Carnaval</S.Contact_Text></p>
            </S.Contact>
        </S.Container_Contact>
    )
}