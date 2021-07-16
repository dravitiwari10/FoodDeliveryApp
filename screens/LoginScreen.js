import React, { useState, useEffect } from "react";
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
  // const intialValues = { email: "", password: "" };

  // const [formValues, setFormValues] = useState(intialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // const submit = () => {
  //   console.log(formValues);
  // };

  // //input change handler
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // //form submission handler
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmitting(true);
  // };

  // //form validation handler
  // const validate = (values) => {
  //   let errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  //   if (!values.email) {
  //     errors.email = "Cannot be blank";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "Invalid email format";
  //   }

  //   if (!values.password) {
  //     errors.password = "Cannot be blank";
  //   } else if (values.password.length < 4) {
  //     errors.password = "Password must be more than 4 characters";
  //   }

  //   return errors;
  // };

  // useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmitting) {
  //     submit();
  //   }
  // }, [formErrors]);
    return (
      // <ImageBackground
      // source={{
      //   uri: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'}}
      //   style={{height: 600, width: 400}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.welcome}>LOGO</Text>
          </View>
          <View style={styles.footer}>
            <View style={{marginLeft: 20}}>
              <Text>username</Text>
              <View>
                <FontAwesome name="user-o" size={22} color='green' style={{position:'absolute',top:20}} />
                <TextInput placeholder="your username" />
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
      //  </ImageBackground>
      
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor:'blue'
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