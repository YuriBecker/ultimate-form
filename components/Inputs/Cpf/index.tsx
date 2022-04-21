import { formatCPF } from "@brazilian-utils/brazilian-utils";
import { TextInput } from "@mantine/core";
import React from "react";
import { Controller, ControllerProps } from "react-hook-form";

type Props = {
  errorMessage?: string;
} & Omit<ControllerProps, "render">;

const CpfInput = ({ errorMessage, ...controlProps }: Props) => {
  return (
    <Controller
      {...controlProps}
      render={({ field }) => (
        <TextInput
          label="CPF"
          required
          error={errorMessage}
          onChange={(e) => field.onChange(formatCPF(e.target.value))}
          value={field.value}
        />
      )}
    />
  );
};

export default CpfInput;
