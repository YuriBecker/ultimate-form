import validator from "@/utils/validator";

const fileUploadSchema = validator.object().shape({
  file: validator.mixed().required(),
});

export default fileUploadSchema;
