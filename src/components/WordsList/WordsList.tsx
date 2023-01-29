import { useAppSelector } from "../../app/hooks";
import { selectWords } from "../../features/dictionary/dictionarySlice";
import { Word } from "../Word/Word";

export const WordsList = () => {
  const words = useAppSelector(selectWords);

  return (
    <table className="table is-bordered">
      <thead>
        <tr>
          <th>English</th>
          <th>Ukrainian</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word) => (
          <Word word={word} key={word.id}/>
        ))}
      </tbody>
    </table>
  );
};
