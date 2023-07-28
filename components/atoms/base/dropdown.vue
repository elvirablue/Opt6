<template>
	<!--https://floating-vue.starpad.dev/api/#triggers - triggers -->
	<v-dropdown
		v-bind="triggersAttrs"
		:shown.sync="shown"
		:auto-size="autoSize"
		:placement="placement"
		:delay="{show: 0, hide: 100}"
		:auto-hide="autoHide"
        :distance="3"
        @show="$emit('show')"
        @hide="$emit('hide')"
	>
		<slot/>

		<template #popper>
			<div
				class="v-popper__content"
				:style="`width: ${width}`">
				<slot name="popper"/>
			</div>

<!--			<button
				v-if="_isMobile"
				class="button v-popper__button-close"
				v-close-popper.all
			>
				<atoms-base-icon name="close"/>
			</button>-->
		</template>
	</v-dropdown>

</template>

<script>
	const MODES = {
		default: {
			triggers: ['hover', 'focus'],
			popperTriggers: ['hover', 'focus'],
			delay: {show: 0, hide: 0}
		},
		menu: {
			triggers: ['hover', 'focus'],
			popperTriggers: ['hover', 'focus'],
			delay: {show: 0, hide: 150}
		},
		lazy: {
			showTriggers: ['click'],
			hideTriggers: ['hover', 'focus'],
			popperTriggers: ['hover', 'focus'],
			delay: {show: 0, hide: 150}
		},
		passive: {
			triggers: ['click'],
			delay: {show: 0, hide: 0}
		}
	}

    export default {
		name: "AtomBaseDropdown",
		props: {
			autoSize: {
				type: [String, Boolean],
			},
			width: {
				type: String,
				default: 'auto',
			},
			placement: {
				type: String,
				default: 'bottom',
				validator: (v) => [
					'auto',
					'auto-start',
					'auto-end',
					'top',
					'top-start',
					'top-end',
					'right',
					'right-start',
					'right-end',
					'bottom',
					'bottom-start',
					'bottom-end',
					'left',
					'left-start',
					'left-end'
				].includes(v)
			},
			autoHide: Boolean,
			positioningDisabled: Boolean,
			mode: {
				type: String,
				validator: (v) => [
					'default',
					'lazy',
					'passive'
				].includes(v),
			}
		},
		data: () => ({
			shown: false,
		}),
		computed: {
			triggersAttrs() {
				const mode = this.mode ?? 'default'
				return MODES[mode]
			},
		}
	}
</script>

<style lang="scss" >
    .v-popper--theme-dropdown {
        .v-popper__inner {
            padding: 7px 10px;
            border: solid 1px var(--border-color);
            border-radius: var(--root-radius);
            box-shadow: 0 0 3px 0 #000, inset 0 1px 2px 0 rgba(255, 255, 255, 0.5);
        }

        .v-popper__arrow-container {
            display: none;
        }
    }
</style>
