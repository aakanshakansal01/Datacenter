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
        "names.js",
        "openPortal3.js",
        "sound.js",
        "spatialSound.js",
        "replaceWorld.js",
    ];

    Constants.DefaultCards = [
        {
            card: {
                name: "world model",
                layers: ["walk"],
                type: "3d",
                singleSided: true,
                shadow: true,
                translation: [0, -1.7, 0],
                rotation: [0, 0, 0, 1],
                name: "/security new  (2).glb",
                dataLocation: "3K0ItbC8BXf2lHx-HDZ6OjJzex3EJrXQeZciH2MUxU_IIz8_OzhxZGQtIicuOGU-OGUoOSQ6Pi4_ZSIkZD5kMR4_PBsEMQ0-BBh6ACIsBhEifnhyMw0PDHN7eWQiJGUoOSQ6Pi4_ZSYiKDkkPS45OC5lJyQoKicvLj0vLi0qPic_ZBglDz8jJS8dMig5OXgiKiEqFH16FCkqOwYRIQJ7O3MgDDkeHQUbJyUZEyRkLyo_KmQNIB8OLgccOxt_GjsJAHolAjkGciQDAC8kDCoTKSgCZiMRIAcaLAEZKTIo",
                dataScale: [4.31934035740377725, 4.31934035740377725, 4.31934035740377725],
                fileName: "/security new  (2).glb",
                modelType: "glb",
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            }
        },
         
    
        {
            card: {
                name: "entrance",
                type: "object",
                translation: [-0.00978537695663219, -0.06199973301903583, 13.290239363809519],
                rotation: [0, 0.00045747734169029886, 0, 0.9999998953572353],
                spawn: "default",
                behaviorModules: ["Names"],
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
                translation: [-0.014455543060125503, 8.44845272273264, -36.51067601309279],
                scale: [4.995652701317612, 4.995652701317612, 4.995652701317612],
                rotation: [0, -0.00045747734169029886, 0, -0.9999998953572353],
                layers: ["pointer"],
                behaviorModules: ["OpenRefineryPortalButton3"],
                name: "portal button",
                type: "object",
            }
        },
         
    
        {
            card: {
                translation: [1.5747065993548548, 0.47120123764844957, 0.1503569095831585],
                rotation: [0, 0.00045747734169029886, 0, 0.9999998953572353],
                name: "spatial sound",
                fullBright: true,
                modelType: "aac",
                shadow: true,
                singleSided: true,
                behaviorModules: ["SpatialSoundPlayer", "AudioMenu"],
                type: "object",
                soundLocation: "./assets/sounds/securitycheck.mp3",
            }
        },
        {
            card:{
                translation: [0.3483926193079563, -2.238018094972469, 15.515835748998027],
                scale: [2.413011110385241, 2.413011110385241, 2.413011110385241],
                rotation: [0, -0.001241303082352135, 0, -0.9999992295830322],
                layers: ["pointer"],
                name: "/gate glb.glb",
                dataLocation: "3_QVcDSfoKdxad_-objgHy8Mxp8Et8_NWiXmRfJTayKUR1tbX1wVAABJRkNKXAFaXAFMXUBeWkpbAUZAAFoAVXpbWH9gVWlaYHweZEZIYnVGGhwWV2lraBcfHQBGQAFMXUBeWkpbAUJGTF1AWUpdXEoBQ0BMTkNLSllLSklOWkNbABgZX15dY3Bnal1bQ2NMFkZkTXhkdU1ddxZ2W3dVYXtHQloaQWthemNtbGYAS05bTgBtd1l7QXZfeWZMbn5IQlZ8V0JAeEtff19IQmZ7X0wbSG15dmhkTm1Ya2B6",
                dataScale: [36.94713610124053, 36.94713610124053, 36.94713610124053],
                fileName: "/gate glb.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=default",
                behaviorModules: ["ReplaceWorld"],
            }
        }
    ];
}
