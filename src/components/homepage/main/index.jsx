import React from "react";
import * as S from "./style";
import Balloon from "../../../assets/pictures/balloon.png"
import Montains from "../../../assets/pictures/montains.png"

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
                    <S.Phrase3Trip>Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço</S.Phrase3Trip>
                    <S.ScheduleTrip>AGENDAR</S.ScheduleTrip>
            </S.ContentTrip>
            </S.ContainerTrip>

            <S.ContainerTrip2>
                <S.ContentTrip2>
                    <S.ContentTitle2>
                        <S.Stripe2></S.Stripe2>
                        <S.Phrase1Trip2>VIAGENS NACIONAIS</S.Phrase1Trip2>
                    </S.ContentTitle2>
                    <S.Phrase2Trip2>O clima perfeito, no lugar perfeito</S.Phrase2Trip2>
                    <S.Phrase3Trip2>Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço</S.Phrase3Trip2>
                    <S.ScheduleTrip2>AGENDAR</S.ScheduleTrip2>
                </S.ContentTrip2>
                <S.FigureTrip2>
                    <S.ImgTrip src={Montains} alt="2 pessoas"/>
                </S.FigureTrip2>
            </S.ContainerTrip2>

        </S.Main>
    )
}