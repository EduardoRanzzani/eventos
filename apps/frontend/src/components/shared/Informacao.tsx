export interface InformacaoProps {
  label: string;
  children: React.ReactNode;
}

const Informacao = (props: InformacaoProps) => {
  return (
    <div className='flex-1 flex flex-col items-start border border-zinc-800 px-6 py-3 rounded-lg'>
      <span className='text-sinc-400 font-bold'>{props.label}</span>
      <div className='text-xl'>{props.children}</div>
    </div>
  );
};

export default Informacao;
