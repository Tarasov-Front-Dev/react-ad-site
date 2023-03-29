import MapMyInputs from "./MapMyInputs"

export default function MyLaptopFilter() {
  return (
    <div className="filter__laptop">
      <fieldset className="filter__type filter__type--laptop">
        <legend>Тип ноутбука</legend>
        <ul className="filter__checkboxes-list filter__checkboxes-list--laptop-ram">
          <MapMyInputs
            arr={laptopTypeFilter}
            liClassName={'filter__checkboxes-item'}
          />
        </ul>
      </fieldset>

      <fieldset className="filter__radiobuttons filter__radiobuttons--ram">
        <legend>Минимальный объем оперативной памяти</legend>
        <ul className="filter__radiobuttons-list">
          <MapMyInputs
            arr={ramFilter}
            liClassName={'filter__radiobuttons-item'}
          />
        </ul>
      </fieldset>

      <fieldset className="filter__radiobuttons filter__radiobuttons--diagonal">
        <legend>Минимальная диагональ экрана</legend>
        <ul className="filter__radiobuttons-list">
          <MapMyInputs
            arr={diagonalFilter}
            liClassName={'filter__radiobuttons-item'}
          />
        </ul>
      </fieldset>

      <fieldset className="filter__type filter__type--laptop-processor">
        <legend>Тип процессора</legend>
        <ul className="filter__checkboxes-list filter__checkboxes-list--laptop-processor">
          <MapMyInputs
            arr={processorFilter}
            liClassName={'filter__checkboxes-item'}
          />
        </ul>
      </fieldset>
    </div>
  )
}


const laptopTypeFilter = [
  {value: "ultra", id: "ultra", innerHTML: 'Ультрабук', type: 'checkbox', name: 'laptop-type'},
  {value: "gaming", id: "gaming", innerHTML: 'Игровой ноутбук', type: 'checkbox', name: 'laptop-type'},
  {value: "home", id: "home", innerHTML: 'Домашний ноутбук', type: 'checkbox', name: 'laptop-type'},
]

const ramFilter = [
  {value: "any_ram", id: "any_ram", innerHTML: 'Любой', type: 'radio', name: 'ram'},
  {value: "4gb", id: "4gb", innerHTML: '4 Гб', type: 'radio', name: 'ram'},
  {value: "8gb", id: "8gb", innerHTML: '8 Гб', type: 'radio', name: 'ram'},
  {value: "16gb", id: "16gb", innerHTML: '16 Гб', type: 'radio', name: 'ram'},
]

const diagonalFilter = [
  {value: "any_diagonal", id: "any_ram", innerHTML: 'Любая', type: 'radio', name: 'diagonal'},
  {value: "13in", id: "13in", innerHTML: '13″', type: 'radio', name: 'diagonal'},
  {value: "14in", id: "14in", innerHTML: '14″', type: 'radio', name: 'diagonal'},
  {value: "15in", id: "15in", innerHTML: '15″', type: 'radio', name: 'diagonal'},
  {value: "17in", id: "17in", innerHTML: '17″', type: 'radio', name: 'diagonal'},
]

const processorFilter = [
  {value: "i3", id: "i3", innerHTML: 'Intel Core i3', type: 'checkbox', name: 'laptop-type'},
  {value: "i5", id: "i5", innerHTML: 'Intel Core i5', type: 'checkbox', name: 'laptop-type'},
  {value: "i7", id: "i7", innerHTML: 'Intel Core i7', type: 'checkbox', name: 'laptop-type'},
]