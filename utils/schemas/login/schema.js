import validator from "@/utils/validator";

const loginSchema = validator.object().shape({
  email: validator.string().email().required(),
  password: validator.string().min(8).required(),
});

export default loginSchema;
