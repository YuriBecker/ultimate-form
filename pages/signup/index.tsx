import { formatCPF } from "@brazilian-utils/brazilian-utils";
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
import signUpSchema from "./schema";
import { DevTool } from "@hookform/devtools";

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

        <Controller
          defaultValue={""}
          control={control}
          name={"cpf"}
          render={({ field }) => (
            <TextInput
              label="CPF"
              required
              error={errors?.cpf?.message}
              onChange={(e) => field.onChange(formatCPF(e.target.value))}
              value={field.value}
            />
          )}
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
          <Controller
            defaultValue={""}
            control={control}
            name={"phone"}
            render={({ field }) => (
              <TextInput
                label="Phone"
                autoComplete="phone"
                required
                type="tel"
                error={errors?.phone?.message}
                onChange={(e) => field.onChange(formatterPhone(e.target.value))}
                value={field.value}
              />
            )}
          />
        )}

        <Button fullWidth type="submit" uppercase loading={isSubmitting}>
          SIGN UP
        </Button>

        <DevTool control={control} />
      </form>
    </Container>
  );
};

export default Signup;
