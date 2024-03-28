import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View style={styles.conatiner}>
    <ActivityIndicator size={40} color={"#000"} />
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    conatiner: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    }
})