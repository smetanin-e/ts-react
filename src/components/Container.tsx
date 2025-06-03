type ContainerProps = {
  styles: React.CSSProperties;
};
//{ border: '1px solid black', padding: '1rem' }
const Container = ({ styles }: ContainerProps) => {
  return <div style={styles}>Контент моего контейнера</div>;
};

export default Container;
