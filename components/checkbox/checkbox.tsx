import { InputHTMLAttributes, useId } from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  defaultChecked?: boolean;
  label?: string;
}

export const Checkbox = ({ label, ...otherProps }: CheckboxProps) => {
  const id = useId();

  return (
    <div className="w-full flex gap-2 relative items-center">
      <input
        className="peer relative appearance-none shrink-0 w-6 h-6 "
        type="checkbox"
        id={id}
        {...otherProps}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6 absolute pointer-events-none stroke-white fill-gray-400 dark:fill-gray-bold peer-checked:!hidden "
      >
        <g clipPath="url(#clip0_366_4672)">
          <path
            d="M4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3ZM5 5V19H19V5H5Z"
            fill="#080210"
          />
        </g>
        <defs>
          <clipPath id="clip0_366_4672">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <svg
        className="h-6 w-6 absolute pointer-events-none stroke-white fill-none peer-checked:!fill-red-500 !hidden peer-checked:!block dark:peer-checked:!fill-white"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clipPath="url(#clip0_366_4675)">
          <path
            d="M4 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3ZM11.003 16L18.073 8.929L16.659 7.515L11.003 13.172L8.174 10.343L6.76 11.757L11.003 16Z"
            fill="#080210"
          />
        </g>
        <defs>
          <clipPath id="clip0_366_4675">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <label className="text-sm font-medium" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};