import { Circle, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import MenuToggle from "./MenuToggle";

export default function Navbar({ ...props }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                w="100%"
                p={4}
                bg="gray.500"
                color="white"
                fontWeight="bold"
                {...props}
            >
                <Logo
                    w="100px"
                    color={["white", "white", "primary.500", "primary.500"]}
                >My Home</Logo>
                <MenuToggle isOpen={isOpen} toggle={toggle} ></MenuToggle>
                <Menu isOpen={isOpen}></Menu>
                <Circle
                    minHeight="30px"
                    minWidth="30px"
                    bg="pink.400"
                >
                    SN
                </Circle>
            </Flex>
        </>
    )
}