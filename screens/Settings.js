import { StyleSheet, View } from 'react-native';
import React from 'react'
import ThemeSwitchButton from '../components/ThemeSwitchButton';
import { useTheme } from '../context/UseTheme';
import Styles from '../Styles'

export default function Settings() {
  const { isDarkMode } = useTheme()

  return (
    <View style={[styles.container,isDarkMode ? Styles.dark : Styles.light]}>
        <ThemeSwitchButton />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
  });