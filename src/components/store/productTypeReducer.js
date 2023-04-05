const defaultState = {
  categories: 'Все',
}

export const productTypeReducer = (state = defaultState, action) => {
  switch (action.payload) {
    case 'Недвижимость':
      return {...state, categories: 'Недвижимость'}
    case 'Ноутбук':
      return {...state, categories: 'Ноутбук'}
    case 'Фотоаппарат':
      return {...state, categories: 'Фотоаппарат'}
    case 'Автомобиль':
      return {...state, categories: 'Автомобиль'}
    case 'Все':
      return {...state, categories: 'Все'}
    default:
      return state
  }
}