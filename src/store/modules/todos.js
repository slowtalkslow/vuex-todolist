import axios from "axios";

const state = {
  todos: []
};

const getters = {
  allTodos: state => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos?_limit=4'
    );
    commit('setTodos', response.data);
  },
  async addTodo({ commit }, title) {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      { title: title, completed: false }
    );
    commit('addTodo', response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    commit('deleteTodo', id);
  },
  async toggleTodo({ commit }, id) {
    await axios.patch(
      `https://jsonplaceholder.typicode.com/todos/${id}`, {completed: true}
    );
    commit('toggleTodo', id);
  },
  async updateTodo({ commit }, newTodo) {
    await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${newTodo.id}`,
      newTodo
    );
    commit('updateTodo', newTodo);
  }
};

const mutations = {
  setTodos: (state, todos) => state.todos = todos,
  addTodo: (state, todo) => state.todos.push(todo),
  deleteTodo: (state, id) => state.todos = state.todos.filter( todo => todo.id !== id),
  toggleTodo: (state, id) => {
    const todo = state.todos.find( todo => todo.id === id);
    todo.completed = !todo.completed;
  },
  updateTodo: (state, newTodo) => {
    const index = state.todos.findIndex(todo => todo.id === newTodo.id);
    if( index !== -1){
      state.todos.splice(index, 1, newTodo);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
