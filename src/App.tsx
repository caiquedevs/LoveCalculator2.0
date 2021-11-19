import { ChangeEvent, useState } from "react";
import { Container, Form } from "./styled";
import "./app.css";

interface IResponse {
  id: string;
  nameOne: string;
  nameTwo: string;
  number: number;
}

function App() {
  const [nameOne, setNameOne] = useState("");
  const [nameTwo, setNameTwo] = useState("");
  const [loading, setLoading] = useState(false);
  const [percents, setPercents] = useState(0);

  const handleChangeNameOne = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\s/g, "").toLowerCase();
    setNameOne(value);
  };

  const handleChangeNameTwo = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\s/g, "").toLowerCase();
    setNameTwo(value);
  };

  const calculator = (value: number) => {
    let count = 0;
    console.log("Iniciou o count");

    const time = setInterval(() => {
      if (count === value) {
        clearInterval(time);
        setLoading(false);
        return;
      }

      count += 1;
      setPercents(count);
    }, 25);
  };

  const fetchData = async () => {
    const rawResponse = await fetch(
      `http://localhost:3333/posts/${nameOne + nameTwo}`
    );

    if (rawResponse.status !== 200) return false;

    const content: IResponse = await rawResponse.json();
    calculator(content.number);

    console.log("FETCH WITH SUCCESS: ", content);
    return content;
  };

  const createData = async () => {
    const rawResponse = await fetch("http://localhost:3333/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: nameOne + nameTwo,
        nameOne,
        nameTwo,
        number: Math.floor(Math.random() * 80) + 20,
      }),
    });

    if (rawResponse.status !== 201) return console.log("Erro ao criar");

    const content = await rawResponse.json();
    calculator(content.number);

    console.log("CREATED WITH SUCCESS: ", content);
  };

  const handleSubmit = async (formEvent: any) => {
    formEvent.preventDefault();

    setLoading(true);
    const isCreated = await fetchData();
    if (!isCreated) return createData();
  };

  const handleClickClear = () => {
    setPercents(0);
    setNameOne("");
    setNameTwo("");
  };

  return (
    <Container className="App">
      <Form onSubmit={handleSubmit}>
        <figure>
          <img src="./heart.png" alt="heart" />
          <span>{percents}%</span>
          <figcaption>Porcentagem de compatibilidade</figcaption>
        </figure>

        <input
          type="text"
          onChange={handleChangeNameOne}
          value={nameOne}
          placeholder="Seu nome"
        />
        <input
          type="text"
          onChange={handleChangeNameTwo}
          value={nameTwo}
          placeholder="Nome do pretendente"
        />

        <button disabled={loading || !nameOne || !nameTwo} type="submit">
          Calcular
        </button>

        {percents !== 0 && !loading && (
          <button
            onClick={handleClickClear}
            className="btn-clear"
            type="button"
          >
            Limpar
          </button>
        )}
      </Form>
    </Container>
  );
}

export default App;
