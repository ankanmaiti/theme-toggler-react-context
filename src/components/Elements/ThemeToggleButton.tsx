import { ReactNode } from "react";
import useTheme from "@/contexts/themeProvider";

interface ThemeToggleButtonProps {
  children: ReactNode;
  className: string;
}

export default function ThemeToggleButton({
  children,
  className,
}: ThemeToggleButtonProps) {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={className}>
      {children}
    </button>
  );
}
