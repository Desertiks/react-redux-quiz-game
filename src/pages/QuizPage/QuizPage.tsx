import { useAppSelector } from "../../app/hooks";
import { Quiz } from "../../components/Quiz/Quiz";
import { selectWords } from "../../features/dictionary/dictionarySlice";

export const QuizPage = () => {
  const data = useAppSelector(selectWords);
  return (
    <>
      <h1 className="title">Quiz page</h1>
      {data ? <Quiz /> : <div>Empty</div>}
    </>
  );
};
