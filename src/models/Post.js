

export class Post {
  constructor(data) {
    this.id = data.id
    this.body = data.body
    this.createdAt = data.createdAt
    this.creator = data.creator
    this.likes = data.likes
    this.likedIds = data.likedIds
    this.imgUrl = data.imgUrl

  }
}