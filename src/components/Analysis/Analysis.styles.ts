import styled from "styled-components";

export const Wrapper = styled.div`
  flex-basis: 70%;
  min-height: 100vh;
  background-color: #fafafe;
  padding: 16px 45px;
`

export const ItemWrapper = styled.div`
  flex-basis: 42%;
`

export const TopSection = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
`
export const Headers = styled.h3`
  font-family: Quicksand, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  padding-bottom: 12px;
`

export const GraphSection = styled.div`
    width: 100%;
  dl {
    display: flex;
    background-color: white;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    position: relative;
    padding: 20px;
  }

  dt {
    align-self: flex-start;
    width: 100%;
    display: block;
    text-align: center;
    font-size: 1.2em;
    font-weight: 600;
    margin-bottom: 20px;
    margin-left: 130px;
  }

  .text {
    font-weight: 600;
    display: flex;
    align-items: center;
    height: 40px;
    width: 130px;
    background-color: white;
    position: absolute;
    left: 0;
    justify-content: flex-end;
  }

  .percentage {
    font-size: 0.8em;
    line-height: 1;
    text-transform: uppercase;
    width: 100%;
    height: 40px;
    margin-left: 130px;
    background: repeating-linear-gradient(
            to right,
            #ddd,
            #ddd 1px,
            #fff 1px,
            #fff 5%
    );

    &:after {
      content: "";
      display: block;
      background-color: #3d9970;
      width: 50px;
      margin-bottom: 10px;
      height: 90%;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      transition: background-color 0.3s ease;
      cursor: pointer;
    }
    &:hover,
    &:focus {
      &:after {
        background-color: #aaa;
      }
    }
  }

@for $i from 1 through 100 {
  .percentage-#{$i} {
    &:after {
      $value: ($i * 1%);
      width: $value;
    }
  }
}
`