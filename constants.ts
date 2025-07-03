
import { QuizQuestion, QuestionType } from './types';

export const quizQuestions: QuizQuestion[] = [
    {
        id: 1,
        type: QuestionType.FIND_REAL,
        prompt: "¿Cuál es la medida real (en cm) si en un dibujo a escala 1:5 una línea mide 3 cm?",
        values: {
            drawing: 3,
            scale: "1:5"
        },
        correctAnswer: "15",
        unit: "cm"
    },
    {
        id: 2,
        type: QuestionType.FIND_SCALE,
        prompt: "¿Qué escala se ha utilizado si una pieza de 2 m (200 cm) aparece representada con una medida de 10 cm en el dibujo? (Formato de respuesta: 1:X)",
        values: {
            real: 200,
            drawing: 10,
        },
        correctAnswer: "1:20"
    },
    {
        id: 3,
        type: QuestionType.FIND_REAL,
        prompt: "En el plano de una casa a escala 1:100, el salón mide 5 cm de largo. ¿Cuántos metros mide en la realidad?",
        values: {
            drawing: 5,
            scale: "1:100"
        },
        correctAnswer: "5",
        unit: "m"
    },
    {
        id: 4,
        type: QuestionType.FIND_REAL,
        prompt: "El dibujo de un tornillo a escala de ampliación 10:1 mide 20 cm. ¿Cuál es su tamaño real en cm?",
        values: {
            drawing: 20,
            scale: "10:1"
        },
        correctAnswer: "2",
        unit: "cm"
    },
    {
        id: 5,
        type: QuestionType.FIND_SCALE,
        prompt: "Un mapa de una ciudad muestra una calle de 500 m con una longitud de 25 cm. ¿Cuál es la escala del mapa? (Formato de respuesta: 1:X)",
        values: {
            real: 50000, // 500m in cm
            drawing: 25,
        },
        correctAnswer: "1:2000"
    },
    {
        id: 6,
        type: QuestionType.FIND_REAL,
        prompt: "En un mapa a escala 1:50000, la distancia entre dos pueblos es de 10 cm. ¿Cuál es la distancia real en kilómetros?",
        values: {
            drawing: 10,
            scale: "1:50000"
        },
        correctAnswer: "5",
        unit: "km"
    },
    {
        id: 7,
        type: QuestionType.FIND_SCALE,
        prompt: "La longitud real de un microchip es de 2 mm. En un dibujo técnico de ampliación, se representa con 40 mm. ¿Qué escala se usó? (Formato de respuesta: X:1)",
        values: {
            real: 2,
            drawing: 40
        },
        correctAnswer: "20:1"
    },
    {
        id: 8,
        type: QuestionType.FIND_REAL,
        prompt: "Un componente está dibujado a escala 2:1. Si en el dibujo mide 30 mm, ¿cuál es su longitud real en mm?",
        values: {
            drawing: 30,
            scale: "2:1"
        },
        correctAnswer: "15",
        unit: "mm"
    },
    {
        id: 9,
        type: QuestionType.FIND_SCALE,
        prompt: "La fachada de un edificio mide 25 metros de altura. En el plano, su altura es de 12.5 cm. ¿Cuál es la escala del plano? (Formato de respuesta: 1:X)",
        values: {
            real: 2500, // 25m in cm
            drawing: 12.5
        },
        correctAnswer: "1:200"
    },
    {
        id: 10,
        type: QuestionType.FIND_REAL,
        prompt: "Una pieza está dibujada a escala natural (1:1). Si en el dibujo mide 7.5 cm, ¿cuál es su medida real en cm?",
        values: {
            drawing: 7.5,
            scale: "1:1"
        },
        correctAnswer: "7.5",
        unit: "cm"
    }
];
