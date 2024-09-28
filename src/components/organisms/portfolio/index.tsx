// ----------------------------------------------------------------------------------
// The portfolio organism that shows a list of cards in a carousel.
// Takes as input a list of portfolioCard information.
// ----------------------------------------------------------------------------------

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import PortfolioCard from "@/components/molecules/portfolioCard";

interface PortfolioCardProps {
    image: string;
    title: string;
    description: string;
    link: string;
    linkText: string;
}

interface PortfolioProps {
    cards: PortfolioCardProps[];
}

export function Portfolio({cards}: PortfolioProps) {
    return (
        <Carousel className="w-11/12">
            <CarouselContent className="-ml-1">
                {cards.map((info, index) => (
                    <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3">
                        <PortfolioCard
                            image={info.image}
                            title={info.title}
                            description={info.description}
                            link={info.link}
                            linkText={info.linkText}
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className={"bg-secondary text-white"} />
            <CarouselNext className={"bg-secondary text-white"} />
        </Carousel>
    )
}
