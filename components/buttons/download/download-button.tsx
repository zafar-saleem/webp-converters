import { Props } from "../interfaces";
import * as Styles from "./download-button.styles";

export const DownloadButton = ({ pending, handleDownload, type }: Props) => {
  if (pending) {
    return <Styles.DownloadButton onClick={handleDownload}>Downloading...</Styles.DownloadButton>
  }

  return (
    // @ts-ignore
    <Styles.DownloadButton onClick={handleDownload}>{`Download ${type.toUpperCase()}`}</Styles.DownloadButton>
  )
}
