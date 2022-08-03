import React, {useEffect, useState} from 'react';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';
import {Images} from './src/assets/images';
import SplashScreen from './src/screens/SplashScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: 'lightgrey',
        tabBarStyle: {
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          backgroundColor: '#1572A1',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabelStyle: {fontSize: 15},
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  style={{
                    height: focused ? 25 : 20,
                    width: focused ? 25 : 20,
                    tintColor: !focused && '#fff',
                  }}
                  source={Images.home}
                />
              </View>
            );
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: {fontSize: 15},
          tabBarIcon: ({focused}) => {
            return (
              <View>
                <Image
                  style={{
                    height: focused ? 25 : 20,
                    width: focused ? 25 : 20,
                    tintColor: !focused && '#fff',
                  }}
                  source={Images.search}
                />
              </View>
            );
          },
        }}
        name="Search"
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {showSplashScreen ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : null}
        <Stack.Screen name="Application" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
