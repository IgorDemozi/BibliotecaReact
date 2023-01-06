interface InputProps {
   type?: string;
   id?: string;
   value: string;
   onChange: any;
   maxLength?: number;
   placeholder?: string;
}

const Input = ({ id, type, value, onChange, maxLength, placeholder }: InputProps) => {
   return (
      <>
         <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            placeholder={placeholder}
         />
      </>
   )
}

export default Input