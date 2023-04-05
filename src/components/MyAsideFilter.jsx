import ProductTypeSection from "./Aside__filter/ProductTypeSection";
import MySliderRange from "./UI/MySliderRange";
import MySelector from "./UI/MySelector";
import { useDispatch } from "react-redux";

export default function MyAsideFilter() {
  const dispatch = useDispatch()

  const onChange = (e) => {
    dispatch({type: e.target.name, payload: e.target.value})
  }

  return (
    <section className="onlineshop-app__filter filter">
      <h2 className="title filter__title">Фильтр</h2>
      <form className="filter__form" action="#" method="post" onChange={onChange}>
        <MySelector
          className='filter__select-wrapper'
          labelName='Категория товаров'
          id='categories'
          oprtionArr={selectOptions}
        />
        <MySliderRange/>
        <ProductTypeSection/>
      </form>
    </section>
  )
}

const selectOptions = [
  {value: 'Все', isDefaultValue: true, innerHTML: 'Все'},
  {value: 'Недвижимость', isDefaultValue: false, innerHTML: 'Недвижимость'},
  {value: 'Ноутбук', isDefaultValue: false, innerHTML: 'Ноутбуки'},
  {value: 'Фотоаппарат', isDefaultValue: false, innerHTML: 'Фотоаппараты'},
  {value: 'Автомобиль', isDefaultValue: false, innerHTML: 'Автомобили'},
]