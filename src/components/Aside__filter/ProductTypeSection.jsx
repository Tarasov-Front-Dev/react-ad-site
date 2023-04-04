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
      break;
    case 'Ноутбук':
      return <MyLaptopFilter/>
      break;
    case 'Фотоаппарат':
      return <MyCameraFilter/>
      break;
    case 'Автомобиль':
      return <MyCarFilter/>

    default:
      return(
        <>
          <MyEstateFilter/>
          <hr></hr>
          <MyLaptopFilter/>
          <hr></hr>
          <MyCameraFilter/>
          <hr></hr>
          <MyCarFilter/>
        </>
      )
      break;
  }
}