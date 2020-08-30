import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Camera from 'react-native-vector-icons/MaterialCommunityIcons';
Camera.loadFont()
import Exit from 'react-native-vector-icons/Octicons';
Exit.loadFont()
import User from 'react-native-vector-icons/FontAwesome';
User.loadFont()


export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.views, styles.ident1]}>
        <User name="user" size={30} color="#000"></User>
        <Text>Perfil</Text></View>

      <View style={[styles.views, styles.ident2]}>
        <Camera name="camera" size={30} color="#000"></Camera>
        <Text>Câmera</Text></View>

      <View style={[styles.views, styles.ident3]}>
        <Exit name="sign-out" size={30} color="#000"></Exit>
        <Text>Sair</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column",
    paddingTop: 40,
  },
  views: {
    width: 300,
    height: 170,
    margin: 15,
    borderRadius: 6,
    alignItems: "center",
  },

  ident1: {
    backgroundColor:'#FAFAFA',
    shadowColor: '#DEDEDE',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    paddingTop: 60,
    
  },
  ident2: {
    backgroundColor:'#FAFAFA',
    shadowColor: '#DEDEDE',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    paddingTop: 60,
  },
  ident3: {
    backgroundColor:'#FAFAFA',
    shadowColor: '#DEDEDE',
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    paddingTop: 60,

  },
});
