import * as React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean };
export function Button({ className="", ...props }: Props) {
  return (
    <button
      className={"inline-flex items-center justify-center rounded-xl px-4 py-3 transition " +
                 "bg-[#3b82f6] hover:bg-[#2563eb] disabled:opacity-60 disabled:cursor-not-allowed " + className}
      {...props}
    />
  );
}
export default Button;
