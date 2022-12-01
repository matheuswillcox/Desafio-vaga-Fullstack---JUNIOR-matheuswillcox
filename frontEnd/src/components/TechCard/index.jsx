import { Styled } from "./styles";

function TechCard({ data = {}, deleteTech }) {
  return (
    <Styled>
      <div className="div1">{data.title}</div>
      <div className="div2">{data.status}</div>
      <button style={{ marginLeft: "10px" }} onClick={deleteTech}>
        🗑️
      </button>
    </Styled>
  );
}

export default TechCard;
