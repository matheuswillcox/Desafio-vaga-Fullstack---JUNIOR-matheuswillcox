import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Styled } from "./styles";
import Button from "../Button";
const Form = ({
  schema,
  fields,
  action,
  buttonDisabled,
  buttonTitle = "Submeter",
  title = "Form",
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Styled onSubmit={handleSubmit(action)}>
      <h2 style={{ color: "white" }}>{title}</h2>
      {fields &&
        fields.map((item, index) => (
          <div className="inputBox" key={index}>
            <div className="labelBox">
              <label htmlFor={item.id + item.name}>{item.label}</label>
            </div>
            {item.type === "select" ? (
              <select
                id={item.id + item.name}
                name={item.name}
                placeholder={item.placeholder}
                onChange={item.onChange}
                type={item.type}
                {...register(item.name)}
              >
                {item?.options.map((itm, idx) => (
                  <option value={itm} key={idx}>
                    {itm}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={item.id + item.name}
                name={item.name}
                placeholder={item.placeholder}
                onChange={item.onChange}
                type={item.type}
                {...register(item.name)}
              />
            )}
            <div className="errorMessage">{errors[item.name]?.message}</div>
          </div>
        ))}

      <div>
        <Button pinkSchema type="submit" disabled={buttonDisabled}>
          {buttonTitle}
        </Button>
      </div>
    </Styled>
  );
};

export default Form;
