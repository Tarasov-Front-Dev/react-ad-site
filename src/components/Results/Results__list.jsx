import { useEffect, useState } from "react"
import MyProductItem from "../UI/MyProductItem"

export default function Results__list() {
  const [resultsList, setResultsList] = useState(null)

  async function getItemList() {
    const response = await fetch('https://mock.pages.academy/store/db')
    const result = await response.json()
    setResultsList(result.products)

    console.log(result.products)
  }

  useEffect(() => {
    getItemList()
  }, [])

  return (
    <ul className="results__list">
      {!resultsList ? 
        <h1>Loading...</h1> :
        resultsList.map(el => {
          return <MyProductItem key={el['publish-date']}  product={el}/>
        })
      }
    </ul>
  )
}