import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import {setStudentPresenceOnExam} from '../../services/ExamService';

function getScannedCode(type, data, idExam){
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setStudentPresenceOnExam(data, idExam)
    .then(response => {
      if(response)
        alert("La présence est marquée avec succés")
      else
        alert("Cet étudiant n'existe pas dans la liste des participants")  
    })
    .catch(error =>{
      alert("error");
    })
}

export default function App(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    getScannedCode(type, data, props.id);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}