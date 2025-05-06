import React from 'react';
import { useSelector } from 'react-redux';
import QuizCard from '../quizcard';
import { extractQuestionsWithUserData } from '../../helpers/extractQuestionWiUsrData';
import { shuffleArray } from '../../helpers/shuffleArray';

const ModalsDeductionModule = () => {
  const data = useSelector((state) => state.modalsdeduction.data);
  const tittle = "Modals of deduction"
  let allQuestions = extractQuestionsWithUserData(data)
  allQuestions =shuffleArray(allQuestions)
  return (
   <QuizCard allQuestions={allQuestions} tittle={tittle} />
  );
};

export default ModalsDeductionModule;