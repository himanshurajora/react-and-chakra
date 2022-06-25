import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
} from '@chakra-ui/react';
import { FC } from 'react';

interface CustomFormTextFieldProps {
  // don't pass errors and register
  errors?: any;
  register?: any;
  name: string;
  type?: string;
}
const CustomFormTextField: FC<
  CustomFormTextFieldProps & InputProps
> = ({ errors, register, name, type = 'text', ...rest }) => {
  return (
    <FormControl isInvalid={!!errors[name]}>
      <FormLabel htmlFor={'name'}>Email address</FormLabel>
      <Input
        id={name}
        type={type}
        {...register(name, { required: true, minLength: 10 })}
        {...rest}
      />
      <FormErrorMessage>{errors[name]?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default CustomFormTextField;
