import {extendTheme, type ThemeConfig} from '@chakra-ui/react'

const config : ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: true,
}

export const CustomChakraTheme  = extendTheme({config})