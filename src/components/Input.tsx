type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

// const Input = (props: InputProps) => {
//   return <input type='text' value={props.value} onChange={props.handleChange} />;
// };
// export default Input;

const Input = (props: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => console.log(event);

  return <input type='text' value={props.value} onChange={handleInputChange} />;
};
export default Input;
