<template>
    <div class="cards">
        <div
                v-for="(item, index1) in data"
                class="card"
        >
            <div
                    v-for="(field, index2) in fields"
                    :key="`item-${index1}-${index2}-${field.name}`"
            >

                <div
                        v-if="$slots[field.name] || $scopedSlots[field.name]"
                        class="card__item"
                >
                    <span
                            class="card__item-title"
                            v-text="field.title"/>
                    <slot
                            :name="field.name"
                            :item="item"
                    />
                </div>

                <div
                        v-else
                        class="card__item"
                >
                    <span
                            class="card__item-title"
                            v-text="field.title"
                    />
                    <span v-text="item[field.name] ? item[`${field.name}`] : ''"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AtomTableMobile",
        props: {
            fields: {
                type: Array,
                required: true,
            },
            data: {
                type: Array,
                required: true,
            },
        },
        data: () => ({}),
        methods: {

        }

    }
</script>

<style scoped lang="scss">
    .cards {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5px;
    }

    .card {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 15px;

        &__item {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 5px;
        }

        &__item-title {
            display: inline-flex;
            font-size: 10px;
            color: var(--grey-color);
        }

        @include media_breakpoint(mobile) {
            padding: 15px;
        }
    }
</style>