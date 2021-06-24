import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,Button
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function DetailsScreen({route}) {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          }}
          style={{width: 420, height: 100,marginBottom:30}}>
          <View style={{justifyContent: 'center', alignItems: 'center',marginTop:65}}>
            <Image
              source={{
                uri: 'https://image.shutterstock.com/image-photo/young-beautiful-happy-businesswoman-sitting-260nw-165623561.jpg',
              }}
              style={styles.image}
            />
            <View style={styles.icon}>
              <FontAwesome
                name="edit"
                size={22}
                color="green"
                backgroundColor="green"
              />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.footer}>
        <Text style={{fontWeight: 'bold', fontSize: 16, margin: 15}}>
          First name                       {route.params.paramKey1}
        </Text>
  
        <Text style={{fontWeight: 'bold', fontSize: 16, margin: 15}}>
          Last name                       {route.params.paramKey3}
        </Text>
  
        <Text style={{fontWeight: 'bold', fontSize: 16, margin: 15}}>
          Contact number            {route.params.paramKey2}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 16, margin: 15}}>
          Email Address                {route.params.paramKey4}
        </Text>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      flex: 1.2,
    },
  
    footer: {
      flex: 0.8,
      justifyContent: 'center',
    },
    icon:{
      marginLeft:80,
    },
    image:{
      height: 110,
      width: 110,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 55,
      marginTop: 20,
    }
  });

  export default DetailsScreen;
  