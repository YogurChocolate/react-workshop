import React from 'react';

type Props = {
  label: string;
  selectOptions: string[]
}
const SingleSelect = ({label, selectOptions}:Props) => {

  return (
    <div>
      <label>{label}</label>
      <select>
        {
          selectOptions.map((option) =>
            <option>{option}</option>
          )
        }
      </select>
    </div>
  );
};

export default SingleSelect;
