import { useState } from "react";
import MyCostRange from "./UI/MyCostRange";
import MySelector from "./UI/MySelector";
import filterSection from "./Utilities/filterSection.js";

export default function MyFilterForm() {
  const [queue, setQueue] = useState('all')

  return (
    <form className="filter__form" action="#" method="post">
      <MySelector 
        setQueue={setQueue}
        className='filter__select-wrapper'
        id='categories'
        oprtionArr={selectOptions}
      />
      <MyCostRange/>
      {filterSection(queue)}
    </form>
  )
}

const selectOptions = [
  {value: 'all', isDefaultValue: true, innerHTML: 'Все'},
  {value: 'estate', isDefaultValue: false, innerHTML: 'Недвижимость'},
  {value: 'laptops', isDefaultValue: false, innerHTML: 'Ноутбуки'},
  {value: 'camera', isDefaultValue: false, innerHTML: 'Фотоаппараты'},
  {value: 'cars', isDefaultValue: false, innerHTML: 'Автомобили'},
]