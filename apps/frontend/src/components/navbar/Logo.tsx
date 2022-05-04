import {Box, Text} from '@chakra-ui/react'

export default function Logo({children, ...props} : any){
  return (
      <Box>
          <Text fontSize="lg" fontWeight="bold" {...props}>
              {children}
          </Text>
      </Box>
  )  
}