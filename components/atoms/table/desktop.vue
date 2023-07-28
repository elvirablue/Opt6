<template>
    <div
            ref="table"
            :key="`table-${key}`"
    >
    <table
            v-columns-resizable
            class="table"
    >
        <thead >

        <tr>
            <th
                v-for="(field, index) in fields"
                :key="`th-${index}-${field.name}`"
                :width="`${100/fields.length}%`"
            >
                <span
                        class="table__th"
                        v-text="field.title"
                />
            </th>
        </tr>
        </thead>
        <draggable
                v-model="localData"
                handle=".tr-handle"
                :swap-threshold="0.5"
                :empty-insert-threshold="50"
                :class="'draggable-dropzone'"
                tag="tbody"
                @end="moveItem"
                @start="saveDraggableItem"
        >
            <tr
                    v-for="(item, index1) in data"
                    :key="`tr-${index1}`"
            >
                <td
                        v-for="(field, index2) in fields"
                        :key="`td-${index1}-${index2}`"
                >
                    <div
                            v-if="$slots[field.name] || $scopedSlots[field.name]"
                            class="table__td"
                    >
                        <slot
                                :name="field.name"
                                :item="item"
                        />
                    </div>

                    <span
                            v-else
                            class="table__td"
                            v-text="item[field.name] ? item[`${field.name}`] : ''"
                    />
                </td>
            </tr>
        </draggable>
    </table>

    </div>
</template>

<script>
    export default {
        name: "AtomTableDesktop",
        emits: [
            'update:data',
            'move-item',
            'update:draggableItem',
        ],
        props: {
            fields: {
                type: Array,
                required: true,
            },
            data: {
                type: Array,
                required: true,
            },
            draggableItem: {
                type: Object | null,
            },
                    },
        data: () => ({
            key: 1,
            test: []
        }),
        computed: {
            localData: {
                get() {
                    return this.data
                },
                set(value) {
                    this.$emit('update:data', value)
                }
            },
            localDraggableItem: {
                get() {
                    return this.draggableItem
                },
                set(value) {
                    this.$emit('update:draggableItem', value)
                }
            },
        },
        watch: {
            fields: {
                handler(value) {
                    this.forceRerender()
                },
                deep: true
            }
        },
        mounted() {
            window.addEventListener('resize', () => {
              this.forceRerender()
            })
        },
        beforeDestroy() {
            window.removeEventListener('resize', () => {
                this.forceRerender()
            })
        },
        methods: {
            forceRerender() {
                this.$refs.table.querySelector('.vue-columns-resizable').remove()

                this.$nextTick().then(() => {
                    this.key +=1
                });
            },
            moveItem(event) {
                this.$emit('move-item', event)
            },
            saveDraggableItem(event) {
                this.localDraggableItem = this.localData[event.oldIndex]
            }
        }

    }
</script>

<style lang="scss">
    .columns-resize-bar {
        //background-color: lightcoral;
        &:before {
            position: absolute;
            top: 0;
            left: 50%;
            bottom: 0;
            display: block;
            width: 1px;
            margin-left: -1px;
            background-color: var(--action-border-color);
        }

        &:hover:before {
           content: '';
        }
    }
</style>

<style scoped lang="scss">
    .table {
        width: 100%;
        border-spacing: 0;

        &__th, &__td {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: inline-flex;
            align-items: center;
            padding: 0 10px;
            width: 100%;
            max-width: 100%;
            overflow: hidden;
        }

        &__th {
            font-size: 16px;
            font-weight: 600;
            text-align: left;
            white-space: nowrap;
        }

        &__td {
            font-size: 16px;
        }

        thead {
            th {
                position: relative;
                height: 45px;
                vertical-align: middle;
                border-top: 1px solid var(--border-color);
                border-bottom: 1px solid var(--border-color);
                border-right: 1px solid var(--border-color);

                &:last-of-type {
                    border-right: none;
                }
            }
        }

        tbody {
            td {
                position: relative;
                height: 45px;
            }
        }
    }
</style>