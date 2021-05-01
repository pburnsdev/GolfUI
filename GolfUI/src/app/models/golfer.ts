export class Golfer {
    id: number;
    firstName: string;
    lastName: string;
    rounds: Round[];
}

export class Course {
    id: string;
    name: string;
    par: number;
}

export class Round {
    id: number;
    courseId: number;
    golferId: number;
    date: Date;
    isCompletedRound: true;
    overallScore: number;
    roundHoles: RoundHole[];
}

export class Hole {
    par: number;
    holeNumber: number;
}

export class RoundHole {
    id: number;
    holdId: number;
    roundId: number;
    score: number;
    scoreType: string;
}

export class NewCourseRequest {
    name: string;
    holes: Hole[];
}