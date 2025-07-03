import React from "react";
import Image from "next/image";

const Brands = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-5 sm:gap-y-6">
      <li className="h-[44px] sm:h-[56px] aspect-[5/2]">
        <Image
          alt="Cambridge"
          loading="lazy"
          width={537}
          height={146}
          className="h-full w-auto object-contain"
          src="/media/cambridge.jpg"
        />
      </li>
      <li className="h-[44px] sm:h-[56px] aspect-[909/589]">
        <Image
          alt="Revolut"
          loading="lazy"
          width={909}
          height={589}
          className="h-full w-auto object-contain"
          src="/media/revolut.svg"
        />
      </li>
      <li className="h-[44px] sm:h-[56px] aspect-[60/146]">
        <Image
          alt="Google"
          loading="lazy"
          width={60}
          height={146}
          className="h-full w-auto object-contain"
          src="/media/google.svg"
        />
      </li>
      <li className="h-[44px] sm:h-[56px] aspect-[131/137]">
        <Image
          alt="Techstars"
          loading="lazy"
          width={731}
          height={137}
          className="h-full w-auto object-contain"
          src="/media/techstars.png"
        />
      </li>
      <li className="h-[44px] sm:h-[56px] aspect-[909/589]">
        <Image
          alt="Wix"
          loading="lazy"
          width={909}
          height={589}
          className="h-full w-auto object-contain"
          src="/media/wix1.svg"
        />
      </li>
      <li className="h-[44px] sm:h-[56px] aspect-[909/589]">
        <Image
          alt="ETH"
          loading="lazy"
          width={909}
          height={589}
          className="h-full w-auto object-contain"
          src="/media/eth.png"
        />
      </li>
    </ul>
  );
};


export default Brands;