import RangeFilter from './RangeFilter.jsx';
import FilterSection from './FilterSection.jsx';
import PropTypes from 'prop-types';
import RangeDate from './RangeDate.jsx';
import '../../assets/scss/Booking/AsideFilter.scss';

const AsideFilter = ({ filters, dateRange, sections }) => {
  return (
    <aside className="filters">
      {filters && filters.map((filter, index) => <RangeFilter key={index} {...filter} />)}

      {dateRange && (
        <div className="booking-date-filter">
          <h2 className="booking-filter-title">Date Range</h2>
          <RangeDate />
        </div>
      )}

      {sections &&
        sections.map((section, index) => (
          <FilterSection
            key={index}
            title={section.title}
            options={section.options}
            checkedOptions={section.checkedOptions}
            onCheckboxChange={section.onCheckboxChange}
          />
        ))}
    </aside>
  );
};

AsideFilter.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }),
  ).isRequired,
  dateRange: PropTypes.bool,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      checkedOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
      onCheckboxChange: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

AsideFilter.defaultProps = {
  dateRange: false,
};
export default AsideFilter;
