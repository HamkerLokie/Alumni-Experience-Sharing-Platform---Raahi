interface Article {
  _id: string
  title: string
  description: string
  createdAt: Date
  fullName: string
  showName:boolean
}

export interface ArticleSlice {
  loading: boolean
  data: Article[]
  error: string | null
}
