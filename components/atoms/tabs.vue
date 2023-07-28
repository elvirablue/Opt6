<template>
    <div class="tabs">
        <div class="tabs__nav">
            <div class="tabs__wrap">
                <template v-for="item in tabs">
                    <input
                            :key="`tab-input-${item.name}`"
                            name="tab"
                            :id="item.name"
                            type="radio"
                            hidden
                            :value="item.name"
                            v-model="activeTab"
                    >

                    <label
                            :key="`tab-label-${item.name}`"
                            :for="item.name"
                            :class="{
                                'tabs__tab': true,
                                '-active': activeTab === item.name
                            }"
                    >
                        <span
                                class="tabs__tab-name"
                                v-text="item.label"
                                @click="setEmptyTab(item.name)"
                        />
                    </label>
                </template>
            </div>
        </div>

        <div class="tabs__content">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AtomTabs",
        model: {
            prop: 'value',
            event: 'change',
        },
        props: {
            value: {
                type: String,
                required: true,
            },
            tabs: {
                type: Array,
                required: true
            }
        },
        computed: {
            activeTab: {
                get() {
                    return this.value
                },
                set(value) {
                    this.$emit('change', value)
                },
            },
        },
        methods: {
            setEmptyTab(value) {
                if (value === '') {
                    this.$emit('change', value)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabs {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 100%;
        height: 100%;

        &__nav {
            display: flex;
            justify-content: flex-start;
            align-items: stretch;
        }

        &__wrap {
            display: flex;
            justify-content: flex-start;
            align-items: stretch;
            width: 100%;
        }

        &__tab {
            display: inline-flex;
            padding-right: 20px;
            font-size: 16px;
            font-weight: 600;
            color: var(--primary-color);
            cursor: pointer;
            transition: color 0.1s ease-in-out;

            &:last-of-type {
                padding-right: 0;
            }

            &:hover {
                color: var(--text-color);
            }

            &.-active {
                color: var(--text-color);
            }
        }

        &__tab-name {
            display: inline-flex;
            white-space: nowrap;
        }

        &__content {
            display: block;
            height: 100%;
            padding: var(--main-padding) 0;
        }

        @include media_breakpoint(tablet) {
            &__nav {
                overflow-x: auto;
            }

            &__tab {
                position: relative;
                font-size: 14px;
            }
        }
    }
</style>