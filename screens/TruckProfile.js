import * as React from 'react';

import {
  View,
  Text,
  TextInput,Image,ScrollView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


function TruckProfile() {
    return (
      <ScrollView>
      <View style={{flex: 1}}>
        <View
          style={{justifyContent: 'center', alignItems: 'center',marginTop:1,marginBottom:10,flexDirection:'row',marginTop:20}}>
          <TextInput
            placeholder="seacrch food truck/tents by name"
            style={{
              width: '90%',
              backgroundColor: '#fff',
              padding: 6,
              borderRadius: 20,position:'absolute'
            }}
          />
          <View style={{marginLeft:300}}>
            <FontAwesome
                name="search"
                size={20}
                color="green"
                backgroundColor="green"
              />
        </View>
        </View>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11,
            backgroundColor: 'white',
            margin: 5,
            borderRadius: 8,
            marginTop:10
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={{
                uri: 'https://www.thebalancesmb.com/thmb/xDJAyYQUnlG6McAE-aL2lfdSs_M=/2088x1174/smart/filters:no_upscale()/food-truck-in-the-street-496731672-863bfb69328341c1804fec18e39be715.jpg',
              }}
              style={{width: 100, height: 60, margin: 10}}
            />
            <View>
              <Text>nisha Truck</Text>
              <Text>506.91 mils Away</Text>
              <Text style={{color: 'red'}}>Closed</Text>
              <Text>Cuisine is not available</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11,
            backgroundColor: 'white',
            margin: 5,
            borderRadius: 8,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{marginLeft: 130}}>
              <Text>nisha Truck</Text>
              <Text>506.91 mils Away</Text>
              <Text style={{color: 'green'}}>Open</Text>
              <Text>Cuisine is not available</Text>
            </View>
            <Image
              source={{
                uri: 'https://i2.wp.com/bridalmusings.com/wp-content/uploads/2014/10/Markow-Photography-Beach-Engagement-Shoot-Bridal-Musings-28.jpg?resize=%2C',
              }}
              style={{width: 100, height: 60, margin: 10}}
            />
          </View>
        </View>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11,
            backgroundColor: 'white',
            margin: 5,
            borderRadius: 8,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={{
                uri: 'https://www.thebalancesmb.com/thmb/xDJAyYQUnlG6McAE-aL2lfdSs_M=/2088x1174/smart/filters:no_upscale()/food-truck-in-the-street-496731672-863bfb69328341c1804fec18e39be715.jpg',
              }}
              style={{width: 100, height: 60, margin: 10}}
            />
  
            <View>
              <Text>nisha Truck</Text>
              <Text>506.91 mils Away</Text>
              <Text style={{color: 'red'}}>Closed</Text>
              <Text>Cuisine is not available</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11,
            backgroundColor: 'white',
            margin: 5,
            borderRadius: 8,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{marginLeft: 130}}>
              <Text>nisha Truck</Text>
              <Text>506.91 mils Away</Text>
              <Text style={{color: 'red'}}>Closed</Text>
              <Text>Cuisine is not available</Text>
            </View>
            <Image
              source={{
                uri: 'https://i2.wp.com/bridalmusings.com/wp-content/uploads/2014/10/Markow-Photography-Beach-Engagement-Shoot-Bridal-Musings-28.jpg?resize=%2C',
              }}
              style={{width: 100, height: 60, margin: 10}}
            />
          </View>
        </View>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11,
            backgroundColor: 'white',
            margin: 5,
            borderRadius: 8,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={{
                uri: 'https://www.thebalancesmb.com/thmb/xDJAyYQUnlG6McAE-aL2lfdSs_M=/2088x1174/smart/filters:no_upscale()/food-truck-in-the-street-496731672-863bfb69328341c1804fec18e39be715.jpg',
              }}
              style={{width: 100, height: 60, margin: 10}}
            />
            <View>
              <Text>nisha Truck</Text>
              <Text>506.91 mils Away</Text>
              <Text style={{color: 'green'}}>Open</Text>
              <Text>Cuisine is not available</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.36,
            shadowRadius: 6.68,
            elevation: 11,
            backgroundColor: 'white',
            margin: 5,
            borderRadius: 8,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{marginLeft: 130}}>
              <Text>nisha Truck</Text>
              <Text>506.91 mils Away</Text>
              <Text style={{color: 'red'}}>Closed</Text>
              <Text>Cuisine is not available</Text>
            </View>
            <Image
              source={{
                uri: 'https://i2.wp.com/bridalmusings.com/wp-content/uploads/2014/10/Markow-Photography-Beach-Engagement-Shoot-Bridal-Musings-28.jpg?resize=%2C',
              }}
              style={{width: 100, height: 60, margin: 10}}
            />
          </View>
        </View>
      </View>
      </ScrollView>
    );
  }
  export default TruckProfile;