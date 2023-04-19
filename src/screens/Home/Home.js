import {Text, View, StyleSheet} from 'react-native';

import {RoundedButton} from '../../components/ButtonComponent';
import {Container} from '../../components/wrapperComponents/wrapperComponent';
import {ContentText} from '../../components/TextComponent/styles';
import {RoundedInput} from '../../components/InputComponent/style';
import {colors} from '../../styles';
import {CustomImage} from '../../components/ImagesComponent/image';
import {Card} from '../../components/CardComponent/styles';

const App = () => {
  return (
    <Container>
      <ContentText>Aluguel de veículos rápido, fácil e digital</ContentText>
      {/* <CustomImage source={require('../../../images/carro_leevo.png')} /> */}

      <RoundedButton
        bgColor={colors.Sky.Light}
        title="Começar agora"
        width="327px"
        height="128px"
        borderRadius="8px"
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;
