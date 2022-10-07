import "./Button.css";

interface ButtonProps {
  children: string;
  subtext?: string;
  primary?: boolean;
}

export function Button({ subtext, primary = false, children }: ButtonProps) {
  return (
    <button className={primary ? "primary" : ""}>
      {children} {subtext && <span className="subtext">{subtext}</span>}
    </button>
  );
}
