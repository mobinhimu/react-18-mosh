import { useState } from "react";

interface ExpandTextProps {
  children: string;
  maxWord?: number;
  hasExpand?: boolean;
}

const MINIMUM_CHAR = 50;

function ExpandText({
  children,
  maxWord = 10,
  hasExpand = true,
}: ExpandTextProps) {
  const [isExpanded, setIsExpanded] = useState(hasExpand);

  const expandText = isExpanded
    ? children?.split(" ").splice(0, maxWord).join(" ")
    : children;

  function handleExpand() {
    setIsExpanded((prevExp) => !prevExp);
  }

  return (
    <>
      {expandText}
      {MINIMUM_CHAR < children.length && (
        <button onClick={handleExpand}>
          {!isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </>
  );
}

export default ExpandText;

/*
return (
    <>
      {isExpanded ? (
        <>
          {expandText + " ....."}
          <button onClick={handleExpand}>More</button>
        </>
      ) : (
        <>
          {" "}
          {children}
          <button onClick={handleExpand}>Show Less</button>
        </>
      )}
    </>
*/
