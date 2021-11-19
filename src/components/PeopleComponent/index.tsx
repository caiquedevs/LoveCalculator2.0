import { Dispatch, SetStateAction, memo } from "react";
import { Container } from "./styles";

interface PeopleComponentProps {
  data: { active: number; imgs: string[] };
  setData: Dispatch<SetStateAction<{ active: number; imgs: string[] }>>;
}

function PeopleComponent({ data, setData }: PeopleComponentProps) {
  const handleClickPrevImage = () => {
    const currentPosition = data.active;

    setData({ ...data, active: currentPosition - 1 });
  };

  const handleClickNextImage = () => {
    const currentPosition = data.active;
    setData({ ...data, active: currentPosition + 1 });
  };

  console.log(data);

  return (
    <Container>
      <div className="btn-group">
        {data.active > 0 && (
          <button className="btnLeft" onClick={handleClickPrevImage}>
            <img src="./arrow-left.png" alt="arrowleft" />
          </button>
        )}

        {data.active < data.imgs.length - 1 && (
          <button className="btnRight" onClick={handleClickNextImage}>
            <img src="./arrow-right.png" alt="arrowleft" />
          </button>
        )}
      </div>

      {data.imgs.map((url, index) => {
        return (
          <img
            className={index === data.active ? "imgAnimate" : "imgHidden"}
            key={url}
            src={url}
            alt={url}
          />
        );
      })}

      <input tabIndex={1} type="text" name="name-male" placeholder="Nome" />
    </Container>
  );
}

export default memo(PeopleComponent);
