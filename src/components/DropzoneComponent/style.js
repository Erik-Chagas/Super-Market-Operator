import styled, { css } from "styled-components";

const dragActive = css`
  border-color: #78e5d5;
`;

const dragReject = css`
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone"
})`
  width: 60%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  padding: 5px;
  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;

const messageColors = {
  default: "#999",
  error: "#e57878",
  success: "#78e5d5"
};

export const UploadMessage = styled.p`
  display: flex;
  color: ${props => messageColors[props.type || "default"]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

export const ImagePreview = styled.img`
  width: 20%;
  height: auto;
`