if (!window.Wisp) throw new Error('Injectable data missing???');
import { Lang, Router, Store } from './core';

import './bootstrap/assets';
import './bootstrap/fontawesome';
import './bootstrap/daemon';
import './store/index';
import './bootstrap/router';

import { createApp } from 'vue';
import { App } from './views';
import { Clipboard, Tippy } from '~/directives';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    Alert,
    Alerts,
    Avatar,
    Button,
    Chart,
    Container,
    Date,
    Footer,
    List,
    TranslatedMessage,
    Paginator,
    Skeleton,
    Modal, Can, Accordion, Stepper
} from './components';
import {
    Form,
    FormEditor,
    FormImage,
    FormInput,
    FormSelect,
    FormSubmit,
    FormSwitch,
    FormRadioGroup,
    FormTextarea, FormFile, FormModelSelect
} from './components/forms';

const app = createApp(App);
app
    .use(Router)
    .use(Lang)
    .use(Store)
    .directive('clipboard', Clipboard)
    .directive('tippy', Tippy)
    .component('fa', FontAwesomeIcon)
    .component('accordion', Accordion)
    .component('alert', Alert)
    .component('alerts', Alerts)
    .component('avatar', Avatar)
    .component('chart', Chart)
    .component('can', Can)
    .component('container', Container)
    .component('date', Date)
    .component('list', List)
    .component('modal', Modal)
    .component('paginator', Paginator)
    .component('v-button', Button)
    .component('v-footer', Footer)
    .component('v-form', Form)
    .component('v-editor', FormEditor)
    .component('v-image', FormImage)
    .component('v-file', FormFile)
    .component('v-input', FormInput)
    .component('v-radio-group', FormRadioGroup)
    .component('v-select', FormSelect)
    .component('v-model-select', FormModelSelect)
    .component('v-submit', FormSubmit)
    .component('v-switch', FormSwitch)
    .component('v-textarea', FormTextarea)
    .component('skeleton', Skeleton)
    .component('stepper', Stepper)
    .component('t', TranslatedMessage)
    .mount('#app');

import { enableSentry } from './bootstrap/sentry';
if (import.meta.env.PROD) {
    enableSentry(app, Router);
}
