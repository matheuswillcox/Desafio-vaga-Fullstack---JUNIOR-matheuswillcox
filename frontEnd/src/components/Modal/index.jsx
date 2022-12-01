import ReactModal from "react-modal";
import Button from "../Button";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../Provider/modalState/actions";

ReactModal.setAppElement("body");

const modalStyle = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "var(--grey2)",
  },
  overlay: {
    backgroundColor: "rgba(44, 43, 43, 0.407)",
  },
};
const closeStyle = {
  background: "transparent",
  border: "none",
  fontSize: "20px",
};
const headerStyle = { display: "flex", justifyContent: "space-between" };
const contentStyle = {};
const buttonBoxStyle = {};

function CustomModal() {
  const dispatch = useDispatch();

  const modalInfo = useSelector((state) => state.modal);

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <ReactModal
      style={modalStyle}
      isOpen={modalInfo.state}
      shouldCloseOnOverlayClick={true}
      onRequestClose={handleClose}
    >
      <div style={headerStyle}>
        <h3>{modalInfo.title}</h3>
        <button style={closeStyle} onClick={handleClose}>
          X
        </button>
      </div>
      <div style={contentStyle}>{modalInfo.content}</div>
      <div style={buttonBoxStyle}>
        {modalInfo.buttons.map((item, index) => (
          <Button
            pinkSchema={item.pinkSchema}
            onClick={item.onClick}
            key={index}
          >
            {item.title}
          </Button>
        ))}
      </div>
    </ReactModal>
  );
}

export default CustomModal;
