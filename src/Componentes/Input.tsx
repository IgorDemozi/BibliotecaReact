import { InputProps } from 'types';

const Input = ({ id, className, type, value, onChange, maxLength, placeholder }: InputProps) => {
   return (
      <>
         <input
            type={type}
            id={id}
            className={className}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            placeholder={placeholder}
         />
      </>
   );
};

export default Input;
