// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = ["newwhite"];

    /* Alternatively, you can specify a card spec for an avatar,
       instead of a string for the partical file name, to create your own avatar.
       You can add behaviorModules here. Also, if the system detects a behavior module
       named AvatarEventHandler, that is automatically installed to the avatar.
        {
            type: "3d",
            modelType: "glb",
            name: "rabbit",
            dataLocation: "./assets/avatars/newwhite.zip",
            dataRotation: [0, Math.PI, 0],
            dataScale: [0.3, 0.3, 0.3],
        }
    */

    Constants.UserBehaviorDirectory = "behaviors/default";
    Constants.UserBehaviorModules = [
        "csmLights.js",
        "replaceWorld.js",
        "video.js",
        "ambientSound.js",
        "names.js",
    ];

    Constants.DefaultCards = [
        {
            card: {
                name: "ambient sound",
                type: "object",
                behaviorModules: ["AmbientSound"],
                dataType: "aac",
                dataLocation: "./assets/sounds/control room.mpeg",
                loop: true,
                volume: 0.2,
                maxVolume: 0.3
            },
            id: "ambientSound"
        },
        {
            card: {
                name: "world model",
                layers: ["walk"],
                type: "3d",
                singleSided: true,
                shadow: true,
                translation: [0, -1.7, 0],
                rotation: [0, 0, 0, 1],
                name: "/control room (1).glb",
                dataLocation: "3-esPz9v5ONr4lqIDFyfYdaWWzdubz6z8sMFyyVWeABYQ19fW1gRBARNQkdOWAVeWAVIWURaXk5fBUJEBF4EUX5fXHtkUW1eZHgaYEJMZnFCHhgSU21vbBMbGQRCRAVIWURaXk5fBUZCSFlEXU5ZWE4FR0RISkdPTl1PTk1KXkdfBEMSRFMdZF5yb1hFXnNyTmdEZhhifV1Jc3NGR2FOXUpIfht4W2VsUl1MckAET0pfSgQTRH5qZgZ6R398TGhGZ1gaSB1CU29sQEFEWUYYRB1faX5oQEBTYGdNb0Vi",
                dataScale: [0.31934038024111905, 0.31934038024111905, 0.31934038024111905],
                fileName: "/control room (1).glb",
                modelType: "glb",
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataLocation: "3OF2-s4U1ZOJduGATmLEIXo1iTkQHd5ZBknKgL5SvqpQJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgCCsZLTYjBjwOJB4sDRcrfAg3Ljk2OBoEGBYWfWAmIGEsPSA-Oio7YSImLD0gOSo9PCpgPwB9AAIIISx8YiYneScqKyQaIisNLHkaGT8YKg56JQwQfHstPiNiGQ49e2ArLjsuYCMBPgMiCQt3OQskGhcleSp9HQIIfXseHgo7EAo9CB48FRwpegsCLH4OIwY",
                fileName: "/abandoned_parking_4k.jpg",
                dataType: "jpg",
            }
        },
        {
            card: {
                translation: [-6.481373689632702, -2.3556639248709894, 16.554183809199763],
                scale: [2.553887362304786, 2.553887362304786, 2.553887362304786],
                rotation: [0, 0.019060579056278358, 0, -0.9998183306611453],
                layers: ["pointer"],
                behaviorModules: ["ReplaceWorld"],
                name: "/gate glb.glb",
                dataLocation: "3cNeisH6Kbi3kX28biStHH8ESVeSE8vnV-qBjwhbTbMMCxcXExBZTEwFCg8GEE0WEE0AEQwSFgYXTQoMTBZMGTYXFDMsGSUWLDBSKAoELjkKVlBaGyUnJFtTUUwKDE0AEQwSFgYXTQ4KABEMFQYREAZNDwwAAg8HBhUHBgUCFg8XTBoVWlJXUjEXEiUKEwBXVAwnEAIIUxoUVSRTVA8KAVFTNRA8Oy5aERIuUVdMBwIXAkwWKQEGFhUzCCYgVhYLLQIMDyglJDAhMAYTECIUMisWWzMUCgYOKxRaFyE2",
                dataScale: [36.94713610124053, 36.94713610124053, 36.94713610124053],
                fileName: "/gate glb.glb",
                modelType: "glb",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=reception",
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                translation: [-6.713563137980108, 2.1411252952485573, -32.22612185866362],
                scale: [18, 4, 4],
                rotation: [0, 0, 0, 1],
                layers: ["pointer"],
                behaviorModules: ["VideoPlayer"],
                fullBright: true,
                height: 1,
                pauseTime: 0.03,
                playStartTime: 152.363843,
                textureHeight: 1024,
                textureLocation: "./assets/demo.mp4",
                textureType: "video",
                textureWidth: 1024,
                type: "2d",
                width: 1,
            }
        },
        {
            card: {
                name: "entrance",
                type: "object",
                translation: [-6.9509475587554475, 0.17495113658653733, 13.74589823432901],
                rotation: [0, 0.018017069824246043, 0, -0.9998376794234894],
                spawn: "default",
                behaviorModules: ["Names"],
            }
        },
    ];
}
