import React, { useEffect } from "react";
import { Controller, useController, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schemaValidation = yup.object({
  firstName: yup.string().required().max(10),
});

const SignUpFormRhf = (props) => {
  //khai báo các đối tượng
  const {
    register,
    handleSubmit,
    watch,
    reset,
    resetField,
    setFocus,
    setValue,
    control,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });

  //useEffect
  useEffect(() => {
    setFocus("showAge");
  }, [setFocus]);

  //viết sự kiện onSubmit
  const onSubmit = async (values) => {
    if (isValid) {
      console.log(values);
      reset({});
    }
  };

  //viết sự kiên demo data
  const setDemoData = () => {
    setValue("firstName", "tutn");
  };
  const watchShowAge = watch("showAge", false);

  //Controller

  const MyInput = ({ control, ...props }) => {
    const { field } = useController({
      control,
      name: props.name,
      defaultValue: "",
    });
    return (
      <div>
        <label>{props.name}</label>
        <input {...props} {...field}></input>
      </div>
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} action="'">
        {/* custom input */}
        <MyInput
          control={control}
          name="email"
          id="email"
          placeholder="your email"
        ></MyInput>
        <div>
          <label htmlFor="firtName">firt name: </label>
          <input
            autoComplete="off"
            type="text"
            placeholder="enter the first name"
            {...register("firstName")}
          />
          {errors?.firstName && <div>{errors.firstName.message}</div>}
        </div>

        <div>
          <label htmlFor="showAge"></label>
          <input
            type="checkbox"
            name="showAge"
            id=""
            {...register("showAge")}
          />
        </div>
        {watchShowAge && (
          <div>
            <label htmlFor="phoneNumber">Phone number: </label>
            <input
              type="number"
              name="phoneNumber"
              id=""
              {...register("phoneNumber")}
            />
          </div>
        )}

        <div>
          {isSubmitting && <span>Loading</span>}
          {!isSubmitting && <button>Submit</button>}
        </div>

        <div>
          <button onClick={setDemoData}>Demo</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpFormRhf;
