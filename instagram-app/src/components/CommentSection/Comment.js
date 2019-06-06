import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Username from '../StyledReusables/Username';

const AddedCommentsSection = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: 10px;
  margin-bottom: -20px;
`;
const CommentText = styled.div`
  font-size: .8rem;
`;

const Comment = props => {
  return (
    <AddedCommentsSection>
        <Username>{props.comment.username}</Username>
        <CommentText>{props.comment.text}</CommentText>
    </AddedCommentsSection>
  );
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};

export default Comment;