type Props = React.ComponentProps<'button'> & {
  title: string;
};

export function Button({ title, className, ...rest }: Props) {
  return (
    <button
      type="button"
      className={`p-2 border-none bg-[#ff8e3c] text-[#0d0d0d] font-[600]
       text-[1rem] rounded-[.5rem] hover:bg-[#f97316] ${className}`}
      {...rest}
    >
      {title}
    </button>
  );
}
