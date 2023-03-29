import MyInput from "./MyInput"

export default function MapMyInputs({arr, liClassName}) {
  return (
    arr.map(({id, value, innerHTML, type, name}) => {
      return (
        <li className={liClassName} key={id}>
          <MyInput
            id={id}
            type={type}
            className='visually-hidden'
            value={value}
            innerHTML={innerHTML}
            name={name}
          />
        </li>
      )
    })
  )
}