import {Text, View, StyleSheet} from 'react-native';

import {RoundedButton} from '../../components/ButtonComponent';
import {Container} from '../../components/wrapperComponents/wrapperComponent';
import {ContentText} from '../../components/TextComponent/styles';
import {RoundedInput} from '../../components/InputComponent/styles';
import {colors} from '../../styles';

function HomeScreen() {
  return (
    <Container>
      <ContentText>Leevo</ContentText>
      <RoundedInput
        borderColor={colors.Red.Darkest}
        placeholder="Placeholder"
      />
      <RoundedButton title="click" />
    </Container>
  );
}

export default HomeScreen;
