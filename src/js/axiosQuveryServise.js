import axios from "axios";
axios.defaults.baseURL = `https://pixabay.com/api/`;

export default class NewApiQuery {
  constructor() {
    this.queryUser = "";
    this.page = 1;
  }
  async getImg() {  
    const response = await axios.get(`?key=24370055-d2ad965050e4b028a1e78f6a0&q=${this.queryUser}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`);
    console.log(response);
    this.incrementPage();
    return response.data;
  }
  get query() {
    return this.queryUser;
  }
  set query(newQuvery) {
    this.queryUser = newQuvery;
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
} 


// https://api.themoviedb.org/3/movie/550?api_key=e00a8fe96730262954d4fe74242d0bb1

// API Key: e00a8fe96730262954d4fe74242d0bb1
