interface Props {
  label: string;
  content: string;
  placeholder: string;
}

export default function TestInput({ label, content, placeholder }: Props) {
  return (
    <div className="relative h-14 border-2 border-solid border-[#DCDCDC] rounded-lg">
      <label
        className="absolute mx-1 z-10 -top-2.5 left-2 text-xs font-normal text-[#ACACAC] bg-[#FFFFFF]"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="block w-full pl-4 h-14 border-2 border-transparent appearance-none bg-transparent"
        type="text"
        name={label}
        value={content}
        placeholder={placeholder}
      />
    </div>
  );
}
