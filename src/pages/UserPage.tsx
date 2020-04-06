import React, {ChangeEvent, useState} from 'react';
import Input from '../components/Input';
import Radio from '../components/Radio';
import SingleSelect from '../components/SingleSelect';
import MultipleSelect from "../components/MultipleSelect";

type Props = {
  formTitle: string
}

const UserPage = (props: Props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('Male');

  const genders = ['Male', 'Female'];
  const gradeOptions = ['Junior Consultant', 'Senior Consultant', 'Lead Consultant'];
  const skillOptions = ['Javascript', 'HTML', 'CSS', 'React', 'Angular', 'Vue', 'Java', 'PHP', 'C#'];

  const handleSubmit = () => {
    alert(
      `Current user's name is: ${firstName} ${lastName},
       I'm ${gender}
      `);
  };

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleGenderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setGender(event.target.value);
  };
  return (
    <div>
      <p>{props.formTitle}</p>
      <form onSubmit={handleSubmit}>
        <Input label="FirstName" value={firstName} handleChange={handleFirstNameChange}/>
        <Input label="LastName" value={lastName} handleChange={handleLastNameChange}/>
        <Radio label={'Gender'} radioOptions={genders} handleChange={handleGenderChange} checked={gender}/>
        <SingleSelect label={'Grade'} selectOptions={gradeOptions}/>
        <MultipleSelect label={'Skill'} selectOptions={skillOptions}/>
        <div className='submit-button'>
          <input type='submit' value='submit'/>
        </div>
      </form>
    </div>
  );
};

export default UserPage;
