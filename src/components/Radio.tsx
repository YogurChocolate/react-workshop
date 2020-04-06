import React from 'react';

type Props = {
  label: string;
  radioOptions: string[],
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  checked?: string;
}
const Radio = ({label, radioOptions, handleChange, checked}: Props) => {
  return (
    <div>
      <label>{label}</label>
      {
        radioOptions.map((option,index) =>
          <label className="radio" key={index}>
            <input type="radio" name='radio' value={option} onChange={handleChange} checked={option === checked}/>
            {option}
          </label>)
      }
    </div>
  );
};

export default Radio;
