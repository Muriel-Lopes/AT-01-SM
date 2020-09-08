import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



export function Profile() {
    return (
        <View style={styles.container}>

            <Image
                style={{width: 150, height: 150,borderRadius: 400/ 2 ,alignItems: 'center',}}
                source={require('../assets/eu-mobile.png')}>
            </Image>
            <Text style={{ fontSize: 20,fontWeight: 'bold'}}>Muriel Lopes</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold'}}>17</Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold'}}>4° Fase Curso Técnico em Informática {"\n"} </Text>
  
            <View style={[styles.views, styles.ident1]}>

            <Text style={{ fontSize: 20,fontWeight: 'bold' }}>Tecnologias e Linguagens: </Text>
            <Text style={{ fontSize: 15 }}> Python, Java, C Sharp, React-Native  </Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold' }}> {"\n"} Plataformas: </Text>
            <Text style={{ fontSize: 15 }}> VSCode, Intellij, PyCharm, Arduino </Text>
            <Text style={{ fontSize: 20,fontWeight: 'bold' }}> {"\n"} Eu gostaria de trabalhar com: </Text>
            <Text style={{ fontSize: 15 }}> Desenvolvimento Back end e Front end,{"\n"}  Engenharia de Software </Text>
            </View>

        </View>
    )
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
      paddingTop: 14,
      width: 300,
      height: 250

    }, 
    });