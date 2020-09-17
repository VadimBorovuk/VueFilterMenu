<template>
    <div class="gallery-content__column__theme">
        <div class="gallery-content__head">
            <div class="gallery-content__info">
                <div class="gallery-content__icon"></div>
                <div class="gallery-content__title">Теми</div>
            </div>
            <div class="gallery-content__arrow"></div>
        </div>
        <div class="gallery-content__items">
            <div @click="setFilter('all', 'Всі теми')" class="gallery-content__item">
                <p class="gallery-content__text">Всі теми ({{ this.todos ? this.todos.length : 0 }})</p>
            </div>
            <div @click="setFilter('excise_tax', 'Акцизний податок')" class="gallery-content__item">
                <p class="gallery-content__text">Акцизний податок ({{ getLength('excise_tax') }})</p>
            </div>
            <div @click="setFilter('currency', 'Валюта')" class="gallery-content__item">
                <p class="gallery-content__text">Валюта ({{ getLength('currency') }})</p>
            </div>
            <div @click="setFilter('production', 'Виробництво і собівартість')" class="gallery-content__item">
                <p class="gallery-content__text">Виробництво і собівартість ({{ getLength('production') }})</p>
            </div>
            <div @click="setFilter('vacation', 'Відпустки')" class="gallery-content__item">
                <p class="gallery-content__text">Відпустки ({{ getLength('vacation') }})</p>
            </div>
            <div @click="setFilter('business_trips', 'Відрядження')" class="gallery-content__item">
                <p class="gallery-content__text">Відрядження ({{ getLength('business_trips') }})</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex';

    export default {
        name: 'ThemeMenu',
        computed: {
            ...mapState([
                'todos'
            ])
        },
        methods: {
            ...mapMutations([
                'setFilterByTheme'
            ]),
            getLength(themeName) {
                if(!this.todos) return 0

                const filterArray = this.todos.filter(item => {
                    return item.theme === themeName
                })

                return filterArray.length
            },
            setFilter(key, title) {
                this.setFilterByTheme({
                    key,
                    title
                });
            }
        }
    }
</script>

<style lang="scss">
    .gallery-content__column__theme {
        border-radius: 5px;
        width: 100%;
        min-height: 220px;
        border: 1px solid #d9d9d9;
        margin-top: 20px;

        .gallery-content__head {
            background: #d9d9d9;
            display: flex;
            padding: 10px;
            justify-content: space-between;
            align-items: center;

            .gallery-content__info {
                display: flex;
                align-items: center;
                justify-content: space-between;
                .gallery-content__title{
                    font-size: 15px;
                    font-weight: bold;
                }
                .gallery-content__icon {
                    border-radius: 50%;
                    height: 20px;
                    width: 20px;
                    background: url("../../assets/list-icon.png") center no-repeat;
                    margin-right: 10px;
                }

                .gallery-content__text {
                    font-weight: bold;
                    font-size: 15px;
                    text-transform: uppercase;
                }
            }

            .gallery-content__arrow {
                height: 10px;
                width: 10px;
                background: url("../../assets/arrow.png") center no-repeat;
            }
        }
        .gallery-content__items{
            .gallery-content__item{
                cursor: pointer;
                display: flex;
                align-items: center;
                padding: 5px 10px;
                .gallery-content__check{
                    margin-right: 10px;
                }
                .gallery-content__text{
                    margin: 0;
                    font-size: 14px;
                }
            }
        }
    }
</style>

