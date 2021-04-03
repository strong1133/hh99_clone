import React from 'react';
import styled from 'styled-components';
const PostProjectBox = () => {
  return (
    <Project>
      <Title>Project</Title>
      <List>
        <ol>
          <li>
            <a href="#">My trello - trello clone coding</a>
          </li>
          <li>
            <a href="#">vanillaJS 도서검색창</a>
          </li>
          <li>
            <a href="#">my-taste project</a>
          </li>
          <li>
            <a href="#">뉴편함</a>
          </li>
          <li>
            <a href="#">React-calendar</a>
          </li>
        </ol>
      </List>
    </Project>
  );
};

const Project = styled.div`
  text-align: left;
  margin-top: 2rem;
  padding: 1rem;
  background: rgb(248, 249, 250);
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 6%) 0px 0px 4px 0px;
  position: relative;

  & ol {
    padding: 0;
    counter-reset: item;

    & li {
      list-style: none;
      margin: 3px 0;

      &::before {
        counter-increment: item;
        content: counter(item) '. ';
        counter-increment: item;

        color: rgb(173, 181, 189);
        font-style: italic;
        margin-right: 0.25rem;
        margin-right: 0.25rem;
      }
      &:first-child a {
        font-weight: 650;
        color: ${(props) => props.theme.velog_green};

        &:hover {
          border-bottom: 1px solid ${(props) => props.theme.velog_green};
        }
      }
      & a {
        text-decoration: none;

        &:hover {
          border-bottom: 1px solid ${(props) => props.theme.black};
        }
      }
    }
  }
`;

const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 700;
`;

const List = styled.div``;
export default PostProjectBox;
