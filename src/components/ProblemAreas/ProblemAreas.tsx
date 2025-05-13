import React from "react";
import { observer } from "mobx-react-lite";
import ProblemAreaItem from "./ProblemAreaItem";
import { ProblemArea } from "../../globalTypes/types";
import "./ProblemAreas.scss";

interface ProblemAreasProps {
  problemAreas: ProblemArea[];
}

const ProblemAreas: React.FC<ProblemAreasProps> = observer(
  ({ problemAreas }) => {
    const formatNumber = (num: number) => {
      return new Intl.NumberFormat("ru-RU").format(num);
    };

    return (
      <div className="problemAreas">
        <h3 className="title">Проблемные зоны</h3>
        <div className="list">
          {problemAreas.map((problem) => (
            <ProblemAreaItem
              key={problem.id}
              name={problem.name}
              amount={formatNumber(problem.amount)}
            />
          ))}
        </div>
      </div>
    );
  }
);

export default ProblemAreas;
