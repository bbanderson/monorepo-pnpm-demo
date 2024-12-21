import { notFound } from "next/navigation";
import React from "react";

const PostDetailPage = ({
  params: { id },
  searchParams: { filter },
}: {
  params: { id: string };
  searchParams: { filter: string };
}) => {
  // API
  // const post = usePost(id, filter);
  // if (!post) {
  //   notFound();
  // }

  return <div>PostDetailPage</div>;
};

export default PostDetailPage;
