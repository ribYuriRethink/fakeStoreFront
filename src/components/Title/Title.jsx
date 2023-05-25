export const Title = (props) => {
  return (
    <div className={props.className}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};
