
import React from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import styles from '../styles'

import { StackNavigationProp } from '@react-navigation/stack'
import PropTypes from 'prop-types'
import { RootStackParamList } from '../types'
import { RouteProp } from '@react-navigation/native'
export interface ResultcreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'Result'>
  route: RouteProp<RootStackParamList, 'Result'>
}

const Result: React.FC<ResultcreenProps> = ({ navigation, route }) => {
  const {
    params: { type, data, time }
  } = route

  const _onScanAgainClick = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Scan' }]
    })
  }

  return (
        <View style={styles.mainContainer}>
            <Text style={styles.txtStyle}>Barcode Type: {type}</Text>
            <Text style={styles.txtStyle}>Barcode Data: {data}</Text>
            <Text style={styles.txtStyle}>Barcode Time (ms): {time}</Text>
            <TouchableOpacity
                onPress={_onScanAgainClick}
                style={styles.btn}>
                <Text style={{ color: 'white' }}>Scan Again</Text>
            </TouchableOpacity>
        </View>
  )
}

export default Result

Result.propTypes = {
  navigation: PropTypes.any.isRequired,
  route: PropTypes.any.isRequired
}
