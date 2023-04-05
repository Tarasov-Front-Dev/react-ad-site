import MyEstateFilter from "./MyEstateFilter";
import MyLaptopFilter from "./MyLaptopFilter";import MyCameraFilter from "./MyCameraFilter";
import MyCarFilter from "./MyCarFilter";


export default function ProductTypeSection({queue}) {
  return (
    <>
      {filterSection(queue)}
    </>
  )
}

const filterSection = (queue) => {
  switch (queue) {
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