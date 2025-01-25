import { useNavigate } from "react-router-dom";

// compopnents
import Title from "../components/Title";
import HomeRoomCard from "../components/HomeRoomCard";
import Upcoming from "../components/Upcoming";
function Home() {
  const navigate = useNavigate(); // initialize one so child wont have to

  const handleGoToRoomId = () => {
    navigate("/room/1");
  };

  return (
    <section className="">
      <Upcoming />

      <Title text="Our Rooms" />

      <div className="card-container flex flex-wrap gap-8 justify-around p-8">
        <HomeRoomCard
          tag={"Air Conditioned"}
          name="Luna"
          goToRoomId={handleGoToRoomId}
        />
        <HomeRoomCard
          tag={"Air Conditioned"}
          name="Luna"
          goToRoomId={handleGoToRoomId}
        />
      </div>
    </section>
  );
}

export default Home;
