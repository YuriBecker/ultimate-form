import { Button, Container, NativeSelect, TextInput } from "@mantine/core";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import countryList from "@/utils/countrysList";
import useSubmitForm from "@/hooks/useSubmitForm";
import { yupResolver } from "@hookform/resolvers/yup";
import addressSchema from "@/utils/schemas/address/schema";

const Address: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(addressSchema),
  });

  const { showFormValues } = useSubmitForm();

  return (
    <Container size="xs">
      <form onSubmit={handleSubmit(showFormValues)} noValidate>
        <TextInput
          label="Address line"
          autoComplete="address-line1"
          required
          error={errors?.address?.message}
          {...register("address")}
        />
        <TextInput
          label="City"
          autoComplete="address-level2"
          required
          error={errors?.city?.message}
          {...register("city")}
        />
        <TextInput
          label="State / Province / Region"
          autoComplete="address-level1"
          required
          error={errors?.state?.message}
          {...register("state")}
        />
        <TextInput
          label="ZIP / Postal code"
          autoComplete="postal-code"
          error={errors?.zip?.message}
          {...register("zip")}
        />

        <NativeSelect
          data={countryList}
          label="Country"
          required
          autoComplete="country"
          error={errors?.country?.message}
          {...register("country")}
        />

        <Button fullWidth type="submit" uppercase loading={isSubmitting}>
          Add address
        </Button>
      </form>
    </Container>
  );
};

export default Address;
