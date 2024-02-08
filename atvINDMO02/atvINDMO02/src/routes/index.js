import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import StackRoutes from './stackRoutes';
import Contato from '../pages/Contato';
import Curso from '../pages/Curso';


const Tab = createBottomTabNavigator();

export default function Routes() {
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: '#E9E9E9',
        }
      }}
    >

      <Tab.Screen
        name='Inicio'
        component={StackRoutes}

        options={{
          tabBarLabel: 'Inicio',
          headerTintColor: '#ffffff',

          headerStyle: {
            backgroundColor: '#ff1493',
          },
          headerShown: false,

          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name='home' color={color} size={size}></FontAwesome5>

          }
        }}
      />

      <Tab.Screen
        name='Curso'
        component={Curso}

        options={{
          title: 'Curso',
          headerTintColor: '#ffffff',

          headerStyle: {
            backgroundColor: '#ff1493',
          },
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name='briefcase' color={color} size={size}></FontAwesome5>
          }
        }}
      />

      <Tab.Screen
        name='Contato'
        component={Contato}
        options={{
          title: 'Contato',
          headerTintColor: '#ffffff',

          headerStyle: {
            backgroundColor: '#ff1493',
          },
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name='address-card' color={color} size={size}></FontAwesome5>
          },
        }}
      />
    </Tab.Navigator>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
