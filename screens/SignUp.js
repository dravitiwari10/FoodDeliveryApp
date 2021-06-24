import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,Image

} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function SignUpScreen({navigation}) {
    return (
      <ImageBackground source={{
        uri: 'https://icdn.digitaltrends.com/image/digitaltrends/gopuff-press-416x278.jpg',
      }} style={{height: 700}}>
        <View style={styles2.container}>
            <Image/>
          <View style={styles2.header1}>
            <Text style={styles.welcome}>LOGO</Text>
          </View>
          <View style={styles2.footer1}>
            <View style={{marginLeft: 20}}>
              <Text>Full name</Text>
              <View style={{flexDirection:'row'}}>
              <FontAwesome
                name="user"
                size={20}
                color="green"
                backgroundColor="green"
              />
              <TextInput style={styles.input} placeholder="enter your name" />
              </View>
              <Text> contact number</Text>
              <View style={{flexDirection:'row'}}>
              <FontAwesome
                name="phone"
                size={20}
                color="green"
                backgroundColor="green"
              />
              <TextInput style={styles.input} placeholder="your contact number" />
              </View>
              <Text>Email Address</Text>
              <View style={{flexDirection:'row'}}>
              <FontAwesome
                name="envelope"
                size={20}
                color="green"
                backgroundColor="green"
              />
              <TextInput
                style={styles.input}
                placeholder="xyz@gmail.com"
              />
              </View>
              <Text>password</Text>
              <View style={{flexDirection:'row'}}>
              <FontAwesome
                name="lock"
                size={20}
                color="green"
                backgroundColor="green"
              />
              <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="password"
              />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('PROFILE')}
                style={styles.userBtn}>
                <Text style={styles.btnText}>SignUp</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text> you have a account ? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text style={{color: '#f9b34c'}}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
       </ImageBackground>
    );
  }
  
  const styles2 = StyleSheet.create({
    container: {
      flex: 1,
    },
    header1: {
      flex: 1,
    },
    footer1: {
      flex: 3,
      backgroundColor: 'white',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      paddingTop: 20,
    },
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
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
      marginTop: 20,
      marginLeft: 10,
    },
    btnContainer: {},
    btnText: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 18,
    },
  });

  export default SignUpScreen;