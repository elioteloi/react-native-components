import styled from 'styled-components/native';
import {colors} from '../../styles';

export const Card = styled.View`
  border-radius: ${props => props.borderRadius || '48px'};
  height: ${props => props.height || '128px'};
  width: ${props => props.width || '314px'};
  justify-content: center;
  align-items: center;
  color: black;
  background-color: ${props => props.bgColor || colors.Green.Base};
  margin-top: 16px;
`;

export const ContentText = styled.Text`
  color: ${colors.Ink.Dark};
  font-size: ${props => props.size || '16px'};
`;
