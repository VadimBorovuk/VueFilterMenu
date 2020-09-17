import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        todos: null,
        loading: true,
        active: true,
        todosAfterFilterTheme: null,
        keyTheme: null,
        keyVideo: null
    },
    mutations: {
        changeState(state, {name, data}) {
            state[name] = data;
        },
        setFilterByTheme(state, {key, title}) {
            if (key === 'all') {
                state.todosAfterFilterTheme = state.todos;
            } else {
                state.todosAfterFilterTheme = state.todos.filter(item => {
                    return item.theme === key
                });
            }
            state.keyTheme = title;
        },

        setFilterByVideo(state, { key }) {
            const localData = state.todosAfterFilterTheme;

            if(key !== 'news') {
                state.todosAfterFilterTheme = state.todosAfterFilterTheme.filter(item => {
                    return item.options[key]
                });
            } else if(key === 'news') {
                state.todosAfterFilterTheme = state.todosAfterFilterTheme.filter(item => {
                    let getData = new Date(item['date']);
                    let getMonth = getData.getMonth();
                    if(getMonth === 7){
                        console.log(getMonth)
                    }
                    return getMonth
                });
            } else {
                state.todosAfterFilterTheme = localData;
            }
        }
    },

    actions: {
        GET_PRODUCTS({commit}, {url}) {
            fetch(url ? url : '/')
                .then(res => res.json())
                .then(json => {
                    setTimeout(() => {
                        commit('changeState', {
                            name: 'todos',
                            data: json
                        });
                        commit('changeState', {
                            name: 'todosAfterFilterTheme',
                            data: json
                        });
                        commit('changeState', {
                            name: 'loading',
                            data: false
                        });
                        commit('changeState', {
                            name: 'active',
                            data: false
                        });
                    }, 1000)

                });
        }
    }
})
