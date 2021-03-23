import { useRef } from "react";
import { FiCheckSquare } from "react-icons/fi";
import { FoodProps } from "../../types";
import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";

type ModalAddFoodProps = {
  isOpen: boolean;
  setIsOpen: () => void;
  editingFood: FoodProps;
  handleUpdateFood: (food: FoodProps) => Promise<void>;
};

function ModalEditFood({
  isOpen,
  setIsOpen,
  editingFood,
  handleUpdateFood,
}: ModalAddFoodProps) {
  const formRef = useRef(null);

  const handleSubmit = async (data: FoodProps) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" required />

        <Input name="name" placeholder="Ex: Moda Italiana" required />
        <Input name="price" placeholder="Ex: 19.90" type="number" required />

        <Input name="description" placeholder="Descrição" required />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalEditFood;
