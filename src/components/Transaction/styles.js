import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ value }) => (value < 0 ? "#e2e1e1" : "#fff")};
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
Wrapper.displayName = "TransactionWrapper";

export const TransactionDate = styled.div`
  flex-grow: 1;
`;
TransactionDate.displayName = "TransactionDate";

export const Value = styled.div`
  flex-grow: 1;
`;
Value.displayName = "Value";

export const Comment = styled.div`
  flex-grow: 1;
`;
Comment.displayName = "Comment";

export const Icon = styled.span`
  padding: 5px;
  padding-right: 20px;
  img {
    max-width: 18px;
  }
`;
Icon.displayName = "Icon";
