import styled from 'styled-components/native';
import {colors} from '../../styles';

export const RoundedTouchableOpacity = styled.TouchableOpacity`
  height: 48px;
  border-radius: ${props => props.borderRadius || '48px'};
  width: ${props => props.width || '327px'};
  justify-content: center;
  align-items: center;
  color: black;
  background-color: ${props => props.bgColor || '#4EFF9F'};
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  color: ${colors.Ink.Dark};
  font-size: ${props => props.size || '16px'};
`;
