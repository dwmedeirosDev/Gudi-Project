import React from "react";
import * as S from "./style";

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
        </S.Main>
    )
}