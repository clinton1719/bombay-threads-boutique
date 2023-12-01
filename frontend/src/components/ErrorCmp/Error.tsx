import gif from '../../assets/error/huh-jack-sparrow.gif';

const Error = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-between mt-8 ">
        <img
          src={gif}
          alt="Oops!"
          className="flex items-center justify-center"
        />
        <span className="flex items-center justify-center md:min-w-[400px] mt-8">
          Oops! We don't have that right now.
        </span>
      </div>
    </>
  );
};

export default Error;
