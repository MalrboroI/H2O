import React from "react";
import "./SummaryCard.scss";

interface SummaryCardProps {
  title: string;
  value: string;
  percentage?: number;
  trend?: "up" | "down" | "neutral";
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  percentage,
  trend = "neutral",
}) => {
  return (
    <div className={`${"card"} ${["trend"]}`}>
      <div className={"trendIcon"}>
        {trend === "up" ? "↑" : trend === "down" ? "↓" : ""}
      </div>
      <div className="value">P {value}</div>
      <div className="title">{title}</div>
      {percentage && (
        <div className="percentage">
          {trend === "up" ? "↑" : "↓"} {percentage}%
        </div>
      )}
    </div>
  );
};

export default SummaryCard;
