interface DividerProps {
  className?: string;
}

export default function Divider({ className = "" }: DividerProps) {
  return <hr className={`divider my-4 ${className}`.trim()} />;
}
