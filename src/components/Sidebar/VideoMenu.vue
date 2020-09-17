<template>
    <div class="gallery-content__column__video">
        <div class="gallery-content__head">
            <div class="gallery-content__info">
                <div class="gallery-content__icon"></div>
                <div class="gallery-content__title">Відео</div>
            </div>
            <div class="gallery-content__arrow"></div>
        </div>
        <div class="gallery-content__items">
            <div class="gallery-content__item required">
                <input type="radio"
                       id="label-one"
                       name="preferCatagorry"
                       class="gallery-content__check
                       y-content__check"
                       value="sale"
                       v-model="radioValue"
                />
                <label class="gallery-content__label" for="label-one">Акція ({{ getLength('sale') }})</label>
            </div>
            <div class="gallery-content__item required">
                <input type="radio"
                       id="label-two"
                       name="preferCatagorry"
                       class="gallery-content__check"
                       value="popular"
                       v-model="radioValue"
                />
                <label class="gallery-content__label" for="label-two">Популярні ({{ getLength('popular') }})</label>
            </div>
            <div class="gallery-content__item required">
                <input type="radio"
                       id="label-three"
                       name="preferCatagorry"
                       class="gallery-content__check"
                       value="news"
                       v-model="radioValue"
                />
                <label class="gallery-content__label" for="label-three">Новинки ({{ getLength('news') }})</label>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: 'VideoMenu',
        data() {
            return {
                radioValue: ''
            }
        },
        watch: {
            radioValue(value) {
                this.setFilter(value)
            }
        },
        computed: {
            ...mapState([
                'todos'
            ])
        },
        methods: {
            ...mapMutations([
                'setFilterByVideo'
            ]),
            getLength(key) {
                if (!this.todos) return 0

                if (key !== 'news') {
                    const filterArray = this.todos.filter(item => {
                        return item.options[key]
                    })
                    return filterArray.length

                } else if (key === 'news') {
                    const filterArray = this.todos.filter(item => {
                        return item['date']
                    })
                    return filterArray.length;

                }

            },
            setFilter(key) {
                this.setFilterByVideo({
                    key
                });
            }
        }
    }
</script>

<style lang="scss">
    .gallery-content__column__video {
        border-radius: 5px;
        width: 100%;
        min-height: 220px;
        border: 1px solid #d9d9d9;

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

                .gallery-content__title {
                    font-size: 15px;
                    font-weight: bold;
                }

                .gallery-content__icon {
                    border-radius: 50%;
                    height: 20px;
                    width: 20px;
                    background: url("../../assets/video-icon.png") center no-repeat;
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

        .gallery-content__items {
            .gallery-content__item {
                display: flex;
                align-items: center;
                padding: 5px 10px;

                .gallery-content__check {
                    margin-right: 10px;
                }

                .gallery-content__text {
                    margin: 0;
                    font-size: 14px;
                }

                .gallery-content__label {
                    margin: 0;
                }
            }
        }
    }
</style>

