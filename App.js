import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import { Tesla } from './pages/Tesla';
import { Navbar } from './pages/Navbar';
import { Solar } from './pages/Solar';

export default function App() {

  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

 function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Cars" component={Home} />
      <Tab.Screen name="Solars" component={Navbar} />
    </Tab.Navigator>
  );
}

return (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
        },
        headerTransparent: true,
        headerTitle: () => (
          <Image style={styles.headerImage} source={require('./pages/teslaback.png')}></Image>
        ),
      }}>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Tesla} />
      <Stack.Screen name="Tesla Home Page" component={MyTabs} />
    </Stack.Navigator>
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerImage: {
    marginRight: 480,
    height: 75,
    resizeMode: 'contain',
  },
});