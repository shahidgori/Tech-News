import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../components/SearchBar';
import axios from 'axios';
import Article from '../components/Article';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [articles, setArticles] = useState([]);

  const searchArticles = () => {
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=in&pageSize=40&apiKey=b66af466f238476386b6b420fd0f6acc',
        {
          params: {
            category: 'technology',
            q: searchText,
          },
        },
      )
      .then(response => {
        // handle success
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
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={searchArticles}
      />
      <FlatList
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
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
