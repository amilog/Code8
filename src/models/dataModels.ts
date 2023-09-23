export interface TeamsModel {
  scoreCount: number;
  _id: string;
  name: string;
  color: string;
  score: number;
  members: MembersModel[];
}

export interface MembersModel {
  _id: string;
  name: string;
  teamId: string;
  linkedIn: string;
  github: string;
  behance: string;
  image: string;
  role: string;
  attend: boolean;
}

export interface ResultModel {
  _id: string;
  name: string;
  coachAverage: number;
  juryAverage: number;
}
