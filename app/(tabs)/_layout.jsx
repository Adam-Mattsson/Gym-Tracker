import React from 'react'
import { Tabs } from 'expo-router'
import { Image, Text, View } from 'react-native'
import { icons, colors } from '../../constants'

const TabIcon =({icon, color, focused}) => {
  return (
    <View>
      <Image
      source={icon}
      resizeMode='contain'
      tintColor = {color}
      className = "h-8 w-8"
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
        <Tabs screenOptions={{
          tabBarActiveTintColor: colors.secondary.DEFAULT,
          tabBarInactiveTintColor: colors.secondary[200],
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: colors.primary, 
            borderColor: colors.primary},
        }}>
            <Tabs.Screen name="dashboard" options={{
                title:'Dashboard',
                headerShown: false,
                tabBarIcon: ({focused, color}) => (
                <TabIcon
                    icon={icons.home}
                    color={color}
                    focused={focused}
                    name="Dashboard"
                />)
                }}/>
            <Tabs.Screen name="settings" options={{
                title:'Settings',
                headerShown: false,
                tabBarIcon: ({focused, color}) => (
                <TabIcon
                    icon={icons.user}
                    color={color}
                    focused={focused}
                    name="Settings"
                />)
                }}/>
        </Tabs>
    </>
  )
}

export default TabsLayout