import validator from "@/utils/validator";

const addressSchema = validator.object().shape({
  address: validator.string().required(),
  city: validator.string().required(),
  state: validator.string().required(),
  zip: validator.string().required(),
  country: validator.string().required(),
});

export default addressSchema;
