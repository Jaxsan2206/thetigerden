import React from "react";
import { Box } from "../FlexBox/FlexBox";
import { IEmbedIFrameProps } from "./EmbedIFrame.interface";

const EmbedIFrame: React.FC<IEmbedIFrameProps> = ({ iframe = '' }) => {
  if (!iframe) return <></>
  return (
    <Box
      width={"100%"}
      height={"100%"}
      marginBottom={"-6px"}
      dangerouslySetInnerHTML={{ __html: iframe }}
    /> 
  );
};

export default EmbedIFrame;
