import '../../assets/scss/Booking/CheckboxGroup.scss';
import { GrCheckbox } from 'react-icons/gr';
import { MdCheckBox } from 'react-icons/md';

const CheckboxGroup = ({ options = [], checkedOptions, onCheckboxChange }) => {
  return options.map((option, index) => (
    <div key={index} className="checkbox-container" onClick={() => onCheckboxChange(index)}>
      {checkedOptions[index] ? <MdCheckBox className="checkbox-icon" /> : <GrCheckbox className="checkbox-icon" />}
      <div className="checkbox-label-booking">{option}</div>
    </div>
  ));
};

export default CheckboxGroup;
