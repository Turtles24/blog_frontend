interface MarginTopProps {
  margin: string;
}

export function MarginTop({ margin }: MarginTopProps) {
  return <div className={`mt-${margin}`}></div>;
}
