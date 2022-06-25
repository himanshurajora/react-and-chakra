import { FC, Children, cloneElement, isValidElement } from 'react';
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

interface CustomFormProps {
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit: SubmitHandler<FieldValues>;
  register: UseFormRegister<FieldValues>;
  errors: Record<keyof FieldValues, FieldValues>;
  children: React.ReactNode;
}
export const CustomForm: FC<CustomFormProps> = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  children,
}) => {
  const childrenWithProps = Children.map(children, (child) => {
    // Checking isValidElement is the safe way and avoids a TS error too.
    if (isValidElement(child)) {
      // we can add a condition to check register or errors already exists
      return cloneElement(child, { register, errors });
    }

    return child;
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)}>{childrenWithProps}</form>
  );
};
