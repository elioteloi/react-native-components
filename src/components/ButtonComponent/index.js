import PropTypes from 'prop-types';
import React, {memo} from 'react';

import * as S from './styles';

export const RoundedButton = ({
  onPress,
  title,
  fontSize,
  border,
  backgroundColor,
  borderRadius,
  width,
}) => {
  return (
    <S.RoundedTouchableOpacity
      border={border}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      width={width}
      onPress={onPress}>
      <S.ContentText size={fontSize}>{title}</S.ContentText>
    </S.RoundedTouchableOpacity>
  );
};
