import React from 'react';
import { useSelector } from 'react-redux';
import QuizCard from '../quizcard';
import { extractQuestionsWithUserData } from '../../helpers/extractQuestionWiUsrData';
import { shuffleArray } from '../../helpers/shuffleArray';

const MixedConditionalModule = () => {
  const data = useSelector((state) => state.mixedconditional.data);
  const tittle = "Mixed Conditional"
  let allQuestions = extractQuestionsWithUserData(data)
  allQuestions =shuffleArray(allQuestions)
  return (
   <QuizCard allQuestions={allQuestions} tittle={tittle} />
  );
};

export default MixedConditionalModule;