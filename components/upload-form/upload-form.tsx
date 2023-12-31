import { useService } from "@/hooks";
import * as Styles from "./upload-form.styles";
import { RenderButtons } from "../buttons/render-buttons";

export const UploadForm = ({ ...props }) => {
  const {
    handleDownload,
    handleUpload,
    updateFile,
    pending,
    file,
    isUpload,
  } = useService({ ...props });
  let btnType, btnProps;

  if (isUpload.success) {
    btnType = "download";
    btnProps = {
      pending,
      handleDownload,
      type: props.type,
    };
  } else {
    btnType = "upload";
    btnProps = {
      pending,
    };
  }

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
        {RenderButtons[btnType]({ ...btnProps })}
      </form>
    </Styles.Container>
  )
}