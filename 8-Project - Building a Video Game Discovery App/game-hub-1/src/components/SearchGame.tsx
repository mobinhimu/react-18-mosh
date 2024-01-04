import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { type FormEvent, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { type NavBarProps } from "./NavBar";

function SearchGame({ onSearchGame }: NavBarProps) {
  const gameRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(eve: FormEvent) {
    eve.preventDefault();

    if (gameRef.current?.value) onSearchGame(gameRef.current.value);
    formRef.current?.reset();
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <FaSearch />
        </InputLeftElement>
        <Input
          placeholder={"Search Games...."}
          borderRadius={100}
          ref={gameRef}
        />
      </InputGroup>
    </form>
  );
}

export default SearchGame;
