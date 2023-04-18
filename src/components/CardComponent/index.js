import PropTypes from 'prop-types';
import React, {memo} from 'react';

import * as S from './styles';

export const Card = ({
  title,
  fontSize,
  border,
  bgColor,
  borderRadius,
  width,
  height,
}) => {
  return (
    <S.Card
      border={border}
      backgroundColor={bgColor}
      borderRadius={borderRadius}
      width={width}
      height={height}>
      <S.ContentText size={fontSize}>{title}</S.ContentText>
    </S.Card>
  );
};
