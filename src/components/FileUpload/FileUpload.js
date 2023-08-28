import React, { useRef, useState, useEffect } from "react";
import { Container, Wrapper, Preview } from "./FileUpload.styled";
import { Upload } from "react-bootstrap-icons";
import { Typography } from "../../shared/elements";
import { COLORS } from "./../../constants/colors";
import { CheckImgFile } from "../../helper";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const FileUpload = ({ img, onFileSelected, isError }) => {
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

    if (e) {
      CheckImgFile(e, function (ImagesArray) {
        setFileDataURL(ImagesArray);
        onFileSelected(e.target.files[0]);
      });
    }
  };

  return (
    <Container
      onClick={handleOpenFileWindow}
      style={{ borderColor: isError ? COLORS.DANGER : "#707070" }}
    >
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
        {fileDataURL || img ? (
          <Preview src={fileDataURL ? fileDataURL : img} />
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
