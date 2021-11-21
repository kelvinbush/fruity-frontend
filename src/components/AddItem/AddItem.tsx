import * as React from "react";
import { useState } from "react";
import {
  Content,
  PriceSection,
  SelectTag,
  Text,
  Wrapper,
  CategoryWrapper,
} from "./AddItem.styles";

type Props = {};

function AddItem(props: Props) {
  const [toggle, setToggle] = useState(false);

  const selectCategory = (
    <SelectTag>
      <option value="rigatoni">Rigatoni</option>
      <option value="dave">Dave</option>
      <option value="pumpernickel">Pumpernickel</option>
      <option value="reeses">Reeses</option>
    </SelectTag>
  );

  const buttonText = !toggle ? "new" : "select";

  return (
    <Wrapper>
      <Content>
        <Text>Add a new Item</Text>
        <label>
          Name
          <input type="text" placeholder={"Enter Name"} />
        </label>
        <label>Category</label>
        <CategoryWrapper>
          {!toggle ? (
            selectCategory
          ) : (
            <input type="text" placeholder={"Enter Category"} />
          )}
          <button onClick={() => setToggle(!toggle)}>{buttonText}</button>
        </CategoryWrapper>
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
