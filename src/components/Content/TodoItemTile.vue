<template>
    <div class="col-12">
        <div class="gallery-content__card tile" :title="todo.theme">
            <div class="gallery-content__preview">
                <img :src="todo.covers.main">
            </div>
            <div class="gallery-content__tile">
                <div class="gallery-content__info">
                    {{todo.title}}
                </div>
                <a class="gallery-content__buy" target="_blank" href="https://www.google.com/">
                    Дивитися
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            }
        },
        components: {}
    }
</script>

<style lang="scss">
    .gallery-content__card.tile {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: #fff;
        margin-bottom: 20px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;

        .gallery-content__tile {
            margin: 0 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }

        @media screen and (max-width: 767px) {
            max-width: 260px;
            margin: 20px auto;
        }

        .gallery-content__info {
            font-size: 16px;
            padding: 10px;

        }

        .gallery-content__buy {
            padding-right: 30px;
            border-radius: 50px;
            border: 1px solid #d9d9d9;
            text-transform: uppercase;
            font-size: 14px;
            height: 40px;
            width: 180px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #000;
            text-decoration: none;
            position: relative;

            &:after {
                content: '>';
                position: absolute;
                right: 0;
                top: 0;
                border-radius: 50%;
                background: red;
                width: 40px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 25px;
                font-weight: 500;
                color: #fff;
                transition: all .3s;
            }

            &:hover {
                background: red;
                color: #ffffff;
            }
        }
    }
</style>