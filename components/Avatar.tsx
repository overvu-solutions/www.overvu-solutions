const Avatar = ({
  pic,
  name,
  link,
}: {
  pic: string;
  name: string;
  link: string;
}) => {
  return (
    <div className=" w-14 md:w-24 flex flex-col mx-4 hover:underline">
      <div className="mx-auto">
        <div className="pb-3 flex justify-center">
          <img
            src={pic}
            className={`grayscale hover:grayscale-0 duration-500 rounded-full avatar_size object-cover`}
            alt=""
          />
        </div>
        <div className="flex text-center text-xs font-light tracking-wider uppercase">
          <a href={link} className="font-mono">
            <h5 className="">{name}</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
