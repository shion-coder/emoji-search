import styled from 'styled-components';

/* -------------------------------------------------------------------------- */

export const EmojiResultRowContainer = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 10px;
  height: 32px;
  position: relative;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #eee;

    span {
      display: inline-block;
    }
  }
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
  padding-right: 10px;
`;

export const Title = styled.span`
  position: relative;
  top: -8px;
`;

export const Info = styled.span`
  float: right;
  position: relative;
  top: 8px;
  right: 10px;
  color: #ccc;
  display: none;
`;
