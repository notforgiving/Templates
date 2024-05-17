import React, { FC, ReactNode } from "react";
import css from "./styles.module.scss";

interface IIframeWrapperProps {
  children: ReactNode;
}

const IframeWrapper: FC<IIframeWrapperProps> = ({ children }) => {
  return <div className={css.wrapper}>{children}</div>;
};

export default IframeWrapper;
