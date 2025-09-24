import * as React from "react";
type Props = React.LabelHTMLAttributes<HTMLLabelElement>;
export function Label({ className="", ...props }: Props) {
  return <label className={"block mb-2 text-sm text-slate-300 " + className} {...props} />;
}
export default Label;
