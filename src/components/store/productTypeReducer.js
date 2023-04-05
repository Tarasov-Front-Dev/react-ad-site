const defaultState = {
  productType: 'Все',
}

export const productTypeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'Недвижимость':
      return {...state, productType: 'Недвижимость'}
    case 'Ноутбук':
      return {...state, productType: 'Ноутбук'}
    case 'Фотоаппарат':
      return {...state, productType: 'Фотоаппарат'}
    case 'Автомобиль':
      return {...state, productType: 'Автомобиль'}
    case 'Все':
      return {...state, productType: 'Все'}
    default:
      return {
        ...state,
      }
  }
}