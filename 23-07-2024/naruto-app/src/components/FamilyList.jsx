import React from "react";

const FamilyList = ({ family }) => {
  if (!family || Object.keys(family).length === 0) return null;

  return (
    <div className=" p-3 rounded-lg shadow-lg mb-4">
      <ul className="list-disc pl-5 text-gray-500">
        {Object.entries(family).map(([relation, name]) => (
          <li key={relation} className="py-1">
            <strong className="text-gray-300">
              {relation.charAt(0).toUpperCase() + relation.slice(1)}:
            </strong>{" "}
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FamilyList;
