function HomeRoomCard({ name, tag }: { name: string; tag: string | null }) {
  const Card = ({ categ, text }: { categ: string; text: string | number }) => {
    return (
      <div className="flex items-center gap-2">
        <p className="md:w-[45%] lg:w-[35%]">{categ}:</p>
        <p className="  font-bold">{text}</p>
      </div>
    );
  };

  return (
    <div className=" basis-1/2 min-w-[300px]  max-w-[600px] room-card  rounded-md bg-white flex gap-4 overflow-hidden">
      <img
        src="/images/bedroom.jpg"
        alt="Room"
        className="w-[36.67%]  h-full object-cover"
      />
      <div className="flex-1 kurale overflow-scroll">
        <p className="text-center text-lg">{name}</p>
        {tag && <small className="text-red-700">{tag}</small>}
        <Card categ="Room Type" text={"Studio"} />
        <Card categ="Adult" text={10} />
        <Card categ="Children" text={10} />
        <Card categ="Rate" text={"Php 10000.00"} />
      </div>
    </div>
  );
}

export default HomeRoomCard;
