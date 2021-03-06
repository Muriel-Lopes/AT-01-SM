import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity,BackHandler} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Camera from 'react-native-vector-icons/MaterialCommunityIcons';
Camera.loadFont()
import Exit from 'react-native-vector-icons/Octicons';
Exit.loadFont()
import User from 'react-native-vector-icons/FontAwesome';
User.loadFont()

export function Home({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <TouchableOpacity style={styles.ident1} 
              onPress={() => navigation.navigate('Profile')}>
              <User name="user" size={30} color="#000"></User>
              <Text style={{ fontSize: 20,fontWeight: 'bold' }}>Perfil </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ident1} 
              onPress={() => navigation.navigate('Video')}>
              <Camera name="camera" size={30} color="#000"></Camera>
              <Text style={{ fontSize: 20,fontWeight: 'bold' }}>Câmera</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.ident1} 
              onPress={() => { BackHandler.exitApp() }}>
              <Exit name="sign-out" size={30} color="#000"></Exit>
              <Text style={{ fontSize: 20,fontWeight: 'bold' }}>Sair </Text>
          </TouchableOpacity>
          <Text style={{ fontSize:12,fontWeight: 'bold', fontStyle: 'italic' }}>Created by: Muriel Lopes </Text>
            
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
    height: 300,
    margin: 15,
    borderRadius: 6,
    alignItems: "center",
  },

  ident1: {
    backgroundColor:'#FAFAFA',
    shadowColor: '#DEDEDE',
    alignItems: 'center',
    borderRadius: 10,
    width: 270,
    height: 175,
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    padding: 60,
    margin: 10,
    
  },
  });