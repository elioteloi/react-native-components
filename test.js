import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from './src/styles';
import {RoundedButton} from './src/components/ButtonComponent/index';
const SideBySideViews = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
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

export default SideBySideViews;
