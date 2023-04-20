import { ReactNode } from "react";

type RoundedButtonType = {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

function RoundedButton({ children, onClick, disabled }: RoundedButtonType) {
  return (
    <button
      className={`${
        disabled
          ? "bg-gray-400 hover:bg-gray-500 cursor-not-allowed"
          : "bg-slate-700 hover:bg-slate-800"
      } text-white font-bold h-16 w-16 mb-3 rounded-full mx-4`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

RoundedButton.defaultProps = {
  disabled: false,
};

export default RoundedButton;
