import styled from "styled-components";

export const Wrapper = styled.section`
  min-width: 380px;
  min-height: 660px;
  max-height: 680px;
  position: sticky;
  top: 0;
  background-color: #fafafe;
  max-width: 380px;
  padding-bottom: 16px;
  padding-top: 16px;

  #div-button {
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding-top: 33px;
  }

  #div-button button {
    height: 50px;
    width: 70px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    padding: 16px;
  }

  #cancel {
    background: none;
    color: #34333a;
    outline: none;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  #save {
    background: #f9a109;
    border-radius: 12px;
    color: white;
    outline: none;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Content = styled.div`
  width: 93%;
  margin: 0 auto;

  label {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #34333a;

    input {
      display: block;
      border: 2px solid #bdbdbd;
      box-sizing: border-box;
      border-radius: 12px;
      height: 50px;
      width: 100%;
      background-color: #fafafe;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      padding-left: 8px;
      color: #000000;
      outline: none;
    }

    textarea {
      min-height: 100px;
      max-height: 100px;
      min-width: 100%;
      max-width: 100%;
      border: 2px solid #bdbdbd;
      box-sizing: border-box;
      border-radius: 12px;
      background-color: #fafafe;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      padding-left: 8px;
      color: #000000;
      outline: none;
    }

    #custom-file-input::-webkit-file-upload-button {
      visibility: hidden;
    }

    #custom-file-input::before {
      content: "Pick image";
      display: inline-block;
      background: linear-gradient(top, #f9f9f9, #e3e3e3);
      border: 1px solid #999;
      border-radius: 3px;
      padding: 5px 8px;
      outline: none;
      white-space: nowrap;
      -webkit-user-select: none;
      cursor: pointer;
      text-shadow: 1px 1px #fff;
      font-weight: 700;
      font-size: 10pt;
    }

    #custom-file-input:hover::before {
      border-color: black;
    }

    #custom-file-input:active::before {
      background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
    }
  }
`;

export const Text = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
  margin: 0;
`;

export const PriceSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 6px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;

  button {
    flex-basis: 25%;
    color: #34333a;
    border-radius: 12px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    outline: none;
    border: none;
    padding: 12px;
    background-color: #bdbdbd;

    &:hover {
      cursor: pointer;
      background-color: lightgreen;
      color: white;
    }
  }
}

input {
  display: block;
  border: 2px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 12px;
  height: 50px;
  width: 100%;
  background-color: #fafafe;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding-left: 8px;
  color: #000000;
  outline: none;
  flex-basis: 65%;
`;

export const SelectTag = styled.select`
  flex-basis: 65%;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding-left: 8px;
  color: #000000;
  outline: none;
  border: 2px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 12px;
  background-color: inherit;


  option {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    padding-left: 8px;
    color: #000000;
    outline: none;
  }

  option:hover {
    background: orange;
  }
`;
