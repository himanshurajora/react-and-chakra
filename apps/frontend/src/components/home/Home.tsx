import { Box, Button, ButtonGroup, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Navbar from "../navbar/Navbar";

const CustomBorderButton = ({ children }: any) => {
    return (
        <Button
            size="xs"
            variant="outline"
            border="1px solid black"
            borderRadius="50"
            _hover={{ backgroundColor: "gray.200" }}
            _active={{ backgroundColor: "gray.600", color: "white" }}
        >
            {children}
        </Button>
    )
}

const Message = ({message, time} : any) => {
    return (
        <Flex
            direction="row"
            justify="space-between"
            width="100%"
        >
            <Text
                fontSize="sm"
            >
                {message}
            </Text>
            <Text
                fontSize="sm"
                fontWeight="bold"
            >
              {time}
            </Text>

        </Flex>
    )
}

const CustomStatusBox = ({ title, data }: any) => {
    return (
        <Box paddingLeft={5}>
            <Text>
                {title}
                <Text
                    fontSize="xl"
                    fontWeight="bold"
                >
                    {data}
                </Text>
            </Text>
        </Box>
    )
}

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <HStack
                spacing={3}
                padding={0}
                align="flex-start"
                flexWrap="wrap"
            >
                <VStack
                    spacing={3}
                    padding={6}
                >
                    <Box
                        backgroundColor="gray.100"
                        padding={4}
                        shadow="md"
                        maxWidth="600px"
                    >
                        <Flex
                            direction={["row"]}
                            alignItems="center"
                            marginBottom={5}
                        >
                            <Text
                                fontSize="lg"
                                fontWeight="bold"
                            >
                                Checklist Status
                            </Text>
                            <ButtonGroup
                                marginLeft="7"
                            >
                                <CustomBorderButton>Shift</CustomBorderButton>
                                <CustomBorderButton>Week</CustomBorderButton>
                                <CustomBorderButton>Month</CustomBorderButton>
                            </ButtonGroup>
                        </Flex>
                        <Flex
                            direction={"row"}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                alt=""
                                maxWidth="300px"
                            />

                            <Flex
                                direction="row"
                                wrap="wrap"
                            >
                                <CustomStatusBox
                                    title="Total Checklist"
                                    data="10"
                                ></CustomStatusBox>
                                <CustomStatusBox
                                    title="Completed"
                                    data="5"
                                ></CustomStatusBox>
                                <CustomStatusBox
                                    title="Pending"
                                    data="5"
                                ></CustomStatusBox>
                            </Flex>
                        </Flex>
                    </Box>
                    <Box
                        backgroundColor="gray.100"
                        padding={4}
                        shadow="md"
                        maxWidth="600px"
                    >
                        <Flex
                            direction={["row"]}
                            alignItems="center"
                            marginBottom={5}
                        >
                            <Text
                                fontSize="lg"
                                fontWeight="bold"
                            >
                                Checklist Status
                            </Text>
                            <ButtonGroup
                                marginLeft="7"
                            >
                                <CustomBorderButton>Shift</CustomBorderButton>
                                <CustomBorderButton>Week</CustomBorderButton>
                                <CustomBorderButton>Month</CustomBorderButton>
                            </ButtonGroup>
                        </Flex>
                        <Flex
                            direction={"row"}
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                                alt=""
                                maxWidth="300px"
                            />

                            <Flex
                                direction="row"
                                wrap="wrap"
                            >
                                <CustomStatusBox
                                    title="Total Checklist"
                                    data="10"
                                ></CustomStatusBox>
                                <CustomStatusBox
                                    title="Completed"
                                    data="5"
                                ></CustomStatusBox>
                                <CustomStatusBox
                                    title="Pending"
                                    data="5"
                                ></CustomStatusBox>
                            </Flex>
                        </Flex>
                    </Box>
                </VStack>
                <VStack
                    spacing={3}
                    padding={6}
                >
                    {/* Notification Component */}
                    <Box
                        backgroundColor="gray.100"
                        padding={4}
                        shadow="md"
                        maxWidth="600px"
                    >
                        <VStack
                            justify="flex-start"
                            align="flex-start"
                        >
                            <Text
                                fontSize="lg"
                                fontWeight="bold"
                                marginBottom={5}
                            >
                                Notification
                            </Text>
                            <VStack
                                spacing={3}
                                width="500px"
                            >
                                <Message 
                                message="lorem ipsum dolor sit amet"
                                time="12:00 AM 23/12/2020"
                                />
                                <Message 
                                message="lorem ipsum dolor sit amet"
                                time="12:00 AM 23/12/2020"
                                />
                                <Message 
                                message="lorem ipsum dolor sit amet"
                                time="12:00 AM 23/12/2020"
                                />
                            </VStack>
                        </VStack>
                    </Box>
                </VStack>
            </HStack>
        </>
    );
}

