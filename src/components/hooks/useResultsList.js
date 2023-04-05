import { useMemo } from "react";
import { getMinMax } from "../Utilities/rangeMinMax";

const useTypeSortedResults = (resultsList, productType, dispatch) => {
  const sortByType = useMemo(() => { // Мемоизируемся, чтобы не фильтроваться по каждому чиху
    if (!resultsList.length) return [] // При первичном рендере (до момента получения массива объявлений от ДБ) возвращает пустой массив объявлений

    if (productType === 'Все') { // Если показывается весь массив объявлений (дефолтное состояние), то развернуть дефолтный массив в новый и вернуть его. Задать мин/макс значения слайдера и его ползунков
      getMinMax(resultsList, dispatch)
      return [...resultsList] // Разорачиваем массив чтобы получить немемоизированное значение от функции useMinMaxSorterResults
    }

    // Отфильтровать массив объявлений по типу, задать мин/макс слайдера и его ползунков
    const filteredResultsList = [...resultsList
      .filter(el => productType === el.category)]

    getMinMax(filteredResultsList, dispatch)
    return filteredResultsList

  }, [resultsList, productType])

  return sortByType
}

const useMinMaxSorterResults = (resultsList, rangeMIN, rangeMAX, dispatch) => {
  const sortByMinMax = useMemo(() => { // Мемоизируемся, чтобы не фильтроваться по каждому чекбоксу

    // в случае непредвиденных значений вернуть массив без фильтрации. Можно выдавать ошибку и просить пользователя перезагрузить приложение
    if (rangeMIN < 0 || rangeMAX < 0 || Number.isNaN(+rangeMIN) || Number.isNaN(+rangeMAX)) return

    // отфильтровать массив объявления по предельным значениям стоимости
    const filteredResultsList = [...resultsList
      .filter(el => el.price >= rangeMIN && el.price <= rangeMAX)]
    
    return filteredResultsList
  }, [resultsList, rangeMIN, rangeMAX])

  return sortByMinMax
}


// ОСНОВНАЯ ФУНКЦИЯ-СБОРЩИК
export const useResultsList = (resultsList, {productType, rangeMIN, rangeMAX, MIN, MAX}, dispatch) => {
  const typeSortedResults = useTypeSortedResults(resultsList, productType, dispatch)
  const minMaxSortedResuls = useMinMaxSorterResults(typeSortedResults, rangeMIN, rangeMAX, dispatch)

  return minMaxSortedResuls
}