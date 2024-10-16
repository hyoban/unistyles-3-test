import '../app/unistyles'

import { Text, type TextProps } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

export type ThemedTextProps = TextProps & {
  lightColor?: string
  darkColor?: string
  type?: 'title' | 'defaultSemiBold' | 'subtitle' | 'link'
}

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type,
  ...rest
}: ThemedTextProps) {
  // const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  styles.useVariants({
    type,
  })

  return (
    <Text
      style={[
        // { color },
        styles.text,
        style,
      ]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create((theme) => ({
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: theme.text,
    variants: {
      type: {
        defaultSemiBold: {
          fontSize: 16,
          lineHeight: 24,
          fontWeight: '600',
        },
        title: {
          fontSize: 32,
          fontWeight: 'bold',
          lineHeight: 32,
        },
        subtitle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        link: {
          lineHeight: 30,
          fontSize: 16,
          color: '#0a7ea4',
        },
      },
    },
  },
}))
