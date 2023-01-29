import ProgressBar from "@ramonak/react-progress-bar";
import { useAppSelector } from "../../app/hooks";
import { selectLogs } from "../../features/gameLog/gameLogSlice";
import { LogOne } from "../Log/LogOne";

export const LogsList = () => {
  const logs = useAppSelector(selectLogs);

  const averageCorrect = Math.floor(
    (logs.filter((log) => log.wasCorrect).length / logs.length) * 100
  );

  console.log(averageCorrect);

  return (
    <>
      <div className="box">
        <h2 className="title">Average correct user response</h2>
        <ProgressBar completed={averageCorrect} className="my-4" />
      </div>

      <table className="table is-bordered">
        <thead>
          <tr>
            <th>Number of Game</th>
            <th>Question</th>
            <th>User's answer</th>
            <th>IsCorrect</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <LogOne log={log} key={log.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};
