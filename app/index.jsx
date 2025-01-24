import { Redirect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView className="flex items-center justify-center h-full bg-primary">
      <Redirect href="/dashboard"/>
      <StatusBar style='light'/>
    </SafeAreaView>
  );
}
