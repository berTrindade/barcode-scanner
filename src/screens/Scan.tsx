import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import styles from '../styles'
import { RNCamera } from 'react-native-camera'
import { StackNavigationProp } from '@react-navigation/stack'
import PropTypes from 'prop-types'
import { RootStackParamList } from '../types'
export interface ScanScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Scan'>
}

const Scan: React.FC<ScanScreenProps> = ({ navigation }) => {
  const [isCameraReady, setIsCameraReady] = useState(false)
  const [isBarcodeRead, setIsBarcodeRead] = useState(false)
  const [startTime, setStartTime] = useState<any>()
  const [howMuchTime, setHowMuchTime] = useState<Number>()

  const onBarcodeScanned = useCallback((code) => {
    setIsBarcodeRead(true)

    navigation.reset({
      index: 0,
      routes: [{
        name: 'Result',
        params: {
          ...code,
          time: howMuchTime
        }
      }]
    })
  }, [howMuchTime])

  useEffect(() => {
    if (isCameraReady && isBarcodeRead) {
      const end = Date.now()
      const diff = end - startTime

      setHowMuchTime(diff)
    }
  }, [isBarcodeRead, isCameraReady])

  const onCameraReady = useCallback(() => {
    setStartTime(Date.now())
    setIsCameraReady(true)
  }, [])

  return (
        <View style={styles.mainContainer}>
            <RNCamera
                style = {styles.preview}
                captureAudio={false}
                onCameraReady={onCameraReady}
                flashMode={RNCamera.Constants.FlashMode.auto}
                type={RNCamera.Constants.Type.back}
                autoFocus={RNCamera.Constants.AutoFocus.on}
                onBarCodeRead={onBarcodeScanned}
                barCodeTypes={[
                  RNCamera.Constants.BarCodeType.datamatrix,
                  RNCamera.Constants.BarCodeType.qr,
                  RNCamera.Constants.BarCodeType.ean13,
                  RNCamera.Constants.BarCodeType.code128,
                  RNCamera.Constants.BarCodeType.code39,
                  RNCamera.Constants.BarCodeType.interleaved2of5,
                  RNCamera.Constants.BarCodeType.itf14
                ]}
            />
        </View>
  )
}

export default Scan

Scan.propTypes = {
  navigation: PropTypes.any.isRequired
}
