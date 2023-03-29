import MyCameraFilter from "./UI/MyCameraFilter";
import MyCarFilter from "./UI/MyCarFilter";
import MyEstateFilter from "./UI/MyEstateFilter";
import MyLaptopFilter from "./UI/MyLaptopFilter";


export default function ProductTypeSection({queue}) {
  return (
    <>
      {filterSection(queue)}
    </>
  )
}

const filterSection = (queue) => {
  switch (queue) {
    case 'estate':
      return <MyEstateFilter/>
      break;
    case 'laptops':
      return <MyLaptopFilter/>
      break;
    case 'camera':
      return <MyCameraFilter/>
      break;
    case 'cars':
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