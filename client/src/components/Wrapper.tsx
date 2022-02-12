import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface IWrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: IWrapperProps) => {
  // console.log(children);
  return (
    <Box maxW={400} mt={8} w="100%" mx="auto">
      {children}
    </Box>
  );
};
