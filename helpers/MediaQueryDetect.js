export class MediaQueryDetect {
    static isVisible(e) {
        return !!( e.offsetWidth || e.offsetHeight);
    }
    static detectMobile() {
        return this.isVisible(document.querySelector('#mq-detect #mq-mobile'));
    }

    static detectTablet() {
        return this.isVisible(document.querySelector('#mq-detect #mq-tablet'));
    }

    static detectTouchScreen() {
        return Boolean('ontouchstart' in window || navigator.maxTouchPoints);
    }
}
