import React from "react";
type PropType = {
  content: string;
};
const Pending: React.FC<PropType> = ({ content }) => {
  return (
    <h3 className="px-5 py-2 border-2 border-orange-500 text-orange-500 w-max rounded-full">
      {content}
    </h3>
  );
};

export default Pending;
