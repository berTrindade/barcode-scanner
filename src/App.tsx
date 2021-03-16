
import React, { useRef, useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'
import styles from './styles'

const App: React.FC = () => {
  const cameraRef = useRef();
  const [barcode, setBarcode] = useState([])

  return (
    <View style={styles.container}>
      <Text>Hello Bernardo!</Text>
      <RNCamera
      ref={cameraRef}      

      style={{
          flex: 1,
          width: '100%',
        }}

        onGoogleVisionBarcodesDetected={({ barcodes }) => setBarcode({ barcodes }) }
      />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => takePicture(this.camera)} style={styles.capture}>
              <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default App

