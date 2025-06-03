import React from 'react';
type OscarProps = {
  children: React.ReactNode;
};

const Oskar = (props: OscarProps) => {
  return <div>{props.children}</div>;
};
export default Oskar;
