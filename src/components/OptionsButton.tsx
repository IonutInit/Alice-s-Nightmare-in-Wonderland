import { ReactNode } from "react";

type OptionsButtonType = {
  children: ReactNode;
  disabled?: boolean;
  onClick: () => void;
  color?: string;
  hoverColor?: string;
};

function OptionsButton({
  children,
  disabled,
  onClick,
  color,
  hoverColor,
}: OptionsButtonType) {
  return (
    <button
      className={`w-3/4 h-16 ${color} hover:${hoverColor} text-white py-2 px-4 my-2 rounded font-medium`}
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

OptionsButton.defaultProps = {
  disabled: false,
  color: "bg-slate-700",
  hoverColor: "bg-slate-800",
};

export default OptionsButton;
