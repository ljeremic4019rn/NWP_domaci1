
export class Sentiment {
  score: number = 0
  type: string = ''
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

export interface LanguageDetRes {
  text: string,
  token: string,
  detectedLangs: DetectedLanguage[]
}

export interface SentimentAnalysis {
  text: string,
  token: string,
  sentiment: Sentiment
}

export interface TextSimilarityRes {
  time: string,
  similarity: number,
  lang: string,
  langConfidence: number,
  timestamp: string
}

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

export interface EntityExtraction {
  text: string,
  token: string
  annotations: []
}

export class DetectedLanguage {
  lang: string = ''
  confidence: number = 0
}

