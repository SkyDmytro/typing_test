interface CharacterProps {
  character: string;
  isCorrect: boolean;
}

export const Character = ({ character, isCorrect }: CharacterProps) => {
  const className = isCorrect ? "correct" : "incorrect";
  return <span className={className}>{character}</span>;
};