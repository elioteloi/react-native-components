import {Text, View, StyleSheet} from 'react-native';

import {RoundedButton} from '../../components/ButtonComponent';
import {Container} from '../../components/wrapperComponents/wrapperComponent';
import {ContentText} from '../../components/TextComponent/styles';
import {RoundedInput} from '../../components/InputComponent/style';
import {colors} from '../../styles';
import {CustomImage} from '../../components/ImagesComponent/image';
import {Card} from '../../components/CardComponent/styles';
function HomeScreen() {
  return (
    <Container>
      <ContentText>Aluguel de veículos rápido, fácil e digital</ContentText>
      <CustomImage source={require('../../../images/carro_leevo.png')} />
      <Card
        title="hello"
        width="314px"
        height="128px"
        borderRadius="8px"
        bgColor={colors.Orange.Darkest}
      />
      <RoundedButton
        bgColor={colors.Sky.Light}
        title="Começar agora"
        width="327px"
        borderRadius="8px"
      />
    </Container>
  );
}

export default HomeScreen;
