import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ReactComponent as Heart } from '../../static/Heart_Black.svg';

const PostContents = (props) => {
  const contents = useSelector((state) => state.post.detailPost.contents);

  return (
    <Container>
      <Navbar>
        <Icon>
          <Heart />
        </Icon>
        <span>123</span>
      </Navbar>
      <Contents dangerouslySetInnerHTML={{ __html: contents }}></Contents>
      <div>목차</div>
    </Container>
  );
};

PostContents.defaultProps = {};

const Container = styled.div`
  ${(props) => props.theme.border_box};
  ${(props) => props.theme.flex_row};

  padding: 0 1rem;
`;

const Navbar = styled.div`
  width: 4rem;
  background: rgb(248, 249, 250);
  border: 1px solid rgb(241, 243, 245);
  border-radius: 2rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;
const Contents = styled.div`
  ${(props) => props.theme.default_width}
`;

const Icon = styled.div`
  margin-right: 0.7rem;
`;
export default PostContents;
