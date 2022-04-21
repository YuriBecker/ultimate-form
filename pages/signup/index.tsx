import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Container,
  PasswordInput,
  Switch,
  TextInput,
} from "@mantine/core";
import { NextPage } from "next";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import useSubmitForm from "@/hooks/useSubmitForm";
import formatterPhone from "@/utils/formatters/phone";
import signUpSchema from "@/utils/schemas/signup/schema";
import PhoneInput from "@/components/Inputs/Phone";

const Signup: NextPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({ resolver: yupResolver(signUpSchema), mode: "onBlur" });

  const { showFormValues } = useSubmitForm();

  const hasPhone = watch("hasPhone");

  return (
    <Container size="xs">
      <form onSubmit={handleSubmit(showFormValues)} noValidate>
        <TextInput
          label="Full name"
          autoComplete="name"
          required
          error={errors?.name?.message}
          {...register("name")}
        />

        <TextInput
          label="Email"
          autoComplete="username"
          required
          error={errors?.email?.message}
          {...register("email")}
        />

        <PasswordInput
          label="Password"
          autoComplete="new-password"
          required
          error={errors?.password?.message}
          {...register("password")}
        />

        <Switch label="I have a phone number" {...register("hasPhone")} />

        {hasPhone && (
          <PhoneInput
            errorMessage={errors?.phone?.message}
            defaultValue={""}
            control={control}
            name={"phone"}
          />
        )}

        <Button fullWidth type="submit" uppercase loading={isSubmitting}>
          SIGN UP
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
