/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'knewave, fantasy': '<script src=\"http://use.edgefonts.net/knewave:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'spacesky2',
                            type: 'image',
                            rect: ['0', '0px', '1000px', '1000px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"spacesky2.gif",'0px','0px']
                        },
                        {
                            id: 'spacesky1',
                            type: 'image',
                            rect: ['0px', '0px', '1000px', '1000px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"spacesky1.gif",'0px','0px']
                        },
                        {
                            id: 'robotanimatedsprites_symbol_13',
                            symbolName: 'robotanimatedsprites_symbol_1',
                            type: 'rect',
                            rect: ['1298px', '192px', 'undefined', 'undefined', 'auto', 'auto'],
                            autoOrient: false
                        },
                        {
                            id: 'READING',
                            display: 'none',
                            type: 'group',
                            rect: ['222px', '422px', '555', '156', 'auto', 'auto'],
                            clip: 'rect(0px 566.11279296875px 156px 0px)',
                            c: [
                            {
                                id: 'G',
                                type: 'text',
                                rect: ['492px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​G</p>",
                                align: "left",
                                font: ['knewave, fantasy', [100, "px"], "rgba(41,246,233,0.65)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'N',
                                type: 'text',
                                rect: ['401px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​N</p>",
                                align: "left",
                                font: ['knewave, fantasy', [100, "px"], "rgba(246,144,41,0.65)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'I',
                                type: 'text',
                                rect: ['344px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">I​</p>",
                                align: "left",
                                font: ['knewave, fantasy', [100, "px"], "rgba(144,41,246,0.65)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'D',
                                type: 'text',
                                rect: ['260px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​D</p>",
                                align: "left",
                                font: ['knewave, fantasy', [100, "px"], "rgba(214,246,41,0.65)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'A',
                                type: 'text',
                                rect: ['178px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​A</p>",
                                align: "left",
                                font: ['knewave, fantasy', [100, "px"], "rgba(41,54,246,0.65)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'E',
                                type: 'text',
                                rect: ['93px', '0px', '85px', '82px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​E</p>",
                                align: "left",
                                font: ['knewave, fantasy', [100, "px"], "rgba(246,41,67,0.65)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'R',
                                type: 'text',
                                rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​R<span style=\"color: rgb(12, 251, 5);\">​</span><span style=\"color: rgb(12, 251, 5); font-size: 30px;\">​</span></p>",
                                align: "left",
                                font: ['knewave, fantasy', [100, "px"], "rgba(80,246,42,0.65)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'ITS',
                            type: 'text',
                            rect: ['51px', '65px', '591px', '205px', 'auto', '1026px'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgba(80, 246, 42, 0.65098);\">I</span><span style=\"color: rgba(251, 0, 31, 0.65098);\">T</span><span style=\"color: rgba(41, 54, 246, 0.65098);\">'</span><span style=\"color: rgba(225, 248, 6, 0.65098);\">S</span></p>",
                            align: "left",
                            font: ['knewave, fantasy', [100, "px"], "rgba(80,246,42,0.651)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'OUT',
                            type: 'text',
                            rect: ['269px', '65px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgba(124, 0, 248, 0.65098);\">O</span><span style=\"color: rgba(255, 127, 0, 0.65098);\">U</span><span style=\"color: rgba(0, 244, 236, 0.65098);\">T</span></p>",
                            align: "left",
                            font: ['knewave, fantasy', [100, "px"], "rgba(80,246,42,0.651)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'OF',
                            type: 'text',
                            rect: ['551px', '65px', 'auto', 'auto', '343px', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">O<span style=\"color: rgba(249, 0, 23, 0.65098);\">F</span>​</p>",
                            align: "left",
                            font: ['knewave, fantasy', [100, "px"], "rgba(80,246,42,0.651)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'THIS',
                            type: 'text',
                            rect: ['737px', '65px', 'auto', 'auto', 'auto', '1075px'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgba(0, 30, 245, 0.65098);\">T</span><span style=\"color: rgba(225, 248, 0, 0.65098);\">H</span><span style=\"color: rgba(130, 0, 245, 0.65098);\">I</span><span style=\"color: rgba(252, 126, 0, 0.65098);\">S</span></p>",
                            align: "left",
                            font: ['knewave, fantasy', [100, "px"], "rgba(80,246,42,0.651)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'W',
                            type: 'text',
                            rect: ['242px', '606px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\"><span style=\"color: rgba(0, 235, 251, 0.65098);\">W</span>​</p>",
                            align: "left",
                            font: ['knewave, fantasy', [100, "px"], "rgba(0,211,251,0.65)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.99']]
                        },
                        {
                            id: 'O',
                            type: 'text',
                            rect: ['372px', '606px', 'auto', 'auto', 'auto', '1032px'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\"><span style=\"color: rgba(0, 251, 31, 0.65098);\">O</span>​<span style=\"color: rgba(7, 251, 0, 0.65098);\">​</span></p>",
                            align: "left",
                            font: ['knewave, fantasy', [100, "px"], "rgba(0,211,251,0.651)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'R_World',
                            type: 'text',
                            rect: ['487px', '606px', 'auto', 'auto', 'auto', '1032px'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgba(251, 0, 23, 0.65098);\">R</span></p>",
                            align: "left",
                            font: ['knewave, fantasy', [100, "px"], "rgba(0,211,251,0.651)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'L',
                            type: 'text',
                            rect: ['599px', '606px', 'auto', 'auto', 'auto', '1032px'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgba(0, 7, 251, 0.65098);\">L</span></p>",
                            align: "left",
                            font: ['knewave, fantasy', [100, "px"], "rgba(0,211,251,0.651)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'D_World',
                            type: 'text',
                            rect: ['698px', '606px', 'auto', 'auto', 'auto', '1032px'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgba(219, 251, 0, 0.65098);\">D</span></p>",
                            align: "left",
                            font: ['knewave, fantasy', [100, "px"], "rgba(0,211,251,0.651)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'goread_btn',
                            type: 'rect',
                            rect: ['347px', '800px', '331px', '101px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '1',
                            fill: ["rgba(192,192,192,1)",[170,[['rgba(63,62,64,1.00)',0],['rgba(255,255,255,1.00)',100]]]],
                            stroke: [1,"rgba(255,255,255,1.00)","solid"],
                            c: [
                            {
                                id: 'Lets_Go_Read',
                                type: 'text',
                                rect: ['7px', '-54px', 'auto', 'auto', 'auto', 'auto'],
                                opacity: '1',
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 50px; color: rgb(0, 0, 0);\">Let's go read!</span></p>",
                                align: "left",
                                font: ['knewave, fantasy', [100, "px"], "rgba(0,211,251,0.651)", "400", "none", "normal", "break-word", "nowrap"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'Again',
                            type: 'text',
                            rect: ['802px', '774px', 'auto', 'auto', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 50px; color: rgb(252, 252, 0);\">Again?</span></p>",
                            align: "left",
                            font: ['knewave, fantasy', [100, "px"], "rgba(0,211,251,0.651)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'ufoHum3',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['583', '628', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"ufoHum.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'zoom',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['441', '619', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"zoom.mp3"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1000px', '1000px', 'auto', 'auto'],
                            sizeRange: ['','1000px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(0,0,0,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 27335.125,
                    autoPlay: true,
                    data: [
                        [
                            "eid718",
                            "opacity",
                            20750,
                            500,
                            "linear",
                            "${O}",
                            '1',
                            '0'
                        ],
                        [
                            "eid721",
                            "opacity",
                            20750,
                            500,
                            "linear",
                            "${W}",
                            '1',
                            '0'
                        ],
                        [
                            "eid711",
                            "opacity",
                            20750,
                            500,
                            "linear",
                            "${ITS}",
                            '1',
                            '0'
                        ],
                        [
                            "eid715",
                            "opacity",
                            20750,
                            500,
                            "linear",
                            "${OUT}",
                            '1',
                            '0'
                        ],
                        [
                            "eid513",
                            "left",
                            0,
                            16000,
                            "linear",
                            "${OUT}",
                            '269px',
                            '284px'
                        ],
                        [
                            "eid130",
                            "left",
                            16000,
                            500,
                            "linear",
                            "${OUT}",
                            '284px',
                            '280px'
                        ],
                        [
                            "eid716",
                            "opacity",
                            20750,
                            500,
                            "linear",
                            "${D_World}",
                            '1',
                            '0'
                        ],
                        [
                            "eid507",
                            "bottom",
                            0,
                            0,
                            "linear",
                            "${W}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid746",
                            "left",
                            0,
                            0,
                            "linear",
                            "${goread_btn}",
                            '347px',
                            '347px'
                        ],
                        [
                            "eid510",
                            "right",
                            0,
                            0,
                            "linear",
                            "${THIS}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid740",
                            "bottom",
                            0,
                            18000,
                            "linear",
                            "${THIS}",
                            '1075px',
                            'auto'
                        ],
                        [
                            "eid505",
                            "right",
                            0,
                            0,
                            "linear",
                            "${W}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid713",
                            "opacity",
                            20750,
                            500,
                            "linear",
                            "${R_World}",
                            '1',
                            '0'
                        ],
                        [
                            "eid744",
                            "bottom",
                            0,
                            19500,
                            "linear",
                            "${D_World}",
                            '1032px',
                            'auto'
                        ],
                        [
                            "eid162",
                            "top",
                            18500,
                            500,
                            "easeInOutElastic",
                            "${R_World}",
                            '-188px',
                            '606px'
                        ],
                        [
                            "eid504",
                            "left",
                            0,
                            18000,
                            "linear",
                            "${W}",
                            '240px',
                            '242px'
                        ],
                        [
                            "eid158",
                            "left",
                            18000,
                            500,
                            "easeInOutElastic",
                            "${W}",
                            '242px',
                            '242px'
                        ],
                        [
                            "eid590",
                            "right",
                            20000,
                            0,
                            "easeInOutElastic",
                            "${R_World}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid741",
                            "bottom",
                            0,
                            18750,
                            "linear",
                            "${O}",
                            '1032px',
                            'auto'
                        ],
                        [
                            "eid712",
                            "opacity",
                            20750,
                            500,
                            "linear",
                            "${Lets_Go_Read}",
                            '1',
                            '0'
                        ],
                        [
                            "eid511",
                            "top",
                            0,
                            17000,
                            "linear",
                            "${OF}",
                            '-232px',
                            '-231px'
                        ],
                        [
                            "eid138",
                            "top",
                            17000,
                            500,
                            "linear",
                            "${OF}",
                            '-231px',
                            '65px'
                        ],
                        [
                            "eid506",
                            "top",
                            0,
                            18000,
                            "linear",
                            "${W}",
                            '-190px',
                            '-188px'
                        ],
                        [
                            "eid159",
                            "top",
                            18000,
                            500,
                            "easeInOutElastic",
                            "${W}",
                            '-188px',
                            '606px'
                        ],
                        [
                            "eid463",
                            "scaleX",
                            20000,
                            50,
                            "linear",
                            "${D_World}",
                            '1',
                            '-0.92208'
                        ],
                        [
                            "eid468",
                            "scaleX",
                            20050,
                            72,
                            "linear",
                            "${D_World}",
                            '-0.92208',
                            '0.92208'
                        ],
                        [
                            "eid473",
                            "scaleX",
                            20122,
                            65,
                            "linear",
                            "${D_World}",
                            '0.92208',
                            '-0.92209'
                        ],
                        [
                            "eid478",
                            "scaleX",
                            20187,
                            63,
                            "linear",
                            "${D_World}",
                            '-0.92209',
                            '0.92207'
                        ],
                        [
                            "eid483",
                            "scaleX",
                            20250,
                            103,
                            "linear",
                            "${D_World}",
                            '0.92207',
                            '-0.9221'
                        ],
                        [
                            "eid488",
                            "scaleX",
                            20353,
                            111,
                            "linear",
                            "${D_World}",
                            '-0.9221',
                            '0.92208'
                        ],
                        [
                            "eid493",
                            "scaleX",
                            20464,
                            98,
                            "linear",
                            "${D_World}",
                            '0.92208',
                            '-0.92209'
                        ],
                        [
                            "eid498",
                            "scaleX",
                            20562,
                            146,
                            "linear",
                            "${D_World}",
                            '-0.92209',
                            '0.92207'
                        ],
                        [
                            "eid514",
                            "right",
                            0,
                            0,
                            "linear",
                            "${OUT}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid509",
                            "left",
                            0,
                            17500,
                            "linear",
                            "${THIS}",
                            '737px',
                            '745px'
                        ],
                        [
                            "eid139",
                            "left",
                            17500,
                            500,
                            "linear",
                            "${THIS}",
                            '745px',
                            '746px'
                        ],
                        [
                            "eid780",
                            "opacity",
                            0,
                            6000,
                            "linear",
                            "${spacesky2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid779",
                            "opacity",
                            6000,
                            6000,
                            "linear",
                            "${spacesky2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid778",
                            "opacity",
                            12000,
                            6000,
                            "linear",
                            "${spacesky2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid777",
                            "opacity",
                            18000,
                            4000,
                            "linear",
                            "${spacesky2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid776",
                            "opacity",
                            22000,
                            2000,
                            "linear",
                            "${spacesky2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid508",
                            "scaleX",
                            0,
                            20000,
                            "linear",
                            "${W}",
                            '0.99',
                            '1'
                        ],
                        [
                            "eid462",
                            "scaleX",
                            20000,
                            50,
                            "linear",
                            "${W}",
                            '1',
                            '-0.92208'
                        ],
                        [
                            "eid467",
                            "scaleX",
                            20050,
                            72,
                            "linear",
                            "${W}",
                            '-0.92208',
                            '0.92208'
                        ],
                        [
                            "eid472",
                            "scaleX",
                            20122,
                            65,
                            "linear",
                            "${W}",
                            '0.92208',
                            '-0.92209'
                        ],
                        [
                            "eid477",
                            "scaleX",
                            20187,
                            63,
                            "linear",
                            "${W}",
                            '-0.92209',
                            '0.92207'
                        ],
                        [
                            "eid482",
                            "scaleX",
                            20250,
                            103,
                            "linear",
                            "${W}",
                            '0.92207',
                            '-0.9221'
                        ],
                        [
                            "eid487",
                            "scaleX",
                            20353,
                            111,
                            "linear",
                            "${W}",
                            '-0.9221',
                            '0.92208'
                        ],
                        [
                            "eid492",
                            "scaleX",
                            20464,
                            98,
                            "linear",
                            "${W}",
                            '0.92208',
                            '-0.92209'
                        ],
                        [
                            "eid497",
                            "scaleX",
                            20562,
                            146,
                            "linear",
                            "${W}",
                            '-0.92209',
                            '0.92207'
                        ],
                        [
                            "eid717",
                            "opacity",
                            20750,
                            500,
                            "linear",
                            "${OF}",
                            '1',
                            '0'
                        ],
                        [
                            "eid739",
                            "bottom",
                            0,
                            16500,
                            "linear",
                            "${ITS}",
                            '1026px',
                            'auto'
                        ],
                        [
                            "eid90",
                            "left",
                            0,
                            0,
                            "linear",
                            "${READING}",
                            '222px',
                            '222px'
                        ],
                        [
                            "eid114",
                            "display",
                            0,
                            0,
                            "linear",
                            "${READING}",
                            'none',
                            'none'
                        ],
                        [
                            "eid115",
                            "display",
                            10250,
                            0,
                            "linear",
                            "${READING}",
                            'none',
                            'block'
                        ],
                        [
                            "eid749",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${spacesky1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid751",
                            "opacity",
                            2000,
                            4000,
                            "linear",
                            "${spacesky1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid754",
                            "opacity",
                            6000,
                            6000,
                            "linear",
                            "${spacesky1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid755",
                            "opacity",
                            12000,
                            6000,
                            "linear",
                            "${spacesky1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid756",
                            "opacity",
                            18000,
                            6000,
                            "linear",
                            "${spacesky1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid516",
                            "bottom",
                            0,
                            0,
                            "linear",
                            "${OUT}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid714",
                            "opacity",
                            20750,
                            500,
                            "linear",
                            "${THIS}",
                            '1',
                            '0'
                        ],
                        [
                            "eid460",
                            "scaleX",
                            20000,
                            50,
                            "linear",
                            "${L}",
                            '1',
                            '-0.92208'
                        ],
                        [
                            "eid465",
                            "scaleX",
                            20050,
                            72,
                            "linear",
                            "${L}",
                            '-0.92208',
                            '0.92208'
                        ],
                        [
                            "eid470",
                            "scaleX",
                            20122,
                            65,
                            "linear",
                            "${L}",
                            '0.92208',
                            '-0.92209'
                        ],
                        [
                            "eid475",
                            "scaleX",
                            20187,
                            63,
                            "linear",
                            "${L}",
                            '-0.92209',
                            '0.92207'
                        ],
                        [
                            "eid480",
                            "scaleX",
                            20250,
                            103,
                            "linear",
                            "${L}",
                            '0.92207',
                            '-0.9221'
                        ],
                        [
                            "eid485",
                            "scaleX",
                            20353,
                            111,
                            "linear",
                            "${L}",
                            '-0.9221',
                            '0.92208'
                        ],
                        [
                            "eid490",
                            "scaleX",
                            20464,
                            98,
                            "linear",
                            "${L}",
                            '0.92208',
                            '-0.92209'
                        ],
                        [
                            "eid495",
                            "scaleX",
                            20562,
                            146,
                            "linear",
                            "${L}",
                            '-0.92209',
                            '0.92207'
                        ],
                        [
                            "eid461",
                            "scaleX",
                            20000,
                            50,
                            "linear",
                            "${R_World}",
                            '1',
                            '-0.92208'
                        ],
                        [
                            "eid466",
                            "scaleX",
                            20050,
                            72,
                            "linear",
                            "${R_World}",
                            '-0.92208',
                            '0.92208'
                        ],
                        [
                            "eid471",
                            "scaleX",
                            20122,
                            65,
                            "linear",
                            "${R_World}",
                            '0.92208',
                            '-0.92209'
                        ],
                        [
                            "eid476",
                            "scaleX",
                            20187,
                            63,
                            "linear",
                            "${R_World}",
                            '-0.92209',
                            '0.92207'
                        ],
                        [
                            "eid481",
                            "scaleX",
                            20250,
                            103,
                            "linear",
                            "${R_World}",
                            '0.92207',
                            '-0.9221'
                        ],
                        [
                            "eid486",
                            "scaleX",
                            20353,
                            111,
                            "linear",
                            "${R_World}",
                            '-0.9221',
                            '0.92208'
                        ],
                        [
                            "eid491",
                            "scaleX",
                            20464,
                            98,
                            "linear",
                            "${R_World}",
                            '0.92208',
                            '-0.92209'
                        ],
                        [
                            "eid496",
                            "scaleX",
                            20562,
                            146,
                            "linear",
                            "${R_World}",
                            '-0.92209',
                            '0.92207'
                        ],
                        [
                            "eid164",
                            "top",
                            19000,
                            500,
                            "easeInOutElastic",
                            "${D_World}",
                            '-188px',
                            '606px'
                        ],
                        [
                            "eid742",
                            "bottom",
                            0,
                            19000,
                            "linear",
                            "${R_World}",
                            '1032px',
                            'auto'
                        ],
                        [
                            "eid160",
                            "top",
                            18250,
                            500,
                            "easeInOutElastic",
                            "${O}",
                            '-188px',
                            '606px'
                        ],
                        [
                            "eid512",
                            "bottom",
                            0,
                            0,
                            "linear",
                            "${OF}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid137",
                            "left",
                            17000,
                            500,
                            "linear",
                            "${OF}",
                            '551px',
                            '550px'
                        ],
                        [
                            "eid127",
                            "top",
                            16000,
                            500,
                            "linear",
                            "${ITS}",
                            '-231px',
                            '65px'
                        ],
                        [
                            "eid743",
                            "bottom",
                            0,
                            7294,
                            "linear",
                            "${L}",
                            '1032px',
                            'auto'
                        ],
                        [
                            "eid806",
                            "bottom",
                            19250,
                            0,
                            "linear",
                            "${L}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid140",
                            "top",
                            17500,
                            500,
                            "linear",
                            "${THIS}",
                            '-231px',
                            '65px'
                        ],
                        [
                            "eid112",
                            "clip",
                            7555,
                            245,
                            "linear",
                            "${READING}",
                            [0,-16.11083984375,156,0],
                            [0,566.11279296875,156,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid113",
                            "clip",
                            10300,
                            380,
                            "linear",
                            "${READING}",
                            [0,566.11279296875,156,0],
                            [0,-2.77685546875,156,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid803",
                            "top",
                            0,
                            7294,
                            "linear",
                            "${goread_btn}",
                            '800px',
                            '797px'
                        ],
                        [
                            "eid720",
                            "opacity",
                            20750,
                            500,
                            "linear",
                            "${L}",
                            '1',
                            '0'
                        ],
                        [
                            "eid804",
                            "top",
                            0,
                            7294,
                            "linear",
                            "${L}",
                            '-188px',
                            '-191px'
                        ],
                        [
                            "eid805",
                            "top",
                            7294,
                            11456,
                            "linear",
                            "${L}",
                            '-191px',
                            '-188px'
                        ],
                        [
                            "eid163",
                            "top",
                            18750,
                            500,
                            "easeInOutElastic",
                            "${L}",
                            '-188px',
                            '606px'
                        ],
                        [
                            "eid515",
                            "top",
                            0,
                            16500,
                            "linear",
                            "${OUT}",
                            '-235px',
                            '-231px'
                        ],
                        [
                            "eid136",
                            "top",
                            16500,
                            500,
                            "linear",
                            "${OUT}",
                            '-231px',
                            '65px'
                        ],
                        [
                            "eid719",
                            "opacity",
                            20750,
                            500,
                            "linear",
                            "${goread_btn}",
                            '1',
                            '0'
                        ],
                        [
                            "eid91",
                            "top",
                            0,
                            0,
                            "linear",
                            "${READING}",
                            '422px',
                            '393px'
                        ],
                        [
                            "eid459",
                            "scaleX",
                            20000,
                            50,
                            "linear",
                            "${O}",
                            '1',
                            '-0.92208'
                        ],
                        [
                            "eid464",
                            "scaleX",
                            20050,
                            72,
                            "linear",
                            "${O}",
                            '-0.92208',
                            '0.92208'
                        ],
                        [
                            "eid469",
                            "scaleX",
                            20122,
                            65,
                            "linear",
                            "${O}",
                            '0.92208',
                            '-0.92209'
                        ],
                        [
                            "eid474",
                            "scaleX",
                            20187,
                            63,
                            "linear",
                            "${O}",
                            '-0.92209',
                            '0.92207'
                        ],
                        [
                            "eid479",
                            "scaleX",
                            20250,
                            103,
                            "linear",
                            "${O}",
                            '0.92207',
                            '-0.9221'
                        ],
                        [
                            "eid484",
                            "scaleX",
                            20353,
                            111,
                            "linear",
                            "${O}",
                            '-0.9221',
                            '0.92208'
                        ],
                        [
                            "eid489",
                            "scaleX",
                            20464,
                            98,
                            "linear",
                            "${O}",
                            '0.92208',
                            '-0.92209'
                        ],
                        [
                            "eid494",
                            "scaleX",
                            20562,
                            146,
                            "linear",
                            "${O}",
                            '-0.92209',
                            '0.92207'
                        ],
                        [
                            "eid109",
                            "location",
                            0,
                            7000,
                            "linear",
                            "${robotanimatedsprites_symbol_13}",
                            [[1547.78, 422, 0, 0, 0, 0,0],[862.64, 515.67, -315.25, 3.55, -1181.85, 13.3,693.38],[504.08, 416.3, -380.06, 18.78, -330.36, 16.32,1067.96],[113.32, 524.22, -969.4, 0, -349.01, 0,1475.22],[-470, 422, 0, 0, 0, 0,2070.24]]
                        ],
                        [
                            "eid110",
                            "location",
                            7200,
                            800,
                            "linear",
                            "${robotanimatedsprites_symbol_13}",
                            [[-436.44, 422.02, 0, 0, 0, 0,0],[1547.78, 422, 0, 0, 0, 0,1984.22]]
                        ],
                        [
                            "eid111",
                            "location",
                            10000,
                            1000,
                            "linear",
                            "${robotanimatedsprites_symbol_13}",
                            [[1561.78, 421.98, 0, 0, 0, 0,0],[-436.44, 422.02, 0, 0, 0, 0,1998.22]]
                        ],
                        [
                            "eid119",
                            "location",
                            11000,
                            0,
                            "linear",
                            "${robotanimatedsprites_symbol_13}",
                            [[-436.44, 422.02, 0, 0, 0, 0,0],[-436.44, 422.02, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid120",
                            "location",
                            11087,
                            4913,
                            "linear",
                            "${robotanimatedsprites_symbol_13}",
                            [[545.89, -305.01, 0, 0, 0, 0,0],[555.78, 453.6, 0, 0, 0, 0,758.67]]
                        ],
                        [
                            "eid172",
                            "location",
                            20000,
                            122,
                            "linear",
                            "${robotanimatedsprites_symbol_13}",
                            [[555.78, 519.32, 0, 0, 0, 0,0],[1304.57, 519.32, 0, 0, 0, 0,748.79]]
                        ],
                            [ "eid13", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid802", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${ufoHum3}', [0] ] ],
                            [ "eid14", "trigger", 600, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid15", "trigger", 1200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid16", "trigger", 1800, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid17", "trigger", 2400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid18", "trigger", 3000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid19", "trigger", 3600, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid20", "trigger", 4200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid21", "trigger", 4800, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid22", "trigger", 5400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid23", "trigger", 6000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid24", "trigger", 6600, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid25", "trigger", 7200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid808", "trigger", 7294, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${zoom}', [] ] ],
                            [ "eid26", "trigger", 7800, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid29", "trigger", 8400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid30", "trigger", 9000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid31", "trigger", 9600, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid809", "trigger", 10149, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${zoom}', [] ] ],
                            [ "eid33", "trigger", 10200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid34", "trigger", 10800, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid35", "trigger", 11400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid36", "trigger", 12000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid810", "trigger", 12216, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${ufoHum3}', [] ] ],
                            [ "eid37", "trigger", 12600, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid38", "trigger", 13200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid39", "trigger", 13800, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid40", "trigger", 14400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid73", "trigger", 15000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid812", "trigger", 15500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${ufoHum3}', [] ] ],
                            [ "eid74", "trigger", 15600, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid817", "trigger", 16000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${ufoHum3}', [17.5] ] ],
                            [ "eid75", "trigger", 16200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid76", "trigger", 16800, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid77", "trigger", 17400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid78", "trigger", 18000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid79", "trigger", 18600, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid80", "trigger", 19200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid819", "trigger", 19500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${ufoHum3}', [] ] ],
                            [ "eid81", "trigger", 19800, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid814", "trigger", 20000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${zoom}', [] ] ],
                            [ "eid121", "trigger", 20400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid122", "trigger", 21000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid123", "trigger", 21600, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid124", "trigger", 22200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid125", "trigger", 22800, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid126", "trigger", 23400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid167", "trigger", 24000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid168", "trigger", 24600, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid169", "trigger", 25200, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid170", "trigger", 25800, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ],
                            [ "eid171", "trigger", 26400, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${robotanimatedsprites_symbol_13}', [] ] ]
                    ]
                }
            },
            "robotanimatedsprites_symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1000px', '1000px', 'auto', 'auto'],
                            id: 'robotanimatedsprites',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/robotanimatedsprites.png', '0px', '0px', '1000px', '1000px', 'no-repeat']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '500px', '460px']
                        }
                    }
                },
                timeline: {
                    duration: 600,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "width",
                            0,
                            0,
                            "linear",
                            "${robotanimatedsprites}",
                            '0px',
                            '500px'
                        ],
                        [
                            "eid1",
                            "height",
                            0,
                            0,
                            "linear",
                            "${robotanimatedsprites}",
                            '0px',
                            '460px'
                        ],
                        [
                            "eid3",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${robotanimatedsprites}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid4",
                            "background-position",
                            200,
                            0,
                            "linear",
                            "${robotanimatedsprites}",
                            [0,0],
                            [-500,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid5",
                            "background-position",
                            400,
                            0,
                            "linear",
                            "${robotanimatedsprites}",
                            [-500,0],
                            [0,-460],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid6",
                            "background-position",
                            600,
                            0,
                            "linear",
                            "${robotanimatedsprites}",
                            [0,-460],
                            [-500,-460],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("reader_robot_edgeActions.js");
})("EDGE-972590150");
