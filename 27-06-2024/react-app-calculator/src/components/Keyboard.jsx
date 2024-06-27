import Button from "./Button";
export const Keyboard = ({ onButtonClick }) => {
  const keyboardValues = [
    "AC",
    "+/-",
    "%",
    "/",
    7,
    8,
    9,
    "X",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    "C",
    0,
    ".",
    "=",
  ];
  return (
    <div className="calculator-keyboard">
      {keyboardValues.map((btn, index) => (
        <Button key={index} value={btn} onClick={onButtonClick} />
      ))}
    </div>
  );
};
