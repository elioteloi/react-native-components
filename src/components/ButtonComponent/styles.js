import styled from 'styled-components/native';
import {colors} from '../../styles';

export const RoundedTouchableOpacity = styled.TouchableOpacity`
  height: 48px;
  border-radius: ${props => props.borderRadius || '48px'};
  width: ${props => props.width || '327px'};
  justify-content: center;
  align-items: center;
  color: black;
  border: 1px ${colors.Sky.Base}
  background-color: ${props => props.backgroundColor || '#4EFF9F'};
  margin-top: 16px;
  padding: 10px;
`;

export const ContentText = styled.Text`
  color: ${colors.Ink.Dark};
  font-size: ${props => props.size || '14px'};
`;
