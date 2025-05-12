import React from "react";
import { HeaderProps } from "../../globalTypes/types";
import "./Header.scss";

// interface HeaderProps {
//   title: string;
// }

// const Header: React.FC<HeaderProps> = ({ title }) => {
//   return (
//     <header className="header">
//       <h1 className="header__title">{title}</h1>
//       <div className="header__actions">
//         <button className="header__button">
//           <span className="header__buttonIcon">📊</span>
//           Экспорт
//         </button>
//         <button className="header__button">
//           <span className="header__buttonIcon">⚙️</span>
//           Настройки
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;

const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <header className="header">
      <h1 className="title">{title}</h1>
      {children && <div className="actions">{children}</div>}
    </header>
  );
};

export default Header;
