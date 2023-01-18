import { InputProps } from "types"

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