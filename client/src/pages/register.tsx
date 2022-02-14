import { useMutation } from "@apollo/client";
import { Box, Button, FormControl, useQuery } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { registerMutation } from "../../graphql/mutation";
import { helloQuery } from "../../graphql/query";
import InputField from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { UserInput } from "../types/UserInput";
import { UserMutationResponse } from "../types/UserMutationResponse";

export const Register = () => {
  const initialValues: UserInput = { email: "", username: "", password: "" };

  const [registerUser, { data, error }] = useMutation<
    { registerResponse: UserMutationResponse },
    { registerInput: UserInput }
  >(registerMutation);

  const [loading, hello, err] = useQuery(helloQuery);
  console.log(loading);

  const onRegisterSubmit = (values: UserInput) => {
    console.log(values);
    registerUser({
      variables: {
        registerInput: values,
      },
    });
    // console.log(values);
  };
  return (
    <Wrapper>
      {error && <p>Failed to register </p>}
      {data && data.registerResponse.success && <p> {JSON.stringify(data)} </p>}
      <Formik initialValues={initialValues} onSubmit={onRegisterSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <FormControl>
              <InputField
                placeholder="Username"
                label="username"
                name="username"
              />
              <Box mt={5}>
                <InputField name="email" label="email" placeholder="Email" />
              </Box>
              <Box mt={5} marginBottom={5}>
                <InputField
                  name="password"
                  label="Password"
                  placeholder="password"
                  type="password"
                />
              </Box>

              <Button type="submit" isLoading={isSubmitting}>
                Register
              </Button>
            </FormControl>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};
