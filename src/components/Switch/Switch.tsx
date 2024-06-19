import React, { ChangeEventHandler } from "react";
import "./Switch.css";

interface SwitchProps {
  handleToggle: ChangeEventHandler<HTMLInputElement>;
  isChecked: boolean;
  label: string;
  title: string;
}

const Switch: React.FC<SwitchProps> = ({
  isChecked,
  handleToggle,
  label,
  title,
}) => {
  return (
    <div className="wrapper">
      <label className="switch" title={title} data-testid="unit-switch">
        <input
          type="checkbox"
          id="unit-switch"
          checked={isChecked}
          onChange={handleToggle}
        />
        <span className="slider"></span>
      </label>
      <label className="label" htmlFor="unit-switch">
        {label}
      </label>
    </div>
  );
};

export default Switch;
