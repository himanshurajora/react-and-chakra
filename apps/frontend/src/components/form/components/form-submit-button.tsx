import { Button, ButtonProps } from '@chakra-ui/react';
import { FC } from 'react';

const CustomFormSubmitButton: FC<ButtonProps> = ({ ...rest }) => {
  return (
    <Button type="submit" {...rest}>
      Register
    </Button>
  );
};

export default CustomFormSubmitButton;
