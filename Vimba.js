import React from 'react';
import { Image } from 'react-native';

export default class Vimba extends React.Component {
  render() {
    return (
      // <View style={{ backgroundColor: 'black', padding: 10 }}>
      //   <SafeAreaView>
      <Image source={require('./img/Vimba-light.png')} resizeMode="contain" style={{ height: 30, width: 200 }} />
      //   </SafeAreaView>
      // </View>
    );
  }
}
