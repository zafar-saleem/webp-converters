import { Props } from "../interfaces";
import * as Styles from "./upload-button.styles";

export const UploadButton = ({ pending }: Props) => {
  if (pending) {
    return <Styles.UploadButton>Uploading & converting...</Styles.UploadButton>
  }
  return (
    <Styles.UploadButton>Upload</Styles.UploadButton>
  )
}
