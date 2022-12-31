import React from "react";
import * as S from "./style";
import Balloon from "../../../assets/pictures/balloon.png"
import Montains from "../../../assets/pictures/montains.png"
import Beach from "../../../assets/pictures/beach.png"

export default function Main(){
    return(
        <S.Main>
            <S.Background>
            <S.Search>
                <S.TextSearch>Para qual estado você deseja ir ?</S.TextSearch>
                <S.InputSearch placeholder="Pesquisar" class="input" type="text"/>
                <S.ScheduleSearch>BUSCAR</S.ScheduleSearch>
            </S.Search>
            </S.Background>
            <S.ContainerTrip>
                <S.FigureTrip>
                    <S.ImgTrip src={Balloon} alt="2 pessoas"/>
                </S.FigureTrip>
            <S.ContentTrip>
                    <S.ContentTitle>
                        <S.Stripe></S.Stripe>
                        <S.Phrase1Trip>VIAGENS NACIONAIS</S.Phrase1Trip>
                    </S.ContentTitle>
                    <S.Phrase2Trip>O clima perfeito, no lugar perfeito</S.Phrase2Trip>
                    <S.Phrase3Trip>Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.</S.Phrase3Trip>
                    <S.ScheduleTrip>AGENDAR</S.ScheduleTrip>
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
                    <S.ScheduleTrip2>AGENDAR</S.ScheduleTrip2>
                </S.ContentTrip2>
                <S.FigureTrip2>
                    <S.ImgTrip src={Montains} alt="2 pessoas"/>
                </S.FigureTrip2>
            </S.ContainerTrip2>
            <S.ContainerTrip3>
                <S.FigureTrip3>
                    <S.ImgTrip src={Beach} alt="2 pessoas"/>
                </S.FigureTrip3>
                <S.ContentTrip3>
                    <S.ContentTitle3>
                        <S.Stripe3></S.Stripe3>
                        <S.Phrase1Trip3>VIAGENS NACIONAIS</S.Phrase1Trip3>
                </S.ContentTitle3>
                    <S.Phrase2Trip3>Algumas experiências são inexplicáveis</S.Phrase2Trip3>
                    <S.Phrase3Trip3>Conheça as fontes termais de <b>Caldas Novas, Goiás</b>. Águas quentes, num clima sereno, relaxante e natural.</S.Phrase3Trip3>
                    <S.ScheduleTrip3>AGENDAR</S.ScheduleTrip3>
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
        </S.Main>
    )
}