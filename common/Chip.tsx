import React from "react";
type PropType = {
  content: string;
};
const Chip: React.FC<PropType> = ({ content }) => {
  return (
    <h3 className="px-3 py-1 bg-gray-100 text-sm border-2 w-max rounded-full">
      {content}
    </h3>
  );
};

export default Chip;
