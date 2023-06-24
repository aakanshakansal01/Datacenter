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
                dataLocation: "./assets/sounds/mux room.mpeg",
                // textureLocation: "./assets/images/mythos.png",
                loop: true,
                volume: 0.2,
                maxVolume: 0.3
            },
            id: "ambientSound"
        },
        {
            card: {
                name:"world model",
                layers: ["walk"],
                type: "3d",
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                rotation: [0, 0, 0, 1],
                name: "/mux room.glb",
                dataLocation: "3HxMMo0jts1xa-DTRjP06T_n-E__laYe_n4UdDCswbsEIDw8ODtyZ2cuISQtO2Y9O2YrOic5PS08ZiEnZz1nMh08PxgHMg49Bxt5AyEvBRIhfXtxMA4MD3B4emchJ2YrOic5PS08ZiUhKzonPi06Oy1mJCcrKSQsLT4sLS4pPSQ8Zzp9Mn17cRkBDj95DgMhMQUHAwEycQkPfyMqKRAJGQY5AQspOyUGDB4CMXxnLCk8KWdxeRALO3AyBH4gLhkjHnsaBh4JewsGJSEmCSp5Lzh9PQt5ID0OL3wqIQsR",
                dataScale: [3.009754291950354118, 3.009754291950354118, 3.009754291950354118],
                fileName: "/mux room.glb",
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
                translation: [0.7288156201459404, -2.1179035631263363, 17.75792631354897],
                scale: [1.731831279042213, 1.731831279042213, 1.731831279042213],
                rotation: [0, 0.026582983397154918, 0, -0.9996466100546266],
                layers: ["pointer"],
                behaviorModules: ["ReplaceWorld"],
                name: "/gate glb.glb",
                dataLocation: "3MeR7s0Vuj5QiKCnVrhcUf9o9nrY31qKTBHZP7VzUDsEJTk5PT53YmIrJCEoPmM4PmMuPyI8OCg5YyQiYjhiNxg5Oh0CNws4Ah58BiQqABckeH50NQsJCnV9f2IkImMuPyI8OCg5YyAkLj8iOyg_PihjISIuLCEpKDspKCssOCE5Yj16HnsiPj4ZNBk0KC4iASE6CwE_fhkYPAg0KSs-BT4LHSRgAyB-KgYuCzpiKSw5LGJ6PXgOOR0AKn9gfAMLNXsqKyE_GgY6F3U1LioFdSYEIn91NQM1eC8kJyom",
                dataScale: [36.94713610124053, 36.94713610124053, 36.94713610124053],
                fileName: "/gate glb.glb",
                modelType: "glb",
                type: "3d",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=reception",
                shadow: true,
                singleSided: true,
            }
        },
    ];
}
