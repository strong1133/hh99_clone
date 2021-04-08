import React from 'react';
import styled from 'styled-components';

const HashTag = (props) => {
  return <Tag onClick={props._onClick}>{props.children}</Tag>;
};

HashTag.defaultProps = {
  _onClick: () => {}
};
const Tag = styled.div`
  ${(props) => props.theme.flex_row};
  color: ${(props) => props.theme.velog_green};
  background-color: ${(props) => props.theme.post_bg};
  padding: 0 0.75rem;
  height: 1.5rem;
  border-radius: 0.75rem;
  font-size: 12px;
  margin: 0.5rem 0;
  cursor: pointer;
  margin-right: 0.5rem;
`;
export default HashTag;
