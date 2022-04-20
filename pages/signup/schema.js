import validator from "@/utils/validator";

const signUpSchema = validator.object().shape({
  name: validator.string().name().required(),
  email: validator.string().email().required(),
  password: validator.string().min(8).required(),
  cpf: validator.string().cpf().required(),
  hasPhone: validator.boolean(),
  phone: validator.string().phone().when("hasPhone", {
    is: true,
    then: validator.string().required(),
  }),
});

export default signUpSchema;
