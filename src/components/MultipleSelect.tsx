import React from 'react';

type Props = {
  label: string;
  selectOptions: string[]
}

const MultipleSelect = ({label, selectOptions}:Props) => {
  return (
    <div>
      <label>{label}</label>
      <select multiple={true}>
        {
          selectOptions.map((option) =>
            <option>{option}</option>
          )
        }
      </select>
    </div>
  );
};

export default MultipleSelect;
