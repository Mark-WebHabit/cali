import Title from "../components/Title";
import HomeRoomCard from "../components/HomeRoomCard";
import Upcoming from "../components/Upcoming";
function Home() {
  return (
    <section className=" mt-4">
      <Upcoming />

      <Title text="Our Rooms" />

      <div className="card-container flex flex-wrap gap-8 justify-around p-8">
        <HomeRoomCard tag={"Air Conditioned"} name="Luna" />
        <HomeRoomCard tag={"Air Conditioned"} name="Luna" />
      </div>
    </section>
  );
}

export default Home;
