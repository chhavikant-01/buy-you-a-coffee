import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const icedCoffeeImg = require('../assets/images/iced-coffee.png')

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={icedCoffeeImg}
        resizeMode='cover'
        style={styles.image}
      >

      <Text style={styles.title}>Coffee Shop</Text>

      <Link href="/menu" style={{marginHorizontal: 'auto'}} asChild>
        <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Menu</Text>
        </Pressable>
      </Link>

      <Link href="/contact" style={{marginHorizontal: 'auto'}} asChild>
        <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Contact Us</Text>
        </Pressable>
      </Link>
      </ImageBackground>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },
  link: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
    padding: 4,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
  button:{
    height: 60,
    width: 200,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 6,
    marginBottom: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  }
})