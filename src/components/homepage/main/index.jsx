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
                <S.Text_Search>Para qual estado você deseja ir ?</S.Text_Search>
                <S.Input_Search placeholder="Pesquisar" class="input" type="text"/>
                <S.Bt_Search>BUSCAR</S.Bt_Search>
            </S.Search>
            </S.Background>
            <S.Container_Trip>
                <S.Figure_Trip>
                    <S.ImgTrip src={Balloon} alt="Balões"/>
                </S.Figure_Trip>
            <S.Content_Trip>
                    <S.Content_Title>
                        <S.Stripe></S.Stripe>
                        <S.Phrase1_Trip>VIAGENS NACIONAIS</S.Phrase1_Trip>
                    </S.Content_Title>
                    <S.Phrase2_Trip>O clima perfeito, no lugar perfeito</S.Phrase2_Trip>
                    <S.Phrase3_Trip>Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.</S.Phrase3_Trip>
                    <S.Bt_Trip>AGENDAR</S.Bt_Trip>
            </S.Content_Trip>
            </S.Container_Trip>
            <S.Container_Trip2>
                <S.Content_Trip2>
                    <S.Content_Title2>
                        <S.Stripe2></S.Stripe2>
                        <S.Phrase1_Trip2>VIAGENS NACIONAIS</S.Phrase1_Trip2>
                    </S.Content_Title2>
                    <S.Phrase2_Trip2>Curta uma nova vibe entre amigos</S.Phrase2_Trip2>
                    <S.Phrase3_Trip2>Rachando a conta ou rachando o bico, a melhor hora para curtir é entre amgiso, conheça nossos <b>Planos Multi</b>.</S.Phrase3_Trip2>
                    <S.Bt_Trip2>AGENDAR</S.Bt_Trip2>
                </S.Content_Trip2>
                <S.Figure_Trip2>
                    <S.ImgTrip src={Montains} alt="Montanhas"/>
                </S.Figure_Trip2>
            </S.Container_Trip2>
            <S.Container_Trip3>
                <S.Figure_Trip3>
                    <S.ImgTrip src={Beach} alt="Praia"/>
                </S.Figure_Trip3>
                <S.Content_Trip3>
                    <S.Content_Title3>
                        <S.Stripe3></S.Stripe3>
                        <S.Phrase1_Trip3>VIAGENS NACIONAIS</S.Phrase1_Trip3>
                </S.Content_Title3>
                    <S.Phrase2_Trip3>Algumas experiências são inexplicáveis</S.Phrase2_Trip3>
                    <S.Phrase3_Trip3>Conheça as fontes termais de <b>Caldas Novas, Goiás</b>. Águas quentes, num clima sereno, relaxante e natural.</S.Phrase3_Trip3>
                    <S.Bt_Trip3>AGENDAR</S.Bt_Trip3>
                </S.Content_Trip3>
            </S.Container_Trip3>
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
                <S.XP_Phrase>use a hastag #brasilisverigudi</S.XP_Phrase>
                <S.XP_Phrase1>Nosso mural de Experiências</S.XP_Phrase1>
                <S.XP_All>
                    <S.XP_Img1>
                        <S.ImgXP src={XP1} alt="Mural de Experiências"/>
                        <S.ImgXP src={XP2} alt="Mural de Experiências"/>
                        <S.ImgXP src={XP3} alt="Mural de Experiências"/>
                    </S.XP_Img1>
                    <S.XP_Img2>
                        <S.ImgXP src={XP4} alt="Mural de Experiências"/>
                        <S.ImgXP src={XP5} alt="Mural de Experiências"/>
                        <S.ImgXP src={XP6} alt="Mural de Experiências"/>
                    </S.XP_Img2>
                </S.XP_All>
            </S.XP>
            <S.Container_Options>
                <S.Best>
                    <img src={Best} alt="O melhor do Brasil"/>
                    <S.Best_Text>O melhor do Brasil</S.Best_Text>
                </S.Best>
                <S.Cities>
                    <img src={Cities} alt="Cidades mais frequentadas"/>
                    <S.Cities_Text>Cidades mais frequentadas</S.Cities_Text>
                </S.Cities>
                <S.Points>
                    <img src={Points} alt="Pontos Turísticos"/>
                    <S.Points_Text>Pontos Turísticos</S.Points_Text>
                </S.Points>
                <S.Restaurant>
                    <img src={Restaurants} alt="Restaurantes"/>
                    <S.Restaurant_Text>Restaurantes</S.Restaurant_Text>
                </S.Restaurant>
            </S.Container_Options>
            <S.Container_Message>
                <S.Content_Message>
                    <S.ContactUs>Fale Conosco</S.ContactUs>
                    <S.InputEmail placeholder="Diga o seu melhor email" type="text" class="input"/>
                    <S.InputAbout placeholder="Assunto" type="text"/>
                    <S.InputMsg placeholder="Escreva sua mensagem" type="text" class="input"/>
                    <S.BtSend>Enviar</S.BtSend>
                </S.Content_Message>
            </S.Container_Message>
        </S.Main>
    )
}