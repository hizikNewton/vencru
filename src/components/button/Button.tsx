import Icon, { IconType } from "@components/icons/Icons";
import { FC } from "react";
interface ButtonProp {
  iconName?: IconType;
  label: string;
  className?: string;
}

const Button: FC<ButtonProp> = ({ iconName, label, className }) => {
  return (
    <button
      type="button"
      className={`text-sm font-medium leading-tight ${className}`}
    >
      <span>
        {iconName && <Icon name={iconName} className="inline-flex" />}
      </span>
      <span>{label}</span>
    </button>
  );
};

export default Button;
