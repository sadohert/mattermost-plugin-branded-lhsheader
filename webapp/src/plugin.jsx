import React from 'react';

// import en from 'i18n/en.json';

// import es from 'i18n/es.json';

import { id as pluginId } from './manifest';

// import Root from './components/root';
import LeftSidebarHeader from './components/left_sidebar_header';

// import reducer from './reducer';

// function getTranslations(locale) {
//     switch (locale) {
//         case 'en':
//             return en;
//         case 'es':
//             return es;
//     }
//     return {};
// }

const Icon = () => <i className='icon fa fa-plug' />;

export default class Plugin {
    initialize(registry, store) {
        // registry.registerRootComponent(Root);
        registry.registerLeftSidebarHeaderComponent(LeftSidebarHeader);

        // registry.registerAdminConsoleCustomSetting('SecretMessage', SecretMessageSetting, { showTitle: true });
        // registry.registerAdminConsoleCustomSetting('CustomSetting', CustomSetting);

        // registry.registerReducer(reducer);

        // // Immediately fetch the current plugin status.
        // store.dispatch(getStatus());

        // Fetch the current status whenever we recover an internet connection.
        // registry.registerTranslations(getTranslations);
    }

    uninitialize() {
        //eslint-disable-next-line no-console
        console.log(pluginId + '::uninitialize()');
    }
}
