import React from "react";
import ProblemAreaItem from "./ProblemAreaItem";
import "./ProblemAreas.scss";

interface ProblemArea {
  name: string;
  amount: string;
}

const ProblemAreas: React.FC = () => {
  const problems: ProblemArea[] = [
    { name: "Низкая конверсия", amount: "1 542 511" },
    { name: "Высокие расходы", amount: "892 456" },
    { name: "Проблемы с доставкой", amount: "567 890" },
  ];

  return (
    <div className="problemAreas">
      <h3 className="title">Проблемные зоны</h3>
      <div className="list">
        {problems.map((problem, index) => (
          <ProblemAreaItem
            key={index}
            name={problem.name}
            amount={problem.amount}
          />
        ))}
      </div>
    </div>
  );
};

export default ProblemAreas;
