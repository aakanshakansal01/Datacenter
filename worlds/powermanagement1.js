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
        "ambientSound.js",
        "popupbattery.js"
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
                dataLocation: "./assets/sounds/power management.mpeg",
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
                translation: [0, -1.7, 0],
                rotation: [0, 0, 0, 1],
                name: "/power management roomblend.glb",
                dataLocation: "3qYG2uofg1hKQETswbotFDNEBOVoepAz-I6pdAtM6kcQGQUFAQJLXl4XGB0UAl8EAl8SAx4ABBQFXxgeXgReCyQFBiE-CzcEPiJAOhgWPCsYREJICTc1NklBQ14YHl8SAx4ABBQFXxwYEgMeBxQDAhRfHR4SEB0VFAcVFBcQBB0FXjcVQwhAQiEuISAmCBUTPyUgHzUmRUYmKAUBC0MiMhAuAAgFGUUAIgIXE0VeFRAFEF5GXEk6LjklOzU1MkcaBCkzCUYZMhlHRigBSEIIMkNENDUCLgMyMAIQRSgg",
                dataScale: [3.016285755060983984, 3.016285755060983984, 3.016285755060983984],
                fileName: "/power management roomblend.glb",
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
                translation: [0.017340602874265976, -2.2062188484248715, 10.824625901439726],
                scale: [2.356718578078481, 2.356718578078481, 2.356718578078481],
                rotation: [0.0014816440416945595, 0.0013505124370309304, -0.002135462264219092, -0.9999957103148038],
                layers: ["pointer"],
                name: "/gate glb.glb",
                dataLocation: "3_F4eL3ejYThzXtlU8G6W6xc0gE6q_-YLBH-1CtFO-zkR1tbX1wVAABJRkNKXAFaXAFMXUBeWkpbAUZAAFoAVXpbWH9gVWlaYHweZEZIYnVGGhwWV2lraBcfHQBGQAFMXUBeWkpbAUJGTF1AWUpdXEoBQ0BMTkNLSllLSklOWkNbAHkbbUhdZ2x5QVpnYHtkeFcXZlxZXmtDG2sWZ3lJd0lMSH5HbBsfSkxDFkQAS05bTgAYV0EYSk5ObWsbZxdGVxh-dUFMeXcYeFlkfU5qehdiR2geYXdiTExsYUdA",
                dataScale: [36.94713610124053, 36.94713610124053, 36.94713610124053],
                fileName: "/gate glb.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                behaviorModules: ["ReplaceWorld"],
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=default",
            }
        },
        {
            card: {
                translation: [-5.854263962052264, -0.25766311780051354, -6.842937687827059],
                scale: [0.4093463270249913, 0.4093463270249913, 0.4093463270249913],
                rotation: [0, 0.6740427092346604, 0, 0.7386923758423388],
                layers: ["pointer"],
                name: "/click me.png",
                cornerRadius: 0.02,
                fileName: "/click me.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3HpTLS7NSk7IinN4A88Ob9UZYuGVAdBHbQ8PyoQmtfKIIDw8ODtyZ2cuISQtO2Y9O2YrOic5PS08ZiEnZz1nMh08PxgHMg49Bxt5AyEvBRIhfXtxMA4MD3B4emchJ2YrOic5PS08ZiUhKzonPi06Oy1mJCcrKSQsLT4sLS4pPSQ8Zxt4CS09fQkLJg0nDwIQezsPDRcdAzkLAhsEISc6AhF9EQshcR0YPHFlAw1nLCk8KWd7KiUrGAIpEXl9MAsDBDkMPhA_KiIHLAoffhEXfDA_eDggfH0XACslBzoB",
                textureType: "image",
                behaviorModules: ["Popupbattery"],
                type: "2d",
            }
        }
    ];
}
