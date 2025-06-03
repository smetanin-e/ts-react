import { Name } from './Person.types';

type PersonListProps = {
  names: Name[];
};

const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((obj) => (
        <h2>
          {obj.first} {obj.last}
        </h2>
      ))}
    </div>
  );
};
export default PersonList;
