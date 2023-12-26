import React from "react";

interface Props {
  title: string;
  dataType: string;
  children: React.ReactNode;
}

export const DataModule: React.FC<Props> = ({ title, dataType, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>
        {children}
        <span> {dataType}</span>
      </p>
    </div>
  );
};
