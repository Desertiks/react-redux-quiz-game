import { useAppSelector } from "../../app/hooks";
import { WordsList } from "../../components/WordsList/WordsList";
import { selectWords } from "../../features/dictionary/dictionarySlice";

export const HomePage = () => {
  const words = useAppSelector(selectWords);
  return (
    <>
      <h1 className="title">Dictionary</h1>
      {words.length ? (
        <WordsList />
      ): (
        <h2 className="subtitle">
          Dictionary is empty
        </h2>
      )}
    </>
  );
};
