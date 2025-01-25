import Info from "../components/Info";

function Contact() {
  const Card = ({ img, text }: { img: string; text: string }) => (
    <div className="flex items-center gap-4">
      <img src={img} className="w-[40px]" alt="Phone" />
      <p>{text}</p>
    </div>
  );

  return (
    <Info title="CONTACT">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 justify-center mt-8">
        <Card img="/images/phone.png" text="0987 865 5511" />{" "}
        <Card img="/images/email.png" text="caliresort@gmail.com" />{" "}
        <Card img="/images/facebook.png" text="Cali Resort" />
        <Card img="/images/instagram.png" text="Cali Resort" />
      </div>
    </Info>
  );
}

export default Contact;
