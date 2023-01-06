import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
const Input = ({ id, type, value, onChange, maxLength, placeholder }) => {
    return (_jsx(_Fragment, { children: _jsx("input", { type: type, id: id, value: value, onChange: onChange, maxLength: maxLength, placeholder: placeholder }) }));
};
export default Input;
