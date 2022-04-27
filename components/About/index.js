import Image from 'next/image';

const about = () => {
  return (
    <div className="w-full h-full bg-black">
      <div className="w-3/5 mx-auto text-center text-white">
        <span className="2xl:text-8xl text-6xl own-font">Mission</span>
        <div className="mt-10 2xl:text-2xl text-xl text-center own-font-text">
          <p>
            Here at CustomBuyz we aim to empower the little guy, thats why we
            have created a platform for independent visual artistz to sell and
            promote their art through sneakers.
          </p>
          <p className="pt-10">
            I remember thinking to myself &quot;I wish there was a website where I
            could scroll and buy my favourite customz&quot;... Well, here it is.
          </p>
        </div>
        <div className="2xl:mt-8 mt-6">
          <p className="2xl:text-6xl md:text-4xl text-2xl own-font">Welcome to CustomBuyz</p>
        </div>
      </div>
      <div className="md:w-3/5 w-4/5 mt-8 mx-auto grid grid-cols-3">
        <div className="text-center">
          <Image
            className="2xl:p-10 lg:p-6 rounded-full"
            src={'https://www.w3schools.com/howto/img_avatar.png'}
            alt='artist profile'
            width={200}
            height={200}
          />
          <div>
            <span className="text-white 2xl:text-4xl text-2xl own-font">D.Arias</span>
          </div>
          <div>
            <span className="text-white 2xl:text-2xl text-xl own-font">Founder</span>
          </div>
        </div>
        <div>
          <div className="sm:block hidden mt-4 pt-4 h-1/4 text-center ">
            <span className="text-white 2xl:text-6xl xl:text-4xl lg:text-4xl md:text-2xl font-bold own-font">
              CustomBuyz
            </span>
            <p className="text-white 2xl:text-2xl  xl:text-xl lg:text-xl md:text-l font-bold own-font">
              House of artistz
            </p>
          </div>
        </div>
        <div className="text-center">
          <Image
            className="2xl:p-10 lg:p-6 rounded-full"
            src={'https://www.w3schools.com/howto/img_avatar.png'}
            alt='artist profile'
            width={200}
            height={200}
          />
          <div>
            <span className="text-white 2xl:text-4xl text-2xl own-font">Mordegats</span>
          </div>
          <div>
            <span className="text-white 2xl:text-2xl text-xl own-font">Co-Founder</span>
          </div>
        </div>
      </div>
      <div className="w-3/5 my-14 mx-auto text-center text-white">
        <span className="2xl:text-8xl text-6xl own-font">Objective</span>
        <div className="mt-10 2xl:text-2xl text-xl text-center own-font-text">
          <p>
            Shopping on CustomBuys is helping and promoting local creationz.
          </p>
          <p className="pt-10">
            Every Sales is a huge move for the custom Movement and is helping a
            lot the local artistz to move forward and keep pushing their
            creativity further.
          </p>
          <p className="pt-10">
            Who knows maybe he es your neighbors next to your house.
          </p>
        </div>
      </div>
    </div>
  );
};
export default about;
