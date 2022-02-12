import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useField } from "formik";

interface InputFieldProps {
  name: string;
  type?: string;
  label: string;
  placeholder: string;
}

const InputField = (props: InputFieldProps) => {
  const [field, { error }] = useField(props);
  return (
    <FormControl>
      <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
      <Input {...field} {...props} id={props.name} />
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default InputField;
