import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EditInfoMessage from "./EditInfoMessage";
import Form from "./Form";

export default function EditForm() {
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    const productBeingEdited = { ...productSelected, [name]: value };

    setProductSelected(productBeingEdited);
    handleEdit(productBeingEdited);
  };

  return (
    <Form product={productSelected} onChange={handleChange} ref={titleEditRef}>
      <EditInfoMessage />
    </Form>
  );
}
