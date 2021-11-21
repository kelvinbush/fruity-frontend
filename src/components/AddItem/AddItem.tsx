import * as React from "react";
import { useContext, useState } from "react";
import {
  Content,
  PriceSection,
  SelectTag,
  Text,
  Wrapper,
  CategoryWrapper,
} from "./AddItem.styles";

import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { AuthTokenContext } from "../../App";

type Props = {};

function AddItem(props: Props) {
  const [toggle, setToggle] = useState(false);
  const [file, setFile] = useState<File>();
  const context = useContext(AuthTokenContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const selectCategory = (
    <SelectTag>
      <option value="rigatoni">Rigatoni</option>
      <option value="dave">Dave</option>
      <option value="pumpernickel">Pumpernickel</option>
      <option value="reeses">Reeses</option>
    </SelectTag>
  );

  const uploadImage = async () => {
    if (file) {
      const storageRef = ref(getStorage(), file.name);
      try {
        await uploadBytes(storageRef, file);
        const imageUrl = await getDownloadURL(ref(getStorage(), file.name));
        console.log(imageUrl);
      } catch (e: any) {
        console.log(e.message);
      }
    }
  };

  const buttonText = !toggle ? "new" : "select";
  console.log(context.tokenState.token);
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
          <input
            type="file"
            id="custom-file-input"
            // @ts-ignore
            onChange={(e) => setFile(e.target.files[0])}
          />
        </label>
      </Content>
      <div id="div-button">
        <button id="cancel">cancel</button>
        <button id="save" onClick={uploadImage}>
          Save
        </button>
      </div>
    </Wrapper>
  );
}

export default AddItem;
