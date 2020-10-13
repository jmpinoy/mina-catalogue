import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                background: '#ffefdd',
                primary: '#e47e4d',
                secondary: '#f6b292',
                accent: '#f29e77'
            }
        }
    }
});
