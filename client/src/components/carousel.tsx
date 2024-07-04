import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

const Slider = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  // const [count, setCount] = useState<number>(0);
  const rootNodeRef = useRef(null);
  const [current, setCurrent] = useState<number>(0);

  const arr = [
    "https://www.boat-lifestyle.com/cdn/shop/files/Wave_Sigma_3_Banner_WEB_2_1600x.jpg?v=1719302682",
    "https://www.boat-lifestyle.com/cdn/shop/files/Summer-Desk-Banner_1_1600x.jpg?v=1718191845",
    "https://www.boat-lifestyle.com/cdn/shop/files/Lumous-Desk_1600x.jpg?v=1719284489",
    "https://www.boat-lifestyle.com/cdn/shop/files/RS_Banner_WEB_1_1440x.jpg?v=1706770352",
    "https://www.boat-lifestyle.com/cdn/shop/files/PB_400_Web_1440x.gif?v=1718346574",
  ];

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    setCurrent(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  return (
    <div
      className="w-full max-w-[100vw] cursor-pointer"
      id="carousel-container"
      ref={rootNodeRef}
    >
      <Carousel
        setApi={setCarouselApi}
        opts={{ loop: true }}
        className="flex max-w-[90vw] mx-auto"
        plugins={[
          Autoplay({
            delay: 4000,
            rootNode: () => document.getElementById("carousel-container"),
            stopOnMouseEnter: true,
            stopOnInteraction: false,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          }) as any,
        ]}
      >
        <CarouselContent className="w-auto">
          {arr.map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex z-0 justify-center">
                    <img src={_} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="z-10" />
        <CarouselNext className="z-10" />
      </Carousel>
      <ul className="relative flex flex-row flex-nowrap my-0 z-10 mx-auto bottom-24 bg-slate-300/50 px-0 py-0 w-fit rounded-full cursor-default">
        {arr.map((_, index) => (
          <li
            className={`mx-1 my-0.5 p-1 rounded-full cursor-pointer ${
              index !== current ? "bg-black" : "bg-white"
            }`}
            onClick={() => {
              if (!carouselApi) {
                return;
              }
              carouselApi.scrollTo(index, false);
            }}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
