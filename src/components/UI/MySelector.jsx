export default function MySelector() {
  const selectOptions = [
    {id: 1, value: 'all', isDefaultValue: true, innerHTML: 'Все'},
    {id: 2, value: 'estate', isDefaultValue: false, innerHTML: 'Недвижимость'},
    {id: 3, value: 'laptops', isDefaultValue: false, innerHTML: 'Ноутбуки'},
    {id: 4, value: 'camera', isDefaultValue: false, innerHTML: 'Фотоаппараты'},
    {id: 5, value: 'cars', isDefaultValue: false, innerHTML: 'Автомобили'},
  ]
  let defaultValueOption;

  const optionList = selectOptions.map(({
    id, 
    value, 
    isDefaultValue, 
    innerHTML,
  }) => {
    if (isDefaultValue) defaultValueOption = value;
    return <option 
      key={id} 
      value={value}
    >{innerHTML}</option>
  })

  return (
    <div className="filter__select-wrapper">
      <label htmlFor="categories">Категория товаров</label>
      <select 
        id="categories" 
        name="categories" 
        defaultValue={defaultValueOption}
      >
        {optionList}
      </select>
      
      <svg width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" />
      </svg>
    </div>
  )
}