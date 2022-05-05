import { useQuery, QueryClient, QueryClientProvider, useMutation } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useEffect } from 'react';
import { Button, Center, Image, Spacer, Spinner, Text, VStack } from '@chakra-ui/react';
const client = new QueryClient();

export default function ReactQueryTest() {

    return <QueryClientProvider client={client}>
        <Test></Test>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
}


const Test = () => {
    const fetchUser = async () => {
        return await (await fetch("https://api.github.com/users/alex")).json()
    }

    const postUser = async (user: any) => {
        return await (await fetch("https://api.github.com/users/alex", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })).json()
    }



    const { data, isLoading, error, status } = useQuery("user", fetchUser)
    const mutation = useMutation(
        postUser,
        {
            onSuccess: (data) => {
                console.log(data)
            },
            onError: (err) => {
                console.log(err)
            }
        }
    )
    if (isLoading) return <Center>
        <Text fontSize={"2xl"}>Loading</Text>
    </Center>

    return <>
        <Center>
            <VStack>
                <Image maxH="100px" src={data?.avatar_url} alt={data?.username}>
                </Image>
                <Text fontSize={"2xl"}>{data?.name}</Text>
                <Text fontSize={"md"}>{data?.bio}</Text>
                <Spacer my={8} />
                <Button onClick={() => mutation.mutate({ "somedata": "data is data" })}>
                    {
                        mutation.isLoading ? <Spinner /> : "Sample Mutation"
                    }
                    {
                        mutation.isError ? <Text color="red.400">Error</Text> : null
                    }
                </Button>
                <Text>
                    {
                        mutation.isSuccess ? JSON.stringify(mutation.data) : "Not Loaded Yet"
                    }
                </Text>
            </VStack>
        </Center>
    </>
}