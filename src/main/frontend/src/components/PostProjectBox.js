import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Ribbon } from '../static/ribbon.svg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { Wrapper } from '../elements/index';
import { makeStyles } from '@material-ui/core/styles';
const PostProjectBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const useStyles = makeStyles({
    //TODO : 버튼 색깔처리 ㅜㅜ
    button: {
      borderRadius: '50%',
      backgroundColor: 'white',
      border: '1px solid #adb5bd',
      color: 'red',
      fontSize: '1.25em',
      margin: '0 1px'
    }
  });
  const classes = useStyles();
  return (
    <Project>
      <Title>Project</Title>
      <Icon>
        <Ribbon />
      </Icon>

      <List is_open={isOpen}>
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
      <Wrapper jc="space-between">
        <HiddenController
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <ArrowDropUpIcon style={{ marginRight: '0.25rem' }} />
          ) : (
            <ArrowDropDownIcon style={{ marginRight: '0.25rem' }} />
          )}
          목록 보기
        </HiddenController>
        <Wrapper>
          <Page>22/22</Page>

          <ChevronLeftIcon className={classes.button} />
          <ChevronRightIcon className={classes.button} />
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
const Footer = styled.div``;

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

export default PostProjectBox;
