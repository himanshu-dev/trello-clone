import styled from 'styled-components'

export const AppContainer = styled.div`
  align-items: flex-start;
  background-color: #3179ba;
  display: flex;
  flex-direction: row;
  height: 100%;
  padding: 20px;
  width: 100%;
`

type DragPreviewContainerProps = {
  isHidden?: boolean
}
export const DragPreviewContainer = styled.div<DragPreviewContainerProps>`
  opacity: ${props => (props.isHidden ? 0.3 : 1)};
`

export const ColumnContainer = styled(DragPreviewContainer)`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    visibility: hidden;
    height: 28px;
  }

  &:hover {
    button {
      visibility: visible;
    }
  }
`

export const CardContainer = styled(DragPreviewContainer)`
  background-color: #fff;
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  max-width: 300px;
  border-radius: 3px;
  box-shadow: #091e4240 0 1px 0 0;
`

type AddButtonProps = {
  dark?: boolean
}
export const AddButton = styled.button<AddButtonProps>`
  padding: 10px 12px;
  font-size: 12px;
  cursor: pointer;
  border: 0;
  border-radius: 3px;
  max-width: 300px;
  width: 100%;
  text-align: left;
  color: ${props => (props.dark ? '#424242' : '#fff')};
  background-color: #ffffff3d;
  transition: background-color 85ms ease-in;

  &:hover {
    background-color: #ffffff52;
  }
`

export const FormContainer = styled.form<AddButtonProps>`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  background-color: ${({ dark }) => (dark ? 'transparent' : '#ebecf0')};
  padding: ${({ dark }) => (dark ? 0 : '8px 8px')};
  border-radius: 3px;
`

export const ButtonRow = styled.div`
  display: flex;
  align-items: center;
`

export const NewItemButton = styled.button`
  background-color: #5aac44;
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #fff;
  padding: 6px 12px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #3d9f22;
  }
`

export const CancelIconButton = styled.button`
  border-radius: 3px;
  border: none;
  box-shadow: none;
  color: #635e5e;
  padding: 4px 8px;
  text-align: center;
  margin-left: 4px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 200ms ease-in;

  &:hover {
    background-color: rgba(217, 216, 216, 0.93);
  }
`

export const NewItemInput = styled.input`
  border-radius: 3px;
  border: none;
  box-shadow: #091e4240 0 1px 0 0;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  width: 100%;
`
