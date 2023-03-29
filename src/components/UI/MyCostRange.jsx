import { useState } from "react";
import ReactSlider from 'react-slider';
import { numberFormat } from '../Utilities/numberFormat.js'

export default function MyCostRange() {
  const min = 10000
  const max = 30000000

  const [minThumb, setMinThumb] = useState(min)
  const [maxThumb, setMaxThumb] = useState(max)

  const sliderChange = (e) => {
    setMinThumb(e[0])
    setMaxThumb(e[1])
  }

  console.log('render')

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
          min={min}
          max={max}
        />
      </div>
    </>
  )
}