import styled from "styled-components";

export const Wrapper = styled.section`
  min-width: 68px;
  max-height: 660px;
  background-color: #ffffff;
  max-width: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 16px;
  padding-top: 16px;
  position: sticky;
  top: 0;
`;
export const LogoImg = styled.img`
  height: 40px;
  width: 40px;
  object-fit: contain;
  align-self: center;
`;
export const NavIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 180px;

  img {
    align-self: center;

    &:hover {
      cursor: pointer;
    }
  }
`;
export const AccountImg = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
  align-self: center;
`;
