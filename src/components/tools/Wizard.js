import React, { useState } from "react";

function Wizard({ children }) {
  const [activePageIndex, setActivepageInde] = useState(0);
  const pages = React.Children.toArray(children);
  const currentPage = pages[activePageIndex];

  const goNextPage = () => {
    setActivepageInde((index) => index + 1);
  };

  const goPrevPage = () => {
    setActivepageInde((index) => index - 1);
  };

  const ButtonPrev = () =>
    activePageIndex > 0 ? (
      <button
        type="button"
        onClick={goPrevPage}
        className="wizard__buttons-left"
      >
        Atras
      </button>
    ) : null;

  const ButtonNext = () =>
    activePageIndex < pages.length - 1 ? (
      <button
        type="button"
        onClick={goNextPage}
        className="wizard__buttons-right"
      >
        Siguiente
      </button>
    ) : null;
  return (
    <div className="wizard">
      <div className="wizard__content">{currentPage}</div>
      <div className="wizard__buttons">
        <ButtonPrev />
        <ButtonNext />
      </div>
    </div>
  );
}

export default Wizard;
