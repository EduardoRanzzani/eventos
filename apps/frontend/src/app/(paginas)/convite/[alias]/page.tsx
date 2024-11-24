// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Convite = (props: any) => {
  console.log('Pagina Convite', props);
  return <div>{props.params.alias}</div>;
};

export default Convite;
