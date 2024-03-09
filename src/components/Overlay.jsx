const Overlay = ({ handleOverlay }) => {
  return (
    <div
      className="fixed w-screen top-0 h-screen bg-black bg-opacity-70 z-20"
      onClick={() => handleOverlay((click) => !click)}
    ></div>
  );
};

export default Overlay;
