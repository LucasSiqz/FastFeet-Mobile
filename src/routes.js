import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import SignIn from './pages/SignIn';

import Orders from './pages/Orders';
import OrderDetail from './pages/OrderDetail';
import ConfirmDelivery from './pages/ConfirmDelivery';

import InformProblem from './pages/InformProblem';
import ShowProblems from './pages/ShowProblems';

import Profile from './pages/Profile';

Icon.loadFont();

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function NewStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      initialRouteName="Orders"
      screenOptions={{
        headerTransparent: true,
        headerTintColor: '#FFF',
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
      }}>
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{
          title: null,
        }}
      />
      <Stack.Screen
        name="OrderDetail"
        component={OrderDetail}
        options={{
          title: 'Detalhes da encomenda',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Orders');
              }}>
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="InformProblem"
        component={InformProblem}
        options={{
          title: 'Informar problema',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('OrderDetail');
              }}>
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ShowProblems"
        component={ShowProblems}
        options={{
          title: 'Visualizar problemas',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('OrderDetail');
              }}>
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{
          title: 'Confirmar entrega',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('OrderDetail');
              }}>
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999999',
        style: {
          backgroundColor: '#fff',
        },
        keyboardHidesTabBar: true,
      }}>
      <Tabs.Screen
        name="New"
        component={NewStack}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color }) => (
            <Icon name="view-headline" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" size={20} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
