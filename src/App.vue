<template>
    <div class="gallery-content">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-3 p-0">
                    <div class="gallery-content__sidebar">
                        <Sidebar :todos="todos"/>
                    </div>
                </div>
                <div class="col-12 col-lg-9">
                    <div class="gallery-content__view">
                        <div class="container">
                            <div class="row flex-column">
                                <div class="gallery-content__menu">
                                    <div class="gallery-content__title">
                                        {{ keyTheme ? keyTheme : 'Усі Відео' }}
                                    </div>
                                    <div class="gallery-content__navigation">
                                        <div class="gallery-content__search">
                                            <input v-model="search"
                                                   type="text"
                                                   placeholder="Search.."
                                                   name="search"
                                                   class="search-field">
                                            <button type="submit"><i class="fa fa-search"></i></button>
                                        </div>
                                        <div class="gallery-content__tile">
                                            <div class="gallery-content__cub" @click="changeCub"></div>
                                            <div class="gallery-content__burger" @click="changeTile"></div>
                                        </div>
                                    </div>
                                </div>
                                <Loader v-if="loading"/>
                                <div class="gallery-content__main" v-else-if="todos.length">
                                    <div class="contentTodosCub cub">
                                        <TodoItem
                                                v-for="(todo, index) in searchTodos"
                                                :key="index"
                                                :todo="todo"/>
                                    </div>
                                    <div class="contentTodosTile">
                                        <TodoItemTile
                                                v-for="(todo, index) in searchTodos"
                                                :key="index"
                                                :todo="todo"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TodoItem from "@/components/Content/TodoItem";
    import Sidebar from "@/components/Sidebar/Sidebar";
    import Loader from "@/components/Loader/Loader";
    import {mapState, mapActions} from 'vuex';
    import TodoItemTile from "./components/Content/TodoItemTile";

    export default {
        components: {TodoItemTile, TodoItem, Sidebar, Loader},
        data() {
            return {
                search: ''
            }
        },
        mounted() {
            this.GET_PRODUCTS({
                url: 'data.json'
            });
        },
        computed: {
            ...mapState([
                'todos',
                'todosAfterFilterTheme',
                'loading',
                'active',
                'keyTheme'
            ]),
            searchTodos: function () {
                return this.todosAfterFilterTheme.filter(todo => {
                    return todo.title.includes(this.search)
                })
            }
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS'
            ]),
            changeCub() {
                let contentViewCub = document.querySelector('.contentTodosCub');
                let contentViewTile = document.querySelector('.contentTodosTile');
                contentViewCub.classList.add("cub");
                contentViewTile.classList.remove("tile");
            },
            changeTile() {
                let contentViewCub = document.querySelector('.contentTodosCub');
                let contentViewTile = document.querySelector('.contentTodosTile');
                contentViewCub.classList.remove("cub");
                contentViewTile.classList.add("tile");
            }
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');

    .gallery-content {
        font-family: 'Roboto', sans-serif;
        background: #d9d9d9;
        padding: 0;
        margin: 0;

        .gallery-content__sidebar {
            height: 100%;
        }

        .gallery-content__view {
            .gallery-content__main {
                display: flex;
                flex-wrap: wrap;
                .contentTodosCub{
                    width: 100%;
                    display: none;
                    flex-wrap: wrap;
                    &.cub{
                        display: flex;
                    }
                    &.tile{
                        display: flex;
                    }
                }
                .contentTodosTile{
                    width: 100%;
                    display: none;
                    flex-wrap: wrap;

                    &.tile{
                        display: flex;
                    }
                }
            }

            .gallery-content__menu {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin: 25px 0;
                padding: 0 15px;
                @media screen and (max-width: 767px) {
                    flex-direction: column;
                }

                .gallery-content__title {
                    font-size: 35px;
                    font-weight: 100;
                    text-transform: uppercase;
                    @media screen and (max-width: 767px) {
                        font-size: 25px;
                    }
                }

                .gallery-content__navigation {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    @media screen and (max-width: 767px) {
                        flex-direction: column;
                    }

                    .gallery-content__search {
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        .search-field {
                            position: relative;
                            border: 0;
                            border-bottom-left-radius: 5px;
                            border-top-left-radius: 5px;
                            outline: none;
                            padding: 2px 0 0 10px;
                        }

                        button {
                            border: 0;
                            background: #fff;
                            height: 100%;
                            border-bottom-right-radius: 5px;
                            border-top-right-radius: 5px;
                            outline: none;
                        }
                    }

                    .gallery-content__tile {
                        display: flex;
                        @media screen and (max-width: 767px) {
                            margin-top: 20px;
                        }

                        .gallery-content__cub {
                            background: url("./assets/grid.png") center no-repeat;
                            height: 30px;
                            width: 30px;
                            margin: 0 20px;
                            cursor: pointer;
                            @media screen and (max-width: 767px) {
                                margin: 0 10px;
                            }
                        }

                        .gallery-content__burger {
                            cursor: pointer;
                            background: url("./assets/list.png") center no-repeat;
                            height: 30px;
                            width: 30px;
                        }
                    }
                }
            }
        }
    }
</style>
