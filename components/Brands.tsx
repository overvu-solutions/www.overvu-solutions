import React from "react";
import Image from "next/image";

const Brands = () => {
  return (
    <ul className="mx-auto px-18 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 sm:gap-x-12 gap-y-5 sm:gap-y-6 items-center justify-items-center">
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
      <li className="h-[44px] sm:h-[56px] aspect-[500/250] flex items-center justify-center">
        <Image
          alt="Revolut"
          loading="lazy"
          width={537}
          height={146}
          className="h-full w-auto object-contain"
          src="/media/revolut.svg"
        />
      </li>
      <li className="h-[44px] sm:h-[56px] aspect-[90/140] flex items-center justify-center">
        <Image
          alt="Google"
          loading="lazy"
          width={60}
          height={146}
          className="h-full w-auto object-contain"
          src="/media/google.svg"
        />
      </li>
      <li className="h-[44px] sm:h-[56px] aspect-[295/135] flex items-center justify-center">
        <Image
          alt="Techstars"
          loading="lazy"
          width={731}
          height={237}
          className="h-full w-auto object-contain object-center"
          style={{ objectPosition: 'center' }}
          src="/media/Techstars_Logo.png"
        />
      </li>
      <li className="h-[44px] sm:h-[56px] aspect-[809/589] flex items-center justify-center">
        <Image
          alt="Wix"
          loading="lazy"
          width={909}
          height={589}
          className="h-full w-auto object-contain"
          src="/media/wix1.svg"
        />
      </li>
      <li className="h-[44px] sm:h-[56px] aspect-[909/589] flex items-center justify-center">
        <Image
          alt="ETH"
          loading="lazy"
          width={909}
          height={589}
          className="h-full w-auto object-contain"
          src="/media/eth.png"
        />
      </li>
      <li className="h-[44px] sm:h-[56px] aspect-[700/650] flex items-center justify-center">
        <Image
          alt="AWS"
          loading="lazy"
          width={509}
          height={489}
          className="h-full w-auto object-contain"
          src="/media/Amazon_Web_Services_Logo.svg"
        />
      </li>

      <li className="h-[44px] sm:h-[56px] aspect-[231/237] flex items-center justify-center">
        <Image
          alt="Chanel"
          loading="lazy"
          width={731}
          height={237}
          className="h-full w-auto object-contain"
          src="/media/chanel-2-logo-svgrepo-com.svg"
        />
      </li>
    </ul>
  );
};

export default Brands;
