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
    <div className=" w-14 md:w-24 flex flex-col mx-4">
      <div className="mx-auto">
        <div className="pb-3 flex justify-center">
          <img
            src={pic}
            className={`grayscale hover:grayscale-0 duration-500 rounded-full avatar_size object-cover`}
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

export default Avatar;
