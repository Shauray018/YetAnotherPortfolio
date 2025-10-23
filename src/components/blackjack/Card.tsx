// components/Card.tsx
interface CardProps {
  rank: number; // 1–13 (A–K)
  suit: "spades" | "hearts" | "clubs" | "diamonds";
}

export default function Card({ rank, suit }: CardProps) {
  const cardWidth = 128; // adjust based on your sprite’s card size
  const cardHeight = 192;

  const suitRow = {
    spades: 0,
    diamonds: 1,
    clubs: 2,
    hearts: 3,
  }[suit];

  const x = (rank - 1) * cardWidth;
  const y = suitRow * cardHeight;

  return (
    <div
      className="inline-block bg-no-repeat"
      style={{
        width: `${cardWidth}px`,
        height: `${cardHeight}px`,
        backgroundImage: "url(/home/shauray/Downloads/PortFolio/YetAnotherPortfolio/public/CuteCards.png)",
        backgroundPosition: `-${x}px -${y}px`,
        backgroundSize: `${13 * cardWidth}px ${4 * cardHeight}px`,
      }}
    />
  );
}
