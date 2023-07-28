<template>
	<div class="layout-default">
		<aside
                v-if="!_isTablet"
                class="layout-default__aside">
            <organisms-aside/>
		</aside>

		<main class="layout-default__body">
            <div class="container">
                <nuxt/>
            </div>
		</main>

        <div id="mq-detect" class="box-special">
            <span id="mq-desktop"></span>
            <span id="mq-tablet"></span>
            <span id="mq-mobile"></span>
        </div>
	</div>
</template>

<script>
    import { MediaQueryDetect } from '~/helpers/MediaQueryDetect'
    export default {
        name: 'DefaultLayout',
        data: () => ({}),
        beforeDestroy() {
            window.removeEventListener('resize', () => {
                this.initMqDetect()
            })
        },
        mounted() {
            this.initMqDetect()

            window.addEventListener('resize', () => {
                this.initMqDetect()
            })
        },
        methods: {
            // определение типа отображения в зависимости от ширины экрана (в 100% соответствии с медиа запросами css)
            initMqDetect() {
                this.$store.commit('media-query/setTypeMobile', MediaQueryDetect.detectMobile())
                this.$store.commit('media-query/setTypeTablet', MediaQueryDetect.detectTablet())
            },
        }
    }

</script>

<style lang="scss" scoped>
    .layout-default {
        display: flex;
        flex: 1 1 auto;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        min-width: 375px;
        min-height: 100vh;
        font-family: var(--main-font-family), Arial, sans-serif;
        color: var(--text-color);
        overflow: hidden;
        background-color: var(--main-background);

        &__aside {
            display: flex;
            flex-direction: column;
            flex: 0 0 229px;
            width: 229px;
            color: white;
            background-image: radial-gradient(circle at 29% 0, #000, #1c2734 103%);
        }

        &__body {
            display: flex;
            flex-direction: column;
            flex: 0 1 100%;
            padding: var(--desktop-padding);

            > .container {
                display: block;
                width: 100%;
            }
        }

        @include media_breakpoint(tablet) {
            &__aside {
                display: none;
            }
        }

        @include media_breakpoint(mobile) {
            &__body {
                padding: var(--mobile-padding);
                background-color: var(--surface-color);
            }
        }
    }

</style>