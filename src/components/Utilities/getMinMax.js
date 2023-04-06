export const rangeMinMax = (arr, method) => {
  // console.log(Math[method](...results.map(el => el.price)))

  const result = Number.isFinite(
    Math[method](...arr.map(el => el.price))) && 
    Math[method](...arr.map(el => el.price))

    // console.log(method.toUpperCase() + ': ' + result)
  
  return result
}

export const getMinMax = (arr, dispatch) => {
  const MIN = rangeMinMax(arr, 'min')
  const MAX = rangeMinMax(arr, 'max')

  // При фильтрафии по типу объявлений сбрасываем стейты значения слайдера до мин/макс значений полученного массива объявлений
  dispatch({type: 'MIN', payload: MIN})
  dispatch({type: 'MAX', payload: MAX})
  dispatch({type: 'rangeMIN', payload: MIN})
  dispatch({type: 'rangeMAX', payload: MAX})
  dispatch({type: 'estate-type', payload: ''})
  dispatch({type: 'rooms', payload: 'any'})
  dispatch({type: 'square', payload: ''})
  dispatch({type: 'camera-type', payload: ''})
  dispatch({type: 'resolution-matrix', payload: 'any'})
  dispatch({type: 'resolution-video', payload: 'any'})

}