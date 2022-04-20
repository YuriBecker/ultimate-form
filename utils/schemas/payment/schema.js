import validator from "@/utils/validator";

const paymentSchema = validator.object().shape({
  name: validator.string().name().required(),
  number: validator.string().required(),
  expiryDate: validator
    .string()
    .required()
    .matches(/^(0[1-9]|1[0-2])\/([0-9]{4}|[0-9]{2})$/, "Formato inválido"),
  cvc: validator
    .string()
    .required()
    .min(3, "Deve ter no mínimo 3 dígitos")
    .max(4, "Deve ter no máximo 4 dígitos"),
});

export default paymentSchema;
