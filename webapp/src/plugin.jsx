import LeftSidebarHeader from './components/left_sidebar_header';
import manifest from './manifest';

export default class Plugin {
    initialize(registry) {
        // registry.registerRootComponent(Root);
        registry.registerLeftSidebarHeaderComponent(LeftSidebarHeader);
    }

    uninitialize() {
        //eslint-disable-next-line no-console
        console.log(manifest.id + '::uninitialize()');
    }
}
