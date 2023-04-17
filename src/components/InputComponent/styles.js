import styled from 'styled-components';
import {colors} from '../../styles';

export const RoundedInput = styled.TextInput.attrs({
  type: 'submit',
})`
  background-color: #f2f4f5;
  color: black;
  margin-bottom: 0;
  text-transform: uppercase;
  width: 327px;
  border-radius: 5px;
  height: 36px;
  border: ${props => props.borderColor || colors.Red.Darkest};
`;
