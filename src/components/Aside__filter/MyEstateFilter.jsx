import MapMyInputs from "../UI/MapMyInputs"

export default function MyEstateFilter() {

  return (
    <div className="filter__estate">
      <fieldset className="filter__type filter__type--estate">
        <legend>Тип недвижимости</legend>
        <ul className="filter__checkboxes-list filter__checkboxes-list--estate">
          <MapMyInputs
            arr={estateTypeFilter}
            liClassName={'filter__checkboxes-item'}
          />
        </ul>
      </fieldset>

      <fieldset className="filter__radiobuttons filter__radiobuttons--ram">
        <legend>Количество комнат</legend>
        <ul className="filter__ram-list">
          <MapMyInputs
            arr={estateRoomsFilter}
            liClassName={'filter__radiobuttons-item'}
          />
        </ul>
      </fieldset>

      <div className="filter__min-square">
        <label htmlFor="square">
          Минимальная площадь, м<sup>2</sup>
        </label>
        <input
          type="number"
          id="square"
          name="min-square"
          defaultValue=""
          placeholder={0}
        />
      </div>
    </div>
  )
}


const estateTypeFilter = [
  {value: "house", id: "house", innerHTML: 'Дом', type: 'checkbox', name: 'estate-type'},
  {value: "flat", id: "flat", innerHTML: 'Квартира', type: 'checkbox', name: 'estate-type'},
  {value: "apartments", id: "apartments", innerHTML: 'Апартаменты', type: 'checkbox', name: 'estate-type'},
]

const estateRoomsFilter = [
  {value: "any", id: "any_room", innerHTML: 'Любое', type: 'radio', name: 'rooms'},
  {value: "one", id: "one", innerHTML: '1', type: 'radio', name: 'rooms'},
  {value: "two", id: "two", innerHTML: '2', type: 'radio', name: 'rooms'},
  {value: "three", id: "three", innerHTML: '3', type: 'radio', name: 'rooms'},
  {value: "four", id: "four", innerHTML: '4', type: 'radio', name: 'rooms'},
  {value: "fivemore", id: "fivemore", innerHTML: '5+', type: 'radio', name: 'rooms'},
]