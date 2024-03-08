interface Article {
  _id: string
  title: string
  description: string
  createdAt: Date
  fullName: string
  showName:boolean
  userImage:string
}

export interface ArticleSlice {
  loading: boolean
  data: Article[]
  error: string | null
}
