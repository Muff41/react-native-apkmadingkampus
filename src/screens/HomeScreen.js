import React, { useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, View, FlatList } from 'react-native'
import { CustomHeader, NewsCard, StatusBariOS } from '../components'
import { COLOR } from '../styles/Color'
import { FONT } from '../styles/Dimensions'
import { useDispatch, useSelector } from 'react-redux'
import HeadlineTypes from '../redux/actions/HeadlineTypes'

const HomeScreen = () => {
  useEffect(() => {
    getHeadlineData()
  }, [])

  const dispatch = useDispatch()
  const headlineData = useSelector(state => state.headline.data)
  const getHeadlineData = () => {
    dispatch({ type: HeadlineTypes.HEADLINE_REQUEST })
  }
  return (
    <>
      <StatusBariOS />
      <SafeAreaView style={styles.container}>
        <CustomHeader title='Mading Kampus'/>
        <View style={styles.greetingContainer}>
          <Text style={[FONT.h2, styles.font]}>Selamat Datang!</Text>
          <Text style={[FONT.body2, styles.font]}>Baca Berita Menarik Seputar ITG Hari ini.</Text>
        </View>
        <FlatList
          data={headlineData}
          keyExtractor={(news, index) => 'key' + index}
          renderItem={(news) => {
            return (
              <NewsCard
                key={news.item.publishedAt}
                title={news.item.title}
                url={news.item.url}
                author={news.item.author}
                urlToImage={news.item.urlToImage}
                description={news.item.description}
              />
            )
          }}
        />
      </SafeAreaView>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  greetingContainer: {
    alignSelf: 'flex-start',
    padding: 10
  },
  font: {
    color: COLOR.lightDark
  }
})