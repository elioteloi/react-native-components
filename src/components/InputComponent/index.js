import React from 'react';
import {colors} from '../../styles';
import * as S from './styles';
import {TextInput} from 'react-native-gesture-handler';
function Button({borderColor, bgColor}) {
  return (
    <S.RoundedInput
      border={borderColor}
      backgroundColor={bgColor}></S.RoundedInput>
  );
}

export default Button;
