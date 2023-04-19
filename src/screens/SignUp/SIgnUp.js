import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import {colors} from '../../styles';
import {RoundedButton} from '../../components/ButtonComponent';
import {Container} from '../../components/wrapperComponents/wrapperComponent';
import data from '../../data.json';

const FilterExample = () => {
  const [filterCriteria, setFilterCriteria] = useState('all');
  const filteredData =
    filterCriteria === 'all'
      ? data
      : data.filter(item => item.vehicleCategory === filterCriteria);

  return (
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
      <Container>
        {filteredData.map(item => (
          <View key={item.vehicleId}>
            <Text>{item.vehicleModel}</Text>
          </View>
        ))}
      </Container>
    </Container>
  );
};

export default FilterExample;
