type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((obj) => (
        <h2>
          {obj.first} {obj.last}
        </h2>
      ))}
    </div>
  );
};
export default PersonList;
