
require.config({
    paths: {
        "jquery": "https://cdn.bootcss.com/jquery/3.2.1/jquery.min",
		"dynamicaudio": "lib/dynamicaudio-min",		
		"jsnes_nes": "lib/jsnes/nes",
		"jsnes_utils": "lib/jsnes/utils",
		"jsnes_cpu": "lib/jsnes/cpu",
		"jsnes_keyboard": "lib/jsnes/keyboard",
		"jsnes_mappers": "lib/jsnes/mappers",
		"jsnes_papu": "lib/jsnes/papu",
		"jsnes_ppu": "lib/jsnes/ppu",
		"jsnes_rom": "lib/jsnes/rom",
		"jsnes_ui": "lib/jsnes/ui"
    },
	shim: {
		"jsnes_ui": [ "jquery" ],
		"jsnes_utils": [ "jsnes_nes" ],
		"jsnes_cpu": [ "jsnes_nes" ],
		"jsnes_keyboard": [ "jsnes_nes" ],
		"jsnes_mappers": [ "jsnes_nes" ],
		"jsnes_papu": [ "jsnes_nes" ],
		"jsnes_ppu": [ "jsnes_nes" ],
		"jsnes_rom": [ "jsnes_nes" ],
		"jsnes_ui": [ "jsnes_nes" ],
		"jsnes_nes": [ "jquery", "dynamicaudio" ]
	}
});

require(
	[ "jquery", "dynamicaudio", "jsnes_nes", "jsnes_utils", "jsnes_cpu", "jsnes_keyboard", "jsnes_mappers", "jsnes_papu", "jsnes_ppu", "jsnes_rom", "jsnes_ui" ], 
	function($) {
		var nes = new JSNES({
			'ui': $('#emulator').JSNESUI({
				"ACT游戏": [
					["超级马里奥", "roms/mario.nes"],
					["最终幻想3中文版", "roms/ff3.nes",],
				]
			})
		});
		
	}
);
