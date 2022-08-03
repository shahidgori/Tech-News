import {
  Image,
  Linking,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import moment from 'moment';

const Article = props => {
  return (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(props.url);
      }}
      style={[styles.container, styles.elevation]}>
      <Image
        source={{
          uri: props.urlToImage,
        }}
        style={styles.image}
      />
      <View style={{padding: 20}}>
        <Text style={styles.title}>{props.title}</Text>

        <Text style={styles.description} numberOfLines={3}>
          {props.description}
        </Text>
        <View style={styles.authorData}>
          <Text style={styles.data}>
            {'by '}:{' '}
            <Text style={styles.authorName}>
              {props.author ? props.author : 'unknown'}
            </Text>
          </Text>
          <Text style={styles.date}>
            {moment(props.publishedAt).format('MMM Do YY')}
          </Text>
        </View>
        <View>
          <Text style={{marginTop: 10}}>
            {'source'}: <Text style={styles.source}>{props.sourceName}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Article;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 40,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: '#fff',
    marginVertical: 15,
  },
  elevation: {
    elevation: 10,
    shadowColor: '#000',
  },

  image: {
    height: 200,
    width: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    // borderBottomLeftRadius:20,
    // borderBottomRightRadius:20,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 10,
  },
  authorData: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  data: {},
  authorName: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  date: {
    fontWeight: 'bold',
    color: '#1572A1',
    fontSize: 15,
  },
  source: {
    color: '#1572A1',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
