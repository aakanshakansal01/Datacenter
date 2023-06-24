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
                dataLocation: "./assets/sounds/Reception.mpeg",
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
                rotation: [0, 0.9996874797211954, 0, 0.02499885774759396],
                name: "/reception final.glb",
                dataLocation: "3inoHC2FAS5OGIRmFO1323l07qA-TqEQ-DYkkSgDqUO0AR0dGRpTRkYPAAUMGkccGkcKGwYYHAwdRwAGRhxGEzwdHjkmEy8cJjpYIgAOJDMAXFpQES8tLlFZW0YABkcKGwYYHAwdRwQAChsGHwwbGgxHBQYKCAUNDB8NDA8IHAUdRhgiHlAeAS0aGSIQICsLAC8dLz02BQciWCETOloxPQInWwdYEAA8WDAHPA5GDQgdCEYtGBgEXx9dGggmXgMvLSQ5IhxcIjocWRoRLxEvMwArIApaJzkoAT0CJVoa",
                dataScale: [11.7205740835, 11.7205740835, 11.7205740835],
                fileName: "/reception final.glb",
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
                translation: [0.7457913828585072, -2.020420094319562, 9.910960352859234],
                scale: [1.2715843462663672, 1.2715843462663672, 1.2715843462663672],
                rotation: [0.007547056040354005, -0.032520765610473984, 0.00024557293877273506, 0.9994425353381574],
                layers: ["pointer"],
                name: "/gate glb.glb",
                dataLocation: "3rgaVQ0v6_nc7p4cvBhuu9gkc5rM3uWh6yVhasxU5r4EGgYGAgFIXV0UGx4XAVwHAVwRAB0DBxcGXBsdXQddCCcGBSI9CDQHPSFDORsVPygbR0FLCjQ2NUpCQF0bHVwRAB0DBxcGXB8bEQAdBBcAARdcHh0REx4WFwQWFxQTBx4GXSM9QzwDICs3IF85NigGSjohLTUXIzkqIxkqRiQrIyo9GDUZOBkjOQUtKCtdFhMGE11BSgUhLTcmFhEIBCJHR0BBRhE3ATsIJSogLQBGORc1BBoDAwAfRAtCQwMn",
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
                translation: [6.770171340711238, -1.8959333931386346, -34.43289842530114],
                rotation: [0.011643649943076878, -0.7434359374346722, 0.0009462812861658192, 0.6687051195395177],
                layers: ["pointer"],
                name: "/gate glb.glb",
                dataLocation: "32R2m-c-0rdL_0SOkQQKcBABRaT27acKefDdNarvgSpwWkZGQkEIHR1UW15XQRxHQRxRQF1DR1dGHFtdHUcdSGdGRWJ9SHRHfWEDeVtVf2hbBwELSnR2dQoCAB1bXRxRQF1DR1dGHF9bUUBdRFdAQVccXl1RU15WV0RWV1RTR15GHW1KV3gLfURZH3NgbXQBSl9ZX2VVBFsLekBXQQEKRFpkd2h5REtcZVMEcUUdVlNGUx1La2dISmp9bXd7RwV7a0NiYGhiRGdGcUdCB3xCZmJ6VUtRCm1Ua3BgWnVn",
                dataScale: [36.94713610124053, 36.94713610124053, 36.94713610124053],
                fileName: "/gate glb.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                behaviorModules: ["ReplaceWorld"],
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=serverroom",

            }
        },
        {
            card: {
                translation: [6.4926475286008145, -1.9082462531511515, -27.584434965103487],
                rotation: [0.011643649943076878, -0.7434359374346722, 0.0009462812861658192, 0.6687051195395177],
                layers: ["pointer"],
                name: "/gate glb.glb",
                dataLocation: "32R2m-c-0rdL_0SOkQQKcBABRaT27acKefDdNarvgSpwWkZGQkEIHR1UW15XQRxHQRxRQF1DR1dGHFtdHUcdSGdGRWJ9SHRHfWEDeVtVf2hbBwELSnR2dQoCAB1bXRxRQF1DR1dGHF9bUUBdRFdAQVccXl1RU15WV0RWV1RTR15GHW1KV3gLfURZH3NgbXQBSl9ZX2VVBFsLekBXQQEKRFpkd2h5REtcZVMEcUUdVlNGUx1La2dISmp9bXd7RwV7a0NiYGhiRGdGcUdCB3xCZmJ6VUtRCm1Ua3BgWnVn",
                dataScale: [36.94713610124053, 36.94713610124053, 36.94713610124053],
                fileName: "/gate glb.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                behaviorModules: ["ReplaceWorld"],
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=muxroom",

            }
        },
        {
            card: {
                translation: [6.10065582758347, -1.9082462531511515, -20.594489434081055],
                rotation: [0.011643649943076878, -0.7434359374346722, 0.0009462812861658192, 0.6687051195395177],
                layers: ["pointer"],
                name: "/gate glb.glb",
                dataLocation: "32R2m-c-0rdL_0SOkQQKcBABRaT27acKefDdNarvgSpwWkZGQkEIHR1UW15XQRxHQRxRQF1DR1dGHFtdHUcdSGdGRWJ9SHRHfWEDeVtVf2hbBwELSnR2dQoCAB1bXRxRQF1DR1dGHF9bUUBdRFdAQVccXl1RU15WV0RWV1RTR15GHW1KV3gLfURZH3NgbXQBSl9ZX2VVBFsLekBXQQEKRFpkd2h5REtcZVMEcUUdVlNGUx1La2dISmp9bXd7RwV7a0NiYGhiRGdGcUdCB3xCZmJ6VUtRCm1Ua3BgWnVn",
                dataScale: [36.94713610124053, 36.94713610124053, 36.94713610124053],
                fileName: "/gate glb.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                behaviorModules: ["ReplaceWorld"],
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=powermanagement",

            }
        },
        {
            card: {
                translation: [16.962952971419476, -1.9296433981931005, -33.765819710789145],
                rotation: [0.007448570736906733, -0.6895985734074019, -0.0051328342038001965, -0.7241353329050376],
                layers: ["pointer"],
                name: "/gate glb.glb",
                dataLocation: "32R2m-c-0rdL_0SOkQQKcBABRaT27acKefDdNarvgSpwWkZGQkEIHR1UW15XQRxHQRxRQF1DR1dGHFtdHUcdSGdGRWJ9SHRHfWEDeVtVf2hbBwELSnR2dQoCAB1bXRxRQF1DR1dGHF9bUUBdRFdAQVccXl1RU15WV0RWV1RTR15GHW1KV3gLfURZH3NgbXQBSl9ZX2VVBFsLekBXQQEKRFpkd2h5REtcZVMEcUUdVlNGUx1La2dISmp9bXd7RwV7a0NiYGhiRGdGcUdCB3xCZmJ6VUtRCm1Ua3BgWnVn",
                dataScale: [36.94713610124053, 36.94713610124053, 36.94713610124053],
                fileName: "/gate glb.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                behaviorModules: ["ReplaceWorld"],
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=controlroom",

            }
        },
        {
            card: {
                translation: [16.658553385734812, -1.9458635693562716, -25.863831511200996],
                rotation: [0, 0.6849664882284017, 0, 0.7285745740856258],
                layers: ["pointer"],
                name: "/gate glb.glb",
                dataLocation: "33Fcu8mvRCNk3rQ3cnh4nRoNS9Nt2aThKU7XiQWnKLOUW0dHQ0AJHBxVWl9WQB1GQB1QQVxCRlZHHVpcHEYcSWZHRGN8SXVGfGACeFpUfmlaBgAKS3V3dAsDARxaXB1QQVxCRlZHHV5aUEFcRVZBQFYdX1xQUl9XVkVXVlVSRl9HHFxwCgtJdkpHSWllQWBieUtkXnBfYHEKX1cEfgBGXABmAl14SQt0Rn9gfnYcV1JHUhxRd3h9ZWoFWEJpe3Z1YXxadHkHeGZnWXJ1Sl5ZfmlJdWJpe2J-QH5pBgYL",
                dataScale: [36.94713610124053, 36.94713610124053, 36.94713610124053],
                fileName: "/gate glb.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
                behaviorModules: ["ReplaceWorld"],
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=hvac",

            }
        },
        {
            card: {
                translation: [6.646319038066285, 0.6492320477631712, -34.721033542806026],
                scale: [1.2156032013582905, 1.2156032013582905, 1.2156032013582905],
                rotation: [0.009124466769319974, 0.6830169624417161, 0.00781304322042552, 0.7303037241303804],
                layers: ["pointer"],
                name: "/server room.png",
                cornerRadius: 0.02,
                fileName: "/server room.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3qLYDFETidLpsl4kNyZwPHUAFE_dUC_NTcETqomcmoeIGQUFAQJLXl4XGB0UAl8EAl8SAx4ABBQFXxgeXgReCyQFBiE-CzcEPiJAOhgWPCsYREJICTc1NklBQ14YHl8SAx4ABBQFXxwYEgMeBxQDAhRfHR4SEB0VFAcVFBcQBB0FXiRHNR9DGjlBNEYfXAUiMzI4BxAHEDIZSB4GIyVDGBU1RDYESBJCPBo3OzheFRAFEF4dRkEzJCE0IgUmEBAhARs1HCIFGDw3BjNEHBAIOjASNitcQAAoLj00GkY8",
                textureType: "image",
                type: "2d",

            }
        },
        {
            card: {
                translation: [6.341141271376726, 0.6863606019235803, -28.034311987225525],
                scale: [1.2156032013582905, 1.2156032013582905, 1.2156032013582905],
                rotation: [0.009124466769319974, 0.6830169624417161, 0.00781304322042552, 0.7303037241303804],
                layers: ["pointer"],
                name: "/MUX room.jpg",
                cornerRadius: 0.02,
                fileName: "/MUX room.jpg",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "31_E63HQ-kj7w_yR2NawV-SRT2-OEOSED90yx7rD04BsWUVFQUILHh5XWF1UQh9EQh9SQ15ARFRFH1heHkQeS2RFRmF-S3dEfmIAelhWfGtYBAIISXd1dgkBAx5YXh9SQ15ARFRFH1xYUkNeR1RDQlQfXV5SUF1VVEdVVFdQRF1FHmQHdV8DWnkBdAZfHEVic3J4R1BHUHJZCF5GY2UDWFV1BHZECFICfFp3e3geVVBFUB5TYWJIYQV_dn1baAdIX35uRERUdHR0AGRQXmJeW0BlSHR-dlwCR2tFdnAB",
                textureType: "image",
                type: "2d",

            }
        },
        {
            card: {
                translation: [5.985588697048497, 0.7136346373970477, -20.99483290254912],
                scale: [1.2156032013582905, 1.2156032013582905, 1.2156032013582905],
                rotation: [0.009124466769319974, 0.6830169624417161, 0.00781304322042552, 0.7303037241303804],
                layers: ["pointer"],
                name: "/POWER MANAGEMENT ROOM.jpg",
                cornerRadius: 0.02,
                fileName: "/POWER MANAGEMENT ROOM.jpg",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "326ZKnFsjtT_kKuy_Lhr-iAqPfOUyaJiGqyHlUb9Xu7AWkZGQkEIHR1UW15XQRxHQRxRQF1DR1dGHFtdHUcdSGdGRWJ9SHRHfWEDeVtVf2hbBwELSnR2dQoCAB1bXRxRQF1DR1dGHF9bUUBdRFdAQVccXl1RU15WV0RWV1RTR15GHWcEdlwAWXoCdwVcH0ZhcHF7RFNEU3FaC11FYGYAW1Z2B3VHC1EBf1l0eHsdVlNGUx1TBlxYVwF5a3FQA0NhV20fU1sGRQF5XUJFQARWH2QfBQRoZnpcVFZRZlkG",
                textureType: "image",
                type: "2d",
            }
        },
        {
            card: {
                translation: [16.93371598233189, 0.6362261525532975, -33.504258464080024],
                scale: [1.2156032013582905, 1.2156032013582905, 1.2156032013582905],
                rotation: [0, -0.7619970366142051, 0, 0.6475805094281094],
                layers: ["pointer"],
                name: "/CONTROL ROOM.jpg",
                cornerRadius: 0.02,
                fileName: "/CONTROL ROOM.jpg",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3vDzyBxiCZoysjHyLja53ELsiBLcMAV3VG6qhWSWzU3IHgICBgVMWVkQHxoTBVgDBVgVBBkHAxMCWB8ZWQNZDCMCASY5DDADOSVHPR8ROywfQ0VPDjAyMU5GRFkfGVgVBBkHAxMCWBsfFQQZABMEBRNYGhkVFxoSEwASExAXAxoCWRdGBidELzsiDx45RyNBMzcyOEIUBxo5ACwsBC8hNycjMUE4EzIiFEU6MTdZEhcCF1k7DgIAFD8TGD5FDyJGFSdCLjofRCYeOSUzBw81NAciMRIfPhJFDBkTTwI_",
                textureType: "image",
                type: "2d",

            }
        },
        {
            card:{
                translation: [16.572931544857447, 0.7030560301050816, -25.587939505505158],
                scale: [1.7628684521928686, 1.7628684521928686, 1.7628684521928686],
                rotation: [0, -0.7164942796982312, 0, 0.6975929666787882],
                layers: ["pointer"],
                name: "/HVAC.jpg",
                cornerRadius: 0.02,
                fileName: "/HVAC.jpg",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3ZxOOI9Vpv0gCg_wcnsobbAGBZP2m79C-H6JKE-m6KoUMi4uKilgdXU8MzY_KXQvKXQ5KDUrLz8udDM1dS91IA8uLQoVIBwvFQlrETM9FwAzb2ljIhweHWJqaHUzNXQ5KDUrLz8udDczOSg1LD8oKT90NjU5OzY-Pyw-Pzw7LzYudR0yBTwNYiwoAgsuazMxIyB3GBU4YxA3Cgp3LwISDmIQGWwfEjQ8aSAjNBt1PjsuO3UIBTFqCh8JFWkdai0MCmM1axVrM2ltIg0iCiATABc1aWwRbRRvMissCiIL",
                textureType: "image",
                type: "2d",
            }
        },
    ];
}
