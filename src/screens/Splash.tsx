import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import styles from '../styles'
import PropTypes from 'prop-types'

import { RootStackParamList } from '../types'
export interface SplashScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Splash'>
}

const Splash: React.FC<SplashScreenProps> = ({ navigation }) => {
  const onScanAgainClick = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Scan' }]
    })
  }

  return (
        <View style={styles.mainContainer}>
            <TouchableOpacity
                onPress={onScanAgainClick}
                style={styles.btn}>
                <Text style={{ color: 'white' }}>Scan</Text>
            </TouchableOpacity>
        </View>
  )
}

export default Splash

Splash.propTypes = {
  navigation: PropTypes.any.isRequired
}
