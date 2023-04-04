import { useMemo } from "react";

const useTypeSortedResults = (resultsList, productType) => {
  const sortByType = useMemo(() => {
    if (productType === 'Все') return resultsList
    return [...resultsList.filter(el => productType === el.category)]
  }, [resultsList, productType])

  return sortByType
}

const useMinMaxSorterResults = (resultsList, min, max) => {
  const sortByMinMax = useMemo(() => {
    if (min < 0 || max < 0 || Number.isNaN(+min) || Number.isNaN(+max)) return
    return [...resultsList
      .filter(el => el.price >= min && el.price <= max)]
  }, [resultsList, min, max])

  return sortByMinMax
}

export const useResultsList = (resultsList, {productType, min, max}) => {
  const typeSortedResults = useTypeSortedResults(resultsList, productType)
  const minMaxSortedResuls = useMinMaxSorterResults(typeSortedResults, min, max)

  return minMaxSortedResuls
}