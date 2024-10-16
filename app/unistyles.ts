import { StyleSheet } from 'react-native-unistyles'

const tintColorLight = '#0a7ea4'
const tintColorDark = '#fff'

// define your themes like in v.2.0+ (optional)
const lightTheme = {
  text: '#11181C',
  background: '#fff',
  tint: tintColorLight,
  icon: '#687076',
  tabIconDefault: '#687076',
  tabIconSelected: tintColorLight,
}
const darkTheme = {
  text: '#ECEDEE',
  background: '#151718',
  tint: tintColorDark,
  icon: '#9BA1A6',
  tabIconDefault: '#9BA1A6',
  tabIconSelected: tintColorDark,
}

// define your breakpoints like in v.2.0+ (optional)
const breakpoints = {
  xs: 0,
  sm: 300,
  md: 500,
  lg: 800,
  xl: 1200,
}

// override types like in v.2.0+ (optional)
type AppBreakpoints = typeof breakpoints
type AppThemes = {
  light: typeof lightTheme
  dark: typeof darkTheme
}

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

// init Unistyles. Must be done before parsing first "StyleSheet":
// required, at least you need to pass empty object {}
StyleSheet.configure({
  settings: {
    // possible settings are listed below
    adaptiveThemes: true,
  },
  breakpoints,
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
})
