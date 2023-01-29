import { Log } from "../../types/Log";

type Props = {
  log: Log;
};

export const LogOne: React.FC<Props> = ({ log }) => {
  return (
    <tr>
      <td>{log.countOfGame}</td>
      <td>{log.eng}</td>
      <td>{log.ua}</td>
      <td>{log.wasCorrect ? 'yes' : 'no'}</td>
    </tr>
  );
};
