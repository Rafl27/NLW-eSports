import {
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacityProps,
  Text,
} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { styles } from './styles'
import { THEME } from '../../theme'

// {
//   "id": "79da4f7c-0486-4e54-aacf-2e5aeaedec2c",
//   "title": "Minecraft",
//   "bannerUrl": "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg",
//   "_count": {
//       "ads": 0
//   }
// },

export interface GameCardProps {
  id: string
  title: string
  _count: {
    ads: Number
  }
  bannerUrl: string
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}
