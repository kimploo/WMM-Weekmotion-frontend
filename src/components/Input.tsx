interface Props {
  name: string;
  label: string;
  type?: string;
  value?: string;
  placeholder: string;
  required: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}

export default function Input({
  name,
  label,
  type = 'text',
  value,
  required,
  placeholder,
  onChange
}: Props) {
  return (
    <div className="relative h-14 border-2 border-solid border-[#DCDCDC] rounded-lg">
      <label
        className="absolute px-1 z-10 -top-2.5 left-2 text-xs font-normal text-[#ACACAC] bg-[#FFFFFF]"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="block w-full pl-4 h-14 border-2 border-transparent appearance-none bg-transparent"
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
