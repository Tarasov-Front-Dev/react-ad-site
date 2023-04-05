import { useDispatch } from "react-redux"

export default function MyInput({
  id,
  type,
  className,
  value,
  innerHTML,
  name,
}) {
  const estateDispatch = useDispatch()

  return (
    <>
      <input
        id={id}
        type={type}
        className={className}
        name={name}
        value={value}
        // onChange={() => estateDispatch({type: {name}, payload: {value}})}
      />
      <label htmlFor={id}>{innerHTML}</label>
    </>
  )
}