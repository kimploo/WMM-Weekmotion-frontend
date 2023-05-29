interface Props {
  name: string;
  label: string;
  id?: string;
  value?: string;
  defaultValue?: string | undefined;
  placeholder: string;
  required: boolean;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
}

export default function Textarea({
  name = '',
  label = '',
  id = '',
  defaultValue = '',
  required = false,
  placeholder = '',
  disabled = false,
  onChange
}: Props) {
  return disabled ? (
    <div
      className="relative mt-4 min-h-[300px] max-h-1/2 bg-mono-100 text-grey-3 border-2 border-solid border-[#DCDCDC] rounded-lg
    resize-none"
    >
      <label
        className="absolute px-1 z-10 -top-2.5 left-2 text-xs font-normal text-grey-3 bg-mono-100"
        htmlFor={label}
      >
        {label}
      </label>
      <textarea
        className="block w-full px-4 pt-3 min-h-[300px] max-h-1/2 placeholder-grey-3 border-transparent appearance-none bg-transparent"
        name={name}
        id={id}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  ) : (
    <div
      className="relative mt-4 min-h-[300px] max-h-1/2 bg-mono-100 text-mono-700 border-2 border-solid border-[#DCDCDC] rounded-lg
    resize-none"
    >
      <label
        className="absolute px-1 z-10 -top-2.5 left-2 text-xs font-normal text-[#ACACAC] bg-mono-100"
        htmlFor={label}
      >
        {label}
      </label>
      <textarea
        className="block w-full px-4 pt-3 min-h-[300px] max-h-1/2 border-transparent appearance-none bg-transparent"
        name={name}
        id={id}
        defaultValue={defaultValue}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}
