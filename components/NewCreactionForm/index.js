import React, { useRef, useState, useContext } from "react";
import { FaFileImage } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { TEXT_FIELD, PRICE, WHOLENUMBER } from "../../utils/formRules";
import { formErrors } from "../../utils/formErrors";
import SnackbarPortal from "../../utils/snackbarPortal";
import { GlobalContext } from "../../context/GlobalContext";
import Image from "next/image";

const NewCreationForm = () => {
  const inputCreation = useRef(null);
  const [creation, setCreation] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { userState, userDispatch } = useContext(GlobalContext);

  const onSubmit = (e) => {
    console.log("submit");
  };

  const onFileChangeCreation = () => {
    const { current } = inputCreation;
    if (current?.files?.length > 0) {
      const addFiles = current.files[0];
      const tempImg = URL.createObjectURL(addFiles);
      setCreation(tempImg);
    }
  };

  return (
    <form
      className="2xl:w-3/5 xl:w-2/3 lg:w-2/3 md:w-2/3 w-full sm:p-0 p-6 flex flex-col items-center own-font-text"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="text-4xl my-14 own-font">Decorate your house</span>
      <div className="hidden">
        <input
          ref={inputCreation}
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          onChange={onFileChangeCreation}
        />
      </div>
      <div
        id="input-creation"
        className="w-full flex my-2 p-1 self-center place-content-center cursor-pointer py-2 px-3 focus:ring-gray-200 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:border-gray-200 focus:ring-1"
        onClick={() => {
          inputCreation.current.click();
        }}
      >
        <div className="flex flex-col">
          {creation ? (
            <Image
              className="h-20 w-40 self-center"
              src={creation}
              alt="image creation"
            />
          ) : (
            <FaFileImage className="h-16 w-32 p-1 self-center" />
          )}
          <span className="self-center text-md text-black font-bold pl-2 my-2">
            +Add some creationz
          </span>
          <text className="px-4 mb-2 pb-1 text-xs text-justify	text-gray-500">
            High quality pictures are ... text text ... High quality pictures
            are ... text text ... High quality pictures are ... text text ...
            High quality pictures are ... text text ... High quality pictures
            are ... text text ...
          </text>
        </div>
      </div>
      <div className="flex flex-col w-full my-2">
        <label htmlFor="name" className="text-md text-black font-bold mb-1">
          Name
        </label>
        <input
          className="h-10 py-2 px-3 focus:ring-gray-200 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:border-gray-200 focus:ring-1"
          type="text"
          placeholder="Enter a Name"
          {...register("name", {
            required: true,
            pattern: {
              value: TEXT_FIELD,
              message: "The pattern entered does not match the field",
            },
          })}
        ></input>
        {errors.name && (
          <span className="text-red-600 text-sm mt-2">
            {formErrors(errors.name)}
          </span>
        )}
      </div>
      <div className="flex flex-col w-full my-2">
        <label
          htmlFor="description"
          className="text-md text-black font-bold mb-1"
        >
          Description
        </label>
        <textarea
          className="h-14 py-2 px-3 focus:ring-gray-200 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:border-gray-200 focus:ring-1"
          type="text"
          placeholder="Add a Description"
          {...register("description", {
            required: true,
            pattern: {
              value: TEXT_FIELD,
              message: "The pattern entered does not match the field",
            },
          })}
        ></textarea>
        {errors.name && (
          <span className="text-red-600 text-sm mt-2">
            {formErrors(errors.name)}
          </span>
        )}
      </div>
      <div className="flex flex-col w-full my-2">
        <label htmlFor="price" className="text-md text-black font-bold mb-1">
          Price
        </label>
        <input
          className="w-1/2 h-10 py-2 px-3 focus:ring-gray-200 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:border-gray-200 focus:ring-1"
          type="text"
          placeholder="Enter a price"
          {...register("price", {
            required: true,
            pattern: {
              value: PRICE,
              message: "The pattern entered does not match the field",
            },
          })}
        ></input>
        {errors.price && (
          <span className="text-red-600 text-sm mt-2">
            {formErrors(errors.price)}
          </span>
        )}
      </div>
      <div className="flex flex-col w-full my-2">
        <label htmlFor="week" className="text-md text-black font-bold mb-1">
          Weeks
        </label>
        <input
          className="w-1/2 h-10 py-2 px-3 focus:ring-gray-200 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:border-gray-200 focus:ring-1"
          type="text"
          placeholder="Weeks"
          {...register("week", {
            required: true,
            pattern: {
              value: WHOLENUMBER,
              message: "The pattern entered does not match the field",
            },
          })}
        ></input>
        {errors.week && (
          <span className="text-red-600 text-sm mt-2">
            {formErrors(errors.week)}
          </span>
        )}
      </div>
      <input
        className="flex ml-auto mb-2 text-3xl font-bold cursor-pointer own-font"
        type="submit"
        value="Let's go!"
      />
      {userState.error && <SnackbarPortal {...userState.error} />}
    </form>
  );
};

export default NewCreationForm;
