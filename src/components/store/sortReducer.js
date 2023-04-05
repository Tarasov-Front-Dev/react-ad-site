const defaultState = {
  sort: ''
}

export const sortReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'popular': {
      return {...state, sort: 'popular'}
    }
    case 'cheap': {
      return {...state, sort: 'cheap'}
    }
    case 'new': {
      return {...state, sort: 'new'}
    }
    default: {
      return state
    }
  }
}