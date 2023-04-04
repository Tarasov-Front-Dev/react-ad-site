import { useEffect, useState } from "react"
import MyProductItem from "../UI/MyProductItem"
import { useDispatch, useSelector } from "react-redux"
import { useResultsList } from "../hooks/useResultsList";

let count = 0;

export default function Results__list() {
  const dispatch = useDispatch()
  const productType = useSelector(state => state.productType)
  const min = useSelector(state => state.min)
  const max = useSelector(state => state.max)
  const [resultsList, setResultsList] = useState([])
  const filteredResultsList = useResultsList(resultsList, {productType, min, max})

  const rangeMIN = Number.isFinite(
    Math.min(...filteredResultsList.map(el => el.price))) && 
    Math.min(...filteredResultsList.map(el => el.price)) || 
    min
  console.log(rangeMIN)

  const rangeMAX = Number.isFinite(
    Math.max(...filteredResultsList.map(el => el.price))) && 
    Math.max(...filteredResultsList.map(el => el.price)) || 
    max
  console.log(rangeMAX)

  // useEffect(() => {
  //   dispatch({type: 'rangeMIN', payload: rangeMIN})
  //   dispatch({type: 'rangeMAX', payload: rangeMAX})
  // }, [filteredResultsList])

  async function getItemList() {
    const response = await fetch('https://mock.pages.academy/store/db')
    const result = await response.json()
    setResultsList(result.products)
  }

  useEffect(() => {
    getItemList()
  }, [])

  console.log('render', ++count)

  return (
    <ul className="results__list">
      {!filteredResultsList ? 
        <h1>Loading...</h1> :
        filteredResultsList.map(el => {
          return <MyProductItem key={el['publish-date']}  product={el}/>
        })
      }
    </ul>
  )
}