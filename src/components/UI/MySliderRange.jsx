import { useEffect, useState } from "react";
import ReactSlider from 'react-slider';
import { numberFormat } from '../Utilities/numberFormat.js'
import { useDispatch, useSelector } from "react-redux";

export default function MySliderRange() {
  const dispatch = useDispatch()
  const MIN = useSelector(state => state.minMax.MIN)
  const MAX = useSelector(state => state.minMax.MAX)
  const rangeMIN = useSelector(state => state.minMax.rangeMIN)
  const rangeMAX = useSelector(state => state.minMax.rangeMAX)

  const [minMaxThumb, setMinMaxThumb] = useState([MIN, MAX])

  useEffect(() => {
    setMinMaxThumb([rangeMIN, rangeMAX])
  }, [MIN, MAX, rangeMIN, rangeMAX])

  const onChange = (e) => {
    setMinMaxThumb([e[0], e[1]])
  }

  // Сделал динамическую фильтрацию массива объявлений, т.к. их у нас немного. Но в реальной ситуации я бы делал обновление через сабмит баттон на форме. В этом проекте хочу продемонстрировать навыки динамического стейт менеджмента.
  const afterChange = (e) => {
    dispatch({type: 'rangeMIN', payload: e[0]})
    dispatch({type: 'rangeMAX', payload: e[1]})
  }

  return (
    <>
      <div className="filter__range">
        <label htmlFor="range">Цена, ₽</label>
        <div className='filter__tooltip-container'>
          <div className='filter__tooltip'>от {numberFormat(minMaxThumb[0])}</div>
          <div className='filter__tooltip'>до {numberFormat(minMaxThumb[1])}</div>
        </div>
        <ReactSlider
          onChange={onChange}
          onAfterChange={afterChange}
          className="filter__slider"
          thumbClassName="filter__slider__thumb"
          trackClassName="filter__slider__track"
          pearling
          minDistance={MAX*0.0935}
          value={[minMaxThumb[0], minMaxThumb[1]]}
          min={MIN}
          max={MAX}
          step={100}
        />
      </div>
    </>
  )
}