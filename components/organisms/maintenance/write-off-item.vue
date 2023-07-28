<template>
    <div class="content">
        <div class="content__actions">
            <div class="card">
                <button
                    type="button"
                    class="button"
                    @click="addItem"
                >
                    <atoms-base-icon name="plus"/>
                    <span v-text="'Добавить строку'"/>
                </button>
            </div>
        </div>

        <div class="content__table">
            <div
                    :class="{
                        'card -table': !_isMobile
                     }"
            >
                <molecules-maintenance-tables-write-off-item
                        :data="data"
                        :draggable-item.sync="draggableItem"
                        :saved-data="savedData"
                        @save="saveChange"
                        @click-action="clickAction"
                        @move-item="moveItem"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import {last, remove, cloneDeep} from "lodash";

    const EMPTY_ITEM = {
        id: '',
        number: '',
        actions: [
            {
                type: 'delete',
                title: 'Удалить',
                color: 'red'
            }
        ],
        unitName: '',
        price: '',
        quantity: '',
        productName: '',
        total: '',
        amount: '',
        weight: ''
    }
    export default {
        name: "OrganismMaintenanceWriteOffItem",
        data: () => ({
            data: [
                {
                    id: '100',
                    number: '1',
                    actions: [
                        {
                            type: 'delete',
                            title: 'Удалить',
                            color: 'red'
                        }
                    ],
                    unitName: 'lsknjcsnc',
                    price: '1000',
                    quantity: '123',
                    productName: 'jscvsjdbvjsb',
                    total: '4000',
                    amount: '10',
                    weight: '2'
                },
                {
                    id: '120',
                    number: '2',
                    actions: [
                        {
                            type: 'delete',
                            title: 'Удалить',
                            color: 'red'
                        }
                    ],
                    unitName: 'lsknxxxxxxxxxxxxxxxxxxxxjcsnc',
                    price: '10',
                    quantity: '123',
                    productName: 'jscvsjdbvjsb',
                    total: '4000',
                    amount: '30',
                    weight: '3'
                }
            ],
            draggableItem: null,
            savedData: []
        }),
        created() {
            this.savedData = cloneDeep(this.data)
        },
        methods: {
            saveChange() {
                console.debug('api request: save change item')
                this.savedData = cloneDeep(this.data)
            },
            addItem() {
                console.debug('api request: add new item')
                const item = Object.assign({}, EMPTY_ITEM)
                item.number = this.data.length + 1
                item.id = Number(last(this.data).id) + 1
                this.data.splice(this.data.length, 0, item)
                this.savedData = cloneDeep(this.data)
            },
            clickAction(item, action) {
                if (action === 'delete') {
                    this.deleteItem(item)
                }
            },
            deleteItem(item) {
                console.debug('api request: delete item')
                remove(this.data, el => el.id === item.id)
                this.updateNumbersItems()
            },
            updateNumbersItems() {
                this.data.forEach((el, key) => {
                    return el.number = key + 1
                })
                this.savedData = cloneDeep(this.data)
            },
            moveItem(event) {
                if (this.draggableItem === null) {
                    return true
                }
                if (event.oldIndex === event.newIndex) {
                    this.localDraggableItem = null
                    return true
                }
                console.debug('api request: move item')
                remove(this.data, el => el.id === this.draggableItem.id)
                this.data.splice(event.newIndex, 0, this.draggableItem)
                this.updateNumbersItems()
            }
        }
    }
</script>

<style scoped lang="scss">
    .content {
        &__actions {
            display: block;
            padding-bottom: var(--main-padding);
        }
    }

    .card.-table {
        padding: 0;
    }
</style>