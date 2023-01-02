import React from "react";
import * as S from "./style";
import Balloon from "../../../assets/pictures/balloon.png"
import Montains from "../../../assets/pictures/montains.png"
import Beach from "../../../assets/pictures/beach.png"
import XP1 from "../../../assets/pictures/xp1.png"
import XP2 from "../../../assets/pictures/xp2.png"
import XP3 from "../../../assets/pictures/xp3.png"
import XP4 from "../../../assets/pictures/xp4.png"
import XP5 from "../../../assets/pictures/xp5.png"
import XP6 from "../../../assets/pictures/xp6.png"
import Best from "../../../assets/pictures/best.svg"
import Cities from "../../../assets/pictures/cities.svg"
import Points from "../../../assets/pictures/points.svg"
import Restaurants from "../../../assets/pictures/restaurants.svg"


export default function Main(){
    return(
        <S.Main>
            <S.Background>
            <S.Search>
                <S.TextSearch>Para qual estado você deseja ir ?</S.TextSearch>
                <S.InputSearch placeholder="Pesquisar" class="input" type="text"/>
                <S.BtSearch>BUSCAR</S.BtSearch>
            </S.Search>
            </S.Background>
            <S.ContainerTrip>
                <S.FigureTrip>
                    <S.ImgTrip src={Balloon} alt="Balões"/>
                </S.FigureTrip>
            <S.ContentTrip>
                    <S.ContentTitle>
                        <S.Stripe></S.Stripe>
                        <S.Phrase1Trip>VIAGENS NACIONAIS</S.Phrase1Trip>
                    </S.ContentTitle>
                    <S.Phrase2Trip>O clima perfeito, no lugar perfeito</S.Phrase2Trip>
                    <S.Phrase3Trip>Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.</S.Phrase3Trip>
                    <S.BtTrip>AGENDAR</S.BtTrip>
            </S.ContentTrip>
            </S.ContainerTrip>
            <S.ContainerTrip2>
                <S.ContentTrip2>
                    <S.ContentTitle2>
                        <S.Stripe2></S.Stripe2>
                        <S.Phrase1Trip2>VIAGENS NACIONAIS</S.Phrase1Trip2>
                    </S.ContentTitle2>
                    <S.Phrase2Trip2>Curta uma nova vibe entre amigos</S.Phrase2Trip2>
                    <S.Phrase3Trip2>Rachando a conta ou rachando o bico, a melhor hora para curtir é entre amgiso, conheça nossos <b>Planos Multi</b>.</S.Phrase3Trip2>
                    <S.BtTrip2>AGENDAR</S.BtTrip2>
                </S.ContentTrip2>
                <S.FigureTrip2>
                    <S.ImgTrip src={Montains} alt="Montanhas"/>
                </S.FigureTrip2>
            </S.ContainerTrip2>
            <S.ContainerTrip3>
                <S.FigureTrip3>
                    <S.ImgTrip src={Beach} alt="Praia"/>
                </S.FigureTrip3>
                <S.ContentTrip3>
                    <S.ContentTitle3>
                        <S.Stripe3></S.Stripe3>
                        <S.Phrase1Trip3>VIAGENS NACIONAIS</S.Phrase1Trip3>
                </S.ContentTitle3>
                    <S.Phrase2Trip3>Algumas experiências são inexplicáveis</S.Phrase2Trip3>
                    <S.Phrase3Trip3>Conheça as fontes termais de <b>Caldas Novas, Goiás</b>. Águas quentes, num clima sereno, relaxante e natural.</S.Phrase3Trip3>
                    <S.BtTrip3>AGENDAR</S.BtTrip3>
                </S.ContentTrip3>
            </S.ContainerTrip3>
            <S.Attractions>
                <S.RJ>
                    <S.BtLocation>Rio de Janeiro</S.BtLocation>
                </S.RJ>
                <S.RO>
                    <S.BtLocation>Rio das Ostras</S.BtLocation>
                </S.RO>
                <S.CN>
                    <S.BtLocation>Caldas Novas</S.BtLocation>
                </S.CN>
                <S.AM>
                    <S.BtLocation>Amazônia</S.BtLocation>
                </S.AM>
            </S.Attractions>
            <S.XP>
                <S.XPPhrase>use a hastag #brasilisverigudi</S.XPPhrase>
                <S.XPPhrase1>Nosso mural de Experiências</S.XPPhrase1>
                <S.XPAll>
                    <S.XPImg1>
                        <S.ImgXP src={XP1} alt="Mural de Experiências"/>
                        <S.ImgXP src={XP2} alt="Mural de Experiências"/>
                        <S.ImgXP src={XP3} alt="Mural de Experiências"/>
                    </S.XPImg1>
                    <S.XPImg2>
                        <S.ImgXP src={XP4} alt="Mural de Experiências"/>
                        <S.ImgXP src={XP5} alt="Mural de Experiências"/>
                        <S.ImgXP src={XP6} alt="Mural de Experiências"/>
                    </S.XPImg2>
                </S.XPAll>
            </S.XP>
            <S.ContainerOptions>
                <S.Best>
                    <img src={Best} alt="O melhor do Brasil"/>
                    <S.BestText>O melhor do Brasil</S.BestText>
                </S.Best>
                <S.Cities>
                    <img src={Cities} alt="Cidades mais frequentadas"/>
                    <S.CitiesText>Cidades mais frequentadas</S.CitiesText>
                </S.Cities>
                <S.Points>
                    <img src={Points} alt="Pontos Turísticos"/>
                    <S.PointsText>Pontos Turísticos</S.PointsText>
                </S.Points>
                <S.Restaurant>
                    <img src={Restaurants} alt="Restaurantes"/>
                    <S.RestaurantText>Restaurantes</S.RestaurantText>
                </S.Restaurant>
            </S.ContainerOptions>
            <S.ContainerContact>
                <S.ContentContact>
                    <S.ContactUs>Fale Conosco</S.ContactUs>
                    <S.InputEmail placeholder="Diga o seu melhor email" type="text" class="input"/>
                    <S.InputAbout placeholder="Assunto" type="text"/>
                    <S.InputMsg placeholder="Escreva sua mensagem" type="text" class="input"/>
                    <S.BtSend>Enviar</S.BtSend>
                </S.ContentContact>
            </S.ContainerContact>
        </S.Main>
    )
}