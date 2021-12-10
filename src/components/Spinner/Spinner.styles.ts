import styled from 'styled-components';

export const Spinner = styled.div`
  border: 5px solid #f7cf88;
  border-top: 5px solid var(--medOrange);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 0.8s linear infinite;
  margin: 18px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
