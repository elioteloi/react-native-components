import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
} from 'react-native';
import {colors} from '../../styles';
import {RoundedButton} from '../../components/ButtonComponent';
import {Container} from '../../components/wrapperComponents/wrapperComponent';
import data from '../../data.json';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filterCriteria, setFilterCriteria] = useState('all');
  const filteredData =
    filterCriteria === 'all'
      ? data
      : data.filter(item => item.vehicleCategory === filterCriteria);

  return (
    <Container>
      <View
        style={{position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1}}>
        <Container>
          <RoundedButton
            onPress={() => setModalVisible(!modalVisible)}
            bgColor={colors.Sky.Light}
            title="Open modal"
            width="327px"
            height="128px"
            borderRadius="8px"
          />
        </Container>
      </View>

      {filteredData.map(item => (
        <View key={item.vehicleId}>
          <Text>{item.vehicleModel}</Text>
        </View>
      ))}

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Container>
                <View style={styles.container}>
                  <View style={styles.view1}>
                    <RoundedButton
                      onPress={() => setFilterCriteria('all')}
                      backgroundColor={colors.Sky.Lightest}
                      title="All"
                      width="100%"
                      height="128px"
                      borderRadius="48px"
                    />
                    <RoundedButton
                      onPress={() => setFilterCriteria('Hatch Econômico')}
                      backgroundColor={colors.Sky.Lightest}
                      title="Hatch Econômico"
                      width="100%"
                      height="128px"
                      borderRadius="48px"
                    />

                    <RoundedButton
                      onPress={() => setFilterCriteria('Hatch Intermediário')}
                      backgroundColor={colors.Sky.Lightest}
                      title="Hatch Intermediário"
                      width="100%"
                      height="128px"
                      borderRadius="48px"
                    />
                  </View>

                  <View style={styles.view2}>
                    <RoundedButton
                      onPress={() => setFilterCriteria('Sedan')}
                      backgroundColor={colors.Sky.Lightest}
                      title="Sedan"
                      width="100%"
                      height="128px"
                      borderRadius="48px"
                    />

                    <RoundedButton
                      onPress={() => setFilterCriteria('SUV Compacto')}
                      backgroundColor={colors.Sky.Lightest}
                      title="SUV"
                      width="100%"
                      height="128px"
                      borderRadius="48px"
                      margin="16"
                    />
                  </View>
                </View>
              </Container>
              <RoundedButton
                onPress={() => setModalVisible(!modalVisible)}
                bgColor={colors.Sky.Light}
                title="Close modal"
                width="327px"
                height="128px"
                borderRadius="8px"
              />
            </View>
          </View>
        </Modal>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 35,
    height: 500,
    width: '100%',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonOpen: {
    backgroundColor: 'black',
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  view1: {
    flex: 1,
  },
  view2: {
    flex: 1,
  },
});

export default App;
