import { useSelector } from 'react-redux';
import QuizCard from '../quizcard';
import { extractQuestionsWithUserData } from '../../helpers/extractQuestionWiUsrData';
import { shuffleArray } from '../../helpers/shuffleArray';

const ZeroConditionalModule = () => {
  const data = useSelector((state) => state.zeroconditional.data);
  const tittle = "Zero Conditional"
  let allQuestions = extractQuestionsWithUserData(data)
  allQuestions =shuffleArray(allQuestions)
  return (
   <QuizCard allQuestions={allQuestions} tittle={tittle} />
  );
};

export default ZeroConditionalModule;