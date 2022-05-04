import { Box, List, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const MenuItem = ({ to, children, ...rest }: any) => {
    return (
        <>
            <Link to={to}>
                <Text {...rest}>
                    {children}
                </Text>
            </Link>
        </>
    )
}

export default function Menu({ isOpen }: { isOpen: boolean }) {
    return  (
        <>
            <Box 
                display={{ base: isOpen ? "block" : "none", md: 'block' }}
                flexBasis={{base: "100%", md: "auto"}}
            >
                <Stack
                    spacing={8}
                    align="center"
                    justify={['center', 'space-between', 'flex-end', 'flex-end']}
                    direction={['column', 'row', 'row', 'row']}
                    pt={[4, 4, 0, 0]}
                >
                    <MenuItem to="/">Home</MenuItem>
                    <MenuItem to="/about">About</MenuItem>
                    <MenuItem to="/contact">Contact</MenuItem>
                </Stack>
            </Box>
        </>
    )
}