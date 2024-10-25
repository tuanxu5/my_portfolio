"use client";

import { Card, Carousel } from "@/app/components/aceternity-ui/cards-carousel/cards-carousel";

type Card = {
  src: string;
  title: string;
  category: string;
  position: string;
  content: React.ReactNode;
};

export function AppleCardsCarouselDemo({ data }: { data: Card[] }) {
  const cards = data.map((card, index: number) => <Card key={card.src} card={card} index={index} />);

  return <Carousel items={cards} />;
}
