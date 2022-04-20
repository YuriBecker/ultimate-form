import * as yup from "yup";
import { isValidCPF, isValidPhone } from "@brazilian-utils/brazilian-utils";

yup.setLocale({
  mixed: {
    default: "Não é válido",
    required: "Campo obrigatório",
  },
  number: {
    min: "Deve ser no mínimo ${min}",
    max: "Deve ser no máximo ${max}",
    lessThan: "Deve ser menor que ${lessThan}",
    moreThan: "Deve ser maior que ${moreThan}",
  },
  string: {
    email: "Email inválido",
    max: "Deve ter no máximo ${max} caracteres",
    min: "Deve ter no mínimo ${min} caracteres",
  },
});

yup.addMethod(yup.string, "phone", function (errorMessage) {
  return this.test(`phone`, errorMessage, function (value) {
    const { path, createError } = this;

    return (
      !value ||
      isValidPhone(value) ||
      createError({ path, message: errorMessage || "Telefone inválido" })
    );
  });
});

yup.addMethod(yup.string, "cpf", function (errorMessage) {
  return this.test(`cpf`, errorMessage, function (value) {
    const { path, createError } = this;

    return (
      !value ||
      isValidCPF(value) ||
      createError({ path, message: errorMessage || "CPF inválido" })
    );
  });
});

yup.addMethod(yup.string, "name", function (errorMessage) {
  return this.test(`name`, errorMessage, function (value) {
    const { path, createError } = this;

    return (
      !value ||
      /^[a-z]+(?: [a-z]+)+$/i.test(value) ||
      createError({ path, message: errorMessage || "Digite seu nome completo" })
    );
  });
});

export default yup;
