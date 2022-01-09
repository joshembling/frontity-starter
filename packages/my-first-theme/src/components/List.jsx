// File: /packages/my-first-theme/src/components/list.js

import React from "react";
import { connect, styled, Head } from "frontity";
import Link from "@frontity/components/link";

const List = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  const listTitle = () => {
    if (state.router.link === "/") {
      return "Home";
    } else {
      const data = state.source.get(state.router.link);
      const newTitle = data.type;
      return newTitle.charAt(0).toUpperCase() + newTitle.slice(1);
    }
  };

  return (
    <>
      <Head>
        <title>
          {/* {state.router.link === "/" ? "Home" : state.router.link} */}
          {listTitle()}
        </title>
      </Head>
      <Items>
        {data.items.map((item) => {
          const post = state.source[item.type][item.id];
          return (
            <Link key={item.id} link={post.link}>
              {post.title.rendered}
            </Link>
          );
        })}
        <PrevNextNav>
          {data.previous && (
            <button
              onClick={() => {
                actions.router.set(data.previous);
              }}
            >
              &#171; Prev
            </button>
          )}
          {data.next && (
            <button
              onClick={() => {
                actions.router.set(data.next);
              }}
            >
              Next &#187;
            </button>
          )}
        </PrevNextNav>
      </Items>
    </>
  );
};

export default connect(List);

const Items = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`;
