import React from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";


const PostsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Posts</h1>
      <PostCard title="Post Title" body="This is a post body." />
    </div>
  );
};

export default PostsPage;
