import clsx from 'clsx';
import { sprite } from 'shared/svg';
import s from './locationInput.module.scss';

const LocationInput = ({ field, className = null }) => {
  return (
    <label className={clsx(s.locationInputLabel, className)}>
      <span className={s.inputTitle}>Location</span>
      <input
        type="text"
        placeholder="City"
        {...field}
        className={s.cityInput}
        autoComplete="off"
      />
      <svg className={s.inputIcon}>
        <use href={sprite + '#map'} />
      </svg>
    </label>
  );
};

export default LocationInput;
