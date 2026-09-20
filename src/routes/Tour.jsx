import Header from "../components/header";
import TourGallery from "../components/tour/hero_section/TourGallery";
import Tours_detailContent from "../components/tour/tours_detailContent/Tours_detailContent";
import TourLight from "../pages/public/tour/TourLight";

const Tour = () => {
  return (
    <>
      <div className="max-w-[1700px] mx-auto sm:px-6  ">
        <Header />
        <TourGallery />
        <Tours_detailContent />
        <TourLight />
      </div>
    </>
  );
};

export default Tour;
