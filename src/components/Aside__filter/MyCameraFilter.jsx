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
        name={'resolution-matrix'}
        oprtionArr={resolutionMatrixFilter}
      />
      <MySelector
        className={'filter__select-wrapper'}
        labelName={'Разрешение видео'}
        id={'resolution-video'}
        name={'resolution-video'}
        oprtionArr={resolutionVideoFilter}
      />
    </div>
  )
}


const cameraTypeFilter = [
  {value: "slr", id: "mirror", innerHTML: 'Зеркальный', type: 'checkbox', name: 'camera-type'},
  {value: "digital", id: "digital", innerHTML: 'Цифровой', type: 'checkbox', name: 'camera-type'},
  {value: "mirrorless", id: "mirrorless", innerHTML: 'Беззеркальный', type: 'checkbox', name: 'camera-type'},
]

const resolutionMatrixFilter = [
  {value: 'any', innerHTML: 'Любое', isDefaultValue: true},
  {value: 5, innerHTML: '5 МП', isDefaultValue: false},
  {value: 10, innerHTML: '10 МП', isDefaultValue: false},
  {value: 15, innerHTML: '15 МП', isDefaultValue: false},
  {value: 30, innerHTML: '30 МП', isDefaultValue: false},
  {value: 40, innerHTML: '40 МП', isDefaultValue: false},
]

const resolutionVideoFilter = [
  {value: "any", innerHTML: 'Любое', isDefaultValue: true},
  {value: "HD", innerHTML: 'HD', isDefaultValue: false},
  {value: "full-hd", innerHTML: 'Full HD', isDefaultValue: false},
  {value: "4K", innerHTML: '4K', isDefaultValue: false},
  {value: "5K", innerHTML: '5K', isDefaultValue: false},
]