const defaultState = {  
  MIN: 9000, // Для моделирования реальной ситуации поставлю 0 - 99999999999 и сделаю обновление через useTransition. Но позже. В первую очеред нужно доделать фильтрацию и модалку для показа объявления.
  MAX: 30000000,
  rangeMIN: 9000,
  rangeMAX: 30000000,
}

export const minMaxReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'MIN':
      return {...state, MIN: action.payload}
    case 'MAX':
      return {...state, MAX: action.payload}
    case 'rangeMIN':
      return {...state, rangeMIN: action.payload}
    case 'rangeMAX':
      return {...state, rangeMAX: action.payload}
    default: {
      return state
    }
  }
}