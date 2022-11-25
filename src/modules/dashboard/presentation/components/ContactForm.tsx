import { TextField } from "@mui/material";
import * as React from "react";
import { memo, useState } from "react";
import { useForm } from "react-hook-form";

export type ContactFormData = {
  firstName: number;
  lastName: string;
};

export const ContactForm = memo(() => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  const [shrink, setShrink] = useState<boolean>(false);
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
      <TextField
        id="outlined-error"
        label="Error"
        defaultValue="test"
        helperText={errors.lastName?.message}
        error={errors.lastName !== undefined ? true : false}
        {...register("lastName", {
          required: "This is required",
          minLength: 20,
        })}
      />

      <button
        type="button"
        onClick={() => {
          setValue("lastName", "luo"); // ✅
          setShrink(true);
        }}
      >
        SetValue
      </button>

      <input type="submit" />
    </form>
  );
});

ContactForm.displayName = "ContactForm";
