// export interface UserProfile {
//   _id: string;
//   subscription: null;
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   role: "admin" | "user";
//   profileImage: string;
//   verified: boolean;

//   league: string;
//   category: string;
//   position: string;

//   socialMedia: string[];
//   playingVideo: string[];

//   agent: string;
//   birthdayPlace: string;
//   citizenship: string;
//   currentClub: string;

//   dob: string; // ISO date string
//   gender: "male" | "female" | "other";
//   foot: "right" | "left" | "both";

//   phone: string;
//   institute: string;

//   hight: string;
//   weight: string;
//   gpa: string;
//   satAct: string;

//   inSchoolOrCollege: boolean;
//   isSubscription: boolean;

//   accessLavel: string[];

//   lastLogin: string; // ISO date
//   createdAt: string;
//   updatedAt: string;

//   otp: string;
//   otpExpiry: string;

//   __v: number;
// }


// export interface UserProfileApiResponse {
//   statusCode: number;
//   success: boolean;
//   message: string;
//   data: UserProfile;
// }




// ______________________________________________________________

// export interface UserProfile {
//   subscription: string | null
//   _id: string
//   firstName: string
//   lastName: string
//   email: string
//   password: string
//   role: string
//   profileImage?: string
//   verified: boolean
//   league: string
//   category: string
//   position: string[]
//   socialMedia: string[]
//   playingVideo: string[]
//   createdAt: string
//   updatedAt: string
//   __v: number
//   agent: string
//   birthdayPlace: string
//   citizenship: string
//   currentClub: string
//   dob: string
//   foot: string
//   gender: string
//   gpa: string
//   hight: string
//   inSchoolOrCollege: boolean
//   phone: string
//   satAct: string
//   weight: string
//   accessLavel: string[] // Could be string[] or more specific if you know
//   isSubscription: boolean
//   lastLogin: string
//   institute: string
// }

// export interface UserProfileApiResponse {
//   statusCode: number
//   success: boolean
//   message: string
//   data: UserProfile
// }


export interface UserProfileApiResponse {
  statusCode: number
  success: boolean
  message: string
  data: UserProfile
}


export interface UserProfile {
  user: User
  rating: Rating[]
  gkstats: GKStats[]
  fouls: FoulsStats[]
  defensive: DefensiveStats[]
  // distribution: DistributionStats[]
  setpieces: SetPiecesStats[]
  national: NationalStats[]
  reports: Reports[]
  transferHistory: TransferHistory[]
  // gkDistributionStats: GKDistributionStats[]
}


export interface User {
  _id: string
  firstName: string
  lastName: string
  email: string
  role: string
  provider: string
  profileImage: string
  verified: boolean
  position: string[]
  socialMedia: string[]
  playingVideo: string[]
  isSubscription: boolean
  subscription: string
  createdAt: string
  updatedAt: string
  lastLogin: string
  birthdayPlace: string
  category: string
  citizenship: string
  currentClub: string
  phone: string
  agent:string
  dob: string
  foot: string
  gender: string
  gpa: string
  hight: string
  inSchoolOrCollege: boolean
  institute: string
  league: string
  weight: string
  jerseyNumber: string
  teamName: string
  subscriptionExpiry: string
  __v: number
}


export interface Rating {
  _id: string
  gk: string
  rating: number
  position: string[]
  numberOfGames: number
  minutes: number
  createdAt: string
  updatedAt: string
  __v: number
}


export interface GKStats {
  _id: string
  gk: string
  goalsConceded: number
  penaltKitkSave: number
  saves: number
  aerialControl: number
  catches: number
  deFensiveLineSupport: number
  parries: number
  createdAt: string
  updatedAt: string
  __v: number
}


export interface FoulsStats {
  _id: string
  gk: string
  fouls: number
  foulswon: number
  redCards: number
  yellowCards: number
  offside: number
  createdAt: string
  updatedAt: string
  __v: number
}

export interface DefensiveStats {
  _id: string
  gk: string
  tackleAttempts: number
  tackleSucceededPossession: number
  tackleSucceededNOPossession: number
  tackleFailed: number
  turnoverwon: number
  interceptions: number
  recoveries: number
  clearance: number
  totalBlocked: number
  shotBlocked: number
  crossBlocked: number
  mistakes: number
  aerialDuels: number
  phvsicalDuels: number
  ownGoals: number
  createdAt: string
  updatedAt: string
  __v: number
}


export interface SetPiecesStats {
  _id: string
  gk: string
  freekicks: number
  freekicksShots: number
  freekicksShotsonTarget: number
  penaltyKicks: number
  createdAt: string
  updatedAt: string
  __v: number
}

export interface NationalStats {
  _id: string
  gk: string
  flag: string
  teamName: string
  debut: string
  match: number
  goals: number
  category: string
  createdAt: string
  updatedAt: string
  __v: number
}


export interface Reports {
  _id: string
  gk: string
  date: string
  category: string
  gameTitle: string
  rating: number
  position: string[]
  minutesPlayed: number
  deFensiveSummary: string
  strengths: string
  offensiveSummary: string
  weaknesses: string
  distributionSummary: string
  generalComments: string
  createdAt: string
  updatedAt: string
  __v: number
}


export interface TransferHistory {
  _id: string
  gk: string
  season: string
  date: string
  leftClubName: string
  leftClub: string
  leftCountery: string
  joinedclubName: string
  joinedClub: string
  joinedCountery: string
  createdAt: string
  updatedAt: string
  __v: number
}




