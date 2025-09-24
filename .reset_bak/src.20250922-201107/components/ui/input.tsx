import * as React from "react";
type Props = React.InputHTMLAttributes<HTMLInputElement>;
export function Input({ className="", ...props }: Props) {
  return (
    <input
      className={"w-full bg-[#0f172a] border border-[#1f2937] rounded-xl px-4 py-3 outline-none " +
                 "focus:border-[#3b82f6] " + className}
      {...props}
    />
  );
}
export default Input;
