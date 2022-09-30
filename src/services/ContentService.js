import { AppState } from "../AppState.js"
import { Giph } from "../models/Giph.js"
import { Post } from "../models/Post.js"
import { Sandboxapi } from "./AxiosService.js"


class ContentService {

  async getGiphs() {
    const res = await Sandboxapi.get('/api/ads')
    AppState.giphs = res.data.map(g => new Giph(g))
    // console.log(AppState.giphs);
  }
  async getPosts() {
    const res = await Sandboxapi.get('api/posts')
    // console.log(res.data.posts);
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

  async submitPost(formData) {
    const res = await Sandboxapi.post('api/posts', formData)
    console.log(res.data);
    // newPost = new Post(res.data)
    // AppState.posts = [newPost, ...AppState.posts]
  }


}
export const contentService = new ContentService()