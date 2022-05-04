import { Box } from "@chakra-ui/react";

declare interface IMenuToggle{
    toggle : () => void; 
    isOpen: boolean
}
export default function MenuToggle({toggle, isOpen} : IMenuToggle){
    return (
        <Box display={{base: "block", md: "none"}}
            onClick={toggle}
        >
            {
                isOpen ? "❌" : "☰"
            }
        </Box>
    ) 
}