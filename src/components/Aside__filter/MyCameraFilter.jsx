import MapMyInputs from "../UI/MapMyInputs"
import MySelector from "../UI/MySelector"

export default function MyCameraFilter() {

  return (
    <div className="filter__camera">
      <fieldset className="filter__type filter__type--camera">
        <legend>Тип фотоаппарата</legend>
        <ul className="filter__checkboxes-list filter__checkboxes-list--camera">
          <MapMyInputs
            arr={cameraTypeFilter}
            liClassName={'filter__checkboxes-item'}
          />
        </ul>
      </fieldset>

      <MySelector
        className={'filter__select-wrapper filter__select-wrapper--min-resolution'}
        labelName={'Минимальное разрешение матрицы'}
        id={'resolution-matrix'}
        oprtionArr={resolutionMatrixFilter}
      />
      <MySelector
        className={'filter__select-wrapper'}
        labelName={'Минимальное разрешение видео'}
        id={'resolution-video'}
        oprtionArr={resolutionVideoFilter}
      />
    </div>
  )
}


const cameraTypeFilter = [
  {value: "mirror", id: "mirror", innerHTML: 'Зеркальный', type: 'checkbox', name: 'camera-type'},
  {value: "digital", id: "digital", innerHTML: 'Цифровой', type: 'checkbox', name: 'camera-type'},
  {value: "mirrorless", id: "mirrorless", innerHTML: 'Беззеркальный', type: 'checkbox', name: 'camera-type'},
]

const resolutionMatrixFilter = [
  {value: "1mp", innerHTML: '1 МП', isDefaultValue: true},
  {value: "3mp", innerHTML: '3 МП', isDefaultValue: false},
  {value: "5mp", innerHTML: '5 МП', isDefaultValue: false},
  {value: "6mp", innerHTML: '7 МП', isDefaultValue: false},
  {value: "10mp", innerHTML: '10 МП', isDefaultValue: false},
]

const resolutionVideoFilter = [
  {value: "any", innerHTML: 'Любое', isDefaultValue: true},
  {value: "HD", innerHTML: 'HD', isDefaultValue: false},
  {value: "Full_HD", innerHTML: 'Full HD', isDefaultValue: false},
  {value: "4K", innerHTML: '4K', isDefaultValue: false},
  {value: "5K", innerHTML: '5K', isDefaultValue: false},
]