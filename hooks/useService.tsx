import React from "react";

export const useService = ({ type }: any) => {
  const [file, updateFile] = React.useState<File>();
  const [isUpload, updateUpload] = React.useState<any>({ success: false });
  const [pending, updatePending] = React.useState<boolean>(false);

  const handleUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!file) return;
    if (pending) return;
    
    updatePending(true);

    try {
      const data = new FormData();
      data.set('file', file);
      data.set('type', type);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      });

      if (!res.ok) throw new Error(await res.text());

      const json = await res.json();
      
      updateUpload(json);
      updatePending(false);
    } catch (e: any) {
      console.error(e);
      updatePending(false);
    }
  }

  const handlePrevDownload = async () => {
    try {
      const response = await fetch(`${isUpload.path}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');

      link.href = url;
      link.setAttribute('download', isUpload.path);

      document.body.appendChild(link);
      link.click();
      // @ts-ignore
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  const handleDownload = async () => {
    updatePending(true);
    const response = await fetch(`/api/download?image=${isUpload.path}`);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = isUpload.path;
    link.click();
    window.URL.revokeObjectURL(url);
    updatePending(false);
  };

  return {
    handleDownload,
    handleUpload,
    updateFile,
    pending,
    file,
    isUpload,
  }
}