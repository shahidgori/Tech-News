import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Images} from '../assets/images';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image style={{height: 20, width: 20,padding:10}} source={Images.search} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={'#1572A1'}
          value={props.searchText}
          onChangeText={text => props.setSearchText(text)}
          style={styles.input}
          onSubmitEditing={props.onSubmit}></TextInput>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 2,
    borderColor: '#1572A1',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 10,
    shadowColor: '#000',
    justifyContent:'center',
    alignItems:'center',
  },
  input: {
    color: '#1572A1',
    padding: 10,
    width: '90%',
  },
});
