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
        "popup.js",

        "names.js",
        "openPortal.js",
        "openPortal1.js",
        "openPortal2.js",
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
                translation: [0, -10, 0],
                rotation: [0, 0, 0, 1],
                name: "/outdoor 1.glb",
                dataLocation: "3jjzofwvB9qlXt19fcLLbD_4HmS6yQP1ti4Hx30fifqsAh4eGhlQRUUMAwYPGUQfGUQJGAUbHw8eRAMFRR9FED8eHTolECwfJTlbIQMNJzADX1lTEiwuLVJaWEUDBUQJGAUbHw8eRAcDCRgFHA8YGQ9EBgUJCwYODxwODwwLHwYeRTAsARw8JzkvGlsuMisIEwI7BiQ4GAdaEhgZBlMjMkcSMjUIA18JRxopUx1FDgseC0UmLx0zCSwOCFoBNSZSLx4jOlteEB8hAQ0kLQUMKCU4XQA4MBwnJCkuXhAz",
                dataScale: [202.5369681528749264, 202.5369681528749264, 202.5369681528749264],
                fileName: "/outdoor 1.glb",
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
                name: "entrance",
                type: "object",
                translation: [1.2864988874521628, -0.34109016746895, -1.0597606846933583],
                rotation: [0, 0.6552793976324569, 0, 0.7553865970736073],
                spawn: "default",
                behaviorModules: ["Names"],
            }
        },
        {
            card: {
                translation: [-50.33813523543052, 7.40333318643725, -4.865049575495204],
                scale: [3.4270997596845194, 3.4270997596845194, 3.4270997596845194],
                rotation: [0, 0.6552793976324569, 0, 0.7553865970736073],
                layers: ["pointer"],
                behaviorModules: ["OpenRefineryPortalButton"],
                name: "portal button",
                type: "object",            
            }
        },
        {
            card:{
                translation: [-109.75466016518128, -0.02104996276295923, -99.08721084509715],
                scale: [2.9481286256162478, 2.9481286256162478, 2.9481286256162478],
                rotation: [0.008953481023245207, 0.030007312399164432, 0.000008891982932364428, 0.9995095778936176],
                layers: ["pointer"],
                name: "/genset glb new.glb",
                dataLocation: "3CltnbJ8RR5Dz0nEij-2lgNf7sHSTBpUxj0Pb4BDYi88Kzc3MzB5bGwlKi8mMG02MG0gMSwyNiY3bSosbDZsORY3NBMMOQU2DBByCCokDhkqdnB6OwUHBHtzcWwqLG0gMSwyNiY3bS4qIDEsNSYxMCZtLywgIi8nJjUnJiUiNi83bDkQcg8GdDIyDAQhFHQsFCoHATogK3EVEDkVMCYADQ4QcQ82LBAVLQwccQpsJyI3ImwsBhAPczErJBUZHHUtLxNyATI2BHMuAjQlJDAkdiwKKXQKKjtxbgAECxUw",
                dataScale: [1.6469038245189984, 1.6469038245189984, 1.6469038245189984],
                fileName: "/genset glb new.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            
            
            }
        },
        {
            card:{
                translation: [-122.8772632316497, 0.0242327645763436, -98.30687590811816],
                scale: [2.9481286256162478, 2.9481286256162478, 2.9481286256162478],
                rotation: [0.002967376045103471, 0.029683986738142112, 0.008970341654623643, 0.9995146765212294],
                layers: ["pointer"],
                name: "/genset glb new.glb",
                dataLocation: "3qLGZSKTqpKZTBiiS1OMWoUkpuIKWGZE2FZeAOOk_I1UGQUFAQJLXl4XGB0UAl8EAl8SAx4ABBQFXxgeXgReCyQFBiE-CzcEPiJAOhgWPCsYREJICTc1NklBQ14YHl8SAx4ABBQFXxwYEgMeBxQDAhRfHR4SEB0VFAcVFBcQBB0FXgsiQD00RgAAPjYTJkYeJhg1MwgSGUMnIgsnAhQyPzwiQz0EHiInHz4uQzheFRAFEF43IANEQgc-HhUeEzNIJjYHXAQYBh5HRBNAHDolCzJIFT8rRh9BG0g8QEQw",
                dataScale: [1.6469038245189984, 1.6469038245189984, 1.6469038245189984],
                fileName: "/genset glb new.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            
            }
        },
        {
            card:{
                translation: [-136.49055094884764, 0.07790168059452474, -97.67121407742884],
                scale: [3.098267495652388, 3.098267495652388, 3.098267495652388],
                rotation: [-0.003989111333131329, 0.014389343189377967, 0.00042321378485456543, 0.9998884211167978],
                layers: ["pointer"],
                name: "/genset glb new.glb",
                dataLocation: "3IXIWJ_F1ytTKVniu58cNvHigxEiSTq0ynETjnsn_29UIT09OTpzZmYvICUsOmc8OmcqOyY4PCw9ZyAmZjxmMxw9PhkGMw88Bhp4AiAuBBMgfHpwMQ8NDnF5e2YgJmcqOyY4PCw9ZyQgKjsmPyw7OixnJSYqKCUtLD8tLC8oPCU9ZnAgBTAiAXsFew8EExwFOAVxDR47ZGR7Dn1we38WBjkuLQoIAmQmDyouGnlmLSg9KGYeFgsOMAt9HyIBDDosCjMaBXgRKxEtZAA9ECNxMyU8DQUjZBFweiNwZAsc",
                dataScale: [1.6469038245189984, 1.6469038245189984, 1.6469038245189984],
                fileName: "/genset glb new.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            
            }
        },
        {
            card:{
                translation: [-108.99619981713388, -0.08874723359127956, -92.23090200780972],
                scale: [2.920147682471085, 2.920147682471085, 2.920147682471085],
                rotation: [-0.003556517198310836, 0.03365668002678928, 0.0007447126203504341, 0.9994268479874386],
                layers: ["pointer"],
                name: "/genset glb new.glb",
                dataLocation: "3Z7CNSN1FVdSMqeTGvddRLGZwiS3SCgVbg5n-sxsJNvEMi4uKilgdXU8MzY_KXQvKXQ5KDUrLz8udDM1dS91IA8uLQoVIBwvFQlrETM9FwAzb2ljIhweHWJqaHUzNXQ5KDUrLz8udDczOSg1LD8oKT90NjU5OzY-Pyw-Pzw7LzYudSIuHj93aikJHjAgIwpqaCkZGCwfO2gdPhQTCW0qNxBpKmgPNW8UCAMSMz11PjsuO3UjLG9vMiAcEg0IPD09FDwtKWk4HR1qHxgOEmoKDzstDQ0tEhJrEgUoP241",
                dataScale: [1.6469038245189984, 1.6469038245189984, 1.6469038245189984],
                fileName: "/genset glb new.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            
            }
        },
        {
            card:{
                translation: [-122.52667286112325, -0.16561816005464713, -91.67575089851576],
                scale: [2.7543863938714876, 2.7543863938714876, 2.7543863938714876],
                rotation: [-0.0057132947791347964, -0.02392558932827792, -0.0001929112272209301, -0.9996973978276227],
                layers: ["pointer"],
                name: "/genset glb new.glb",
                dataLocation: "3GFoGA8IT9RJb06pa8qRDEikCKCZMIBs42l1ltPtxAEQLzMzNzR9aGghLisiNGkyNGkkNSg2MiIzaS4oaDJoPRIzMBcIPQEyCBR2DC4gCh0ucnR-PwEDAH93dWguKGkkNSg2MiIzaSouJDUoMSI1NCJpKygkJisjIjEjIiEmMiszaD8zAyJqdzQUAy09Phd3dTQEBTECJnUAIwkOFHA3Kg10N3USKHIJFR4PLiBoIyYzJmgCHx4pKnUdHnMFcTEMID4FCSw1A3YWBWo1cHUMLn50HhAxITUiIXUFKSQK",
                dataScale: [1.6469038245189984, 1.6469038245189984, 1.6469038245189984],
                fileName: "/genset glb new.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            
            
            }
        },
        {
            card:{
                translation: [-136.49055094884764, 0.07790168059452474, -97.67121407742884],
                scale: [3.098267495652388, 3.098267495652388, 3.098267495652388],
                rotation: [-0.003989111333131329, 0.014389343189377967, 0.00042321378485456543, 0.9998884211167978],
                layers: ["pointer"],
                name: "/genset glb new.glb",
                dataLocation: "3IXIWJ_F1ytTKVniu58cNvHigxEiSTq0ynETjnsn_29UIT09OTpzZmYvICUsOmc8OmcqOyY4PCw9ZyAmZjxmMxw9PhkGMw88Bhp4AiAuBBMgfHpwMQ8NDnF5e2YgJmcqOyY4PCw9ZyQgKjsmPyw7OixnJSYqKCUtLD8tLC8oPCU9ZnAgBTAiAXsFew8EExwFOAVxDR47ZGR7Dn1we38WBjkuLQoIAmQmDyouGnlmLSg9KGYeFgsOMAt9HyIBDDosCjMaBXgRKxEtZAA9ECNxMyU8DQUjZBFweiNwZAsc",
                dataScale: [1.6469038245189984, 1.6469038245189984, 1.6469038245189984],
                fileName: "/genset glb new.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            
            }
        },
        {
            card:{
                translation: [-135.45241876716787, -0.10032240946988447, -91.04452727422793],
                scale: [2.814524288096304, 2.814524288096304, 2.814524288096304],
                rotation: [-0.0051684241579216025, 0.03701159288810718, 0.008279592247351697, 0.9992671703482642],
                layers: ["pointer"],
                name: "/genset glb new.glb",
                dataLocation: "3TJ45462eS6Na2keMN8SPM1wyZObl4zbxnsDbdVmKmfMPCAgJCdue3syPTgxJ3ohJ3o3JjslITEgej07eyF7LgEgIwQbLhIhGwdlHz0zGQ49YWdtLBIQE2xkZns9O3o3JjslITEgejk9NyY7IjEmJzF6ODs3NTgwMSIwMTI1ITggezwiYjMVOxo8ZzNtBAUzJScGIHljPj8tHh4CIAQ-bRkTCxBkMB9hHBgbMT97MDUgNXswI2U6PQUkCyQXPjMnHj0HGAIQLgw8Ix4-CwYOPhAAGiwZNSA4OjsXMgE_",
                dataScale: [1.6469038245189984, 1.6469038245189984, 1.6469038245189984],
                fileName: "/genset glb new.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            
            
            }
        },
        
        {
            card:{
                translation: [-108.47199332612297, -0.07588002793082937, -85.91783213442731],
                scale: [2.8390710239081143, 2.8390710239081143, 2.8390710239081143],
                rotation: [0.015087031467864429, 0.033461507922080386, 0.000012910260036919714, 0.9993261273490216],
                layers: ["pointer"],
                behaviorModules: ["Popup"],
                name: "/genset glb new.glb",
                dataLocation: "3Q0Ehh4M0Ncs3d4D_zCHo-ed1-eRLQfveZG452OsEHy8OSUlISJrfn43OD00In8kIn8yIz4gJDQlfzg-fiR-KwQlJgEeKxckHgJgGjg2HAs4ZGJoKRcVFmlhY344Pn8yIz4gJDQlfzw4MiM-JzQjIjR_PT4yMD01NCc1NDcwJD0lfjknZzYQPh85YjZoAQA2ICIDJXxmOzooGxsHJQE7aBwWDhVhNRpkGR0eNDp-NTAlMH4jZis1Ygk4M2ELGBsyMwRnPwYzFh8JJxY6A3xlODkiACQ1Ggc_ZDwmJx4Y",
                dataScale: [1.6469038245189984, 1.6469038245189984, 1.6469038245189984],
                fileName: "/genset glb new.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            
            }
        },
        {
            card:{
                translation: [-122.48930307093279, -0.17831773345860258, -85.25759905681427],
                scale: [2.8099251293983047, 2.8099251293983047, 2.8099251293983047],
                rotation: [0, 0.016435107201044262, 0, 0.999864934504301],
                layers: ["pointer"],
                name: "/genset glb new.glb",
                dataLocation: "3vZB201BurcEthHZOShZLUhi086dP9rxlHKsm3XwAsf4HgICBgVMWVkQHxoTBVgDBVgVBBkHAxMCWB8ZWQNZDCMCASY5DDADOSVHPR8ROywfQ0VPDjAyMU5GRFkfGVgVBBkHAxMCWBsfFQQZABMEBRNYGhkVFxoSEwASExAXAxoCWR4AQBE3GTgeRRFPJicRBwUkAltBHB0PPDwgAiYcTzsxKTJGEj1DPjo5Ex1ZEhcCF1k6Rw8ZOh8PLxITTz8BRhciG0A3QDIxRxgOQxAiRT46PhsdLhM3HjAEO0YV",
                dataScale: [1.6469038245189984, 1.6469038245189984, 1.6469038245189984],
                fileName: "/genset glb new.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",           
            }
        },
        {
            card:{
                translation: [-135.48901028194825, -0.06562831464159435, -84.52034548361057],
                scale: [2.8505442477788385, 2.8505442477788385, 2.8505442477788385],
                rotation: [0.010983171162151265, 0.027710979102290978, -0.00387206815950851, 0.9995481372483187],
                layers: ["pointer"],
                name: "/genset glb new.glb",
                dataLocation: "3vI3QM8mdOl-wrbZk3hMBCQ8LblURb7EdRXU7qyO-974HgICBgVMWVkQHxoTBVgDBVgVBBkHAxMCWB8ZWQNZDCMCASY5DDADOSVHPR8ROywfQ0VPDjAyMU5GRFkfGVgVBBkHAxMCWBsfFQQZABMEBRNYGhkVFxoSEwASExAXAxoCWR4AQBE3GTgeRRFPJicRBwUkAltBHB0PPDwgAiYcTzsxKTJGEj1DPjo5Ex1ZEhcCF1kuJE4aIEUjOAQQIzMhWxM0FQ8mNQYAAhg4KRcuGANBRDwOOT0UGgQsIT0B",
                dataScale: [1.6469038245189984, 1.6469038245189984, 1.6469038245189984],
                fileName: "/genset glb new.glb",
                modelType: "glb",
                shadow: true,
                singleSided: true,
                type: "3d",
            
            }
        },
       {
        card:{
            translation: [-145.44492916325308, -2.4294528403704017, -81.772327865713],
            scale: [1.71760377243083, 1.71760377243083, 1.71760377243083],
            rotation: [0, 0.04025777880427848, 0, 0.9991893270275388],
            layers: ["pointer"],
            name: "/transformer glb.glb",
            dataLocation: "3LbOL2rZg3-iE9j9oE_TX1pEVZRzvSK0MmFJ795r6HzQJDg4PD92Y2MqJSApP2I5P2IvPiM9OSk4YiUjYzljNhk4OxwDNgo5Ax99ByUrARYleX91NAoIC3R8fmMlI2IvPiM9OSk4YiElLz4jOik-PyliICMvLSAoKTooKSotOSA4YyQ6eisNIwIkfyt1HB0rPT8eOGF7Jic1BgYaOBwmdQELEwh8KAd5BAADKSdjKC04LWMPBCgrIgAcLRkaPSl-HwQDNi8nCSphGQY8CQd4HSscenoPdDg8egknKhon",
            dataScale: [48.46312429144301, 48.46312429144301, 48.46312429144301],
            fileName: "/transformer glb.glb",
            modelType: "glb",
            shadow: true,
            singleSided: true,
            type: "3d",
        
        
        
        }
       },
    //    {
    //     card:{
    //         translation: [-105.73127006886352, 0.9387126525407594, -82.40259222974423],
    //         scale: [7.822940415390204, 7.822940415390204, 7.822940415390204],
    //         rotation: [-0.00010462099931452581, 0.01714409644550976, -0.00007639809866632593, -0.9998530207859772],
    //         layers: ["pointer"],
    //        // behaviorModules: ["Popup"],
    //         behaviorModules: ["PDFView"],
    //         name: "/Genset_status.pdf",
    //         color: 8947848,
    //         depth: 0.05,
    //         fileName: "/Genset_status.pdf",
    //         frameColor: 16777215,
    //         fullBright: true,
    //         height: 0.5625,
    //         modelType: "pdf",
    //         pdfLocation: "3T_16NdvfofpBsoQblX72E_DXqQ8WZHXXI2aQldKHhVoPCAgJCdue3syPTgxJ3ohJ3o3JjslITEgej07eyF7LgEgIwQbLhIhGwdlHz0zGQ49YWdtLBIQE2xkZns9O3o3JjslITEgejk9NyY7IjEmJzF6ODs3NTgwMSIwMTI1ITggexAEHAwBJW15LWJsHREVeQ0YAWFnbSw_BSIiZRs6GRAAAhsaAQ4BIRwdBid7MDUgNXssNyEEPBVkMw0-Igw8AzAyLGwRLScDBxhgYxg3By1jLBAxZjI6DgM4M2Vk",
    //         shadow: true,
    //         singleSided: true,
    //         type: "2d",
    //         width: 1,
        
        
        
    //     }
    //    },
       {
        card:{
            translation: [-145.74409065615953, -2.310643280748887, -88.33758891156361],
            scale: [1.7423699558038557, 1.7423699558038557, 1.7423699558038557],
            rotation: [0, 0.023198788729746723, 0, 0.9997308718857656],
            layers: ["pointer"],
            name: "/transformer glb.glb",
            dataLocation: "3aUlPsD3yIGzW4p4tNXs8OTpI-rOPY90qlpbB7_5fBjICRUVERJbTk4HCA0EEk8UEk8CEw4QFAQVTwgOThROGzQVFjEuGycULjJQKggGLDsIVFJYGSclJllRU04IDk8CEw4QFAQVTwwIAhMOFwQTEgRPDQ4CAA0FBBcFBAcAFA0VTgkXVwYgDi8JUgZYMTAGEBIzFUxWCwoYKys3FTELWCwmPiVRBSpUKS0uBApOBQAVAE5UDiI7VwgoAwUXG1g7JFkzUSUSGAk0NlNUUAgGBTAOLTQnOSNMPjgUBTYW",
            dataScale: [48.46312429144301, 48.46312429144301, 48.46312429144301],
            fileName: "/transformer glb.glb",
            modelType: "glb",
            shadow: true,
            singleSided: true,
            type: "3d",
        
        
        }
       },
        {
            card: {
                translation: [-81.38272734178422, 0.11841865562706833, -69.71159894241825],
                scale: [12.449307776646332, 8.449307776646332, 8.449307776646332],
                rotation: [0, -0.02351545945013888, 0, 0.9997234733499304],
                layers: ["pointer"],
                name: "/workshop.png",
                cornerRadius: 0.02,
                fileName: "/workshop.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3hyXMa-IswzG44WVn0rJEyZj-hTqmctBVDEETlqKlqVAABwcGBtSR0cOAQQNG0YdG0YLGgcZHQ0cRgEHRx1HEj0cHzgnEi4dJztZIwEPJTIBXVtREC4sL1BYWkcBB0YLGgcZHQ0cRgUBCxoHHg0aGw1GBAcLCQQMDR4MDQ4JHQQcRz8rKTxeDgNZBSwsMC0BAxgpPic6GSsEEhI9BV0aMlkhAFhaXl4gHxkCCw9HDAkcCUdeHRgDCzA4Xi8pID0sHCQlDV9eUSIhAAIcIAJaGDteLSExGyZdKwZZWFgt",
                textureType: "image",
                type: "2d",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=workshop",
                behaviorModules: ["ReplaceWorld"],
            }
        },
        {
            card: {
                translation: [-64.5576888723167, 0.043208087897047553, -69.70749580588586],
                scale: [12.449307776646332, 8.449307776646332, 8.449307776646332],
                rotation: [0, -0.9999519451810577, 0, 0.009803434531784248],
                layers: ["pointer"],
                name: "/powermanagement.png",
                cornerRadius: 0.02,
                fileName: "/powermanagement.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3iXSc3hetrjN5P40YyP-N4jAXl6zyBbNMlLVuLMNtoK4AR0dGRpTRkYPAAUMGkccGkcKGwYYHAwdRwAGRhxGEzwdHjkmEy8cJjpYIgAOJDMAXFpQES8tLlFZW0YABkcKGwYYHAwdRwQAChsGHwwbGgxHBQYKCAUNDB8NDA8IHAUdRj4qKD1fDwJYBC0tMSwAAhkoPyY7GCoFExM8BFwbM1ggAVlbX18hHhgDCg5GDQgdCEZbPD9RUQsoEzsQJCpdNiceLDM6XQETJzgtJgIhMRhdPC1eBi0fMCMdPi8K",
                textureType: "image",
                type: "2d",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=powermanagement1",
                behaviorModules: ["ReplaceWorld"],
            }
        },
        {
            card:{
                translation: [-81.19642386811984, 2.8048579000093286, -69.06269082004013],
                scale: [2.6758616986491988, 2.6758616986491988, 2.6758616986491988],
                rotation: [-0.0025794569488765524, 0.0012058668680460793, -0.000034110002325009065, 0.9999959455535072],
                layers: ["pointer"],
                name: "/Workshop.jpeg",
                cornerRadius: 0.02,
                fileName: "/Workshop.jpeg",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3Sp0SftxV1EtUc9oH5lX3WAC1squQ5_CM6BYnaAfOCUwOycnIyBpfHw1Oj82IH0mIH0wITwiJjYnfTo8fCZ8KQYnJAMcKRUmHABiGDo0Hgk6ZmBqKxUXFGtjYXw6PH0wITwiJjYnfT46MCE8JTYhIDZ9PzwwMj83NiU3NjUyJj8nfAkFJgkrKx8fGSAgZD1rPCsCP2IaNwkjOzcaFCBhCRoRESowHDYGHQohAgp8NzInMnwrFAM0PmAGNDYYBwk5MGUYChoLGxQeBjYqMT0ZDDgVAxFlYmoJJWQKajY4",
                textureType: "image",
                type: "2d",
            }
        },
        {
            card:{
                translation: [-64.8666069176625, 2.7838903365150545, -69.17895860427451],
                scale: [2.3589425590329673, 2.3589425590329673, 2.3589425590329673],
                rotation: [0, 0.0164832001010082, 0, 0.9998641428286296],
                layers: ["pointer"],
                name: "/Security room.jpeg",
                cornerRadius: 0.02,
                fileName: "/Security room.jpeg",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3pmDuFEz8ffnZT6pXQ4yR2WswzCB0RQrgJBkAW3xp2DAGAQEAANKX18WGRwVA14FA14TAh8BBRUEXhkfXwVfCiUEByA_CjYFPyNBOxkXPSoZRUNJCDY0N0hAQl8ZH14TAh8BBRUEXh0ZEwIfBhUCAxVeHB8TERwUFQYUFRYRBRwEXzc8PxMhIUUoNUMRSCozIi8dJyU5PioeSRo_PAU2QSMSQgcGPSECKhkpPjVfFBEEEV83Hjo9GhYmKCZAOR8ZJjk8NykmMTIYFxRGLyNdRz0oGRcqRykaByY3SEID",
                textureType: "image",
                type: "2d",
            
            }
        },{
            card: {
                translation: [-64.5576888723167, 0.043208087897047553, -69.70749580588586],
                scale: [12.449307776646332, 8.449307776646332, 8.449307776646332],
                rotation: [0, -0.9999519451810577, 0, 0.009803434531784248],
                layers: ["pointer"],
                name: "/powermanagement.png",
                cornerRadius: 0.02,
                fileName: "/powermanagement.png",
                fullBright: true,
                modelType: "img",
                shadow: true,
                singleSided: true,
                textureLocation: "3iXSc3hetrjN5P40YyP-N4jAXl6zyBbNMlLVuLMNtoK4AR0dGRpTRkYPAAUMGkccGkcKGwYYHAwdRwAGRhxGEzwdHjkmEy8cJjpYIgAOJDMAXFpQES8tLlFZW0YABkcKGwYYHAwdRwQAChsGHwwbGgxHBQYKCAUNDB8NDA8IHAUdRj4qKD1fDwJYBC0tMSwAAhkoPyY7GCoFExM8BFwbM1ggAVlbX18hHhgDCg5GDQgdCEZbPD9RUQsoEzsQJCpdNiceLDM6XQETJzgtJgIhMRhdPC1eBi0fMCMdPi8K",
                textureType: "image",
                type: "2d",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=powermanagement1",
                behaviorModules: ["ReplaceWorld"],
            }
        }, 
        {
            card:{
                translation: [-47.038550149867476, 2.1501860688236394, 8.401846408942337],
                scale: [5.1860133303664755, 5.1860133303664755, 5.1860133303664755],
                rotation: [0, 0.5624458352463522, 0, 0.8268341323470108],
                layers: ["pointer"],
                behaviorModules: ["ReplaceWorld"],
                name: "/Control room.jpeg",
                cornerRadius: 0.02,
                fileName: "/Control room.jpeg",
                fullBright: true,
                modelType: "img",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=ServerRoom1",
                shadow: true,
                singleSided: true,
                textureLocation: "3IncfJp_uhlV8-dQddPP14_JdHI2FhX1rtUty5vB4jPwIT09OTpzZmYvICUsOmc8OmcqOyY4PCw9ZyAmZjxmMxw9PhkGMw88Bhp4AiAuBBMgfHpwMQ8NDnF5e2YgJmcqOyY4PCw9ZyQgKjsmPyw7OixnJSYqKCUtLD8tLC8oPCU9Zj0zGSQBOS4uCzAcEDwtCCoIOxB8FggPEw4QE35_IAcvcQMufxFwCzgiDBBmLSg9KGZ4AWQIBX18IxMiKj8jICYlHT15Pn0qLgQ8Ox8qfwIhGD0HLw44HSoDEwB5",
                textureType: "image",
                type: "2d",                      
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=ServerRoom1",
                behaviorModules: ["ReplaceWorld"],
            }
        },{
            card:{
                translation: [-45.20626331351568, 2.143324906749525, 2.7809838758443397],
                scale: [5.1860133303664755, 5.1860133303664755, 5.1860133303664755],
                rotation: [0, 0.6231248579304798, 0, 0.7821223762488321],
                layers: ["pointer"],
                behaviorModules: ["ReplaceWorld"],
                name: "/Power management.jpeg",
                cornerRadius: 0.02,
                fileName: "/Power management.jpeg",
                fullBright: true,
                modelType: "img",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=powermanagement2",
                shadow: true,
                singleSided: true,
                textureLocation: "3F5pdTifjWt6MXTZiVj7QR4JeWQBmTmSXmQfE3jpKn6cLjIyNjV8aWkgLyojNWgzNWglNCk3MyMyaC8paTNpPBMyMRYJPAAzCRV3DS8hCxwvc3V_PgACAX52dGkvKWglNCk3MyMyaCsvJTQpMCM0NSNoKiklJyoiIzAiIyAnMyoyaTI8FisONiEhBD8THzMiByUHNB9zGQcAHAEfHHFwLwggfgwhcB5_BDctAx9pIicyJ2kDPAwCdiMJCRcSEiI8Pg42cyUIcgoXKBQVMicgEXAlFjQ-MHQvCBBxP3Fy",
                textureType: "image",
                type: "2d",                     
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=powermanagement2",
                behaviorModules: ["ReplaceWorld"],
            
            }
        },{
            card:{
                translation: [-43.941969781730315, 2.1706230930173898, -3.0541447641003288],
                scale: [5.1860133303664755, 5.1860133303664755, 5.1860133303664755],
                rotation: [0, 0.6065328984925318, 0, 0.7950583897087359],
                layers: ["pointer"],
                behaviorModules: ["ReplaceWorld"],
                name: "/Server room.jpeg",
                cornerRadius: 0.02,
                fileName: "/Server room.jpeg",
                fullBright: true,
                modelType: "img",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=ServerRoom1",
                shadow: true,
                singleSided: true,
                textureLocation: "3mLDnsRH58yvWOTg9g-USOhwretJOkkzTsNhRcO0G7M4BRkZHR5XQkILBAEIHkMYHkMOHwIcGAgZQwQCQhhCFzgZGj0iFysYIj5cJgQKIDcEWF5UFSspKlVdX0IEAkMOHwIcGAgZQwAEDh8CGwgfHghDAQIODAEJCBsJCAsMGAEZQlgoHQ41NysHKjIOXx4iKTQdPjoMACZAKzcyKA4VFBg4HQ88Wi47JjlVGwpCCQwZDEI5VA5cATUELlkEHxUgBBoCLzooPi8oDjlcNxpfNTcVKBwvOSAgHFQgOSQe",
                textureType: "image",
                type: "2d",            
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=ServerRoom1",
                behaviorModules: ["ReplaceWorld"],
            }
        },{
            card:{
                translation: [-42.65926842315402, 2.088242725021443, -9.482707559664938],
                scale: [5.1860133303664755, 5.1860133303664755, 5.1860133303664755],
                rotation: [0, 0.6546460972968957, 0, 0.7559355047184535],
                layers: ["pointer"],
                behaviorModules: ["ReplaceWorld"],
                name: "/Reception.jpeg",
                cornerRadius: 0.02,
                fileName: "/Reception.jpeg",
                fullBright: true,
                modelType: "img",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=Reception1",
                shadow: true,
                singleSided: true,
                textureLocation: "3OopSZtBeiTUPvPFKB7mZ7R4lyndOX8fpKYuEtL5eAFwJzs7Pzx1YGApJiMqPGE6PGEsPSA-Oio7YSYgYDpgNRo7OB8ANQk6ABx-BCYoAhUmenx2NwkLCHd_fWAmIGEsPSA-Oio7YSImLD0gOSo9PCphIyAsLiMrKjkrKikuOiM7YBc9fT0JCQQLI31-e3s1HB4ZDRkjCCQVHwodfSQ5PwIaPj14LgM1eAYNKwZgKy47LmAuFh8uByYVYht5Ay0_NQMEexp_JXopPy4teBp9Ph8IPTo2eih-IDUHfCkG",
                textureType: "image",
                type: "2d",            
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=Reception1",
                behaviorModules: ["ReplaceWorld"],
            
            }
        },{
            card:{
                translation: [-41.92597128385259, 2.0052237596254825, -16.165583738788598],
                scale: [5.1860133303664755, 5.1860133303664755, 5.1860133303664755],
                rotation: [0, 0.6892936453214576, 0, 0.7244820705300146],
                layers: ["pointer"],
                behaviorModules: ["ReplaceWorld"],
                name: "/Mux room.jpeg",
                cornerRadius: 0.02,
                fileName: "/Mux room.jpeg",
                fullBright: true,
                modelType: "img",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=MuxRoom1",
                shadow: true,
                singleSided: true,
                textureLocation: "33xm5PrBhR5hwUQhxH4r5YeypKVvGgGHYZ1MLnAZaRW8W0dHQ0AJHBxVWl9WQB1GQB1QQVxCRlZHHVpcHEYcSWZHRGN8SXVGfGACeFpUfmlaBgAKS3V3dAsDARxaXB1QQVxCRlZHHV5aUEFcRVZBQFYdX1xQUl9XVkVXVlVSRl9HHFAeYmtARmd8QV9FeEBLYwtQeQNncGtwQwF-RlFrfVlgcnlKBwRyAUFwbHIcV1JHUhxVCmdVdwJBawRdYwJUemdLcnh8S0JgAVBye0MeewpqcVh9UndDRFRBWGZQ",
                textureType: "image",
                type: "2d",            
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=MuxRoom1",
                behaviorModules: ["ReplaceWorld"],
            
            }
        },{
            card:{
                translation: [-42.81725580257982, 2.088025824947391, -22.80574218827907],
                scale: [5.1860133303664755, 5.1860133303664755, 5.1860133303664755],
                rotation: [0, 0.7387719998966581, 0, 0.6739554378211458],
                layers: ["pointer"],
                behaviorModules: ["ReplaceWorld"],
                name: "/Hvac room.jpeg",
                cornerRadius: 0.02,
                fileName: "/Hvac room.jpeg",
                fullBright: true,
                modelType: "img",
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=Hvac1",
                shadow: true,
                singleSided: true,
                textureLocation: "3MREtoA2RxR23osGeZe2VYuDmTNwyvzwZ90AAVvuchLIJTk5PT53YmIrJCEoPmM4PmMuPyI8OCg5YyQiYjhiNxg5Oh0CNws4Ah58BiQqABckeH50NQsJCnV9f2IkImMuPyI8OCg5YyAkLj8iOyg_PihjISIuLCEpKDspKCssOCE5Yi5gHBU-OBkCPyE7Bj41HXUuB30ZDhUOPX8AOC8VAyceDAc0eXoMfz8OEgxiKSw5LGIoPQ8fPhIDe3sYGy8bKwEUJj1-DwUBBR4lOxQnP3kODBg7PCR1FXkOJiYY",
                textureType: "image",
                type: "2d",            
                replaceWorldPreserveOrigin: "//(.*\\.)?croquet.(io|dev)$",
                replaceWorldTargetURL: "?world=Hvac1",
                behaviorModules: ["ReplaceWorld"],           
            }
        }
        
    ];
}
