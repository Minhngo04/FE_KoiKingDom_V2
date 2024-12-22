import { useState } from 'react';
import Button from './Button';
import Checkbox from './Checkbox';
import '../../assets/scss/Booking/CustomBooking.scss';
import { RiCheckboxBlankLine } from 'react-icons/ri';
import { RiCheckboxFill } from 'react-icons/ri';
import RangeDate from './RangeDate';

const farms = Array(5)
  .fill()
  .map((_, index) => ({
    id: `farm-${index + 1}`,
    label: 'name checkbox',
  }));

const koiTypes = Array(5)
  .fill()
  .map((_, index) => ({
    id: `koi-${index + 1}`,
    label: 'name checkbox',
  }));

const CustomBooking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    startDate: '',
    endDate: '',
    departureLocation: '',
    selectedFarms: new Set(),
    selectedKoiTypes: new Set(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [farmCheckBox, setFarmCheckBox] = useState(new Array(farms.length).fill(false));
  const [koiCheckBox, setKoiCheckBox] = useState(new Array(koiTypes.length).fill(false));

  const toggleLike = (type, index) => {
    switch (type) {
      case 'farm':
        setFarmCheckBox((prevCheckBox) => prevCheckBox.map((checked, i) => (i === index ? !checked : checked)));
        break;
      case 'koi':
        setKoiCheckBox((prevCheckBox) => prevCheckBox.map((checked, i) => (i === index ? !checked : checked)));
        break;
      default:
        console.error('Unknown navigation type');
    }
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <main className="main-content-custom">
          <div className="form-section">
            <label htmlFor="fullName" className="input-label">
              FULL NAME
            </label>
            <div className="framebox">
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="text-input"
                placeholder="enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-section">
            <label className="input-label">DATE RANGE</label>
            <RangeDate />
          </div>

          <div className="form-section">
            <label htmlFor="departure" className="input-label">
              DEPARTURE LOCATION
            </label>
            <div className="framebox">
              <input
                type="text"
                id="departure"
                name="departureLocation"
                className="text-input"
                placeholder="choose departure location"
                value={formData.departureLocation}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-section">
            <label className="input-label">SELECT FARM</label>
            <div className="checkbox-grid">
              {farms.map((farm, index) => (
                <Checkbox
                  key={farm.id}
                  id={farm.id}
                  label={farm.label}
                  checked={farmCheckBox[index]}
                  icon={
                    farmCheckBox[index] ? (
                      <RiCheckboxFill className="icon-checkbox" size={30} onClick={() => toggleLike('farm', index)} />
                    ) : (
                      <RiCheckboxBlankLine
                        className="icon-checkbox"
                        size={30}
                        onClick={() => toggleLike('farm', index)}
                      />
                    )
                  }
                />
              ))}
            </div>
          </div>

          <div className="form-section">
            <label className="input-label">SELECT KOI TYPE</label>
            <div className="checkbox-grid">
              {koiTypes.map((koi, index) => (
                <Checkbox
                  key={koi.id}
                  id={koi.id}
                  label={koi.label}
                  checked={koiCheckBox[index]}
                  icon={
                    koiCheckBox[index] ? (
                      <RiCheckboxFill className="icon-checkbox" size={30} onClick={() => toggleLike('koi', index)} />
                    ) : (
                      <RiCheckboxBlankLine
                        className="icon-checkbox"
                        size={30}
                        onClick={() => toggleLike('koi', index)}
                      />
                    )
                  }
                />
              ))}
            </div>
          </div>
          <Button child="SUBMIT" variant="submit" type="submit" />
        </main>
      </form>
    </>
  );
};

export default CustomBooking;
