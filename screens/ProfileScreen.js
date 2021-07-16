import * as React from 'react';
import {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TruckProfile from './TruckProfile';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import DetailsScreen from './DetailsScreen';

function ProfileScreen({navigation}) {
  const [userName, setUserName] = useState();
  const [name, setname] = useState();
  const [mobileNumber, setmobileNumber] = useState();
  const [Email, setEmail] = useState();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
        style={{width: 420, height: 100, flex: 1}}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://image.shutterstock.com/image-photo/young-beautiful-happy-businesswoman-sitting-260nw-165623561.jpg',
            }}
            style={{
              height: 110,
              width: 110,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 55,
              marginTop: 56,
            }}
          />
          <View style={{marginLeft: 80}}>
            <TouchableOpacity  onPress={() =>navigation.navigate('PROFILE')}>
            <FontAwesome
              name="edit"
              size={22}
              color="green"
              backgroundColor="green"
            />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View style={{flex:3,justifyContent:'center',marginLeft:30}}>
        <Text style={{fontWeight: 'bold', fontSize: 16,}}>
          First name
        </Text>
        <TextInput
          value={userName}
          onChangeText={username => setUserName(username)}
          placeholder={'Enter your first name'}
          style={{
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 20,
          }}
        />
        <Text style={{fontWeight: 'bold', fontSize: 16, }}>
          Last name
        </Text>
        <TextInput
          value={name}
          onChangeText={name => setname(name)}
          placeholder={'Enter Any value'}
          placeholder="your last name"
          style={{
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 20,
          }}
        />

        <Text style={{fontWeight: 'bold', fontSize: 16,}}>
          Contact number
        </Text>
        <TextInput
          style={{
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 20,
          }}
          value={mobileNumber}
          onChangeText={mobileNumber => setmobileNumber(mobileNumber)}
          placeholder={'Enter mobile number'}
        />
        <Text style={{fontWeight: 'bold', fontSize: 16,}}>
          Email Address
        </Text>
        <TextInput
          style={{
            width: '90%',
            backgroundColor: '#fff',
            borderRadius: 20,
          }}
          value={Email}
          onChangeText={Email => setEmail(Email)}
          placeholder="xyz@gmail.com"
        />
        <View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('MyAccountScreen', {
                paramKey1: userName,
                paramKey2: mobileNumber,
                paramKey3: name,
                paramKey4: Email,
              })
            }
            style={styles.userBtn}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="PROFILE"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({color}) => (
          <FontAwesome
            name="user-circle"
            size={22}
            color="green"
            backgroundColor="green"
          />
        ),
      }}
    />

    <Tab.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        tabBarLabel: 'Details',
        tabBarColor: '#d02860',
        tabBarIcon: ({color}) => (
          <FontAwesome
            name="info"
            size={22}
            color="green"
            backgroundColor="green"
          />
        ),
      }}
    />
    <Tab.Screen
      name="Truck"
      component={TruckProfile}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#d02860',
        tabBarIcon: ({color}) => (
          <FontAwesome
            name="globe"
            size={22}
            color="green"
            backgroundColor="green"
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1.2,
  },

  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',
    marginTop: 230,
    fontSize: 40,
  },
  input: {
    width: '88%',
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
  },
  userBtn: {
    backgroundColor: '#f9b34c',
    padding: 7,
    width: '90%',
    borderRadius: 30,
    marginTop:20
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default MainTabScreen;
