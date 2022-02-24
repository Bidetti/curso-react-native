import React from 'react';
import {Text} from 'react-native';
import Style from './style';

/* Meu exercicio
export default props =>  {
    const result = props.max - props.min + 1
    const numberFind = Math.random() * result
    return (
        <Text style={Style.txtM}>O número encontrado entre 1 e 50 foi {numberFind}</Text>
    )
}
*/

// Resultado oficial
export default ({min, max}) => {
  const delta = max - min + 1;
  let aleatorio = parseInt(Math.random() * delta) + min;
  setTimeout(() => aleatorio = parseInt(Math.random() * delta) + min, 2000)
  return <Text style={Style.txtM}>O valor aleatório é {aleatorio}</Text>;
};
