import "./ClientCommentItem.css";

interface ClientCommentItemProips {
  clientProfilePic: string;
  comment: string;
  name: string;
  city: string;
}

const ClientCommentItemData: ClientCommentItemProips[] = [
  {
    clientProfilePic: "http://127.0.0.1:5500/assets/images/clients/c1.png",
    comment:
      "Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.",
    city: "New York",
    name: "Tomas Lili",
  },
  {
    clientProfilePic: "http://127.0.0.1:5500/assets/images/clients/c2.png",
    comment:
      "Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.",
    city: "Washington",
    name: "John Doe",
  },
  {
    clientProfilePic: "http://127.0.0.1:5500/assets/images/clients/c3.png",
    comment:
      "Sed ut pers unde omnis iste natus error sit voluptatem accusantium dolor laudan rem aperiam, eaque ipsa quae ab illo inventore verit.",
    city: "London",
    name: "Romi Rain",
  },
];

export const ClientCommentItem = () => {
  return (
    <div className="ClientCommentItemContainer">
      {ClientCommentItemData.map((commentItem) => (
        <div className="ClientCommentItem">
          <div className="clientProfilePic">
            <img src={commentItem.clientProfilePic} alt="#" />
          </div>
          <p className="clientComment">{commentItem.comment}</p>
          <div>
            <h2 className="clientCity">
              <a href="#">{commentItem.name}</a>
            </h2>
            <h4 className="clientName">{commentItem.city}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};
