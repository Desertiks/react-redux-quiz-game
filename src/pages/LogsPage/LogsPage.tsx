import { useAppSelector } from "../../app/hooks";
import { LogsList } from "../../components/LogsList/LogsList";
import { selectLogs } from "../../features/gameLog/gameLogSlice";

export const LogsPage = () => {
  const logs = useAppSelector(selectLogs);
  return (
    <>
      <h1 className="title">Logs</h1>
      {logs.length ? (
        <LogsList />
      ): (
        <h2 className="subtitle">
          Logs is empty
        </h2>
      )}
    </>
  );
};
