import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

export default props => {
  return (
    <>
      <Text style={style.txtG}>{props.principal}</Text>
      <Text style={style.txtS}>{props.secundario}</Text>
    </>
  );
};
