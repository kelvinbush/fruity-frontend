import * as React from "react";
import { Content, Text, Wrapper, PriceSection } from "./AddItem.styles";

type Props = {};

function AddItem(props: Props) {
  return (
    <Wrapper>
      <Content>
        <Text>Add a new Item</Text>
        <label>
          Name
          <input type="text" placeholder={"Enter Name"} />
        </label>
        <label>
          Category
          <input type="text" placeholder={"Enter Category"} />
        </label>
        <PriceSection>
          <label>
            Price(Kshs.)
            <input type="number" />
          </label>
          <label>
            Quantity
            <input type="number" />
          </label>
        </PriceSection>
        <label>
          Description
          <textarea placeholder={"Enter a description"} />
        </label>
        <label>
          Image
          <input type="file" id="custom-file-input" />
        </label>
      </Content>
      <div id="div-button">
        <button id="cancel">cancel</button>
        <button id="save">Save</button>
      </div>
    </Wrapper>
  );
}

export default AddItem;
