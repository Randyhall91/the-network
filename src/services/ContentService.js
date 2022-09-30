import { popScopeId } from "vue"
import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
import { Giph } from "../models/Giph.js"
import { Post } from "../models/Post.js"
import Pop from "../utils/Pop.js"
import { Sandboxapi } from "./AxiosService.js"


class ContentService {

  async getGiphs() {
    const res = await Sandboxapi.get('/api/ads')
    AppState.giphs = res.data.map(g => new Giph(g))
    // console.log(AppState.giphs);
  }
  async getPosts(page = '') {
    const res = await Sandboxapi.get('api/posts', {
      params: {
        page
      }
    })
    // console.log(res.data.posts);
    AppState.posts = res.data.posts.map(p => new Post(p))
    AppState.nextPage = res.data.older
    AppState.previousPage = res.data.newer || res.data.page
  }
  async getPostsById(creatorId, page = 1) {
    AppState.posts = []
    const res = await Sandboxapi.get('api/posts', {
      params: {
        creatorId
      }
    })
    // console.log(res.data.posts);
    AppState.page =
      AppState.posts = res.data.posts.map(p => new Post(p))
  }
  async getProfileById(id) {
    const res = await Sandboxapi.get(`api/profiles/${id}`)
    AppState.activeProfile = new Account(res.data)
  }

  async submitPost(formData) {
    const res = await Sandboxapi.post('api/posts', formData)
    console.log(res.data);
    const newPost = new Post(res.data)
    AppState.posts = [newPost, ...AppState.posts]
  }
  async likeToggle(id) {
    const res = await Sandboxapi.post(`api/posts/${id}/like`)
    // console.log(res.data);
    const newPost = new Post(res.data)
    const post = AppState.posts.findIndex(p => p.id == id)
    AppState.posts.splice(post, 1, newPost)

  }
  async deletePost(id) {
    //TODO get Pop Confirm working
    Pop.confirm('Are you sure you want to delete this post?')

    const res = await Sandboxapi.delete(`api/posts/${id}`)
    AppState.posts = AppState.posts.filter(p => p.id != id)
  }
  async getSearch(formData) {
    const res = await Sandboxapi.get(`api/posts`, {
      params: {
        query: formData
      }
    })
    console.log(res.data);
  }


}
export const contentService = new ContentService()