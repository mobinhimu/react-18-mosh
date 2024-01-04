import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

function Messages({ children }: { children: ReactNode }) {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      {children}
    </Box>
  );
}

export default Messages;
