import "./BuyModal.scss";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

type Props = {
  votedGood: Good | undefined;
  closeModal: () => void;
  buyModal: boolean;
};

export const BuyModal: React.FC<Props> = ({
  votedGood,
  closeModal,
  buyModal,
}) => {
  const [nameInputError, setNameInputError] = useState<string>("e");
  const [numberInputError, setNumberInputError] = useState<string>("e");
  const [nameClass, setNameClass] = useState<string>("");
  const [numberClass, setNumberClass] = useState<string>("");
  const [newOrder, setNewOrder] = useState<Order>({
    name: "",
    number: "",
    order: { ...votedGood },
  });

  let modalClass = `modal ${buyModal && `modal__visible`}`;

  const inputNameChecker = () => {
    if (newOrder.name === "") {
      setNameInputError("This field in required");
      setNameClass(" modal__input-invalid");
    } else if (/\d/.test(newOrder.name)) {
      setNameInputError("String contains numbers!");
      setNameClass(" modal__input-invalid");
    } else {
      setNameInputError("e");
      setNameClass(" modal__input-valid");
    }
  };

  const inputNumberChecker = () => {
    if (newOrder.number === "") {
      setNumberInputError("This field in required");
      setNumberClass(" modal__input-invalid");
    } else if (!/^\d+$/.test(newOrder.number)) {
      setNumberInputError("Only numbers allowed");
      setNumberClass(" modal__input-invalid");
    } else if (!/^[0-9]{12,12}$/.test(newOrder.number)) {
      setNumberInputError("Should contain 12 characters");
      setNumberClass(" modal__input-invalid");
    } else {
      setNumberInputError("e");
      setNumberClass(" modal__input-valid");
    }
  };

  const onInputNameFocus = () => {
    setNameInputError("e");
    setNameClass("");
  };

  const onInputNumberFocus = () => {
    setNumberInputError("e");
    setNumberClass("");
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    inputNameChecker();
    inputNumberChecker();
    if (
      nameClass === " modal__input-valid" &&
      numberClass === " modal__input-valid"
    ) {
      console.log(newOrder);
      closeModal();
    }
  };

  return (
    <div id="myModal" className={modalClass}>
      <div className="modal-content">
        <button className="modal__close" onClick={() => closeModal()}>
          <IoMdClose />
        </button>
        <div className="modal__category">{votedGood?.category}</div>
        <div className="modal__name">{votedGood?.name}</div>
        <div className="modal__price">
          <span className="modal__dollar-sign">$</span>
          {votedGood?.price}
        </div>
        <form className="modal__form" onSubmit={(e) => onSubmit(e)}>
          <input
            className={`modal__input${nameClass}`}
            type="text"
            placeholder="Name"
            onChange={(e) => setNewOrder({ ...newOrder, name: e.target.value })}
            onFocus={() => onInputNameFocus()}
            onBlur={() => inputNameChecker()}
          />
          <span
            className="modal__input-error"
            style={{
              visibility: nameInputError.length > 1 ? "visible" : "hidden",
            }}
          >
            {nameInputError}
          </span>
          <input
            className={`modal__input${numberClass}`}
            type="text"
            placeholder="Number"
            onChange={(e) =>
              setNewOrder({ ...newOrder, number: e.target.value })
            }
            onFocus={() => onInputNumberFocus()}
            onBlur={() => inputNumberChecker()}
          />
          <span
            className="modal__input-error"
            style={{
              visibility: numberInputError.length > 1 ? "visible" : "hidden",
            }}
          >
            {numberInputError}
          </span>
          <button className="modal__submit" type="submit">
            Order
          </button>
        </form>
      </div>
    </div>
  );
};
