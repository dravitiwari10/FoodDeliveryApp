import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUp';
import ProfileScreen from './screens/ProfileScreen'
import DetailsScreen from './screens/DetailsScreen'
import TruckProfile from './screens/TruckProfile'
import LoadingScreen from './screens/LoadingScreen';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerTransparent: true,headerTintColor:'white'}} />
        <Stack.Screen name="PROFILE" component={ProfileScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerTitle:'Details'}} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Truck" component={TruckProfile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
