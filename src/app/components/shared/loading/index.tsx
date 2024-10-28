import "./index.scss";

export const LoadingComponent = () => {
  return (
    <div id="loader_container">
      <div className="loader">
        <div className="animItem"></div>
        <div className="animFill"></div>
        <div className="animText mt-10">
          <span className="animText_letter">WELCOME</span>
          <span className="animText_letter">TO</span>
          <span className="animText_letter">TUANXU</span>
          <span className="animText_letter">PORTFOLIO</span>
        </div>
        <div className="animLoaderBar"></div>
      </div>
    </div>
  );
};
