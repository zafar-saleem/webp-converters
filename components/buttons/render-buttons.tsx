import { UploadButton } from "./upload";
import { DownloadButton } from "./download";
import { Props } from "./interfaces";

export const RenderButtons: any = {
  upload: ({ pending }: Props) => 
            <UploadButton pending={pending} />,
  download: ({ handleDownload, pending, type }: Props) => 
              <DownloadButton handleDownload={handleDownload} pending={pending} type={type} />
}