import { StatusBar } from 'react-native'
import { Home } from './src/screens/Home/Index'
import { Background } from './src/components/Background'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading/Index'

export default function App() {
  // fonts loaded is a boolean ans lets me know if the fonts have been loaded before the app starts
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  })
  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Home /> : <Loading />}
    </Background>
  )
}
