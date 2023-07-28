<template>
    <div
            :class="{
                    'data-mobile': _isMobile,
                    'data-desktop': !_isMobile
                }"
    >
        <div
                v-if="!_isMobile"
                class="data-desktop__settings"
        >
            <molecules-maintenance-tables-settings
                    v-model="settings"
            />
        </div>

        <component
                :is="_isMobile ? 'atoms-table-mobile' : 'atoms-table-desktop'"
                :fields="_isMobile ? activeMobileFields: activeDesktopFields"
                :data="data"
                :draggable-item.sync="localDraggableItem"
                @move-item="$emit('move-item', $event)"
        >
            <template #number="{item}">
                <button
                        v-if="data.length > 1"
                        type="button"
                        class="button -icon -in-table tr-handle"
                >
                    <atoms-base-icon name="burger-menu"/>
                </button>
                <span v-text="item.number"/>
            </template>

            <template #actions="{item}">
                <atoms-base-dropdown
                        placement="bottom-start"
                        width="180px"
                >
                    <button
                            type="button"
                            class="button -icon -in-table"
                    >
                        <atoms-base-icon name="menu"/>
                    </button>
                    <template #popper>
                        <button
                                v-for="(action, index) in item.actions"
                                :key="`action-${item.id}-${index}`"
                                type="button"
                                :class="{
                                        'button -text -small': true,
                                        '-red': action.color === 'red'
                                    }"
                                v-text="action.title"
                                @click="$emit('click-action', item, action.type)"
                        ></button>
                    </template>
                </atoms-base-dropdown>
            </template>

            <template #unitName="{item}">
                <atoms-base-input
                        v-model="item.unitName"
                        @blur="saveChange(item, 'unitName')"
                />
            </template>
            <template #price="{item}">
                <atoms-base-input
                        v-model="item.price"
                        type="number"
                        @blur="saveChange(item, 'price')"
                />
            </template>
            <template #quantity="{item}">
                <atoms-base-input
                        v-model="item.quantity"
                        type="number"
                        @blur="saveChange(item, 'quantity')"
                />
            </template>
            <template #productName="{item}">
                <atoms-base-input
                        v-model="item.productName"
                        @blur="saveChange(item, 'productName')"
                />
            </template>
            <template #amount="{item}">
                <atoms-base-input
                        v-model="item.amount"
                        type="number"
                        @blur="saveChange(item, 'amount')"
                />
            </template>
            <template #weight="{item}">
                <atoms-base-input
                        v-model="item.weight"
                        type="number"
                        @blur="saveChange(item, 'weight')"
                />
            </template>
            <template #total="{item}">
                <atoms-base-input
                        v-model="item.total"
                        type="number"
                        @blur="saveChange(item, 'total')"
                />
            </template>
        </component>

        <div
                :class="{
                    'data-mobile__result': _isMobile,
                    'data-desktop__result': !_isMobile
                }"
        >
            <div class="data-result">
                <div class="card -table-result">
                    <div
                            v-for="(total, index) in calcTotals"
                            :key="`total-${index}`"
                            class="card__item"
                    >
                        <span
                                class="card__item-title"
                                v-text="`${total.title}:`"
                        />
                        <span
                                class="card__item-value"
                                v-text="`${total.value} ${total.unit}`"
                        />
                    </div>
                </div>

                <div class="card -table-result">
                    <div class="card__item">
                         <span
                                 class="card__item-title"
                                 v-text="'Общая сумма:'"
                         />
                        <span
                                class="card__item-value"
                                v-text="`${totalAmount} руб` "
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MoleculeMaintenanceTableWriteOffItem",
        emits: [
            'update:draggableItem',
            'move-item',
            'click-action',
            'save'
        ],
        props: {
            data: {
                type: Array,
                default: () => []
            },
            savedData: {
                type: Array,
                default: () => []
            },
            draggableItem: {
                type: Object | null,
            },
        },
        data: () => ({
            fields: [
                {
                    name: 'number',
                    title: 'Номер',
                    editable: false,
                    visible: true,
                    mobileVisible: false
                },
                {
                    name: 'actions',
                    title: 'Действие',
                    editable: false,
                    visible: true,
                    mobileVisible: true
                },
                {
                    name: 'unitName',
                    title: 'Наименование единицы',
                    editable: true,
                    visible: true,
                    mobileVisible: true
                },
                {
                    name: 'price',
                    title: 'Цена',
                    editable: true,
                    visible: true,
                    mobileVisible: true
                },
                {
                    name: 'quantity',
                    title: 'Кол-во',
                    editable: true,
                    visible: true,
                    unit: 'шт',
                    calculate: true,
                    mobileVisible: true
                },
                {
                    name: 'productName',
                    title: 'Название товара',
                    editable: true,
                    visible: true,
                    mobileVisible: false
                },
                {
                    name: 'amount',
                    title: 'Сумма',
                    editable: true,
                    visible: true,
                    unit: 'руб',
                    calculate: true,
                    mobileVisible: true
                },
                {
                    name: 'weight',
                    title: 'Общий вес',
                    editable: true,
                    visible: false,
                    unit: 'кг',
                    calculate: true,
                    mobileVisible: true
                },
                {
                    name: 'total',
                    title: 'Итого',
                    editable: true,
                    visible: true,
                    mobileVisible: true
                }
            ],
        }),
        computed: {
            localDraggableItem: {
                get() {
                    return this.draggableItem
                },
                set(value) {
                    this.$emit('update:draggableItem', value)
                }
            },
            settings() {
                return [
                    {
                        name: 'fields',
                        title: 'Отображение столбцов',
                        list: this.fields
                    }
                ]
            },
            activeDesktopFields() {
                return this.fields.filter(item => item.visible )
            },
            activeMobileFields() {
                return this.fields.filter(item => item.mobileVisible )
            },
            calcTotals() {
                return this.fields
                        .filter(el => el.calculate)
                        .map(el => {
                    return {
                        ...el,
                        value: this.data.reduce((acc, value) => (acc + Number(value[el.name])), 0).toLocaleString()
                    }
                })
            },
            totalAmount() {
                return (Number(this.calcTotals[0].value.replace(/\s/g,'')) * Number(this.calcTotals[1].value.replace(/\s/g,''))).toLocaleString()
            }
        },
        methods: {
            saveChange(item, field) {
                const index = this.data.findIndex(el => el.id === item.id)
                if (this.data[index][field] !== this.savedData[index][field]) {
                    this.$emit('save')
                }
            },
            clickAction(item, action) {
                this.$emit('click-action', item, action)
            },
        }
    }
</script>

<style scoped lang="scss">
    .data-desktop {
        &__settings {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            min-height: 32px;
            padding: 0 10px;
        }

        &__result {
            padding: 15px 15px 25px;
        }

        .card.-table-result {
            width: 246px;
        }
    }

    .data-mobile {
        &__result {
            padding: 15px 0 0;
        }
    }

    .data-result {
            display: flex;
            flex-direction: column;
            align-items: flex-end;


            > * + * {
                margin-top: 5px;
            }
        }

        .button.-icon.-in-table {
            padding: 5px;
            margin: -1px 0 1px;
        }

        .card.-table-result {
            width: 100%;
            padding: 15px;
            font-size: 14px;
            background-color: var(--main-background);
            box-shadow: none;

            .card__item {
                display: grid;
                grid-template-columns: 1fr auto;
                grid-column-gap: 15px;
                padding-bottom: 15px;

                &:last-child {
                    padding-bottom: 0;
                }
            }

            .card__item-title {
                display: inline-flex;
                color: var(--grey-color);
            }

            .card__item-value {
                display: inline-flex;
                justify-content: flex-end;
            }
        }
</style>