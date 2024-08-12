import { type ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;

export const Button = ({ style, ...props }: ButtonProps) => {
  return (
    <button
      style={{
        ...style,
        background: "darkred",
        color: "white",
        padding: "0.5rem 1.5rem",
        border: "none",
        outline: "none",
        borderRadius: "4px",
        fontWeight: "600",
      }}
      {...props}
    />
  );
};
