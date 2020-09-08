import React, {useState, useEffect, useRef} from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Modal, Image } from 'react-native';
import { Camera } from 'expo-camera';

import TirarFoto from 'react-native-vector-icons/Entypo';
TirarFoto.loadFont()
import FecharFoto from 'react-native-vector-icons/FontAwesome';
FecharFoto.loadFont()


export function Video() {
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [hasPermission, setHasspermission] = useState(null);
    const camRef = useRef(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasspermission(status === 'granted');
        })();
    }, []);

    if(hasPermission === null){
        return <View/>;
    }

    if(hasPermission === false){
        return <Text> Acesso Negado! </Text>;
    }
async function takePicture() {
    if(camRef){
        const data = await camRef.current.takePictureAsync();
        setCapturedPhoto(data.uri);
        setOpen(true);
        console.log(data);
    }
}


    return (
        <SafeAreaView style={styles.container}>
            <Camera
              style={{flex: 1}}
              type= {type}
              ref={camRef}
              > 
              <View style={{flex: 1, backgroundColor: 'transparent', flexDirection: 'row'}}></View>
                <TouchableOpacity style={styles.button} 
                    onPress={takePicture}>
                    <TirarFoto name="circle" size={40} color="#fff"></TirarFoto>
                    
                </TouchableOpacity>
                { capturedPhoto && 
                <Modal
                animationType='slide'
                transparent={false}
                visible= {open}
                >
                    <View style={{flex:1, justifyContent: 'center', alignItems: 'center', margin: 20}}>
                        <TouchableOpacity style={{margin:10}} onPress={()=> setOpen(false)}>
                        <FecharFoto name='window-close' size={50} color= '#FF0000'/>
                        </TouchableOpacity>


                    <Image 
                    style={{width: '100%', height: 300, borderRadius: 20}}
                    source= {{uri: capturedPhoto}}
                    />


                    </View>
                </Modal>}
              </Camera>
            
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
},
button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DADADA',
    margin: 20,
    height: 50,
    borderRadius: 100,
}

});


