import { Styled } from "./styles";

function ContactCard({ data = {}, deleteContact, editContact }) {
  return (
    <Styled>
      
      <div className="div1">Nome:  {data.name}</div>
      <div className="div2">Email:  {data.email}</div>
      <div className="div2">Telefone:  {data.telefone}</div>
      <button style={{ marginLeft: "10px" }} onClick={editContact}>
        🔄
      </button>
      <button style={{ marginLeft: "10px" }} onClick={deleteContact}>
        🗑️
      </button>
    </Styled>
  );
}

export default ContactCard;
