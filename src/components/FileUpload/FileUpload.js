import React, { useRef, useState, useEffect } from "react";
import { Container, Wrapper, Preview } from "./FileUpload.styled";
import { Upload } from "react-bootstrap-icons";
import { Typography } from "../../shared/elements";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const FileUpload = ({ onFileSelected }) => {
  const inputFile = useRef(null);
  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const handleOpenFileWindow = () => {
    if (inputFile.current) {
      inputFile.current.click();
    }
  };

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file?.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);

    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      const image = new Image();
      fileReader.onload = (e) => {
        const { result } = e.target;
        image.src = fileReader.result;
        setFileDataURL(result);
      };
      fileReader.readAsDataURL(file);
    }

    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  };

  useEffect(() => {
    if (fileDataURL) {
      onFileSelected(fileDataURL);
    }
  }, [fileDataURL]);

  return (
    <Container onClick={handleOpenFileWindow}>
      <div style={{ height: 0, width: 0, overflow: "hidden" }}>
        <input
          ref={inputFile}
          id='contained-input-file'
          type='file'
          accept='image/*'
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={(e) => {
            changeHandler(e);
          }}
        />
      </div>

      <Wrapper>
        {fileDataURL ? (
          <Preview src={fileDataURL} />
        ) : (
          <React.Fragment>
            <Upload style={{ fontSize: 25 }} />
            <Typography fontSize={14}>Upload</Typography>
          </React.Fragment>
        )}
      </Wrapper>
    </Container>
  );
};

export default FileUpload;
