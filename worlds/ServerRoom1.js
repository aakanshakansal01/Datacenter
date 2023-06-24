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
        "hinge.js",
        "cabinet.js",
        "ambientSound.js",
        "flip.js",
        "spatialSound.js",
        "sound.js",
        "names.js",
    ];

    const avatarModels = [
        "3kDNEN2jKhiPYcYAfItpXCcaahDmYM54K-kP6mKb_x8AAx8fGxhRREQNAgcOGEUeGEUIGQQaHg4fRQIERB5ELA89CRIHIhgqADoIKTMPWCwTCh0SHD4gPDIyWUQCBEUIGQQaHg4fRQYCCBkEHQ4ZGA5EEgMHOzsPIC46GCoaMxsfOjwhBCIuWxM8XzwZHjpfND8JIw4cBQ8oXi8lOkQPCh8KRD0aDSQSEjkvICQ5BQM6Xi1GHhk9OglGOAcDBw0CHAEYD1wkKR0PITNGDBg",
        "3qPM9OnJ8B8G-bx-DZtT_uk55iJ-4seqH4D_N7XJcmxMGQUFAQJLXl4XGB0UAl8EAl8SAx4ABBQFXxgeXgReNhUnEwgdOAIwGiASMykVQjYJEAcIBiQ6JigoQ14YHl8SAx4ABBQFXxwYEgMeBxQDAhReCBkdISEVOjQgAjAAKQEFICY7Hjg0QQkmRSYDBCBFLiUTORQGHxUyRDU_IF4VEAUQXjwFBSNHOj4rAgIbNz8COSEnFTUFCD4gJD4gKTIkRQZEGi42CRQAKDk8MAY",
        "3pOqrArMCIRUilNQ5kh5jDQpDI9rMSWBMf3S8zPNUX4gGAQEAANKX18WGRwVA14FA14TAh8BBRUEXhkfXwVfNxQmEgkcOQMxGyETMigUQzcIEQYJByU7JykpQl8ZH14TAh8BBRUEXh0ZEwIfBhUCAxVfCRgcICAUOzUhAzEBKAAEISc6Hzk1QAgnRCcCBSFELyQSOBUHHhQzRTQ-IV8UEQQRXxEIHEcpEkc-IDIKSDRIFgo7RwdJNUM_Ej4-FyhGChwfPD1DM0QIMSAcNjE",
        "3YrnwoVTORoxhAZDdVvJXzOO62FQKMuP7C2JaVRcRhXMMS0tKSpjdnY_MDU8KncsKnc6KzYoLDwtdzA2dix2Hj0POyA1ECoYMgg6GwE9ah4hOC8gLgwSDgAAa3YwNnc6KzYoLDwtdzQwOis2LzwrKjx2IDE1CQk9EhwIKhgoASktCA4TNhAcaSEObQ4rLAhtBg07ETwuNz0abB0XCHY9OC04dhg4FmA1Dho2KBNhGGh0YSg1ETcqDhoDNy07OGgJODMbHD4JHTNoMhFoPDI",
        "3B45okYnR2Z096wkAU7ACqQg7iGeh5lcva8FNB-RZ-sgKjY2MjF4bW0kKy4nMWw3MWwhMC0zNyc2bCstbTdtBSYUIDsuCzEDKRMhABomcQU6IzQ7NRcJFRsbcG0rLWwhMC0zNyc2bC8rITAtNCcwMSdtOyouEhImCQcTMQMzGjI2ExUILQsHcjoVdhUwNxN2HRYgCic1LCYBdwYME20mIzYjbRc1BHcpdQcrIDsWBDs6ehY2Eht2Fxd6cBAxKCUzNnMQHRgUCggKcAUgHQ8",
        "3qPM9OnJ8B8G-bx-DZtT_uk55iJ-4seqH4D_N7XJcmxMGQUFAQJLXl4XGB0UAl8EAl8SAx4ABBQFXxgeXgReNhUnEwgdOAIwGiASMykVQjYJEAcIBiQ6JigoQ14YHl8SAx4ABBQFXxwYEgMeBxQDAhReCBkdISEVOjQgAjAAKQEFICY7Hjg0QQkmRSYDBCBFLiUTORQGHxUyRDU_IF4VEAUQXjwFBSNHOj4rAgIbNz8COSEnFTUFCD4gJD4gKTIkRQZEGi42CRQAKDk8MAY",
    ];

    Constants.AvatarNames = avatarModels.map((dataLocation, i) => ({
        type: "3d",
        name: `Visitor ${i + 1}`,
        modelType: "glb",
        avatarType: "wonderland",
        dataLocation,
        dataRotation: [0, Math.PI, 0],
        dataScale: [0.3, 0.3, 0.3],
    }));

    Constants.DefaultCards = [
        {
            card: {
                name: "ambient sound",
                // translation: [0, 0, -2],
                // layers: ["pointer"],
                type: "object",
                behaviorModules: ["AmbientSound"],
                dataType: "aac",
                dataLocation: "./assets/sounds/server room.mpeg",
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
                dataLocation: "3MKCNFCYWP9TAiMz_6fsM-c-W1FSnT7W1vX0_GIzAJ6oJTk5PT53YmIrJCEoPmM4PmMuPyI8OCg5YyQiYjhiNxg5Oh0CNws4Ah58BiQqABckeH50NQsJCnV9f2IkImMuPyI8OCg5YyAkLj8iOyg_PihjISIuLCEpKDspKCssOCE5Yjsufww6OBk9eHwuOTwjeQogGHx-IikMKik7GxsMGw8aPQZ5IBgfOyklDz5iKSw5LGISGi4FNHp4fgx8ByE0eRk6IhcGBRwuG3kLADd7KhgAfRIfORcSAQ5gPX51",
                fileName: "/server room.glb",
                modelType: "glb",
                behaviorModules: ["Cabinet"],
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
                name: "entrance",
                type: "object",
                translation: [-7.5, -0.12, -2],
                rotation: [0, -Math.PI / 2, 0],
                behaviorModules: ["Names"],
                spawn: "default",
            }
        },
        {
            card: {
                translation: [21.282289562573453, -1.7855350110907935, -15.047641624938008],
                scale: [1.1794010195341096, 1.1794010195341096, 1.1794010195341096],
                rotation: [0, 0.999807252031755, 0, -0.019633104306531583],
                layers: ["pointer"],
                name: "/gate glb.glb",
                dataLocation: "3gtDQuQwcZ_hW-wmgwCA55J4E58p-FJDSfb-4imS4VpwDxMTFxRdSEgBDgsCFEkSFEkEFQgWEgITSQ4ISBJIHTITEDcoHSESKDRWLA4AKj0OUlReHyEjIF9XVUgOCEkEFQgWEgITSQoOBBUIEQIVFAJJCwgEBgsDAhEDAgEGEgsTSFANIysGNDNQMjQBVTgKFSgWFVNWC1BUNB9RCxAAHRcoCQleNyMXLQEmPz5IAwYTBkhKEj0KCFUSMyI_MRcfEy4TKS8eIB0yIjUdFgIQJVATUAETOCkGLwAjC1Qq",
                dataScale: [36.94713610124053, 36.94713610124053, 36.94713610124053],
                fileName: "/gate glb.glb",
                modelType: "glb",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=default",
                behaviorModules: ["ReplaceWorld"],
                shadow: true,
                singleSided: true,
                type: "3d",
            }
        },
        {
            card: {
                translation: [4.35995562846821, 0.0020083780499683956, -1.268113847485426],
                scale: [0.2759933591413317, 0.2759933591413317, 0.2759933591413317],
                rotation: [0, -0.7071067811865475, 0, 0.7071067811865476],
                layers: ["pointer"],
                name: "/download.png",
                cornerRadius: 0.02,
                fileName: "/download.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3_u48OJZGKHtnUgFxbhpgQSXQ9LmlaZbMvPiYNtZGFGIR1tbX1wVAABJRkNKXAFaXAFMXUBeWkpbAUZAAFoAVXpbWH9gVWlaYHweZEZIYnVGGhwWV2lraBcfHQBGQAFMXUBeWkpbAUJGTF1AWUpdXEoBQ0BMTkNLSllLSklOWkNbAHBoRxlHG11IelVIZhtmHH9abmoCVWB-fV5dekVGXWt9a25_fV0ddmBddRsAS05bTgB8VltoemFrY3wCHEMfbGNfGF9FcFxqH3BwemEcWB9-FmZOXWpcV2NOfF1u",
                textureType: "image",
                behaviorModules: ["Flip", "SpatialSoundPlayer", "AudioMenu"],
                type: "2d",
                soundLocation: "./assets/sounds/server rack.mpeg",
            }
        },
        {
            card: {
                translation: [25.26279781216276, 1.7315273881350222, -7.5254232146664854],
                scale: [8.481867952390957, 8.481867952390957, 8.481867952390957],
                rotation: [0, -0.7015168829799442, 0, 0.7126528347618516],
                layers: ["pointer"],
                behaviorModules: ["PDFView"],
                name: "/Server_status.pdf",
                color: 8947848,
                depth: 0.05,
                fileName: "/Server_status.pdf",
                frameColor: 16777215,
                fullBright: true,
                height: 0.5625,
                modelType: "pdf",
                pdfLocation: "3kITrJN2oA6w9GRLrZyiR-jQ0zRqDC5od1V4Qbt8qYvIAx8fGxhRREQNAgcOGEUeGEUIGQQaHg4fRQIERB5EET4fHDskES0eJDhaIAIMJjECXlhSEy0vLFNbWUQCBEUIGQQaHg4fRQYCCBkEHQ4ZGA5FBwQICgcPDh0PDg0KHgcfRA4DHlsHKQEbAhMGMiMlOjMAPR0mWj89ITQFU14NPT4aGiVeDDkyHh8CJABEDwofCkQbDS4uAVNeOlgTIF0fXAhcIiUKDRIkAC4mPV04ByxZBUY0BiYRGFgHCiA-",
                shadow: true,
                singleSided: true,
                type: "2d",
                width: 1,
            }
        }
    ];
}
