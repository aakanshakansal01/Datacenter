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
        "ambientSound.js"
    ];

    Constants.DefaultCards = [
        {
            card: {
                name: "ambient sound",
                // translation: [0, 0, -2],
                // layers: ["pointer"],
                type: "object",
                behaviorModules: ["AmbientSound"],
                dataType: "aac",
                dataLocation: "./assets/sounds/hvac.mpeg",
                // textureLocation: "./assets/images/mythos.png",
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
                translation: [0, -32.79871203280746, -6],
                rotation: [0, 0, 0, 1],
                name: "/hvac .glb",
                dataLocation: "3pf7xfX0-lT0WALtu40EO5fTzMejX7nRPLGq1XfBoxcAGAQEAANKX18WGRwVA14FA14TAh8BBRUEXhkfXwVfCiUEByA_CjYFPyNBOxkXPSoZRUNJCDY0N0hAQl8ZH14TAh8BBRUEXh0ZEwIfBhUCAxVeHB8TERwUFQYUFRYRBRwEXwAEPCkoRBM9H0UaKQM0BSJBB0UhST1DOAYRQEMcSBg3SRkCIxMyRgIlL0BfFBEEEV8pCQEHEhFFIQUaHzs3MiknBBtEKElHOTUFJj0pJDEYKRUCOS8-FhoUHxZA",
                dataScale: [200.558032602217754, 200.558032602217754, 200.558032602217754],
                fileName: "/hvac .glb",
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
                translation: [-21.481005131405677, -4.820038380687247, -10.385635842149366],
                scale: [2.554726725841081, 2.554726725841081, 2.554726725841081],
                rotation: [0, -0.008301377428285017, 0, -0.9999655429727531],
                layers: ["pointer"],
                name: "/gate glb.glb",
                dataLocation: "3w32-cnOKK8AaOGKUViSq38zFZSgItn3DdJxRP5xp2U8HwMDBwRNWFgRHhsSBFkCBFkUBRgGAhIDWR4YWAJYDSIDACc4DTECOCRGPB4QOi0eQkRODzEzME9HRVgeGFkUBRgGAhIDWRoeFAUYARIFBBJZGxgUFhsTEgETEhEWAhsDWDA8LUAaGg8cDzQvMkJDQyIFHhwRQw5CRQIiASUWPydFGz8gMB5BGjNGME9YExYDFlhEDgAwOzs1PyI8FUMGFk8DGFo_LSUiOTkOQgMaNT87Lx4cHihOADEzEjku",
                dataScale: [36.94713610124053, 36.94713610124053, 36.94713610124053],
                fileName: "/gate glb.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                behaviorModules: ["ReplaceWorld"],
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=reception",
            }
        }
    ];
}
