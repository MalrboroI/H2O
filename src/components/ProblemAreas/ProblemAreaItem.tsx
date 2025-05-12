import React from "react";
import "./ProblemAreaItem.scss";

interface ProblemAreaItemProps {
  name: string;
  amount: number;
  index: number;
}

const ProblemAreaItem: React.FC<ProblemAreaItemProps> = ({
  name,
  amount,
  index,
}) => {
  // Форматируем сумму с разделителями тысяч
  const formattedAmount = new Intl.NumberFormat("ru-RU").format(amount);

  return (
    <div
      className="problemAreaItem"
      style={{ "--index": index } as React.CSSProperties}
    >
      <span className="problemAreaItem__name">{name}</span>
      <span className="problemAreaItem__amount">{formattedAmount}</span>
    </div>
  );
};

export default ProblemAreaItem;
