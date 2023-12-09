import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { classNames } from "primereact/utils";

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
          <Calendar
            {...field}
            showIcon
            placeholder={placeholder}
            className={className}
            onChange={onChange}
            id={id}
            {...rest}
          />
        );
        case "dropdown":
          return (
            <div className={`p-inputgroup ${disabled ? "disabled" : ""}`}>
              <Dropdown
                {...field}
                options={options}
                placeholder={placeholder}
                onChange={handleDropdownChange}
                className={classNames(className, { "p-inputtext": showIcon })}
                disabled={disabled}
                {...rest}
              />
              {showIcon && (
                <span className="p-inputgroup-addon">
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
