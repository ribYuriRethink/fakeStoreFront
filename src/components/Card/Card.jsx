import "./Card.css";

export const Card = ({ imageUrl, imageAlt, className, title, description }) => {
  return (
    <>
      <div className={className}>
        <img src={imageUrl} alt={imageAlt} className="card_image" />
        <label className="card_title">{title}</label>
        <label className="card_description">{description}</label>
      </div>
    </>
  );
};
