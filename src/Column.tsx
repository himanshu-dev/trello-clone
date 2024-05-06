import {AddButton, ColumnContainer, ColumnTitle} from "./styles";
import {Card} from "./Card";
import {AddItem} from "./AddItem";

type ColumnProps = {
  title: string
}

export const Column = ({title}: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      <Card text="Generate app scaffold"/>
      <Card text="Learn TypeScript"/>
      <Card text="Begin to use static typing"/>
      <AddItem dark={true} text={'Add another item'} onAdd={() => null}/>
    </ColumnContainer>
  )
}

Column.displayName = 'Column'