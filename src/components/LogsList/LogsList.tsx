import { useAppSelector } from "../../app/hooks";
import { selectLogs } from "../../features/gameLog/gameLogSlice";
import { LogOne } from "../Log/LogOne";

export const LogsList = () => {
  const logs = useAppSelector(selectLogs);

  return (
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
          <LogOne log={log} key={log.id}/>
        ))}
      </tbody>
    </table>
  );
};
