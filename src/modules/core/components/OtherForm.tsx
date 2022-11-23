import * as React from "react";
import { memo } from "react";
import { useForm } from "react-hook-form";

export type OtherFormData = {
  firstName: number;
  lastName: string;
};

export const OtherForm = memo(() => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<OtherFormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  console.log(errors);

  return (
    <form onSubmit={onSubmit}>
      <label>First Name</label>
      <input
        {...register("firstName", {
          required: "This is required",
          maxLength: 20,
        })}
      />
      <label>Last Name</label>
      <input {...register("lastName")} />
      <button
        type="button"
        onClick={() => {
          setValue("lastName", "luo"); // ✅
        }}
      >
        SetValue
      </button>

      <input type="submit" />
    </form>
  );
});

OtherForm.displayName = "OtherForm";
