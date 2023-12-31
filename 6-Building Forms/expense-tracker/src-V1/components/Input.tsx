import { ChangeEvent, ComponentPropsWithoutRef } from "react";
type InputProps = {
  label: string;
  name: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} & ComponentPropsWithoutRef<"input">;

function Input(props: InputProps) {
  const { label, name, type, onChange, ...otherProps } = props;

  return (
    <div>
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          type={type}
          className="form-control"
          id={name}
          name={name}
          {...otherProps}
          onChange={onChange}
        />
        {/* <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div> */}
      </div>
    </div>
  );
}

export default Input;
