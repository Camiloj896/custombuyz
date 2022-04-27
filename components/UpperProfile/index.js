import React, { useState } from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";

const UpperProfile = () => {
  return (
    <div className="h-full w-full">
      <div className="xl:w-2/4 lg:w-3/4 mx-auto">
        <div className="w-full h-60 text-center rounded-lg bg-gray-300">
          <img
            src="https://www.teahub.io/photos/full/303-3034192_default-banner-banner-jpg.jpg"
            className="h-full mx-auto rounded-lg"
          />
        </div>
        <div className="flex flex-row w-full h-full justify-center">
          <div className="md:flex w-full self-start pt-10 pl-10 hidden">
            <div className="">
              <div className="flex m-2 w-full justify-left items-center">
                <FaFacebookSquare className="2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6" />
                <label className="mx-2 own-font-text ">ViviiCustom1</label>
              </div>
              <div className="flex m-2 w-full justify-left items-center">
                <FaInstagram className="2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6" />
                <label className="mx-2 own-font-text">@ViviiCustom</label>
              </div>
              <div className="flex m-2 w-full justify-left items-center">
                <FaYoutube className="2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6" />
                <label className="mx-2 own-font-text">ViviiCustom</label>
              </div>
              <div className="flex m-2 w-full justify-left items-center">
                <FaTiktok className="2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6" />
                <label className="mx-2 own-font-text">@ViviiCustom</label>
              </div>
            </div>
          </div>
          <div className="w-full p-2">
            <div className="w-full h-full py-2 text-center">
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                className="h-40 mx-auto my-4 rounded-full"
              />
              <label className="text-6xl own-font text-black">VibiCustom</label>
              <p className="text-md own-font-text text-gray-500">
                Canada, Québec
              </p>
              <p className="my-3 text-sm own-font-text text-black">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="md:flex flex-col w-full self-start pt-10 justify-center hidden">
            <div className="flex justify-center">
              <button className="flex xl:w-4/5 w-3/5 mx-auto p-2 items-center shadow-[0px_0px_4px_3px_rgba(0,0,0,0.1)] rounded-lg">
                <FaEnvelope className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 lg:w-6 lg:h-6 md:w-6 md:h-6 w-4 h-4" />
                <label className="text-md p-1 mx-auto cursor-pointer own-font-text">
                  Contact me
                </label>
              </button>
            </div>
            <div className="flex mt-5 justify-center w-full">
              <FaEnvelope className="2xl:w-8 2xl:h-8 xl:w-6 xl:h-6 lg:w-6 lg:h-6 md:w-6 md:h-6 w-4 h-4" />
              <label className="pl-1 text-md own-font-text">
                vivicustom@gmail.com
              </label>
            </div>
          </div>
          <div className="md:hidden w-3/5 w-full self-start pb-10 flex mx-auto content-center self-center">
            <div>
              <div className="flex m-2 w-full justify-left items-center">
                <FaFacebookSquare className="2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6" />
                <label className="mx-2 own-font-text ">ViviiCustom1</label>
              </div>
              <div className="flex m-2 w-full justify-left items-center">
                <FaInstagram className="2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6" />
                <label className="mx-2 own-font-text">@ViviiCustom</label>
              </div>
              <div className="flex m-2 w-full justify-left items-center">
                <FaYoutube className="2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6" />
                <label className="mx-2 own-font-text">ViviiCustom</label>
              </div>
              <div className="flex m-2 w-full justify-left items-center">
                <FaTiktok className="2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6" />
                <label className="mx-2 own-font-text">@ViviiCustom</label>
              </div>
              <div className="lg:flex m-2 w-full hidden">
                <FaEnvelope className="2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6" />
                <label className="mx-2 own-font-text">
                  vivicustom@gmail.com
                </label>
              </div>
              <div className="flex mt-5">
                <button className="flex w-full mx-auto p-2 items-center shadow-[0px_0px_4px_3px_rgba(0,0,0,0.1)] rounded-lg">
                  <FaEnvelope className="2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6" />
                  <label className="mx-auto cursor-pointer own-font-text">
                    Contact me
                  </label>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperProfile;
