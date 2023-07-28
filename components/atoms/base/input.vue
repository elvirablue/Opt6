<template>
    <input
            v-bind="$attrs"
            :type="type"
            class="input"
            v-model="localValue"
            @blur="$emit('blur')"
    >
</template>

<script>
    export default {
        name: "AtomBaseInput",
        props: {
            value: {
                type: [String, Number],
                required: true
            },
            type: {
                type: String,
                default: 'text'
            }
        },
        computed: {
            localValue: {
                get() {
                    return this.value
                },
                set(value) {
                    this.$emit('input', value)
                },
            },
        },
    }
</script>

<style lang="scss" scoped>
    .input {
        display: inline-flex;
        align-items: center;
        width: 100%;
        height: var(--action-height);
        padding: 0 5px 0 15px;
        border-radius: var(--root-radius);
        border: 1px solid var(--action-border-color);
        box-shadow: none;
        outline: none;
        transition: border-color 0.1s ease-in-out;

        &:focus {
            border-color: var(--primary-color);
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>
