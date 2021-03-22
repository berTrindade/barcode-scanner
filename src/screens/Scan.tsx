import React, { useCallback, useEffect, useState } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import styles from '../styles'
import { RNCamera } from 'react-native-camera'
import { StackNavigationProp } from '@react-navigation/stack'
import PropTypes from 'prop-types'
import { RootStackParamList } from '../types'
export interface ScanScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Scan'>
}

interface ScanScreenState {
  startTime: any,
  endTime: any,
  code: any
}

const Scan: React.FC<ScanScreenProps> = ({ navigation }) => {
  const [
    state,
    setState
  ] = useState<ScanScreenState>({
    startTime: null,
    endTime: null,
    code: null
  })

  const {
    startTime,
    endTime,
    code
  } = state

  const [torch, setTorch] = useState(false)

  useEffect(() => {
    if (startTime && endTime) {
      const diff = endTime - startTime

      navigation.reset({
        index: 0,
        routes: [{
          name: 'Result',
          params: {
            ...code,
            time: diff
          }
        }]
      })
    }
  }, [startTime, endTime])

  const onCameraReady = useCallback(() => {
    setState(prevState => ({
      ...prevState,
      startTime: Date.now()
    }))
  }, [])

  const onBarcodeScanned = useCallback((code: any) => {
    setState(prevState => ({
      ...prevState,
      code,
      endTime: Date.now()
    }))
  }, [])

  const flashMode = torch
    ? RNCamera.Constants.FlashMode.torch
    : RNCamera.Constants.FlashMode.off

  const barCodeTypes = [
    RNCamera.Constants.BarCodeType.datamatrix,
    RNCamera.Constants.BarCodeType.qr,
    RNCamera.Constants.BarCodeType.ean13,
    RNCamera.Constants.BarCodeType.code128,
    RNCamera.Constants.BarCodeType.code39,
    RNCamera.Constants.BarCodeType.interleaved2of5
  ]

  return (
        <View style={styles.mainContainer}>
            <RNCamera
                style = {styles.preview}
                captureAudio={false}
                onCameraReady={onCameraReady}
                flashMode={flashMode}
                type={RNCamera.Constants.Type.back}
                autoFocus={RNCamera.Constants.AutoFocus.on}
                onBarCodeRead={onBarcodeScanned}
                barCodeTypes={barCodeTypes}
            />
             <TouchableOpacity
              onPress={() => setTorch(prevState => !prevState)}
              style={styles.btn}
              >
                <Text style={{ color: 'white' }}>
                  {torch ? 'Light Off' : 'Light On'}
                </Text>
              </TouchableOpacity>
        </View>
  )
}

export default Scan

Scan.propTypes = {
  navigation: PropTypes.any.isRequired
}
