const Modal = ({ children, className }) => {
  return (
    <div
      className={`w-full absolute top-0 left-0 min-h-screen bg-overlay/40 flex justify-center items-center z-30 ${className}`}
    >
      {children}
    </div>
  );
};

export default Modal;
