import React from 'react';

type Props = {
  label: string,
  value: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
};

const Input = (props: Props) => {
  return (
    <div>
      <label>
        {props.label}
        <input type="text" value={props.value} onChange={props.handleChange}/>
      </label>
    </div>
  )
};

export default Input;

