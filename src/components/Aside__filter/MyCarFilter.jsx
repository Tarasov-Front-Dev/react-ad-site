import MapMyInputs from "../UI/MapMyInputs"
import MySelector from "../UI/MySelector"

export default function MyCarFilter() {
  return (
    <div className="filter__car">
      <fieldset className="filter__type filter__type--car-body">
        <legend>Тип кузова автомобиля</legend>
        <ul className="filter__checkboxes-list filter__checkboxes-list--car-body">
          <MapMyInputs
            arr={carBodyFilter}
            liClassName={'filter__checkboxes-item'}
          />
        </ul>
      </fieldset>
      <MySelector
        className={'filter__select-wrapper'}
        labelName={'Минимальный год выпуска'}
        id={'car_year'}
        name={'car_year'}
        oprtionArr={carYearFilter}
      />
      <fieldset className="filter__radiobuttons filter__radiobuttons--transmission">
        <legend>Коробка передач</legend>
        <ul className="filter__radiobuttons-list">
          <MapMyInputs
            arr={transmissionFilter}
            liClassName={'filter__radiobuttons-item'}
          />
        </ul>
      </fieldset>
    </div>
  )
}


const carYearFilter = [
  {value: 2008, innerHTML: '2008', isDefaultValue: true},
  {value: 2017, innerHTML: '2017', isDefaultValue: false},
  {value: 2018, innerHTML: '2018', isDefaultValue: false},
  {value: 2019, innerHTML: '2019', isDefaultValue: false},
]

const transmissionFilter = [
  {value: "any_transmission", id: "any_transmission", innerHTML: 'Любая', type: 'radio', name: 'transmission'},
  {value: "mechanic", id: "mechanic_transmission", innerHTML: 'Механика', type: 'radio', name: 'transmission'},
  {value: "auto", id: "auto_transmission", innerHTML: 'Автомат', type: 'radio', name: 'transmission'},
]

const carBodyFilter = [
  {value: "sedan", id: "sedan", innerHTML: 'Седан', type: 'checkbox', name: 'car-body'},
  {value: "universal", id: "universal", innerHTML: 'Универсал', type: 'checkbox', name: 'car-body'},
  {value: "hatchback", id: "hatchback", innerHTML: 'Хэтчбэк', type: 'checkbox', name: 'car-body'},
  {value: "suv", id: "suv", innerHTML: 'Внедорожник', type: 'checkbox', name: 'car-body'},
  {value: "cupe", id: "cupe", innerHTML: 'Купэ', type: 'checkbox', name: 'car-body'},
]