Vue.component('articles', {
  template: `
    <div>
      <h1>Ajax list:</h1>
      <ol v-if="posts">
        <li v-for="post in posts">
          {{post.title}}
        </li>
      </ol>
      <span v-else>Loading ajax list...</span>
    </div>
  `,
  mounted(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      this.posts = response.data
    })
  },
  data(){
    return {
      posts: null
    }
  }
})

Vue.component('fruits', {
  props: ['object']
})

Vue.component('parent', {
  template: `
  <div>
    <h1>Parent component</h1>
    <div>
      <child></child>
    </div>
  </div>
  `
})

Vue.component('child', {
  template: `
  <div>
    Child component
  </div>
  `
})


Vue.filter('uppercase', (value) => value.toUpperCase())

new Vue ({
  el: 'main',
  mounted(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      this.posts = response.data
    })
  },
  data: {
    text: 'hola mundo!',
    name: 'default name',
    nota: 5,
    movies: ['Batman', 'Spiderman', 'Avengers'],
    newMovie: null,
    search: null,
    selected: null,
    posts: null,
    selectedComponent: 'articles'
  },
  methods: {
    addMovie() {
      this.movies.push(this.newMovie)
      this.newMovie = null
    },
    removeMovie(index) {
      this.movies.splice(index, 1)
    },
    mark(index){
      this.selected = index
    }
  },
  computed: {
    findMovie() {
      return this.movies.filter((movie) => movie.includes(this.search))
    }
  }
})
