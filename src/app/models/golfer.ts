export class Golfer {
    id: number;
    firstName: string;
    lastName: string;
    rounds: Round[];
}

export class Course {
    id: number;
    name: string;
    par: number;
    holes: Hole[];
}

export class Round {
    id: number;
    course: Course;
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
    id?: number;
}

export class RoundHole {
    id: number;
    hole: Hole;
    holeId: number;
    roundId: number;
    score: number;
    scoreType: string;
}

export class NewCourseRequest {
    name: string;
    holes: Hole[];
}

export class NewRoundRequest {
    golferId: number;
    courseId: number;
    date: Date | string;
    roundHoles: RoundHole[];
}