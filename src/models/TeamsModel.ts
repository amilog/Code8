export  interface TeamsModel {
    _id: string;
    name: string;
    teamPic : any;
    members: MembersModel[];
}

export interface MembersModel {
    _id: string;
    fullName: string;
    memberPic: string;
    branch: string;
    majority: string;
    linkedIn: string;
    github: string;
    behance: string;
    cv: string;
}