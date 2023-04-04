import { useEffect, useState } from "react";
import ReactSlider from 'react-slider';
import { numberFormat } from '../Utilities/numberFormat.js'
import { useDispatch, useSelector } from "react-redux";

export default function MySlider_RangeCost() {
  const dispatch = useDispatch()
  const rangeMIN = useSelector(state => state.rangeMIN)
  const rangeMAX = useSelector(state => state.rangeMAX)
  console.log(rangeMIN)
  console.log(rangeMAX)

  const min = 0
  const max = 30000000

  const [minThumb, setMinThumb] = useState(min)
  const [maxThumb, setMaxThumb] = useState(max)

  const sliderChange = (e) => {
    setMinThumb(() => {
      dispatch({type: 'MIN', payload: e[0]})
      return e[0]
    })
    setMaxThumb(() => {
      dispatch({type: 'MAX', payload: e[1]})
      return e[1]
    })
  }

  return (
    <>
      <div className="filter__range">
        <label htmlFor="range">Цена, ₽</label>
        <div className='filter__tooltip-container'>
          <div className='filter__tooltip'>от {numberFormat(minThumb)}</div>
          <div className='filter__tooltip'>до {numberFormat(maxThumb)}</div>
        </div>
        <ReactSlider
          onChange={sliderChange}
          className="filter__slider"
          thumbClassName="filter__slider__thumb"
          trackClassName="filter__slider__track"
          pearling
          minDistance={max*0.0935}
          value={[minThumb, maxThumb]}
          min={rangeMIN}
          max={rangeMAX}
        />
      </div>
    </>
  )
}