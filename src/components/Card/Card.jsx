import "./Card.css";

export const Card = ({
  imageUrl,
  imageAlt,
  className,
  imageClass,
  titleClass,
  title,
  description,
}) => {
  const imageClassName = imageClass ? `card_image ${imageClass}` : "card_image";
  const titleClassName = titleClass ? `card_title ${titleClass}` : "card_title";

  return (
    <div className={className}>
      <img src={imageUrl} alt={imageAlt} className={imageClassName} />
      <label className={titleClassName}>{title}</label>
      <label className="card_description">{description}</label>
    </div>
  );
};
