import { DropzoneStatus } from "@mantine/dropzone";
import {
  Icon as TablerIcon,
  Photo,
  Upload,
  X,
  FileCheck,
} from "tabler-icons-react";

export function ImageUploadIcon({
  status,
  hasFile,
  ...props
}: React.ComponentProps<TablerIcon> & {
  status: DropzoneStatus;
  hasFile: boolean;
}) {
  if (status.accepted) {
    return <Upload {...props} />;
  }

  if (status.rejected) {
    return <X {...props} />;
  }

  if (hasFile) {
    return <FileCheck {...props} />;
  }

  return <Photo {...props} />;
}
