export const rangeMinMax = (arr, method) => {
  const result = Number.isFinite(
    Math[method](...arr.map(el => el.price))) && 
    Math[method](...arr.map(el => el.price))
  
  return result
}

export const getMinMax = (arr, dispatch) => {
  const MIN = rangeMinMax(arr, 'min')
  const MAX = rangeMinMax(arr, 'max')

  // Cбрасываем стейты до значений по умолчанию
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
  dispatch({type: 'car-body', payload: ''})
  dispatch({type: 'car_year', payload: 2008})
  dispatch({type: 'transmission', payload: ''})

}