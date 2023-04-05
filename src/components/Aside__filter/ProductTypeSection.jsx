import MyEstateFilter from "./MyEstateFilter";
import MyLaptopFilter from "./MyLaptopFilter";import MyCameraFilter from "./MyCameraFilter";
import MyCarFilter from "./MyCarFilter";
import { useSelector } from "react-redux";


export default function ProductTypeSection() {
  const state = useSelector(state => state.type.categories)
  return (
    <>
      {filterSection(state)}
    </>
  )
}

const filterSection = (state) => {
  switch (state) {
    case 'Недвижимость':
      return <MyEstateFilter/>
    case 'Ноутбук':
      return <MyLaptopFilter/>
    case 'Фотоаппарат':
      return <MyCameraFilter/>
    case 'Автомобиль':
      return <MyCarFilter/>
    default:
      return(
        <>
        </>
      )
  }
}