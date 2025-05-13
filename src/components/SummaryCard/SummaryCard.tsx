import React from "react";
import "./SummaryCard.scss";

interface SummaryCardProps {
  title: string;
  value: string;
  percentage?: number;
  trend?: "up" | "down";
  active?: boolean;
  onClick?: () => void;
}

const SummaryCard: React.FC<SummaryCardProps> = ({
  title,
  value,
  percentage,
  trend = "up",
  active = false,
  onClick,
}) => {
  return (
    <div className={`${"card"} ${active ? "active" : ""}`} onClick={onClick}>
      {percentage !== undefined && (
        <div className={`${"trendIndicator"} ${["trend"]}`}>
          {trend === "up" ? "↑" : "↓"} {percentage}%
        </div>
      )}
      <div className={"value"}>{value}</div>
      <div className={"title"}>{title}</div>
    </div>
  );
};

export default SummaryCard;
