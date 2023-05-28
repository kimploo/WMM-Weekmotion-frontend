interface Props {
  name: string;
  label: string;
  id?: string;
  value?: string;
  placeholder: string;
  required: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
}

export default function Textarea({
  name = '',
  label = '',
  id = '',
  required = false,
  placeholder = '',
  onChange
}: Props) {
  return (
    <div
      className="relative mt-4 h-1/2 bg-mono-100 text-mono-700 border-2 border-solid border-[#DCDCDC] rounded-lg
    resize-none"
    >
      <label
        className="absolute px-1 z-10 -top-2.5 left-2 text-xs font-normal text-[#ACACAC] bg-mono-100"
        htmlFor={label}
      >
        {label}
      </label>
      <textarea
        className="block w-full pl-4 pt-3 h-full border-transparent appearance-none bg-transparent"
        name={name}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
