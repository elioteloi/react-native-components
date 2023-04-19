import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
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
      <View>
        <View style={styles.centeredView}>
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
                <Text style={styles.modalText}>content button filter</Text>
                <Container>
                  <View>
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

        <RoundedButton
          onPress={() => setModalVisible(!modalVisible)}
          bgColor={colors.Sky.Light}
          title="Open modal"
          width="327px"
          height="128px"
          borderRadius="8px"
        />

        {filteredData.map(item => (
          <View key={item.vehicleId}>
            <Text>{item.vehicleModel}</Text>
          </View>
        ))}
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
});

export default App;
