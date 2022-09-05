export const PrimaryButton = ({ className, disabled, text, type, onClick }) => {
  return (
    <button
      className={`bg-green text-white rounded-[5px] font-[500]  ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const OtherButton = ({ className, disabled, text, type, onClick }) => {
  return (
    <button
      className={`bg-gray text-black rounded-[5px] font-[500]  ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const WhiteButton = ({ className, disabled, text, type, onClick }) => {
  return (
    <button
      className={`bg-white text-green rounded-[5px] font-[500]  ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export const DemoButton = ({ className, disabled, text, type, onClick }) => {
  return (
    <button
      className={`rounded-[5px] font-[500]  ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
