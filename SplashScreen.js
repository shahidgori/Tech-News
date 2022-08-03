import { StyleSheet, Text, View , StatusBar, Image} from 'react-native'
import React from 'react'
import { Images } from '../assets/images'

const SplashScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:'#1572A1',justifyContent:'center',alignItems:'center'}}>
        <StatusBar backgroundColor={'#1572A1'}></StatusBar>
        <View style={{alignItems:'center',marginBottom:50}}>
            <Image style={{height:100,width:100,marginBottom:10}} source={Images.Splash}/>
      <Text style={{fontSize:50,color:'#fff',fontWeight:'bold',}}>{"TechNews"}</Text>
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})