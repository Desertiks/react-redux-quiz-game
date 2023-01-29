import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectWords } from "../../features/dictionary/dictionarySlice";
import { addNewLog, increment } from "../../features/gameLog/gameLogSlice";

type Answer = {
  isCorrect: boolean;
  ua: string;
  id: number;
};

type Question = {
  eng: string;
  answers: Answer[];
};

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isGame, setIsGame] = useState(true);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isError, setIsError] = useState(false);

  const data = useAppSelector(selectWords);


  const dispatch = useAppDispatch();
  const numberOfQuiz = 10;

  function shuffle<T>(array: T[]) {
    return array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  const handleAnswerOptionClick = (answer: Answer, eng: string) => {
    if (answer.isCorrect) {
      setScore(score + 1);
    }

    const logObject = {
      eng,
      ua: answer.ua,
      wasCorrect: answer.isCorrect,
    };

    dispatch(addNewLog(logObject));

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleGameToggler = () => {
    setIsError(false);
    if (data.length < numberOfQuiz) {
      setIsError(true);
      return;
    }
    let shuffled = shuffle(data);

    let newQuestions = shuffled.map((word) => ({
      eng: word.eng,
      answers: shuffle([
        ...shuffled
          .filter((shuffled) => shuffled.ua !== word.ua)
          .slice(0, 3)
          .map((shuffled) => ({
            isCorrect: shuffled.ua === word.ua,
            ua: shuffled.ua,
            id: shuffled.id,
          })),
        { isCorrect: true, ua: word.ua, id: word.id },
      ]),
    }));

    newQuestions.length = numberOfQuiz;
    setQuestions(newQuestions);
    setIsGame(false);
    setShowScore(false);
    setCurrentQuestion(0);
    setScore(0);
    dispatch(increment());
  };

  return (
    <div className="box">
      {showScore || isGame ? (
        <>
          {showScore && (
            <div className="title">
              {Math.floor((score / numberOfQuiz) * 100)}% was correct
            </div>
          )}
          <button className="button is-primary" onClick={handleGameToggler}>
            Starth the game
          </button>
          {isError && (
            <div className="has-text-danger mt-2">
              There are not enough questions for the quiz
            </div>
          )}
        </>
      ) : (
        <>
          <div>
            <div className="title">
              Question {currentQuestion + 1} / {numberOfQuiz}
            </div>
            <div className="subtitle mt-3">
              Select correct translate to {questions[currentQuestion].eng}
            </div>
          </div>
          <div className="buttons mt-3">
            {questions[currentQuestion].answers.map((answer) => (
              <button
                onClick={() =>
                  handleAnswerOptionClick(
                    answer,
                    questions[currentQuestion].eng
                  )
                }
                className="button is-primary"
                key={answer.id}
              >
                {answer.ua}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
