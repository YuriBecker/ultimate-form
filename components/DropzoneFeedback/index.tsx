import { Group, MantineTheme, Text } from "@mantine/core";
import { DropzoneStatus } from "@mantine/dropzone";
import { ImageUploadIcon } from "./ImageUploadIcon";

function getIconColor(
  status: DropzoneStatus,
  theme: MantineTheme,
  hasFile: boolean
) {
  return status.accepted || hasFile
    ? theme.colors[theme.primaryColor][6]
    : status.rejected
    ? theme.colors.red[6]
    : theme.colors.gray[7];
}

const DropzoneFeedback = ({
  status,
  theme,
  file,
  maxSizeString,
}: {
  status: DropzoneStatus;
  theme: MantineTheme;
  file: File;
  maxSizeString: string;
}) => (
  <Group
    position="center"
    spacing="xs"
    style={{
      minHeight: 220,
      pointerEvents: "none",
    }}
  >
    <ImageUploadIcon
      status={status}
      style={{ color: getIconColor(status, theme, !!file) }}
      size={80}
      hasFile={!!file}
    />

    <div>
      {!!file ? (
        <>
          <Text size="xl" inline color="pink">
            {file.name} uploaded!
          </Text>
          <Text size="sm" color="dimmed" inline mt={"sm"}>
            Click bellow to send the image
          </Text>
        </>
      ) : (
        <>
          <Text size="xl" inline>
            Drag a image here or click to select file
          </Text>
          <Text size="sm" color="dimmed" inline mt={"sm"}>
            The file should not exceed{" "}
            <Text color="pink" weight="bold" style={{ display: "inline" }}>
              {maxSizeString}
            </Text>
          </Text>
        </>
      )}
    </div>
  </Group>
);

export default DropzoneFeedback;
