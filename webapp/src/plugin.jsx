import {id as pluginId} from './manifest';

import LeftSidebarHeader from './components/left_sidebar_header';

export default class Plugin {
    initialize(registry) {
        // registry.registerRootComponent(Root);
        registry.registerLeftSidebarHeaderComponent(LeftSidebarHeader);
    }

    uninitialize() {
        //eslint-disable-next-line no-console
        console.log(pluginId + '::uninitialize()');
    }
}
