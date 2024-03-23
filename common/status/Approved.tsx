import React from "react";
type PropType = {
  content: string;
};
const Approved: React.FC<PropType> = ({ content }) => {
  return (
    <h3 className="px-5 py-1 border-2 border-green-500 text-green-500 w-max rounded-full">
      {content}
    </h3>
  );
};

export default Approved;
