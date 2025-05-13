import React from "react";

interface ProblemAreaItemProps {
  name: string;
  amount: string;
}

const ProblemAreaItem: React.FC<ProblemAreaItemProps> = ({ name, amount }) => {
  return (
    <div className="item">
      <span className="name">{name}</span>
      <span className="amount">{amount}</span>
    </div>
  );
};

export default ProblemAreaItem;
