import HighLighCompo from "../../../components/tour/HighLighCompo";
import { CircleX, Star, Building,Car,Utensils,Calendar} from "lucide-react";

const TourLight = () => {
  const cards = [
    {
      id: 1,
      icon:<CircleX  />,
      visit: "Visit Angkor Wat",
      txtPara:
        "Experience the monumental UNESCO world heritage temple at its finest.",
    },
    {
      id: 2,
      icon: <Star  />,
      visit: "Professional Tour Guide",
      txtPara:
        "Gain insightful facts from certified local experts speaking fluent English.",
    },
    {
      id: 3,
      icon: <Building />,
      visit: "Hotel Included",
      txtPara:
        "Relax in comfortable air-conditioned 4-star boutique hotels downtown.",
    },
    {
      id:4,
      icon: <Car />,
      visit:'Transportation Included',
      txtPara :
        "Traval hassle-free between attraction in provate  coll vehicle"
    },
    {
      id:5,
      icon:<Utensils />,
      visit :"Cocal Food Experience",
      txtPara :"Savor gourmet authenic khmer lunches prepared fresh daily"
    },{
      id:6,
      icon :<Calendar />,
      visit :"Free Cancellation",
      txtPara : "Chnage plans securely with zero cancellation fees up to 24h pior."
    }
  ];
  
  return (
    <>
      <h1 className="text-4xl text-gray-800 p-4 font-bold">Tour Hightlights</h1>
      <div className="grid grid-cols-3 gap-4 p-4">
        {cards.map((card) => (
          <HighLighCompo
            key={card.id}
            icon={card.icon}
            visit={card.visit}
            txtPara={card.txtPara}
          />
        ))}
      </div>
    </>
  );
};

export default TourLight;
