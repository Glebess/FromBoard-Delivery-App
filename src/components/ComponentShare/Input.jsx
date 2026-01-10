const Input = (props) => {
  const {
    placeholder,
    type = "",
    id = type,
    required = true,
    onChange,
    value,
  } = props;
  return (
    <input
      placeholder={placeholder}
      type={type}
      required={required}
      id={id}
      onChange={onChange}
      value={value}
    />
  );
};
export default Input;
