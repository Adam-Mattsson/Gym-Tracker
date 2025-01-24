import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="flex items-center justify-center h-full">
        <View>
            <Text>Open up App.js to start working on your app!</Text>
        </View>
      <StatusBar/>
    </SafeAreaView>
  );
}
