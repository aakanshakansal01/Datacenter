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
    ];

    Constants.DefaultCards = [
        {
            card: {
                name: "world model",
                layers: ["walk"],
                type: "3d",
                singleSided: true,
                shadow: true,
                translation: [0, 0, 0],
                rotation: [0, 0, 0, 1],
                name: "/workshp .glb",
                dataLocation: "3KCjPJ2WoR6NksbGcna2-YmgpwGspAoXjKRxP4ZBZOKUIz8_OzhxZGQtIicuOGU-OGUoOSQ6Pi4_ZSIkZD5kMR4_PBsEMQ0-BBh6ACIsBhEifnhyMw0PDHN7eWQiJGUoOSQ6Pi4_ZSYiKDkkPS45OC5lJyQoKicvLj0vLi0qPic_ZBp8GQc5IQMhH3wGCj4iOhEJOx54Pz95LH4ben9-FDEbEzl7PT0ME2YIExJkLyo_KmR8DCciOAogeyJ_JxxzPnMSDSwBJ3MEJSgoOX4DBXMEDgI5Mx96JTEzKD0O",
                dataScale: [10.6, 10.6, 10.6],
                fileName: "/workshp .glb",
                modelType: "glb",
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            }// dataScale: [10.6, 10.6, 10.6],
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
                name: "entrance",
                type: "object",
                translation: [7.796800430422808, -2.151791444886513, 10.480686096332706],
                rotation: [0, -0.19356932670507973, 0, -0.9810865995206244],
                spawn: "default",
            }
        },
        {
            card:{
                translation: [3.5110597206178213, -2.1672527537468484, -5.726153689619679],
                scale: [4, 4, 4],
                rotation: [0, 0.0065497180563731106, 0, 0.9999785503666477],
                layers: ["pointer"],
                name: "/default.png",
                cornerRadius: 0.02,
                fileName: "/default.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3_XbhczV5lGJZ1PtQ1j9pmV0kwB_6qoNaJv5M96RyejwR1tbX1wVAABJRkNKXAFaXAFMXUBeWkpbAUZAAFoAVXpbWH9gVWlaYHweZEZIYnVGGhwWV2lraBcfHQBGQAFMXUBeWkpbAUJGTF1AWUpdXEoBQ0BMTkNLSllLSklOWkNbAEttaXVnGHsZaxZIWHt4YEttV2IfZ3x9Q3t9ZFtGVUBqZWhma2odTXpbaGoAS05bTgAdWhgWf1cbYloabGNCSUwdZncbSl1AVWtaeUVqWEdqdUFhfGRubU0XGnhE",
                textureType: "image",
                type: "2d",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=default",
                behaviorModules: ["ReplaceWorld"],            
            }
        }
    ];
}
