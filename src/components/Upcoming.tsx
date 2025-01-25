import Title from "./Title";

function Upcoming() {
  const Card = ({ text, date }: { text: string; date: string }) => (
    <div className="flex-1 flex items-center px-4  ">
      <img src="/images/calendar.png" className="w-[80px]" alt="calendar" />
      <div>
        <p className="text-[var(--brown)] karma-medium">{text}</p>
        <p className="karma-bold text-3xl ">{date}</p>
      </div>
    </div>
  );

  return (
    <>
      <Title text="Upcoming" />
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap items-center  max-w-[1300px] mx-auto justify-between gap-8 flex-col  md:flex-row">
          <Card text="Arrival Date" date="January 29, 2025" />
          <Card text="Departure Date" date="January 29, 2025" />
        </div>
        <button className="w-[200px] text-white text-2xl karma-bold py-3 rounded-sm bg-[var(--brown)] my-4 cursor-pointer">
          View
        </button>
      </div>
    </>
  );
}

export default Upcoming;
