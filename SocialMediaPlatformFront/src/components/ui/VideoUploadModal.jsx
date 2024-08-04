import React, { useCallback } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import styles from "./ModalStyles.module.css";

const VideoUploadModal = ({ show, onHide, files, setFiles }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (files.length + acceptedFiles.length > 2) {
        alert("You can only upload up to 2 videos.");
        return;
      }
      setFiles((prevFiles) => [
        ...prevFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
    [files, setFiles]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "video/*",
    multiple: true,
  });

  const removeFile = (file) => () => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  const renderFiles = files.map((file) => (
    <div key={file.name} className="d-flex flex-column align-items-center">
      <video
        src={file.preview}
        alt={file.name}
        className="img-thumbnail"
        width={200}
        controls
      />
      <Button variant="danger" onClick={removeFile(file)} className="mt-2">
        Remove
      </Button>
    </div>
  ));

  return (
    <Modal show={show} onHide={onHide} dialogClassName={styles.darkModal}>
      <Modal.Header closeButton className={styles.darkModalHeader}>
        <Modal.Title>Upload Videos</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.darkModalBody}>
        <div
          {...getRootProps({
            className: `border rounded p-3 ${isDragActive ? "bg-light" : ""}`,
            style: { textAlign: "center" },
          })}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : files.length > 0 ? (
            <div className="d-flex gap-2 flex-wrap">{renderFiles}</div>
          ) : (
            <p>Drag & drop video files here, or click to select files</p>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer className={styles.darkModalFooter}>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            // Add your upload logic here
            onHide();
          }}
        >
          Upload
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default VideoUploadModal;
