import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../src/screens/Home/Home';
import Hired from '../src/screens/Hired/Hired';
import Notification from '../src/screens/Notification/Notification';
import SignUp from '../src/screens/SignUp/SIgnUp';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,

          height: 90,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarOptions: {showIcon: true},
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={
                  focused
                    ? require('../images/car_1.png')
                    : require('../images/car_2.png')
                }
                style={{
                  width: 40,
                  height: 40,
                }}
              />
              <Text style={{fontSize: 12}}>Alugar agora</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Hired"
        component={Hired}
        options={{
          tabBarOptions: {showIcon: true},
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={
                  focused
                    ? require('../images/contratados_1.png')
                    : require('../images/contratados_2.png')
                }
                style={{
                  width: 40,
                  height: 40,
                }}
              />
              <Text style={{fontSize: 12}}>Contratados</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarOptions: {showIcon: true},
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={
                  focused
                    ? require('../images/notify_1.png')
                    : require('../images/notify_2.png')
                }
                style={{
                  width: 40,
                  height: 40,
                }}
              />
              <Text style={{fontSize: 12}}>Notificações</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="SignUp"
        component={SignUp}
        options={{
          tabBarOptions: {showIcon: true},
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={
                  focused
                    ? require('../images/sem_cadastro.png')
                    : require('../images/sem_cadastro.png')
                }
                style={{
                  width: 40,
                  height: 40,
                }}
              />
              <Text style={{fontSize: 12}}>Cadastre-se</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
