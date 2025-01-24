import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const Settings = () => {
  return (
    <>
      <SafeAreaView className="flex items-center justify-center h-full bg-primary">
        <View>
          <Text className="text-white" >Settings</Text>
        </View>
      </SafeAreaView>
      <StatusBar style='light'/>
    </>
    )
}

export default Settings