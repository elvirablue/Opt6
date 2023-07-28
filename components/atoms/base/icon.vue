<template>
    <component
            :is="iconComponent"
            class="svg"
    />
</template>

<script>
    const icons = {
        plus: require('@/assets/svg/plus.svg?inline'),
        settings: require('@/assets/svg/settings.svg?inline'),
        'arrow-right': require('@/assets/svg/arrow-right.svg?inline'),
        'burger-menu': require('@/assets/svg/burger-menu.svg?inline'),
        'menu': require('@/assets/svg/menu.svg?inline'),
    }
    export default {
        name: "AtomBaseIcon",
        props: {
            name: {
                type: String,
                required: true,
                validator(value) {
                    return Object.prototype.hasOwnProperty.call(icons, value)
                }
            },
        },
        computed: {
            iconComponent() {
                return icons[this.name]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .svg {
        flex-shrink: 0;
        display: inline-flex;
        margin-top: -1px;
        margin-bottom: 1px;
    }
</style>
