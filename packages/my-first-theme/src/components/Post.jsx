// File: /packages/my-first-theme/src/components/post.js

import React from "react";
import { connect, styled, Head } from "frontity";
import dayjs from "dayjs";

const Post = ({ state, libraries }) => {
  // Note the use of the two step data retrieval process in this code. We first use state.source.get, the helper function, to get the relevant item from state.source.data, and then we use the data.type property to determine where in the state we should fetch the item from, i.e. whether it's a post or a page.

  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  const formattedDate = dayjs(post.date).format("DD/MM/YYYY");
  const Html2React = libraries.html2react.Component;

  return (
    <>
      <Head>
        <title>{post.title.rendered}</title>
      </Head>
      <div>
        <h2>{post.title.rendered}</h2>
        <PostInfo>
          <p>Posted: {formattedDate}</p>
          <div className="author-info">
            <h5>Author: {author.name}</h5>
            <img src={author.avatar_urls[96]} alt="" />
          </div>
        </PostInfo>
        {/* <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} /> */}
        <Html2React html={post.content.rendered} />
      </div>
    </>
  );
};

export default connect(Post);

const PostInfo = styled.div`
  background-image: linear-gradient(to right, #f4f4f4, #fff);
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid lightseagreen;
  font-size: 0.8em;

  & > p {
    margin: 0;
  }

  .author-info {
    > :first-child {
      margin: 1rem 0 0.25rem 0;
    }
  }
`;
