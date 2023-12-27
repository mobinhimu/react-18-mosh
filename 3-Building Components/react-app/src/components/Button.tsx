import { type MouseEvent, type ReactNode } from "react";

interface ButtonProps {
  buttonType?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link"
    | "close";
  children?: ReactNode;
  onClick: (event: MouseEvent) => void;
}

function Button({ buttonType = "primary", children, onClick }: ButtonProps) {
  return (
    <button type="button" className={`btn btn-${buttonType}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
