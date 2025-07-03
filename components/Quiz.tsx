
import React, { useState, useEffect } from 'react';
import { quizQuestions } from '../constants';
import { QuizQuestion } from '../types';

const CheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const XIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Quiz: React.FC = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState<{ message: string; isCorrect: boolean } | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);

    const currentQuestion: QuizQuestion = quizQuestions[currentQuestionIndex];

    useEffect(() => {
        setUserAnswer('');
        setFeedback(null);
        setIsAnswered(false);
    }, [currentQuestionIndex]);

    const handleCheckAnswer = () => {
        if (!userAnswer.trim()) return;
        
        const isCorrect = userAnswer.trim() === currentQuestion.correctAnswer;
        if (isCorrect) {
            setFeedback({ message: '¡CORRECTO!', isCorrect: true });
        } else {
            setFeedback({ message: `INCORRECTO. La respuesta correcta es ${currentQuestion.correctAnswer}.`, isCorrect: false });
        }
        setIsAnswered(true);
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            // End of quiz
            setCurrentQuestionIndex(0); // Restart quiz
        }
    };

    return (
        <div className="bg-papel-envejecido border-2 border-dashed border-texto-oscuro/50 p-6 text-center">
            <div className="mb-4">
                <p className="text-lg font-bold">Pregunta {currentQuestionIndex + 1} de {quizQuestions.length}</p>
                <p className="text-xl mt-2 min-h-[6rem] flex items-center justify-center">{currentQuestion.prompt}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    disabled={isAnswered}
                    className="w-full sm:w-auto flex-grow bg-papel-envejecido border-2 border-azul-pizarra text-texto-oscuro p-3 text-center text-xl focus:outline-none focus:border-rojo-tinta-sello disabled:bg-carton-reciclado/50"
                    placeholder="Tu respuesta..."
                />
                {isAnswered ? (
                     <button
                        onClick={handleNextQuestion}
                        className="w-full sm:w-auto bg-rojo-tinta-sello text-papel-envejecido font-bold uppercase py-3 px-6 border-2 border-rojo-tinta-sello hover:bg-rojo-tinta-sello/80"
                     >
                        {currentQuestionIndex < quizQuestions.length - 1 ? 'Siguiente' : 'Reiniciar'}
                     </button>
                ) : (
                    <button
                        onClick={handleCheckAnswer}
                        className="w-full sm:w-auto bg-azul-pizarra text-papel-envejecido font-bold uppercase py-3 px-6 border-2 border-azul-pizarra hover:bg-rojo-tinta-sello hover:border-rojo-tinta-sello"
                    >
                        Comprobar
                    </button>
                )}
            </div>
            
            {feedback && (
                <div className={`mt-6 p-4 border-2 ${feedback.isCorrect ? 'border-green-600 bg-green-500/10' : 'border-rojo-tinta-sello bg-rojo-tinta-sello/10'} flex items-center justify-center gap-4`}>
                    {feedback.isCorrect ? <CheckIcon className="w-8 h-8 text-green-600" /> : <XIcon className="w-8 h-8 text-rojo-tinta-sello" />}
                    <p className={`font-bold text-xl ${feedback.isCorrect ? 'text-green-800' : 'text-rojo-tinta-sello'}`}>{feedback.message}</p>
                </div>
            )}
        </div>
    );
};

export default Quiz;

