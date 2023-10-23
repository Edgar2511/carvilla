import "./AboutCarTitleCard.css";

interface AboutCarTitleCardData {
  checkout?: string;
  title: string;
}

export const AboutCarTitleCard = (props: AboutCarTitleCardData) => {
  return (
    <div className="AboutCarTitle">
      <div className="AboutCarTitleCard">
        <p className="CheckoutTitle">{props.checkout}</p>
        <h2 className="CarTitleCard">{props.title}</h2>
      </div>
    </div>
  );
};
