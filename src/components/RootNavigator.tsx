import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { RootStackParamList } from '../types'
import { Splash, Scan, Result } from '~/screens'

const RootStack = createStackNavigator<RootStackParamList>()

const RootNavigator: React.FC = () => {
  const { Navigator, Screen } = RootStack

  return (
        <NavigationContainer>
            <Navigator
            initialRouteName="Splash"
            headerMode="none"
            >
                <Screen name="Splash" component={Splash} />
                <Screen name="Scan" component={Scan} />
                <Screen name="Result" component={Result} />
            </Navigator>
        </NavigationContainer>
  )
}

export default RootNavigator
