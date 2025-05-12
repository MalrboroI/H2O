import React from "react";
import { SummaryCardProps } from "../../globalTypes/types";
import "./SummaryCard.scss";

// interface SummaryCardProps {
//   title: string;
//   value: string;
//   percentage?: number;
// }

// const SummaryCard: React.FC<SummaryCardProps> = ({
//   title,
//   value,
//   percentage,
// }) => {
//   return (
//     <div className="summaryCard">
//       <h3 className="summaryCard__title">{title}</h3>
//       <div className="summaryCard__value">{value}</div>
//       {percentage && (
//         <div className="summaryCard__percentage">{percentage}%</div>
//       )}
//     </div>
//   );
// };

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  percentage,
  trend = "neutral",
}) => {
  const formattedValue =
    typeof value === "number"
      ? new Intl.NumberFormat("ru-RU").format(value)
      : value;

  return (
    <div className={`${"summaryCard"} ${[`trend-${"trend"}`]}`}>
      <h3 className="title">{title}</h3>
      <div className="value">{formattedValue}</div>
      {percentage && (
        <div className="percentage">
          {trend === "up" ? "↑" : trend === "down" ? "↓" : ""} {percentage}%
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
