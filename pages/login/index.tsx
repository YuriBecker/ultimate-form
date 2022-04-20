import { Button, Container, PasswordInput, TextInput } from "@mantine/core";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import useSubmitForm from "@/hooks/useSubmitForm";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "@/utils/schemas/login/schema";
import { DevTool } from "@hookform/devtools";

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm({ resolver: yupResolver(loginSchema), mode: "onBlur" });

  const { showFormValues } = useSubmitForm();

  return (
    <Container size="xs">
      <form onSubmit={handleSubmit(showFormValues)} noValidate>
        <TextInput
          type="email"
          label="Email"
          autoComplete="username"
          required
          error={errors?.email?.message}
          {...register("email")}
        />
        <PasswordInput
          label="Password"
          autoComplete="current-password"
          required
          error={errors?.password?.message}
          {...register("password")}
        />

        <Button fullWidth type="submit" loading={isSubmitting} uppercase>
          SIGN IN
        </Button>

        <DevTool control={control} />
      </form>
    </Container>
  );
};

export default Login;
