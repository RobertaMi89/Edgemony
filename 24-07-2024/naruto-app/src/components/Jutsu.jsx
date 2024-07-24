import React from "react";

const JutsuList = ({ jutsu }) => {
  if (!jutsu || jutsu.length === 0) return null;

  return (
    <div>
      <ul className="mt-2 text-gray-500 list-disc pl-5">
        {jutsu.map((item, index) => (
          <li key={index} className="py-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JutsuList;
