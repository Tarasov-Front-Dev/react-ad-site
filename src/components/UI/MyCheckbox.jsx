export default function MyCheckbox({
  id,
  defaultValue,
  innerHTML,
  name,
}) {
  return (
    <>
      <input
        id={id}
        type="checkbox"
        className="visually-hidden"
        name={name}
        defaultValue={defaultValue}
      />
      <label htmlFor={id}>{innerHTML}</label>
    </>
  )
}