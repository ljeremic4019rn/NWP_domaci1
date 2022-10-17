
export class Entity {
  title: string = ''
  abstract: string = ''
  categories: [] = []
  image: Image = new Image
}

export class Image {
  full: string = ''
  thumbnail: string = ''
}

export interface EntityExtObj {
  text: string,
  token: string
  annotations: []
}

export class DetectedLang {
  lang: string = ''
  confidence: number = 0
}

export interface LanguageDetReq {
  text: string,
  option: boolean,
  token: string,
  detectedLangs: Array<DetectedLang>
}

export class Sentiment {
  score: number = 0
  type: string = ''
}

export interface SentimentAnObj {
  text: string,
  token: string,
  sentiment: Sentiment
}

export interface TextSimRes {
  time: string,
  similarity: number,
  lang: string,
  langConfidence: number,
  timestamp: string
}

export class Color {
  constructor(r: number, g: number, b: number) {
    this.r = r
    this.g = g
    this.b = b
  }
  r = 0
  g = 0
  b = 0
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

