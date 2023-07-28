export default {
    computed: {
        _isMobile() {
            return this.$store.getters['media-query/getTypeMobile'];
        },
        _isTablet() {
            return this.$store.getters['media-query/getTypeTablet'];
        },
       //_isTouchScreen() {
       //    return this.$store.getters['media-query/getTypeTouchScreen'];
       //}

    },
}
