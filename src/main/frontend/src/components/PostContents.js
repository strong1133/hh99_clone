import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const PostContents = (props) => {
  const contents = useSelector((state) => state.post.detailPost.contents);

  return (
    <Container>
      <Contents dangerouslySetInnerHTML={{ __html: contents }}></Contents>
    </Container>
  );
};

PostContents.defaultProps = {};

const Container = styled.div`
  margin: 3rem auto;
`;
const Contents = styled.div`
  max-width: 768px;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export default PostContents;
