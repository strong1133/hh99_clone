import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Ribbon } from '../static/ribbon.svg';
import {
  FaCaretDown,
  FaCaretUp,
  FaAngleLeft,
  FaAngleRight
} from 'react-icons/fa';

import { Wrapper } from '../elements/index';
const PostProjectBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const list = [
    'Security policy',
    'DocType',
    'LocalStorage',
    ' cookie',
    ' sessionStorage',
    'Script',
    'async',
    'defer',
    'svg, canvas의 차이',
    '[Javascript]OOP vs FP',
    'Stack vs Queue',
    ' Hoisting',
    'SPA, CSR, SSR',
    'Event loop, call stack, task queue'
  ];
  return (
    <Project>
      <Title>Project</Title>
      <Icon>
        <Ribbon />
      </Icon>

      <List is_open={isOpen}>
        <ol>
          {list.map((i, idx) => {
            return (
              <li key={idx}>
                <a href="#">{i}</a>
              </li>
            );
          })}
        </ol>
      </List>
      <Wrapper jc="space-between">
        <HiddenController
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <span>
              <FaCaretUp style={{ marginRight: '0.25rem' }} />
              숨기기
            </span>
          ) : (
            <span>
              <FaCaretDown style={{ marginRight: '0.25rem' }} />
              목록 보기
            </span>
          )}
        </HiddenController>
        <Wrapper>
          <Page>22/22</Page>
          <I>
            <FaAngleLeft />
          </I>
          <I>
            <FaAngleRight />
          </I>
        </Wrapper>
      </Wrapper>
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

const List = styled.div`
  display: ${(props) => (props.is_open ? 'block' : 'none')};
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 1rem;
`;

const HiddenController = styled.div`
  padding-top: 3rem;
  ${(props) => props.theme.flex_row}
  justify-content:flex-start;
  margin: 0;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

const Page = styled.span`
  color: ${(props) => props.theme.gray};
  margin-right: 1.125rem;
  font-size: 0.875rem;
`;

const I = styled.span`
  background-color: white;
  width: 1.5rem;
  height: 1.5rem;
  ${(props) => props.theme.flex_row}
  justify-content:center;
  border-radius: 50%;
  border: 1px solid #e8e8e8;
  margin: 0 2px;

  &:hover {
    background-color: ${(props) => props.theme.velog_green};

    & * {
      color: white;
    }
  }
  & * {
    color: ${(props) => props.theme.velog_green};
    font-size: 0.9rem;
  }
`;
export default PostProjectBox;
