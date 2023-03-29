import { useState } from "react";
import ProductTypeSection from "./ProductTypeSection";
import MyCostRange from "./UI/MyCostRange";
import MySelector from "./UI/MySelector";

export default function MyAsideFilter() {
  const [queue, setQueue] = useState('all')

  return (
    <section className="onlineshop-app__filter filter">
      <h2 className="title filter__title">Фильтр</h2>
      <form className="filter__form" action="#" method="post">
        <MySelector 
          setQueue={setQueue}
          className='filter__select-wrapper'
          labelName='Категория товаров'
          id='categories'
          oprtionArr={selectOptions}
        />
        <MyCostRange/>
        <ProductTypeSection queue={queue}/>
      </form>
    </section>
  )
}

const selectOptions = [
  {value: 'all', isDefaultValue: true, innerHTML: 'Все'},
  {value: 'estate', isDefaultValue: false, innerHTML: 'Недвижимость'},
  {value: 'laptops', isDefaultValue: false, innerHTML: 'Ноутбуки'},
  {value: 'camera', isDefaultValue: false, innerHTML: 'Фотоаппараты'},
  {value: 'cars', isDefaultValue: false, innerHTML: 'Автомобили'},
]