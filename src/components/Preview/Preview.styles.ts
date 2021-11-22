import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  min-width: 380px;
  min-height: 660px;
  max-height: 680px;
  position: sticky;
  top: 0;
  color: #000000;
  font-style: normal;
  font-weight: 500;
  padding: 16px
`

export const EditImg = styled.img`
  display: block;

  &:hover {
    cursor: pointer;
  }
`

export const ProductImg = styled.img`
  width: 100%;
  height: 90px;
  border-radius: 25px;
  margin: 0 auto;
  object-fit: contain;
`
export const PriceCategoryWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: 0;
  justify-content: space-between`

export const Title = styled.p`
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;
  color: #C1C1C4;
  margin-bottom: 0;
  padding-bottom: 12px;
`

export const NameText = styled.h3`
  font-size: 24px;
  line-height: 30px;
  margin-top: 0`

export const CategoryText = styled.h4`
  font-size: 18px;
  margin-top: 0;
`

export const DescText = styled.h5`
  font-size: 18px;
  width: 360px;
  margin-top: 0;
  overflow-wrap: break-word;
  max-height: 200px !important;
  overflow-y: scroll;
  overflow-x: hidden`
