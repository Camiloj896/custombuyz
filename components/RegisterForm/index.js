import React, { useRef, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import {
  FaUserAlt,
  FaFileImage,
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { formErrors } from "../../utils/formErrors";
import { TEXT_FIELD, LINK } from "../../utils/formRules";
import SnackbarPortal from "../../utils/snackbarPortal";
import { GlobalContext } from "../../context/GlobalContext";
import Image from "next/image";

const RegisterForm = () => {
  const inputBanner = useRef(null);
  const inputProfile = useRef(null);
  const [profile, setProfile] = useState(null);
  const [banner, setBanner] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { userState, userDispatch } = useContext(GlobalContext);

  const onSubmit = (e) => {
    console.log("submit");
  };

  const onFileChangeProfile = () => {
    const { current } = inputProfile;
    if (current?.files?.length > 0) {
      const addFiles = current.files[0];
      const tempImg = URL.createObjectURL(addFiles);
      setProfile(tempImg);
    }
  };

  const onFileChangeBanner = () => {
    const { current } = inputBanner;
    if (current?.files?.length > 0) {
      const addFiles = current.files[0];
      const tempImg = URL.createObjectURL(addFiles);
      setBanner(tempImg);
    }
  };
  return (
    <form
      className="2xl:w-3/5 xl:w-2/3 lg:w-2/3 md:w-2/3 w-full sm:px-0 px-6 flex flex-col items-center own-font-text"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="text-4xl my-14 own-font">Make It A Home</span>
      <div className="flex items-center">
        <div
          id="input-profile"
          className="my-2 h-20 w-20 rounded-full cursor-pointer py-2 px-3 focus:ring-gray-200 border border-slate-300 text-sm shadow-sm focus:outline-none focus:border-gray-200 focus:ring-1"
          onClick={() => {
            inputProfile.current.click();
          }}
        >
          <div className="hidden">
            <input
              ref={inputProfile}
              type="file"
              accept="image/png, image/jpg, image/jpeg"
              onChange={onFileChangeProfile}
            />
          </div>
          {profile ? (
            <Image src={profile} alt="image profile" />
          ) : (
            <FaUserAlt className="h-full w-full p-1" />
          )}
        </div>
        <span className="text-md text-black font-bold pl-2 my-10">
          Add a profile picture
        </span>
      </div>
      <div className="hidden">
        <input
          ref={inputBanner}
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          onChange={onFileChangeBanner}
        />
      </div>
      <div
        id="input-banner"
        className="w-full flex my-3 self-center place-content-center cursor-pointer py-2 px-3 focus:ring-gray-200 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:border-gray-200 focus:ring-1"
        onClick={() => {
          inputBanner.current.click();
        }}
      >
        <div className="flex flex-col">
          {banner ? (
            <Image
              src={banner}
              className="h-20 w-40 p-1 self-center"
              alt="image banner"
            />
          ) : (
            <FaFileImage className="h-16 w-32 p-1 self-center" />
          )}

          <span className="self-center text-md text-black font-bold pl-2 my-2">
            +Add your house banner
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full my-2">
        <label
          htmlFor="housename"
          className="text-md text-black font-bold mb-1"
        >
          House Name
        </label>
        <input
          className="h-10 py-2 px-3 focus:ring-gray-200 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:border-gray-200 focus:ring-1"
          type="text"
          placeholder="Choose a House Name"
          {...register("housename", {
            required: true,
            pattern: {
              value: TEXT_FIELD,
              message: "The pattern entered does not match the field",
            },
          })}
        ></input>
        {errors.housename && (
          <span className="text-red-600 text-sm mt-2">
            {formErrors(errors.housename)}
          </span>
        )}
      </div>
      <div className="flex flex-col w-full my-2">
        <label htmlFor="bio" className="text-md text-black font-bold mb-1">
          Bio
        </label>
        <textarea
          className="h-14 py-2 px-3 focus:ring-gray-200 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:border-gray-200 focus:ring-1"
          type="text"
          placeholder="Bio is importante because..."
          {...register("bio", {
            required: true,
            pattern: {
              value: TEXT_FIELD,
              message: "The pattern entered does not match the field",
            },
          })}
        ></textarea>
        {errors.bio && (
          <span className="text-red-600 text-sm mt-2">
            {formErrors(errors.bio)}
          </span>
        )}
      </div>
      <div className="flex flex-col w-full my-2">
        <label htmlFor="city" className="text-md text-black font-bold mb-1">City</label>
        <input
          className="h-10 py-2 px-3 focus:ring-gray-200 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:border-gray-200 focus:ring-1"
          type="text"
          placeholder="Choose your City"
          {...register("city", {
            required: true,
            pattern: {
              value: TEXT_FIELD,
              message: "The pattern entered does not match the field",
            },
          })}
        ></input>
        {errors.city && (
          <span className="text-red-600 text-sm mt-2">
            {formErrors(errors.city)}
          </span>
        )}
      </div>
      <div className="flex flex-col w-full my-3">
        <span className="text-l font-bold my-1 self-center">
          Do you have social media?
        </span>
        <div className="flex my-2 w-full">
          <FaFacebookSquare className="2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6" />
          <input
            className="mx-2 w-full h-8 p-1 self-center py-2 px-3 focus:ring-gray-200 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:border-gray-200 focus:ring-1"
            type="text"
            placeholder="Facebook link"
            {...register("facebook", {
              pattern: { value: LINK, message: "Invalid URL" },
            })}
          ></input>
        </div>
        {errors.facebook && (
          <span className="text-red-600 text-sm mt-2">
            {formErrors(errors.facebook)}
          </span>
        )}
        <div className="flex my-2 w-full">
          <FaInstagram className="2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6" />
          <input
            className="mx-2 w-full h-8 p-1 self-center py-2 px-3 focus:ring-gray-200 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:border-gray-200 focus:ring-1"
            type="text"
            placeholder="Instagram link"
            {...register("instagram", {
              pattern: { value: LINK, message: "Invalid URL" },
            })}
          ></input>
        </div>
        {errors.instagram && (
          <span className="text-red-600 text-sm mt-2">
            {formErrors(errors.instagram)}
          </span>
        )}
        <div className="flex my-2 w-full">
          <FaYoutube className="2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6" />
          <input
            className="mx-2 w-full h-8 p-1 self-center py-2 px-3 focus:ring-gray-200 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:border-gray-200 focus:ring-1"
            type="text"
            placeholder="Youtube link"
            {...register("youtube", {
              pattern: { value: LINK, message: "Invalid URL" },
            })}
          ></input>
        </div>
        {errors.youtube && (
          <span className="text-red-600 text-sm mt-2">
            {formErrors(errors.youtube)}
          </span>
        )}
        <div className="flex my-2 w-full">
          <FaTiktok className="2xl:w-10 2xl:h-10 xl:w-8 xl:h-8 lg:w-8 lg:h-8 md:w-8 md:h-8 w-6 h-6" />
          <input
            className="mx-2 w-full h-8 p-1 self-center py-2 px-3 focus:ring-gray-200 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:border-gray-200 focus:ring-1"
            type="text"
            placeholder="Tiktok link"
            {...register("tiktok", {
              pattern: { value: LINK, message: "Invalid URL" },
            })}
          ></input>
        </div>
        {errors.tiktok && (
          <span className="text-red-600 text-sm mt-2">
            {formErrors(errors.tiktok)}
          </span>
        )}
      </div>
      <input
        className="flex ml-auto mb-2 text-3xl font-bold cursor-pointer own-font"
        type="submit"
        value="Next"
      />
      {userState.error && <SnackbarPortal {...userState.error} />}
    </form>
  );
};
export default RegisterForm;
