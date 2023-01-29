import { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";
import {
  addNewWord,
  selectWords,
} from "../../features/dictionary/dictionarySlice";

export const Form: React.FC = () => {
  const [queryUa, setQueryUa] = useState("");
  const [queryEng, setQueryEng] = useState("");
  const [isExist, setIsExist] = useState(false);
  const [isLength, setIsLength] = useState(false);

  const words = useAppSelector(selectWords);

  const dispatch = useDispatch();

  const handleQueryUa = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsExist(false);
    setIsLength(false);
    setQueryUa(event.target.value);
  };

  const handleQueryEng = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsLength(false);
    setIsExist(false);
    setQueryEng(event.target.value);
  };

  const handleSumbit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newPair = { ua: queryUa, eng: queryEng };

    if (queryEng.length < 3 || queryUa.length < 3) {
      setIsLength(true);
      return;
    }

    if (
      words.every(
        (word) =>
          word.eng.toLocaleLowerCase() !== queryEng.toLocaleLowerCase() &&
          word.ua.toLocaleLowerCase() !== queryUa.toLocaleLowerCase()
      )
    ) {
      dispatch(addNewWord(newPair));
      setQueryUa("");
      setQueryEng("");
    } else {
      setIsExist(true);
      console.log(newPair);
    }
  };

  return (
    <>
      <form className="box" onSubmit={handleSumbit}>
        <div className="field">
          <label className="label">Ukrainian</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter the Ukrainian word..."
              value={queryUa}
              onChange={handleQueryUa}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">English</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Enter the English word..."
              value={queryEng}
              onChange={handleQueryEng}
            />
          </div>
        </div>

        <button className="button is-link">Add word</button>
        {isExist && (
          <div className="has-text-danger mt-3">
            Ukrainian or English word already exist in the dictionary
          </div>
        )}
        {isLength && (
          <div>
            <div className="has-text-danger mt-3">
              The length of the entered word is less than 3
            </div>
          </div>
        )}
      </form>
    </>
  );
};
