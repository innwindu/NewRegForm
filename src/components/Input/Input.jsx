export default function Input({ placeholder, value, onChange, name, label, type }) {
  return (
    <>
      <label className="label">
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
        />
        {label}
      </label>
    </>
  );
}
