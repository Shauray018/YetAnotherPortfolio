// components/Chip.tsx
interface ChipProps {
  color: "red" | "pink" | "white" | "gray" | "black";
}

export default function Chip({ color }: ChipProps) {
  const chipSize = 64;
  const colorIndex = {
    red: 0,
    pink: 1,
    white: 2,
    gray: 3,
    black: 4,
  }[color];

  return (
    <div
      className="inline-block bg-no-repeat"
      style={{
        width: `${chipSize}px`,
        height: `${chipSize}px`,
        backgroundImage: "url(/assets/PokerChips.png)",
        backgroundPosition: `-${colorIndex * chipSize}px 0`,
        backgroundSize: `${5 * chipSize}px ${chipSize}px`,
      }}
    />
  );
}
