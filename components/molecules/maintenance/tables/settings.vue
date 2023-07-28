<template>
    <atoms-base-dropdown
            mode="passive"
            placement="bottom-end"
            @show="show"
            @hide="shownSettings = false"
    >
        <button
                type="button"
                :class="{
                    'button -icon': true,
                    '-active': shownSettings
                }"
                v-tooltip="{
                    content: 'Настройки',
                    disabled: shownSettings
                }"
        >
            <atoms-base-icon name="settings"/>
        </button>
        <template #popper>
            <ul class="nav-settings">
                <li
                    v-if="backItem"
                    class="nav-settings__item"
                >
                    <button
                            type="button"
                            class="nav-settings__button -back"
                            @click="initSettings"
                    >
                        <atoms-base-icon name="arrow-right"/>
                        <span v-text="backItem.title"/>
                    </button>
                </li>
                <li
                        v-for="(item, index) in currentList"
                        :key="`nav-setting-${index}`"
                        class="nav-settings__item"
                >
                    <button
                            v-if="item.list"
                            type="button"
                            class="nav-settings__button"
                            @click="selectItem(item)"
                    >
                        <span v-text="item.title"/>
                        <atoms-base-icon name="arrow-right"/>
                    </button>

                    <div
                            v-else
                            :class="{
                                'nav-settings__checkbox': true,
                                '-disabled': !item.editable
                            }"
                    >
                        <input
                                type="checkbox"
                                :name="`check-${item.name}`"
                                :id="`check-${item.name}`"
                                v-model="item.visible"
                                :disabled="!item.editable"
                        >
                        <label
                                :for="`check-${item.name}`"
                                v-text="item.title"
                        />
                    </div>
                </li>
            </ul>
        </template>
    </atoms-base-dropdown>
</template>

<script>
    export default {
        name: "MoleculeMaintenanceTableSettings",
        model: {
            prop: 'settings',
            event: 'change',
        },
        props: {
            settings: {
                type: Array,
                default: () => []
            }
        },
        data: () => ({
            currentList: [],
            backItem: null,
            shownSettings: false
        }),
        computed: {
            localSettings: {
                get() {
                    return this.settings
                },
                set(value) {
                    this.$emit('change', value)
                },
            },
        },
        created() {
            this.initSettings()
        },
        methods: {
            show() {
                this.initSettings()
                this.shownSettings = true
            },

            initSettings() {
                this.currentList = this.localSettings
                this.backItem = null
            },

            selectItem(item) {
                this.currentList = item.list
                this.backItem = item
            },
        }
    }
</script>

<style scoped lang="scss">
    .nav-settings {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        line-height: 1;
        color: var(--light-text-color);

        &__item {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            padding: 7px 0;

            &:first-child {
                padding-top: 0;
            }

            &:last-child {
                padding-bottom: 0;
            }
        }

        &__button {
            display: flex;
            align-items: center;
            font: inherit;
            color: inherit;
            white-space: nowrap;
            background: none;

            svg {
                margin-left: 10px;
                margin-bottom: 2px;
            }

            &.-back {
                font-weight: 600;

                svg {
                    transform: rotate(180deg);
                    margin-left: 0;
                    margin-right: 10px;
                }
            }

            &:hover {
                color: var(--primary-color);
            }
        }

        &__checkbox {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            font: inherit;
            color: inherit;
            cursor: pointer;

            input {
                margin-top: -2px;
                margin-bottom: 2px;
                cursor: inherit;
            }

            label {
                display: inline-flex;
                padding-left: 4px;
                cursor: inherit;
            }

            &.-disabled {
                color: var(--grey-color);
                pointer-events: none;
                cursor: default;
            }
        }
    }
</style>