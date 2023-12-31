import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";

const InputFields = ({
  id,
  type,
  field,
  onChange,
  placeholder,
  options,
  className,
  showIcon,
  iconColor,
  disabled,
  ...rest
}) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleDropdownChange = (e) => {
    const selected = e.value;
    setSelectedValue(selected);
    onChange({ target: { value: selected } });
  };

  const renderInput = () => {
    switch (type) {
      case "text":
        return (
          <InputText
            {...field}
            placeholder={placeholder}
            className={className}
            onChange={onChange}
            id={id}
            {...rest}
          />
        );
      case "number":
        return (
          <InputNumber
            {...field}
            placeholder={placeholder}
            className={className}
            onChange={onChange}
            id={id}
            {...rest}
          />
        );
      case "date":
        return (
          <input
            type="date"
            {...field}
            placeholder={placeholder}
            className={`w-full ${className}`} // Use Tailwind CSS for width and additional classes
            onChange={(e) => onChange(e.target.value)}
            id={id}
            {...rest}
            style={{
              backgroundColor: "white",
              color: "black",
              paddingRight: "2rem",
              border: "1px solid black",
              borderRadius: "8px",
              padding: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        );

      case "dropdown":
        return (
          <div
            className={`relative ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <select
              {...field}
              onChange={(e) => onChange({ target: { value: e.target.value } })}
              className={`block w-full p-2 border rounded-md ${
                disabled ? "bg-gray-200" : "bg-white"
              } focus:outline-none focus:border-brandPrimary ${className}`}
              disabled={disabled}
              {...rest}
            >
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  className="text-sm"
                >
                  {option.label}
                </option>
              ))}
            </select>
            {showIcon && (
              <span className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <i className="pi pi-calendar" style={{ color: iconColor }} />
              </span>
            )}
          </div>
        );

      case "time":
      case "day":
        return (
          <InputMask
            {...field}
            mask={getMaskByType(type)}
            placeholder={placeholder}
            slotChar={getSlotCharByType(type)}
            className={className}
            {...rest}
            onChange={onChange}
            id={id}
          />
        );
      case "year":
        return (
          <InputMask
            {...field}
            mask={getMaskByType(type)}
            placeholder={placeholder}
            slotChar={getSlotCharByType(type)}
            className={className}
            {...rest}
            onChange={(e) => onChange({ target: { value: e.value } })}
            id={id}
          />
        );
      case "month":
        return (
          <Dropdown
            {...field}
            options={options}
            placeholder={placeholder}
            onChange={(e) => onChange({ target: { value: e.value } })}
            className={className}
            {...rest}
          />
        );
      case "textarea":
        return (
          <InputTextarea
            {...field}
            placeholder={placeholder}
            className={className}
            onChange={onChange}
            id={id}
            {...rest}
          />
        );
      default:
        return null;
    }
  };

  const getMaskByType = (type) => {
    switch (type) {
      case "time":
        return "99:99:99";
      case "day":
        return "99";
      case "year":
        return "9999";
      case "month":
        return "99";
      default:
        return "";
    }
  };

  const getSlotCharByType = (type) => {
    switch (type) {
      case "time":
      case "day":
      case "year":
      case "month":
        return type.charAt(0).toUpperCase() + type.slice(1);
      default:
        return "";
    }
  };

  return renderInput();
};

export default InputFields;
