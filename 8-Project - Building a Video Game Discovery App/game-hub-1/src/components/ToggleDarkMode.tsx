import { HStack, Show, Switch, Text, useColorMode } from "@chakra-ui/react";

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        colorScheme="green"
        onChange={toggleColorMode}
      />
      <Show above="md">
        <Text whiteSpace={"nowrap"}>
          {colorMode === "dark" ? "Light" : "Dark"} Mode
        </Text>
      </Show>
    </HStack>
  );
}

export default ToggleDarkMode;
