export default function MyInput({
  id,
  type,
  className,
  value,
  innerHTML,
  name,
}) {
  return (
    <>
      <input
        id={id}
        type={type}
        className={className}
        name={name}
        value={value}
      />
      <label htmlFor={id}>{innerHTML}</label>
    </>
  )
}