import { Image } from "@chakra-ui/react";

import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import eye from "../assets/bulls-eye.webp";

function Emoji({ rating }: { rating: number }) {
  if (rating < 3) return null;

  console.log(rating);

  const ratingObj: {
    [key: number]: { src: string; alt: string; boxSize: string };
  } = {
    3: { src: meh, alt: "Meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "thumbs Up", boxSize: "28px" },
    5: { src: eye, alt: "eye", boxSize: "28px" },
  };

  return <Image {...ratingObj[rating]} />;
}

export default Emoji;
