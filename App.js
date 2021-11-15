// ALUNO: JOSE GABRIEL DE BARROS MATSUNAMI
// CURSO: TADS 2019(UEPA)


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';


const Header = styled.View`
  flex-direction:row;
  background-color:#000;
  height:550px;
  width:400px;
  flex-wrap:wrap;
  justify-content:center;
`;

const Texto = styled.Text`
  font-size: 25;
  ;
`;

const Pagina = styled.View`
  background-color:000;
  align-items:center;  
  justify-content:center;
  flex:1;
`;

const Quadrado = styled.View`
  width:180px
  height:180px;
  justify-content:center;
  align-items:center;
`;

const Retangulo = styled.View`
  width:420px
  height:200px;
  justify-content:center;
  align-items:center;
`;

function App() {
  return (
   
    <Pagina>
         <Texto>GALERIA DE IMAGENS DO GABRIEL MATSUNAMI</Texto>
         <Texto>TEMA: CHURRASCO DA TURMA COM O FADUL</Texto>

      <Header>

        <Quadrado cor="#FFFF">
          <Image source = {require('./scr/imagens/1.jpg')} 
            style={{width: 180, height: 180, backgroundColor: '#000'}}/>
        </Quadrado>


        <Quadrado cor="#FFFF">
          <Image source = {require('./scr/imagens/2.jpg')} 
            style={{width: 180, height: 180, backgroundColor: '#000'}}/>
        </Quadrado>


        <Quadrado cor="#FFFF">
          <Image source = {require('./scr/imagens/3.jpg')} 
            style={{width: 180, height: 180, backgroundColor: '#000'}}/>
        </Quadrado>


        <Quadrado cor="#FFFF">
          <Image source = {require('./scr/imagens/4.jpg')} 
            style={{width: 180, height: 180, backgroundColor: '#000'}}/>
        </Quadrado>


        <Retangulo>
          <Image source = {{uri:'https://cdn.minhareceita.com.br/2021/04/churrasco-gourmet-dicas-para-a-carne-perfeita.jpg'}} 
            style={{width: 360, height: 180, backgroundColor: '#000'}}/>
        </Retangulo>

      </Header>

    </Pagina>
  );

}

export default App;