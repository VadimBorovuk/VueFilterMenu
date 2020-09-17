<template>
    <div class="gallery-content__columns">
        <div class="gallery-content__mobile" @click="clickMenu">
            <div class="gallery-content__burger"></div>
            <div class="gallery-content__menu">Меню</div>
        </div>
        <div class="gallery-content-main">
            <VideoMenu
                    :todo="todos"
            />
            <ThemeMenu/>
        </div>
    </div>
</template>

<script>
    import ThemeMenu from '@/components/Sidebar/ThemeMenu';
    import VideoMenu from '@/components/Sidebar/VideoMenu';

    export default {
        props: ['todos'],
        components: {ThemeMenu, VideoMenu},
        methods: {
            clickMenu() {
                let sidebar = document.querySelector('.gallery-content-main');
                sidebar.classList.toggle("active");
            }
        }
    }
</script>

<style lang="scss">
    .gallery-content__columns {
        background: #fff;
        height: 100vh;
        padding: 30px 15px;
        @media screen and (max-width: 767px) {
            background: #000;
            height: auto;
        }
        .gallery-content-main{
            @media screen and (max-width: 767px) {
                display: none;
            }
            &.active{
                display: block;
            }
        }

        .gallery-content__mobile {
            display: none;
            align-items: center;
            height: 30px;
            width: 93px;
            border-radius: 50px;
            border: 1px solid #fff;
            color: #fff;
            justify-content: space-evenly;
            text-transform: uppercase;
            cursor: pointer;

            .gallery-content__burger {
                background: url("../../assets/menu.png") center no-repeat;
                height: 20px;
                width: 20px;
            }

            @media screen and (max-width: 767px) {
                display: flex;
                margin-left: auto;
            }
        }
    }
</style>