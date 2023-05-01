import { useMemo } from "react";
import { getMinMax } from "../Utilities/getMinMax";

const useCategoryFilteredResults  = (resultsList, categories, dispatch) => {
  const sortByType = useMemo(() => {
    if (!resultsList) return []
    const filtered = resultsList.filter(el => categories === 'Все' || categories === el.category)
    getMinMax(filtered, dispatch)

    return filtered
  }, [resultsList, categories])

  return sortByType
}

const useMinMaxSortedResults = (resultsList, rangeMIN, rangeMAX) => {
  const filterByMinMax = useMemo(() => {
    if (rangeMIN < 0 || rangeMAX < 0 || Number.isNaN(+rangeMIN) || Number.isNaN(+rangeMAX)) return []

    const filteredResultsList = resultsList
      .filter(({ price }) => price >= rangeMIN && price <= rangeMAX)
    
    return filteredResultsList
  }, [resultsList, rangeMIN, rangeMAX])

  return filterByMinMax
}

const getEstateSorted = (arr, {type, rooms, square}) => {
  let resultArr = arr;
  
  if (type.length) {
    resultArr = type.flatMap(el => resultArr.filter(i => i.filters.type === el));
  }
  
  if (Number(rooms) > 0) {
    resultArr = resultArr.filter(i => i.filters['rooms-count'] === Number(rooms));
  }

  if (Number(square) > 0) {
    resultArr = resultArr.filter(i => i.filters.area >= Number(square));
  }
  
  return resultArr;
}

const getLaptopSorted = (arr, {laptopType, ram, diagonal, processor}) => {
    if (laptopType.length) {
      arr = laptopType
      .reduce((acc, el) => [
        ...acc, 
        ...arr.filter(i => i.filters.type === el),
      ], [])
    }

    if (Number(ram) > 0) {
      arr = arr.filter(i => i.filters['ram-value'] >= ram)
    }

    if (Number(diagonal) > 0) {
      arr = arr.filter(i => i.filters['screen-size'] >= diagonal)
    }

    if (processor.length) {
      arr = processor
      .reduce((acc, el) => [
        ...acc, 
        ...arr.filter(i => i.filters['cpu-type'] === el),
      ], [])
    }
    
  return arr
}


const getCameraSorted = (arr, {cameraType, matrixRes, supporting}) => {
  if (cameraType.length) {
    arr = cameraType.reduce((acc, el) => [
      ...acc, 
      ...arr.filter(i => i.filters.type === el)
    ], [])
    }

  if (Number(matrixRes) > 0) {
    arr = arr.filter(i => i.filters['matrix-resolution'] >= matrixRes)
  }
  
  if (supporting !== 'any') {
    arr = arr.filter(i => i.filters.supporting === supporting)
  }
  
  return arr
}

const getCarSorted = (arr, {carType, carYear, transmission}) => {
  if (carType.length) {
    arr = carType.reduce((acc, el) => [
      ...acc, 
      ...arr.filter(i => i.filters['body-type'] === el)
    ], [])
  }

  if (Number(carYear) > 0) {
    arr = arr.filter(i => i.filters['production-year'] >= carYear)
  }

  const transmissionFilters = {
    mechanic: el => el.filters.transmission === 'mechanic',
    auto: el => el.filters.transmission === 'auto',
  }

  arr = transmissionFilters[transmission]
    ? arr.filter(transmissionFilters[transmission])
    : arr
  
  return arr
}

// ОСНОВНАЯ ФУНКЦИЯ-СБОРЩИК
export const useResultsList = (
  dispatch,
  resultsList, 
  {categories}, 
  {rangeMIN, rangeMAX},
  {sort},
  productDetails = {},
  ) => {

  let typeSortedResults = useCategoryFilteredResults(resultsList, categories, dispatch)

  const sortFunctions = {
    'Недвижимость': getEstateSorted,
    'Ноутбук': getLaptopSorted,
    'Фотоаппарат': getCameraSorted,
    'Автомобиль': getCarSorted,
  }

  const sortHandlers = {
    'popular': (arr) => arr.sort((a, b) => a.seller.rating - b.seller.rating),
    'cheap': (arr) => arr.sort((a, b) => a.price - b.price),
    'new': (arr) => arr.sort((a, b) => b['publish-date'] - a['publish-date']),
  };

  if (categories in sortFunctions) {
    typeSortedResults = sortFunctions[categories](typeSortedResults, productDetails)
  }

  let minMaxSortedResuls = useMinMaxSortedResults(typeSortedResults, rangeMIN, rangeMAX)
  if (sort) sortHandlers[sort](minMaxSortedResuls)

  return minMaxSortedResuls
}