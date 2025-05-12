import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../store/Hooks/useStore";
import { type ProblemArea } from "../../globalTypes/types";
import ProblemAreaItem from "./ProblemAreaItem";
import "./ProblemAreas.scss";

const ProblemAreas: React.FC = observer(() => {
  const { reportStore } = useStore();

  return (
    <div className="problemAreas">
      <h2 className="problemAreas__title">Проблемные зоны</h2>
      <div className="problemAreas__list">
        {reportStore.problemAreas.map((area: ProblemArea, index: number) => (
          <ProblemAreaItem
            key={index}
            name={area.name}
            amount={area.amount}
            index={index}
          />
        ))}
      </div>
    </div>
  );
});

export default ProblemAreas;
