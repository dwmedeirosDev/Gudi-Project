import React from "react";
import * as S from "./style";
import Logo2 from "../../../assets/logo/logo2.png";

export default function Footer(){
    return(
        <S.ContainerContact>
            <S.Contact>
                <S.ImgContact src={Logo2}/>
                <p><S.ContactText href="#">Sobre nós</S.ContactText></p>
                <p><S.ContactText href="#">Mural de memórias</S.ContactText></p>
                <p><S.ContactText href="#">Eventos Gudi</S.ContactText></p>
                <p><S.ContactText href="#">Nosso blog</S.ContactText></p>
            </S.Contact>
            <S.Contact>
                <h3>Contato </h3>
                <p><S.ContactText href="#">Sobre nós</S.ContactText></p>
                <p><S.ContactText href="#">Mural de memórias</S.ContactText></p>
                <p><S.ContactText href="#">Eventos Gudi</S.ContactText></p>
                <p><S.ContactText href="#">Nosso blog</S.ContactText></p>
            </S.Contact>
            <S.Contact>
                <h3>Benefícios</h3>
                <p><S.ContactText href="#">Conta digital Gudi</S.ContactText></p>
                <p><S.ContactText href="#">Viaje com Milhas</S.ContactText></p>
                <p><S.ContactText href="#">C6 Átomos</S.ContactText></p>
                <p><S.ContactText href="#">ID Jovem</S.ContactText></p>
            </S.Contact>
            <S.Contact>
                <h3>Lugares</h3>
                <p><S.ContactText href="#">O melhor do Brasil</S.ContactText></p>
                <p><S.ContactText href="#">Cidades frequentes</S.ContactText></p>
                <p><S.ContactText href="#">Pontos turísticos</S.ContactText></p>
                <p><S.ContactText href="#">Restaurantes</S.ContactText></p>
            </S.Contact>
            <S.Contact>
                <h3>Curiosidades</h3>
                <p><S.ContactText href="#">Cultura e tradições</S.ContactText></p>
                <p><S.ContactText href="#">Pratos típicos</S.ContactText></p>
                <p><S.ContactText href="#">Mitos brasileiros</S.ContactText></p>
                <p><S.ContactText href="#">Carnaval</S.ContactText></p>
            </S.Contact>
        </S.ContainerContact>
    )
}