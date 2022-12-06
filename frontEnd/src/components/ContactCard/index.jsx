import { Styled } from "./styles";

function ContactCard({ data = {}, deleteTech, editContact }) {
  return (
    <Styled>
      <div className="div1">{data.name}</div>
      <div className="div2">{data.email}</div>
      <div className="div2">{data.telefone}</div>
      <button style={{ marginLeft: "10px" }} onClick={editContact}>
        🔄
      </button>
      <button style={{ marginLeft: "10px" }} onClick={deleteTech}>
        🗑️
      </button>
    </Styled>
  );
}

export default ContactCard;
