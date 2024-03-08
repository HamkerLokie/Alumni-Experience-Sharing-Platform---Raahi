export interface Article {
  email: string
  companyName: string
  createdAt: string
  description: string
  fullName: string
  showName: string
  tags: string[]
  title: string
  _id: string
  userImage: string
}


export const BASE_URL = 'http://localhost:8080/api/v1/admin'