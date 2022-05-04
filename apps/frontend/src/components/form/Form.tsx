import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Container,
    Button

} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
export default function RegisterForm() {


    const schema = yup.object().shape({
        email: yup.string().required().email(),
        password: yup.string().required().min(6)
    })

    const { register, handleSubmit, formState: { errors } } = useForm(
        {
            mode: "onChange",
            resolver: yupResolver(schema)
        }
    )

    const onSubmit = (data: any) => { console.log(data) }
    return (
        <Container
            mt={9}
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl>
                    <FormLabel htmlFor='email'>Email address</FormLabel>
                    <Input id='email' type='email'  {...register('email', { required: true, minLength: 10 })} />
                    <FormHelperText>
                        {errors['email']?.message}
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor='email'>Password</FormLabel>
                    <Input id='email' type='password'  {...register('password')} />
                    <FormHelperText>
                        {errors['password']?.message}
                    </FormHelperText>
                </FormControl>
                <Button type='submit'>
                    Register
                </Button>
            </form>
        </Container>
    )
}