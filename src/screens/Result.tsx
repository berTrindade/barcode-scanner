
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import styles from '../styles'

type Navigation = StackNavigationProp<TopNavigatorParamsList, 'result'>;
type Route = RouteProp<ModalNavigatorParamsList, 'route'>

interface ResultProps {
    navigation: Navigation
    route: Route
}



const Result: React.FC = ({ navigation, route }: ResultProps) => {
    const {code} = route.params;

    const onScanAgainClick = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'scan' }],
        });
    }

    return (
        <View style={styles._mainContainer}>
        <Text style={styles._heading}>Results</Text>
        <Text style={styles._txtStyle}>Barcode Type: {code.type}</Text>
        <Text style={styles._txtStyle}>Barcode Data: {code.data}</Text>
        <TouchableOpacity
            onPress={onScanAgainClick}
            style={styles._btn}>
            <Text style={{color: 'white'}}>Scan Again</Text>
        </TouchableOpacity>
    </View>
    )
}

export default Result