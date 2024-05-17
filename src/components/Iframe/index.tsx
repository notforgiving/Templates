/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { FC } from "react";

interface IIframeProps {
  linkData: string;
}

const Iframe: FC<IIframeProps> = ({linkData}) => {
  return (
    <iframe
      src={`http://v2dio.abbiamo.rotto.tutto.leadrocktest.com/${linkData}/`}
      width="520px"
      height="500px"
    />
  );
};

export default Iframe;
