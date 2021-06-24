import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


function LoginScreen({navigation}) {
    return (
      <ImageBackground
      source={{
        uri: 'https://icdn.digitaltrends.com/image/digitaltrends/gopuff-press-416x278.jpg'}}
        style={{height: 600, width: 400}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.welcome}>LOGO</Text>
          </View>
          <View style={styles.footer}>
            <View style={{marginLeft: 20}}>
              <Text>username</Text>
              <View style={{flexDirection: 'row'}}>
                <FontAwesome name="user-o" size={22} color='green' />
                <TextInput style={styles.input} placeholder="your username" />
                <FontAwesome name="check-circle" size={22} />
              </View>
              <Text>password</Text>
              <View style={{flexDirection: 'row'}}>
                <FontAwesome name="lock" size={22} color='green' />
                <TextInput
                  style={styles.input}
                  secureTextEntry
                  placeholder="your password"
                />
                <FontAwesome name="eye-slash" size={22} />
              </View>
              <View style={styles.btnContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('PROFILE')}
                  style={styles.userBtn}>
                  <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text>Don't have account ? </Text>
                  <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{color: '#f9b34c'}}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
       </ImageBackground>
      
    );
  }
  
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
  export default LoginScreen;