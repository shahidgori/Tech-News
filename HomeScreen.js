import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Article from '../components/Article';
import axios from 'axios';
import {Images} from '../assets/images';
const HomeScreen = () => {
  const [articles, setArticles] = useState([]);
  const getNews = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=in&pageSize=50&apiKey=b66af466f238476386b6b420fd0f6acc',
        {
          params: {
            category: 'technology',
          },
        },
      )
      .then(response => {
        // handle success
        console.log(response.data.articles);
        setArticles(response.data.articles);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#1572A1'}></StatusBar>
      <View
        style={{
          height: 60,
          width: '100%',
          flexDirection: 'row',
          alignItems:'center',
          backgroundColor: '#1572A1',
          borderBottomRightRadius: 30,
          borderBottomLeftRadius: 30,
        }}>
        <Image
          style={{
            height: 30,
            width: 30,
            marginStart:20,
          }}
          source={Images.Splash}
        />
        <Text
          style={{
            fontSize: 25,
            color: '#fff',
            fontWeight: 'bold',
            marginStart:5,
          }}>
          TechNews
        </Text>
      </View>
      <FlatList
        style={{}}
        data={articles}
        renderItem={({item}) => (
          <Article
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
            url={item.url}
          />
        )}
        keyExtractor={item => item.title}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1},
});

export default HomeScreen;
