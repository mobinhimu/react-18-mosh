import { useState } from "react";
import { HiMiniHeart, HiOutlineHeart } from "react-icons/hi2";
import styled from "styled-components";

interface LinkProps {
  onClick: () => void;
}

interface SpanType {
  isLove: boolean;
}

const Button = styled.button<SpanType>`
  font-size: 4rem;
  color: ${(props) => (props.isLove ? "pink" : "black")};
  background: none;
  border: none;
`;

function Like({ onClick }: LinkProps) {
  const [isLoved, setIsLoved] = useState(false);

  return (
    <Button
      onClick={() => {
        setIsLoved((prevLove) => !prevLove);
        onClick();
      }}
      isLove={isLoved}
    >
      {isLoved ? <HiMiniHeart /> : <HiOutlineHeart />}
    </Button>
  );
}

export default Like;
