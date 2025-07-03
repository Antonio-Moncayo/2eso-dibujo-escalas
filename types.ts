
export enum QuestionType {
    FIND_REAL = 'FIND_REAL',
    FIND_SCALE = 'FIND_SCALE'
}

export interface QuizQuestion {
    id: number;
    type: QuestionType;
    prompt: string;
    values: {
        drawing?: number;
        real?: number;
        scale?: string;
    };
    correctAnswer: string;
    unit?: string;
}
