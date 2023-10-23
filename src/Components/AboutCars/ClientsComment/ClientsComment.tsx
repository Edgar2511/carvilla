import { AboutCarTitleCard } from "../AboutCarTitleCard/AboutCarTitleCard";
import { ClientCommentItem } from "./ClientCommentItem/ClientCommentItem";
import "./ClientsComment.css";

export const ClientsComment = () => {
  return (
    <div className="ClientsComment">
      <AboutCarTitleCard title="What Our Clients Say" />
      <div className="CommentContainer"></div>
      <ClientCommentItem />
    </div>
  );
};
