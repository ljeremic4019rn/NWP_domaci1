export interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

export interface Comment {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

export interface TextSimReq {
  text1: string,
  text2: string,
  token: string,
  similarity: number
}

export interface TextSimRes {
  time: string,
  similarity: number,
  lang: string,
  langConfidence: number,
  timestamp: string
}

export class DetectedLang {
  lang: string = '';
  confidence: number = 0;
}

export interface LanguageDetReq {
  text: string,
  token: string,
  detectedLangs: DetectedLang[]
}

