import React from "react";

type PostCardProps = {
  title: string;
  body: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, body }) => {
  return (
    <div className="p-4 border rounded shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
