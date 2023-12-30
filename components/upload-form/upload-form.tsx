import { useService } from "@/hooks";
import * as Styles from "./upload-form.styles";

export const UploadForm = ({ ...props }) => {
  const {
    handleDownload,
    handleUpload,
    updateFile,
    pending,
    file,
    isUpload,
  } = useService({ ...props });

  return (
    <Styles.Container>
      <Styles.Title>Webp to {props.type.toUpperCase()} Converter</Styles.Title>
      <form onSubmit={handleUpload}>
        <Styles.Parent className="parent">
          <Styles.FileUpload className="file-upload">
            <h3>Click here to select image</h3>
            <p>Maximum file size 20mb</p>
            {file && <p>{file.name}</p>}
            <input type="file" name="image" accept="image/webp" onChange={(e) => updateFile(e.target.files?.[0])} />
          </Styles.FileUpload>
        </Styles.Parent>
        {!isUpload?.success && <Styles.UploadButton>{pending ? `Uploading...` : `Upload`}</Styles.UploadButton>}
        {
          isUpload?.success && <Styles.DownloadButton href="#" passHref legacyBehavior>
            {/* @ts-ignore */}
            <Styles.DownloadButton onClick={handleDownload}>{pending? `Downloading...` : `Download ${props.type.toUpperCase()}`}</Styles.DownloadButton>
          </Styles.DownloadButton>
        }
      </form>
    </Styles.Container>
  )
}