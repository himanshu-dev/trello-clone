import {FormContainer, NewItemButton, NewItemInput} from "./styles";
import {useState} from "react";

type NewItemFormProps = {
  onAdd(): void;
};

export const NewItemForm = (props: NewItemFormProps) => {
  const {onAdd} = props;
  const [value, setValue] = useState("");

  return (
    <FormContainer>
      <NewItemInput
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
        placeholder={"Enter a title"}
      />
      <NewItemButton onClick={onAdd}>Add</NewItemButton>
    </FormContainer>
  );
};
