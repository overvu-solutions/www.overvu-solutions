import Image from "next/image";

const Avatar = ({
  pic,
  name,
  link,
}: {
  pic: string;
  name: string;
  link: string;
}) => {
  const w = "25";
  return (
    <div className=" w-14 md:w-24 flex flex-col mx-4">
      <div className="mx-auto">
        <div className="pb-3 flex justify-center">
          <img
            src={pic}
            className={`grayscale hover:grayscale-0 duration-500 rounded-full avatar`}
            alt=""
          />
        </div>
        <div className="flex text-center">
          <a href={link}>
            <h5 className="underline">{name}</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

const Brands = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-20">
      <li className="h-auto w-[130px] sm:h-auto sm:w-[170px]">
        <Image
          alt="Cambridge"
          loading="lazy"
          width="637"
          height="246"
          decoding="async"
          className="h-full w-full"
          src="/media/cambridge.jpg"
        />
      </li>

      <li className="h-auto w-[120px] sm:inline sm:h-[100px] sm:w-[150px]">
        <Image
          alt="Revolut"
          loading="lazy"
          width="909"
          height="589"
          decoding="async"
          className="h-full w-full"
          src="/media/revolut.svg"
        />
      </li>

      <li className="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px]">
        <Image
          alt="Google"
          loading="lazy"
          width="60"
          height="146"
          decoding="async"
          className="h-full w-full"
          src="/media/google.svg"
        />
      </li>

      <li className="h-auto w-[120px] sm:h-[150px] sm:w-[150px]">
        <Image
          alt="techstars"
          loading="lazy"
          width="731"
          height="137"
          decoding="async"
          className="h-full w-full"
          src="/media/techstars.png"
        />
      </li>

      <li className="h-[65px] w-[65px] sm:inline sm:h-[74px] sm:w-[74px]">
        <Image
          alt="Wix"
          loading="lazy"
          width="909"
          height="589"
          decoding="async"
          className="h-full w-full"
          src="/media/wix1.svg"
        />
      </li>
    </ul>
  );
};

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen  pb-20 gap-16 px-4 sm:p-1 ">
      <div className="flex w-full justify-center">
        <Image
          alt="logo"
          loading="lazy"
          width="909"
          height="589"
          decoding="async"
          data-nImage="1"
          className="h-auto w-60"
          src="/hero.png"
        />
      </div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-screen-md">
        <div className="w-full flex justify-center">
          <div className=" text-center mt-1 max-w-screen-md">
            <div className="text-center text-3xl md:text-3xl pb-2 mb-12">
              We are the team of scientists and engineers researching and
              building LLM/ML products.
            </div>
            <div className="text-xl mt-6 text-justify">
              We know how to build startups from 0 to 1 as we did it on our own.
              Founded by AI experts from Revolut, Google, Techstars and
              Cambridge. We saw the untapped potential of GenAI and LLMs in
              automation, decision-making, and efficiency, and are driven to
              bring that value to businesses across industries.
            </div>
          </div>
        </div>
        <div className="w-full justify-center pt-20">
          <h3 className="text-center text-3xl mb-14">Team</h3>
          <div className="flex flex-row justify-start flex-wrap gap-2 md:gap-2 mb-10 ">
            <Avatar
              pic="i/pavel.jpg"
              name="Pavel Grachev-Mousset"
              link="https://www.linkedin.com/in/pgrach/"
            />
            <Avatar
              pic="i/bohdan.jpg"
              name="Bohdan Snisar"
              link="https://www.linkedin.com/in/bsnisar/"
            />
            <Avatar
              pic="i/yaniv.jpg"
              name="Yaniv Proselkov"
              link="https://www.linkedin.com/in/yaniv-proselkov/"
            />
            <Avatar
              pic="i/sripaad.jpg"
              name="Sripaad Srinivasan"
              link="https://www.linkedin.com/in/sripaad-srinivasan/"
            />
            <Avatar
              pic="i/valeria.jpg"
              name="Valeria Jannelli"
              link="https://www.linkedin.com/in/valeria-jannelli/"
            />
          </div>
          <div className="justify-center">
            <div className="text-justify text-xl max-w-screen-md mb-4">
              Our team combines academic depth with practical industry expertise. On the scientific front, we specialize in the foundations of machine learning and LLMs, with research spanning model fine-tuning, benchmarking, and advanced network protocols.


            </div>
            <div className="text-justify text-xl max-w-screen-md">
              On the engineering side, we build workflows and solutions based on LLMs for various use cases, with a clear understanding of their pros and cons. Additionally, we create infrastructure for data pipelines, which fuel any LLM project.


            </div>
          </div>
          <div className="w-full pt-10 sm:pt-10">
            <Brands />
          </div>
        </div>
      </main>
    </div>
  );
}
