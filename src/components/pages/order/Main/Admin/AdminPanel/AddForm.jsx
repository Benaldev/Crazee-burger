import { useContext, useState } from "react";
import OrderContext from "../../../../../../context/OrderContext.jsx";
import Button from "../../../../../reusable-ui/Button.jsx";
import SubmitMessage from "./SubmitMessage.jsx";
import { EMPTY_PRODUCT } from "../../../../../../enums/product.js";
import Form from "./Form.jsx";

export default function AddForm() {
  //state
  const { handleAdd, newProduct, setNewProduct } = useContext(OrderContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  //comportements
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProductToAdd = {
      ...newProduct,
      id: crypto.randomUUID(),
    };

    handleAdd(newProductToAdd);
    setNewProduct(EMPTY_PRODUCT);

    displaySuccessMessage();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const displaySuccessMessage = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <Form product={newProduct} onSubmit={handleSubmit} onChange={handleChange}>
      <>
        <Button
          className="submit-button"
          label={"Ajouter un nouveau produit au menu"}
          version="success"
        />
        {isSubmitted && <SubmitMessage />}
      </>
    </Form>
  );
}
