import { FormControl, FormLabel, Button, Box } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import InputField from "../components/InputField";
import { Wrapper } from "../components/Wrapper";

export const Register = () => {
  return (
    <Wrapper>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormControl>
              <InputField
                placeholder="Username"
                label="username"
                name="username"
              />
              <Box mt={5}>
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
