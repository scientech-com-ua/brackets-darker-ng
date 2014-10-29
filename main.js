define(function (require, exports, module) {

    "use strict";

    var AppInit = brackets.getModule("utils/AppInit"),
        WorkspaceManager = brackets.getModule("view/WorkspaceManager"),
        ThemeManager = brackets.getModule("view/ThemeManager"),
        ExtensionManager = brackets.getModule("extensibility/ExtensionManager"),
        ExtensionUtils = brackets.getModule("utils/ExtensionUtils");

    var THEMES = {
        'ambience'			: 'Ambience',
        'atelierdune'       : 'Atelier Dune',
        'atelierforest'     : 'Atelier Forest',
        'base16-solarized'  : 'Base16 Solarized',
        'brunante'			: 'Brunante',
        'carbon-blue'		: 'Carbon blue',
        'cobalt'			: 'Cobalt',
        'dark'              : '3024 Dark',
        'dark-soda'			: 'Dark Soda',
        'default'           : 'Default',
        'dracula'			: 'Dracula',
        'idle-fingers'		: 'Idle fingers',
        'light-table'		: 'Light table',
        'mbo'				: 'Mbo',
        'monokai'           : 'Monokai',
        'night-sky'			: 'Night sky',
        'obsidian'			: 'Obsidian',
        'peacock'			: 'Peacock',
        'railscasts'        : 'Railscasts',
        'rubyblue'			: 'Ruby blue',
        'solarized'			: 'Solarized',
        'stone-age'			: 'Stoneage',
        'sunburst'			: 'Sunburst',
        'tomorrow'          : 'Tomorrow',
        'twilight'          : 'Twilight',
        'wombat'			: 'Wombat',
        'zenburn'			: 'Zen burn'
    };

    AppInit.appReady(function () {
        var name, meta;
        for (name in THEMES) {
            meta = {
                name: name,
                title: THEMES[name],
                theme: {
                    file: "themes/" + name + ".css",
                    dark: true
                }
            };
            ThemeManager.loadFile(ExtensionUtils.getModulePath(module, meta.theme.file), meta);
        }
        ExtensionUtils.loadStyleSheet(module, "darker.css").then(function () {
            WorkspaceManager.recomputeLayout();
        });
    });
});
