import React from "react";
import { observer } from "mobx-react-lite";
// import { useStore } from "../../store/Hooks/useStore";
import SummaryCard from "../SummaryCard/SummaryCard";
import "./SummaryCards.scss";

const SummaryCards: React.FC = observer(() => {
  //   const { reportStore } = useStore();

  return (
    <div className="summaryCards">
      <SummaryCard title="Итоги" value={10157764} percentage={215} trend="up" />
      <SummaryCard title="В28" value={8615253} percentage={43.7} trend="up" />
      <SummaryCard title="В2С" value={-1542511} trend="down" />
    </div>
  );
});

export default SummaryCards;
