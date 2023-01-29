import { Dictionary } from "../../types/Dictionary";

type Props = {
  word: Dictionary;
};

export const Word: React.FC<Props> = ({ word }) => {
  return (
    <tr>
      <td>{word.eng}</td>
      <td>{word.ua}</td>
    </tr>
  );
};
