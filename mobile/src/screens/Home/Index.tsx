import React from 'react'
import { View, Image, FlatList } from 'react-native'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading/Index'
import { styles } from './styles'
import { GameCard, GameCardProps } from '../../components/GameCard/Index'
// import { GAMES } from '../../utils/games'
import { useEffect, useState } from 'react'

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([])

  useEffect(() => {
    fetch('http://10.0.0.156:3333/games/')
      .then((response) => response.json())
      .then((data) => setGames(data))
  }, [])

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        //basically .map bellow
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  )
}
