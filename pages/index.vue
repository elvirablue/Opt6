<template>
    <div class="page">
        <h1
                class="page__title"
                v-text="'Проведение ТО и мелкий ремонт'"/>

        <div class="page__tabs">
            <atoms-tabs
                    v-model="activeTab"
                    :tabs="tabs">
                <div v-if="activeTab === 'write-off-item'">
                    <organisms-maintenance-write-off-item/>
                </div>
            </atoms-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IndexPage',
        layout: 'default',
        data: () => ({
            tabs: [
                {
                    name: 'general',
                    label: 'Общее',
                },
                {
                    name: 'write-off-item',
                    label: 'Товар списания',
                },
                {
                    name: 'additional-expenses',
                    label: 'Доп. расходы',
                },
            ],
            activeTab: 'write-off-item'
        }),
    }
</script>

<style lang="scss" scoped>
    .page {
        &__title {
            display: block;
            padding-bottom: var(--main-padding);
            font-size: 30px;
            line-height: 31px;
        }
    }
</style>