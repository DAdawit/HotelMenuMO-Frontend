import React from "react";
type Props = {
  title: string;
};
const PageTitle: React.FC<Props> = ({ title }) => {
  return (
    <div className="py-7">
      <h1 className="text-3xl font-medium tracking-wide text-gray-600 capitalize">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
