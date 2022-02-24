import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import MinMax from './components/MinMax';
import Comp, {Comp1, Comp2} from './components/Multi';
import Primeiro from './components/Primeiro';
import Desafio1 from './components/Desafio1';
import Titulo from './components/Titulo';
import Botao from './components/Botao';

export default () => (
  <View style={style.Container}>
    <Botao />
    {/*
      <Titulo
      principal="Cadastro Produto"
      secundario={'Tela de Cadastro do Produto'}
    />
    <Desafio1 min={1} max={50} />
    <MinMax min={1} max={99} />
    <Comp />
    <Comp1 />
    <Comp2 />
    <Primeiro />
    */}
  </View>
);

const style = StyleSheet.create({
  Container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
