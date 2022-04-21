import DropzoneFeedback from "@/components/DropzoneFeedback";
import useSubmitForm from "@/hooks/useSubmitForm";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, useMantineTheme } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { showNotification } from "@mantine/notifications";
import { Controller, useForm } from "react-hook-form";
import fileUploadSchema from "@/utils/schemas/file-upload/schema";

const FileUpload = () => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm({ resolver: yupResolver(fileUploadSchema), mode: "onSubmit" });

  const { showFormValues } = useSubmitForm();

  const theme = useMantineTheme();

  return (
    <form onSubmit={handleSubmit(showFormValues)} noValidate>
      <Controller
        defaultValue={null}
        control={control}
        name={"file"}
        render={({ field }) => (
          <Dropzone
            accept={[MIME_TYPES.png, MIME_TYPES.jpeg, MIME_TYPES.gif]}
            onDrop={(files) => field.onChange(files[0])}
            onReject={() =>
              showNotification({
                title: "Upload error",
                message: "Verify the file size and format!",
                color: "red",
              })
            }
            maxSize={5e6}
            style={{
              maxWidth: theme.breakpoints.xs,
              margin: "0 auto",
              borderColor: errors?.file && "red",
              color: errors?.file && "red",
            }}
            multiple={false}
          >
            {(status) => (
              <DropzoneFeedback
                status={status}
                theme={theme}
                file={field.value}
                maxSizeString="5mb"
              />
            )}
          </Dropzone>
        )}
      />

      <Button
        fullWidth
        type="submit"
        loading={isSubmitting}
        uppercase
        style={{
          maxWidth: theme.breakpoints.xs,
          margin: "0 auto",
          marginTop: theme.spacing.xl,
        }}
      >
        Send file
      </Button>
    </form>
  );
};

export default FileUpload;
