import { useState } from "react";
import ProductTypeSection from "./Aside__filter/ProductTypeSection";
import MySlider_RangeCost from "./UI/MySlider_RangeCost";
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
        <MySlider_RangeCost/>
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