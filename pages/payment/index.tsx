import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, NumberInput, TextInput } from "@mantine/core";
import { NextPage } from "next";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import useSubmitForm from "@/hooks/useSubmitForm";
import paymentSchema from "@/utils/schemas/payment/schema";
import { DevTool } from "@hookform/devtools";

const Payment: NextPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(paymentSchema),
  });

  const { showFormValues } = useSubmitForm();

  return (
    <Container size="xs">
      <form onSubmit={handleSubmit(showFormValues)} noValidate>
        <TextInput
          label="Name on card"
          autoComplete="cc-name"
          required
          error={errors?.name?.message}
          {...register("name")}
        />

        <Controller
          defaultValue={""}
          control={control}
          name={"number"}
          render={({ field }) => (
            <TextInput
              label="Card number"
              autoComplete="cc-number"
              inputMode="numeric"
              required
              error={errors?.number?.message}
              onChange={field.onChange}
              value={field.value}
              onBlur={(e) =>
                field.onChange(
                  e.target.value
                    .replace(/\W/gi, "")
                    .replace(/\D+/g, "")
                    .replace(/(.{4})/g, "$1 ")
                )
              }
            />
          )}
        />

        <TextInput
          label="Expiry date"
          autoComplete="cc-exp"
          description="MM/YY"
          required
          error={errors?.expiryDate?.message}
          {...register("expiryDate")}
        />

        <Controller
          defaultValue={""}
          control={control}
          name={"securityCode"}
          render={({ field }) => (
            <NumberInput
              label="Security code"
              required
              error={errors?.securityCode?.message}
              onChange={field.onChange}
              value={field.value}
              hideControls
            />
          )}
        />

        <Button fullWidth type="submit" loading={isSubmitting} uppercase>
          PAY
        </Button>
        <DevTool control={control} />
      </form>
    </Container>
  );
};

export default Payment;
