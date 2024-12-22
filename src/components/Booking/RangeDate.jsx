import { useState } from 'react';
import format from 'date-fns/format';
import { DateRangePicker } from 'react-date-range';

const DateRange = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleChange = (ranges) => {
    setDate(ranges.selection);
  };

  const handleClick = () => {
    setOpenDate((prev) => !prev);
  };

  // Style inline cho các phần tử
  const calendarStyle = {
    borderRadius: '0.8rem',
    backgroundColor: '#f6e8ea',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2.1rem 2.8rem',
    border: '0.3rem solid #5a0001',
    color: 'var(--text-in-background)',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease',
  };

  return (
    <>
      <span onClick={handleClick} style={calendarStyle}>
        {format(date.startDate, 'MM/dd/yyyy')} - {format(date.endDate, 'MM/dd/yyyy')}
      </span>

      {openDate && (
        <DateRangePicker
          ranges={[date]}
          onChange={handleChange}
          minDate={new Date()}
          staticRanges={[]}
          inputRanges={[]}
        />
      )}
    </>
  );
};

export default DateRange;
