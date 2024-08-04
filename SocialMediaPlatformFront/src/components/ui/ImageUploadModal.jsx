import React, { useCallback } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

const ImageUploadModal = ({ show, onHide, files, setFiles }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (files.length + acceptedFiles.length > 5) {
        alert("You can only upload up to 5 images.");
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
    accept: "image/*",
    multiple: true,
  });

  const removeFile = (file) => () => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  const renderFiles = files.map((file) => (
    <div key={file.name} className="d-flex flex-column align-items-center">
      <img
        src={file.preview}
        alt={file.name}
        className="img-thumbnail"
        width={200}
      />
      <Button variant="danger" onClick={removeFile(file)} className="mt-2">
        Remove
      </Button>
    </div>
  ));

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Upload Images</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
            <p>Drag & drop image files here, or click to select files</p>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
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

export default ImageUploadModal;
