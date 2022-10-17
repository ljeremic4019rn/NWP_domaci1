
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

export class Transaction {
  constructor(date: string, time: string, method: string, url: string) {
    this.date = date
    this.time = time
    this.method = method
    this.url = url
  }
  date: string
  time: string
  method: string
  url: string
}

