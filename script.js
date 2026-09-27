const trains = {

    //臨時列車情報


    //普通
    //定期列車　鹿児島本線　熊本・八代方面(一部例外あり) 下り

       "6321M":{
            type:"UT3B",
            images:[
                "821_All.webp"
            ],
        timetable:[
        {station:"熊本", time:"0559"},
        {station:"熊本操車場", time:"レ"},
        {station:"西熊本", time:"0603"},
        {station:"川尻信号場", time:"レ"},
        {station:"川尻", time:"0605"},
        {station:"富合", time:"0609"},
        {station:"宇土", time:"0612"},
        {station:"松橋", time:"0616"},
        {station:"小川", time:"0622"},
        {station:"有佐", time:"0626"},
        {station:"千丁", time:"0630"},
        {station:"新八代", time:"0633"},
        {station:"八代", time:"0637"}
       ],
    },

       "321M":{
            type:"VT/NT 共通2B 熊本にて増結",
            images:[
                "815_T_All.webp"
            ],
        timetable:[
        {station:"玉名", time:"0557"},
        {station:"肥後伊倉", time:"0602"},
        {station:"木葉", time:"0606"},
        {station:"田原坂", time:"0610"},
        {station:"植木", time:"0614"},
        {station:"西里", time:"0618"},
        {station:"崇城大学前", time:"0621"},
        {station:"上熊本", time:"0624"},
        {station:"熊本", time:"0628"},
        {station:"増結2B", time:"1429M"},
        {station:"熊本", time:"0639"},
        {station:"平成", time:"0643"},
        {station:"南熊本", time:"0646"},
        {station:"新水前寺", time:"0649"},
        {station:"水前寺", time:"0654"},
        {station:"東海学園前", time:"0657"},
        {station:"竜田口", time:"0702"},
        {station:"武蔵塚", time:"0711"},
        {station:"光の森", time:"0715"},
        {station:"三里木", time:"0718"},
        {station:"原水", time:"0721"},
        {station:"肥後大津", time:"0725"}
       ],
    },

       "6323M":{
            type:"VT/NT 共通4B",
            images:[
                "815_T_All.webp",
                "817_0.webp"
            ],
        timetable:[
        {station:"熊本", time:"0630"},
        {station:"熊本操車場", time:"レ"},
        {station:"西熊本", time:"0634"},
        {station:"川尻信号場", time:"レ"},
        {station:"川尻", time:"0637"},
        {station:"富合", time:"0641"},
        {station:"宇土", time:"0643"},
        {station:"松橋", time:"0648"},
        {station:"小川", time:"0653"},
        {station:"有佐", time:"0658"},
        {station:"千丁", time:"0702"},
        {station:"新八代", time:"0704"},
        {station:"八代", time:"0708"}
       ],
    },

    "323M":{
        type:"調査中",
        images:[
            "hatena.png"
        ],
    timetable:[
        {station:"銀水", time:"547"},
        {station:"大牟田", time:"551"},
        {station:"荒尾", time:"554-555"},
        {station:"南荒尾", time:"558"},
        {station:"長洲", time:"603"},
        {station:"大野下", time:"607"},
        {station:"玉名", time:"611"},
        {station:"肥後伊倉", time:"615"},
        {station:"木葉", time:"620"},
        {station:"田原坂", time:"624"},
        {station:"植木", time:"628"},
        {station:"西里", time:"632"},
        {station:"崇城大学前", time:"635"},
        {station:"上熊本", time:"638"},
        {station:"熊本", time:"642"},
        ],
    },

    "6325M":{
        type:"調査中",
        images:[
            "hatena.png"
        ],
        timetable:[
            {station:"熊本", time:"644"},
            {station:"熊本操車場", time:"レ"},
            {station:"西熊本", time:"648"},
            {station:"川尻信号場", time:"レ"},
            {station:"川尻", time:"651"},
            {station:"富合", time:"655"},
            {station:"宇土", time:"658"},
            {station:"松橋", time:"702"},
            {station:"小川", time:"707"},
            {station:"有佐", time:"712"},
            {station:"千丁", time:"716"},
            {station:"新八代", time:"719"},
            {station:"八代", time:"722"},
        ],
    },

    "6327M":{
        type:"VT/NT共通2B",
        images:[
            "815_T_All.webp"
        ],
        timetable:[
            {station:"熊本", time:"712"},
            {station:"熊本操車場", time:"レ"},
            {station:"西熊本", time:"717"},
            {station:"川尻信号場", time:"レ"},
            {station:"川尻", time:"720"},
            {station:"富合", time:"723"},
            {station:"宇土", time:"726"},
            {station:"松橋", time:"730"},
            {station:"小川", time:"736"},
            {station:"有佐", time:"740"},
            {station:"千丁", time:"744"},
            {station:"新八代", time:"747"},
            {station:"八代", time:"751"},
        ],
    },

    "5321M":{
        type:"VT/NT共通4B 熊本から切り離し2B",
        images:[
            "815_T_All.webp",
            "817_0.webp"
        ],
        timetable:[
            {station:"大牟田", time:"629"},
            {station:"荒尾", time:"633-634"},
            {station:"南荒尾", time:"637"},
            {station:"長洲", time:"641"},
            {station:"大野下", time:"646"},
            {station:"玉名", time:"650"},
            {station:"肥後伊倉", time:"654"},
            {station:"木葉", time:"658"},
            {station:"田原坂", time:"702"},
            {station:"植木", time:"707"},
            {station:"西里", time:"711"},
            {station:"崇城大学前", time:"714"},
            {station:"上熊本", time:"717"},
            {station:"熊本", time:"721-727"},
            {station:"熊本操車場", time:"レ"},
            {station:"西熊本", time:"732"},
            {station:"川尻信号場", time:"レ"},
            {station:"川尻", time:"734"},
            {station:"富合", time:"738"},
            {station:"宇土", time:"741"},
            {station:"松橋", time:"746"},
            {station:"小川", time:"751"},
            {station:"有佐", time:"755"},
        ],
    },

    "6329M":{
        type:"UT3B",
        images:[
            "821_All.webp"
        ],
        timetable:[
            {station:"熊本", time:"742"},
            {station:"熊本操車場", time:"レ"},
            {station:"西熊本", time:"746"},
            {station:"川尻信号場", time:"レ"},
            {station:"川尻", time:"749"},
            {station:"富合", time:"753"},
            {station:"宇土", time:"755"},
            {station:"松橋", time:"800"},
            {station:"小川", time:"805"},
            {station:"有佐", time:"810"},
            {station:"千丁", time:"814"},
            {station:"新八代", time:"816"},
            {station:"八代", time:"820"},
        ],
    },

    "2321M":{
        type:"調査中",
        images:[
            "hatena.png"
        ],
        timetable:[
            {station:"博多", time:"513"},
            {station:"竹下小", time:"レ"},
            {station:"竹下", time:"518"},
            {station:"笹原", time:"521"},
            {station:"南福岡", time:"526"},
            {station:"春日", time:"528"},
            {station:"大野城", time:"531"},
            {station:"水城", time:"533"},
            {station:"大宰府信号場", time:"レ"},
            {station:"都府楼南", time:"536"},
            {station:"二日市", time:"538"},
            {station:"天拝山", time:"541"},
            {station:"原田", time:"545"},
            {station:"けやき台", time:"548"},
            {station:"基山", time:"550"},
            {station:"弥生が丘", time:"553"},
            {station:"田代", time:"556"},
            {station:"鳥栖", time:"558-602"},
            {station:"肥前旭", time:"606"},
            {station:"久留米", time:"609-610"},
            {station:"荒木", time:"614"},
            {station:"西牟田", time:"618"},
            {station:"羽犬塚", time:"622"},
            {station:"筑後船小屋", time:"626"},
            {station:"瀬高", time:"629"},
            {station:"南瀬高", time:"632"},
            {station:"渡瀬", time:"636"},
            {station:"吉野", time:"639"},
            {station:"銀水", time:"643"},
            {station:"大牟田", time:"646"},
        ],
    },

    "5323M":{
        type:"調査中",
        images:[
            "hatena.png"
        ],
        timetable:[
            {station:"大牟田", time:"655"},
            {station:"荒尾", time:"700"},
            {station:"南荒尾", time:"704"},
            {station:"長洲", time:"708"},
            {station:"大野下", time:"713"},
            {station:"玉名", time:"717"},
            {station:"肥後伊倉", time:"721"},
            {station:"木葉", time:"725"},
            {station:"田原坂", time:"729"},
            {station:"植木", time:"733"},
            {station:"西里", time:"737"},
            {station:"崇城大学前", time:"741"},
            {station:"上熊本", time:"743"},
            {station:"熊本", time:"748-801"},
            {station:"熊本操車場", time:"レ"},
            {station:"西熊本", time:"805"},
            {station:"川尻信号場", time:"レ"},
            {station:"川尻", time:"808"},
            {station:"富合", time:"812"},
            {station:"宇土", time:"814"},
            {station:"松橋", time:"819"},
            {station:"小川", time:"824"},
            {station:"有佐", time:"829"},
            {station:"千丁", time:"833"},
            {station:"新八代", time:"836"},
            {station:"八代", time:"839"},
        ]
    },

    "5325M":{
        type:"調査中",
        images:[
            "hatena.png"
        ],
        timetable:[
            {station:"大牟田", time:"720"},
            {station:"荒尾", time:"724-725"},
            {station:"南荒尾", time:"729"},
            {station:"長洲", time:"733"},
            {station:"大野下", time:"737"},
            {station:"玉名", time:"741"},
            {station:"肥後伊倉", time:"746"},
            {station:"木葉", time:"750"},
            {station:"田原坂", time:"754"},
            {station:"植木", time:"758"},
            {station:"西里", time:"802"},
            {station:"崇城大学前", time:"806"},
            {station:"上熊本", time:"809"},
            {station:"熊本", time:"812-827"},
            {station:"熊本操車場", time:"レ"},
            {station:"西熊本", time:"832"},
            {station:"川尻信号場", time:"レ"},
            {station:"川尻", time:"834"},
            {station:"富合", time:"838"},
            {station:"宇土", time:"841"},
            {station:"松橋", time:"845"},
            {station:"小川", time:"850"},
            {station:"有佐", time:"855"},
            {station:"千丁", time:"859"},
            {station:"新八代", time:"901"},
            {station:"八代", time:"905"},
        ]
    },

    "2121M":{
        type:"調査中",
        images:[
            "hatena.png"
        ],
        timetable:[
            {station:"福間", time:"516"},
            {station:"千鳥", time:"519"},
            {station:"古賀", time:"522"},
            {station:"ししぶ", time:"525"},
            {station:"新宮中央", time:"527"},
            {station:"福工大前", time:"530"},
            {station:"九産大前", time:"533"},
            {station:"香椎", time:"536"},
            {station:"千早", time:"539"},
            {station:"箱崎", time:"544"},
            {station:"吉塚", time:"546-547"},
            {station:"博多", time:"550-552"},
            {station:"竹下", time:"556"},
            {station:"笹原", time:"600"},
            {station:"南福岡", time:"606"},
            {station:"春日", time:"609"},
            {station:"大野城", time:"612"},
            {station:"水城", time:"614"},
            {station:"大宰府信号場", time:"レ"},
            {station:"都府楼南", time:"618"},
            {station:"二日市", time:"620"},
            {station:"天拝山", time:"623"},
            {station:"原田", time:"627"},
            {station:"けやき台", time:"630"},
            {station:"基山", time:"633"},
            {station:"弥生が丘", time:"636"},
            {station:"田代", time:"639"},
            {station:"鳥栖", time:"641"},
        ],
    },

    "327M":{
        type:"調査中",
        images:[
            "hatena.png"
        ],
        timetable:[
            {station:"植木", time:"809"},
            {station:"西里", time:"813"},
            {station:"崇城大学前", time:"817"},
            {station:"上熊本", time:"820"},
            {station:"熊本", time:"823"},
            {station:"", time:"↑327M"},
            {station:"熊本ー肥後大津間", time:"1445M"},
        ]
    },

    "325M":{
        type:"調査中",
        images:[
            "hatena.png"
        ],
        timetable:[
            {station:"鳥栖", time:"645"},
            {station:"肥前旭", time:"649"},
            {station:"久留米", time:"653"},
            {station:"荒木", time:"658"},
            {station:"西牟田", time:"701"},
            {station:"羽犬塚", time:"706"},
            {station:"筑後船小屋", time:"710"},
            {station:"瀬高", time:"713"},
            {station:"南瀬高", time:"717"},
            {station:"渡瀬", time:"721"},
            {station:"吉野", time:"724"},
            {station:"銀水", time:"727"},
            {station:"大牟田", time:"731"},
        ]
    },

    "329M":{
        type:"調査中",
        images:[
            "hatena.png"
        ],
        timetable:[
            {station:"長洲", time:"754"},
            {station:"大野下", time:"758"},
            {station:"玉名", time:"803"},
            {station:"肥後伊倉", time:"807"},
            {station:"木葉", time:"811"},
            {station:"田原坂", time:"815"},
            {station:"植木", time:"819"},
            {station:"西里", time:"823"},
            {station:"崇城大学前", time:"827"},
            {station:"上熊本", time:"830"},
            {station:"熊本", time:"833"},
        ]
    },

    "121M":{
        type:"調査中",
        images:[
            "hatena.png"
        ],
        timetable:[
            {station:"小倉", time:"451"},
            {station:"西小倉", time:"452-453"},
            {station:"九州工大前", time:"457"},
            {station:"戸畑", time:"459"},
            {station:"枝光", time:"502"},
            {station:"スペースワールド", time:"504"},
            {station:"八幡", time:"506"},
            {station:"黒崎", time:"510"},
            {station:"陣原", time:"512"},
            {station:"折尾", time:"515-516"},
            {station:"水巻", time:"519"},
            {station:"遠賀川", time:"522"},
            {station:"海老津", time:"527"},
            {station:"教育大前", time:"531"},
            {station:"赤間", time:"534"},
            {station:"東郷", time:"538"},
            {station:"東福間", time:"541"},
            {station:"福間", time:"544"},
            {station:"千鳥", time:"547"},
            {station:"古賀", time:"550"},
            {station:"ししぶ", time:"552"},
            {station:"新宮中央", time:"554"},
            {station:"福工大前", time:"557"},
            {station:"九産大前", time:"600"},
            {station:"香椎", time:"602-603"},
            {station:"千早", time:"605"},
            {station:"箱崎", time:"610"},
            {station:"吉塚", time:"611-612"},
            {station:"博多", time:"615"},
        ]
    },

    "3221M":{
        type:"調査中　快速",
        images:[
            "hatena.png"
        ],
        timetable:[
            {station:"小倉", time:"510"},
            {station:"西小倉", time:"512-513"},
            {station:"九州工大前", time:"レ"},
            {station:"戸畑", time:"517"},
            {station:"枝光", time:"レ"},
            {station:"スペースワールド", time:"レ"},
            {station:"八幡", time:"522"},
            {station:"黒崎", time:"525"},
            {station:"陣原", time:"レ"},
            {station:"折尾", time:"530"},
            {station:"水巻", time:"レ"},
            {station:"遠賀川", time:"レ"},
            {station:"海老津", time:"538"},
            {station:"教育大前", time:"レ"},
            {station:"赤間", time:"544"},
            {station:"東郷", time:"548"},
            {station:"東福間", time:"レ"},
            {station:"福間", time:"554"},
            {station:"千鳥", time:"レ"},
            {station:"古賀", time:"558"},
            {station:"ししぶ", time:"レ"},
            {station:"新宮中央", time:"レ"},
            {station:"福工大前", time:"602"},
            {station:"九産大前", time:"レ"},
            {station:"香椎", time:"607"},
            {station:"千早", time:"610"},
            {station:"箱崎", time:"レ"},
            {station:"吉塚", time:"615"},
            {station:"博多", time:"618"},
        ]
    },

    "1321M":{
        type:"調査中　快速",
        images:[
            "hatena.png"
        ],
        timetable:[
            {station:"博多", time:"620"},
            {station:"竹下小", time:"レ"},
            {station:"竹下", time:"625"},
            {station:"笹原", time:"628"},
            {station:"南福岡", time:"631"},
            {station:"春日", time:"レ"},
            {station:"大野城", time:"635"},
            {station:"水城", time:"レ"},
            {station:"大宰府信号場", time:"レ"},
            {station:"都府楼南", time:"レ"},
            {station:"二日市", time:"640"},
            {station:"天拝山", time:"レ"},
            {station:"原田", time:"649"},
            {station:"けやき台", time:"レ"},
            {station:"基山", time:"653"},
            {station:"弥生が丘", time:"レ"},
            {station:"田代", time:"レ"},
            {station:"鳥栖", time:"658-702"},
            {station:"肥前旭", time:"レ"},
            {station:"久留米", time:"708-709"},
            {station:"荒木", time:"713"},
            {station:"西牟田", time:"レ"},
            {station:"羽犬塚", time:"720"},
            {station:"筑後船小屋", time:"724"},
            {station:"瀬高", time:"727"},
            {station:"南瀬高", time:"レ"},
            {station:"渡瀬", time:"レ"},
            {station:"吉野", time:"レ"},
            {station:"銀水", time:"レ"},
            {station:"大牟田", time:"739"},
            {station:"荒尾", time:"743"},
        ]
    },

    "5327M":{
        type:"調査中",
        images:[
            "hatena.png"
        ],
        timetable:[
            {station:"銀水", time:"752"},
            {station:"大牟田", time:"756"},
            {station:"荒尾", time:"800"},
            {station:"南荒尾", time:"804"},
            {station:"長洲", time:"808"},
            {station:"大野下", time:"813"},
            {station:"玉名", time:"817"},
            {station:"肥後伊倉", time:"821"},
            {station:"木葉", time:"825"},
            {station:"田原坂", time:"829"},
            {station:"植木", time:"833"},
            {station:"西里", time:"837"},
            {station:"崇城大学前", time:"840"},
            {station:"上熊本", time:"843"},
            {station:"熊本", time:"846-848"},
            {station:"熊本操車場", time:"レ"},
            {station:"西熊本", time:"853"},
            {station:"川尻信号場", time:"レ"},
            {station:"川尻", time:"855"},
            {station:"富合", time:"859"},
            {station:"宇土", time:"902"},
            {station:"松橋", time:"906"},
            {station:"小川", time:"911"},
            {station:"有佐", time:"916"},
            {station:"千丁", time:"920"},
            {station:"新八代", time:"923"},
            {station:"八代", time:"926"},
        ]
    },

    "2829M":{
        type:"調査中",
        images:[
            "hatena.png"
        ],
        timetable:[
            {station:"博多", time:"635"},
            {station:"竹下小", time:"レ"},
            {station:"竹下", time:"638"},
            {station:"笹原", time:"641"},
            {station:"南福岡", time:"644"},
            {station:"春日", time:"646"},
            {station:"大野城", time:"649"},
            {station:"水城", time:"651"},
            {station:"大宰府信号場", time:"レ"},
            {station:"都府楼南", time:"654"},
            {station:"二日市", time:"656"},
            {station:"天拝山", time:"659"},
            {station:"原田", time:"702"},
            {station:"けやき台", time:"705"},
            {station:"基山", time:"707"},
            {station:"弥生が丘", time:"710"},
            {station:"田代", time:"713"},
            {station:"鳥栖", time:"716"},
            {station:"新鳥栖", time:"724"},
            {station:"肥前麓", time:"727"},
            {station:"中原", time:"731"},
            {station:"吉野ヶ里公園", time:"735"},
            {station:"神崎", time:"739"},
            {station:"伊賀屋", time:"744"},
            {station:"佐賀", time:"748-749"},
            {station:"鍋島", time:"753"},
            {station:"久保田", time:"756"},
            {station:"牛津", time:"800"},
            {station:"江北", time:"805"},
        ]
    },

    

    //鹿児島本線　玉名・大牟田・博多・小倉方面

    "320M":{
        type:"NT/VT共通4B",
        images:[
            "815_T_All.webp",
            "817_0.webp"
        ],
    timetable:[
        {station:"熊本", time:"0527"},
        {station:"上熊本", time:"0531"},
        {station:"崇城大学前", time:"0533"},
        {station:"西里", time:"0537"},
        {station:"植木", time:"0541"},
        {station:"田原坂", time:"0545"},
        {station:"木葉", time:"0549"},
        {station:"肥後伊倉", time:"0553"},
        {station:"玉名", time:"0557"},
        {station:"大野下", time:"0601"},
        {station:"長洲", time:"0605"},
        {station:"南荒尾", time:"0609"},
        {station:"荒尾", time:"0612-0613"},
        {station:"大牟田", time:"0617"}
        ],
    },

    "358M":{
        type:"UT3B",
        images:[
            "821_All.webp"
        ],
    timetable:[
        {station:"熊本", time:"1558"},
        {station:"上熊本", time:"1602"},
        {station:"崇城大学前", time:"1605"},
        {station:"西里", time:"1608"},
        {station:"植木", time:"1602"},
        {station:"田原坂", time:"1617"},
        {station:"木葉", time:"1620"},
        {station:"肥後伊倉", time:"1624"},
        {station:"玉名", time:"1628"},
        {station:"大野下", time:"1632"},
        {station:"長洲", time:"1636"},
        {station:"南荒尾", time:"1641"},
        {station:"荒尾", time:"1644"},
        {station:"大牟田", time:"1649"},
        {station:"銀水", time:"1653"},
        {station:"吉野", time:"1656"},
        {station:"渡瀬", time:"1659"},
        {station:"南瀬高", time:"1703"},
        {station:"瀬高", time:"1706"},
        {station:"筑後船小屋", time:"1709"},
        {station:"羽犬塚", time:"1713"},
        {station:"西牟田", time:"1717"},
        {station:"荒木", time:"1720"},
        {station:"久留米", time:"1725"},
        {station:"肥前旭", time:"1729"},
        {station:"鳥栖", time:"1733"},
        {station:"", time:"↑358M"},
        {station:"", time:"↓4152M"},
        {station:"鳥栖", time:"1747"},
        {station:"田代", time:"1749"},
        {station:"弥生が丘", time:"1752"},
        {station:"基山", time:"1758"},
        {station:"けやき台", time:"1801"},
        {station:"原田", time:"1804"},
        {station:"天拝山", time:"1808"},
        {station:"二日市", time:"1810"},
        {station:"都府楼南", time:"レ"},
        {station:"大宰府信号場", time:"レ"},
        {station:"水城", time:"レ"},
        {station:"大野城", time:"1815"},
        {station:"春日", time:"レ"},
        {station:"南福岡", time:"1820"},
        {station:"笹原", time:"レ"},
        {station:"竹下", time:"レ"},
        {station:"竹下小", time:"レ"},
        {station:"博多", time:"1829"},
        {station:"吉塚", time:"1832"},
        {station:"吉塚電留", time:"レ"},
        {station:"箱崎", time:"レ"},
        {station:"千早操車場", time:"レ"},
        {station:"(JR貝塚)", time:"未開業"},
        {station:"千早", time:"1837"},
        {station:"香椎", time:"1840"},
        {station:"九産大前", time:"レ"},
        {station:"福工大前", time:"1844"},
        {station:"新宮中央", time:"レ"},
        {station:"ししぶ", time:"レ"},
        {station:"古賀", time:"レ"},
        {station:"千鳥", time:"レ"},
        {station:"福間", time:"1857"},
        {station:"東福間", time:"1901"},
        {station:"東郷", time:"1904"},
        {station:"赤間", time:"1908"},
        {station:"教育大前", time:"1911"},
        {station:"海老津", time:"1916"},
        {station:"遠賀川", time:"1921"},
        {station:"水巻", time:"1924"},
        {station:"折尾", time:"1927"},
        {station:"陣原", time:"1930"},
        {station:"黒崎", time:"1933"},
        {station:"八幡", time:"1937"},
        {station:"スペースワールド", time:"1941"},
        {station:"枝光", time:"1944"},
        {station:"戸畑", time:"1947"},
        {station:"九州工大前", time:"1949"},
        {station:"浜小倉", time:"レ"},
        {station:"西小倉", time:"1953"},
        {station:"小倉", time:"1956"},
        {station:"南小倉", time:"レ"},
        {station:"北九州貨物ターミナル", time:"レ"},
        {station:"門司", time:"2002"},
        {station:"小森江", time:"2005"},
        {station:"門司港", time:"2010"}
        ],

    },

    "4152M":{
        type:"UT+RM+RM 9B",
        images:[
            "821_All.webp",
            "813_RM_Nomal.webp",
            "813_RM_Hage.webp"
        ],
    timetable:[
        {station:"久留米", time:"1728"},
        {station:"肥前旭", time:"1733"},
        {station:"鳥栖", time:"1740"},
        {station:"", time:"821系を増結"},
        {station:"鳥栖", time:"1747"},
        {station:"田代", time:"1749"},
        {station:"弥生が丘", time:"1752"},
        {station:"基山", time:"1758"},
        {station:"けやき台", time:"1801"},
        {station:"原田", time:"1804"},
        {station:"天拝山", time:"1808"},
        {station:"二日市", time:"1810"},
        {station:"都府楼南", time:"レ"},
        {station:"大宰府信号場", time:"レ"},
        {station:"水城", time:"レ"},
        {station:"大野城", time:"1815"},
        {station:"春日", time:"レ"},
        {station:"南福岡", time:"1820"},
        {station:"笹原", time:"レ"},
        {station:"竹下", time:"レ"},
        {station:"竹下小", time:"レ"},
        {station:"博多", time:"1829"},
        {station:"吉塚", time:"1832"},
        {station:"吉塚電留", time:"レ"},
        {station:"箱崎", time:"レ"},
        {station:"千早操車場", time:"レ"},
        {station:"(JR貝塚)", time:"未開業"},
        {station:"千早", time:"1837"},
        {station:"香椎", time:"1840"},
        {station:"九産大前", time:"レ"},
        {station:"福工大前", time:"1844"},
        {station:"新宮中央", time:"レ"},
        {station:"ししぶ", time:"レ"},
        {station:"古賀", time:"レ"},
        {station:"千鳥", time:"レ"},
        {station:"福間", time:"1857"},
        {station:"東福間", time:"1901"},
        {station:"東郷", time:"1904"},
        {station:"赤間", time:"1908"},
        {station:"教育大前", time:"1911"},
        {station:"海老津", time:"1916"},
        {station:"遠賀川", time:"1921"},
        {station:"水巻", time:"1924"},
        {station:"折尾", time:"1927"},
        {station:"陣原", time:"1930"},
        {station:"黒崎", time:"1933"},
        {station:"八幡", time:"1937"},
        {station:"スペースワールド", time:"1941"},
        {station:"枝光", time:"1944"},
        {station:"戸畑", time:"1947"},
        {station:"九州工大前", time:"1949"},
        {station:"浜小倉", time:"レ"},
        {station:"西小倉", time:"1953"},
        {station:"小倉", time:"1956"},
        {station:"南小倉", time:"レ"},
        {station:"北九州貨物ターミナル", time:"レ"},
        {station:"門司", time:"2002"},
        {station:"小森江", time:"2005"},
        {station:"門司港", time:"2010"}
        ],

    },
    //三角線　宇土・住吉・網田方面　三角行

    "521D":{
        type:"キハ200　熊本2B",
        images:[
            "200_All.webp"
        ],
    timetable:[
        {station:"熊本", time:"0617"},
        {station:"熊本操車場", time:"レ"},
        {station:"西熊本", time:"0622"},
        {station:"川尻信号場", time:"レ"},
        {station:"川尻", time:"0626"},
        {station:"富合", time:"0630"},
        {station:"宇土", time:"0634"},
        {station:"緑川", time:"0639"},
        {station:"住吉", time:"0644"},
        {station:"肥後長浜", time:"0630"},
        {station:"網田", time:"0655"},
        {station:"赤瀬", time:"0701"},
        {station:"石打ダム", time:"0704"},
        {station:"波多浦", time:"0708"},
        {station:"三角", time:"0712"}
        ],
    },

    "527D":{
        type:"キハ200 熊本2B",
        images:[
            "200_All.webp"
        ],
        timetable:[
            {station:"熊本", time:"0858"},
            {station:"熊本操車場", time:"レ"},
            {station:"西熊本", time:"0903"},
            {station:"川尻信号場", time:"レ"},
            {station:"川尻", time:"0907"},
            {station:"富合", time:"0911"},
            {station:"宇土", time:"0915"},
            {station:"緑川", time:"0921"},
            {station:"住吉", time:"0930"},
            {station:"肥後長浜", time:"0935"},
            {station:"網田", time:"0940"},
            {station:"赤瀬", time:"0945"},
            {station:"石打ダム", time:"0948"},
            {station:"波多浦", time:"0953"},
            {station:"三角", time:"0956"},
        ],
    },

    "531D":{
        type:"キハ200 熊本2B",
        images:[
            "200_All.webp"
        ],
        timetable:[
            {station:"熊本", time:"1130"},
            {station:"熊本操車場", time:"レ"},
            {station:"西熊本", time:"1135"},
            {station:"川尻信号場", time:"レ"},
            {station:"川尻", time:"1139"},
            {station:"富合", time:"1143"},
            {station:"宇土", time:"1147"},
            {station:"緑川", time:"1153"},
            {station:"住吉", time:"1157"},
            {station:"肥後長浜", time:"1203"},
            {station:"網田", time:"1210"},
            {station:"赤瀬", time:"1215"},
            {station:"石打ダム", time:"1218"},
            {station:"波多浦", time:"1223"},
            {station:"三角", time:"1227"}
        ],
    },
    //三角線　網田・住吉・宇土方面　熊本行

    "524D":{
        type:"キハ200　熊本2B",
        images:[
            "200_All.webp"
        ],
        timetable:[
            {station:"三角", time:"0719"},
            {station:"波多浦", time:"0722"},
            {station:"石打ダム", time:"0727"},
            {station:"赤瀬", time:"0730"},
            {station:"網田", time:"0735"},
            {station:"肥後長浜", time:"0739"},
            {station:"住吉", time:"0747"},
            {station:"緑川", time:"0752"},
            {station:"宇土", time:"0757"},
            {station:"富合", time:"0801"},
            {station:"川尻", time:"0806"},
            {station:"川尻信号場", time:"レ"},
            {station:"西熊本", time:"0810"},
            {station:"熊本操車場", time:"レ"},
            {station:"熊本", time:"0815"}
        ],
    },

    "530D":{
        type:"キハ200 2B",
        images:[
            "200_All.webp"
        ],
        timetable:[
            {station:"三角", time:"1014"},
            {station:"波多浦", time:"1017"},
            {station:"石打ダム", time:"1022"},
            {station:"赤瀬", time:"1025"},
            {station:"網田", time:"1033"},
            {station:"肥後長浜", time:"1037"},
            {station:"住吉", time:"1043"},
            {station:"緑川", time:"1048"},
            {station:"宇土", time:"1054"},
            {station:"富合", time:"1058"},
            {station:"川尻", time:"1102"},
            {station:"川尻信号場", time:"レ"},
            {station:"西熊本", time:"1105"},
            {station:"熊本操車場", time:"レ"},
            {station:"熊本", time:"1110"}
        ],
    },

    "534D":{
        type:"キハ200 熊本2B",
        images:[
            "200_All.webp"
        ],
        timetable:[
            {station:"三角", time:"1238"},
            {station:"波多浦", time:"1241"},
            {station:"石打ダム", time:"1246"},
            {station:"赤瀬", time:"1249"},
            {station:"網田", time:"1254"},
            {station:"肥後長浜", time:"1258/1259"},
            {station:"住吉", time:"1303/1306"},
            {station:"緑川", time:"1311"},
            {station:"宇土", time:"1316"},
            {station:"富合", time:"1320"},
            {station:"川尻", time:"1324/1325"},
            {station:"川尻信号場", time:"レ"},
            {station:"西熊本", time:"1327/1325"},
            {station:"熊本操車場", time:"レ"},
            {station:"熊本", time:"1333"}
        ],
    },

    //豊肥本線　大分方面

    "1429M":{
            type:"VT/NT 共通4B",
            images:[
                "815_T_All.webp",
                "817_0.webp"
            ],
        timetable:[
        {station:"熊本", time:"0639"},
        {station:"平成", time:"0643"},
        {station:"南熊本", time:"0646"},
        {station:"新水前寺", time:"0649"},
        {station:"水前寺", time:"0654"},
        {station:"東海学園前", time:"0657"},
        {station:"竜田口", time:"0702"},
        {station:"武蔵塚", time:"0711"},
        {station:"光の森", time:"0715"},
        {station:"三里木", time:"0718"},
        {station:"原水", time:"0721"},
        {station:"肥後大津", time:"0725"}
       ],
    },

    "431D":{
        type:"キハ200 熊本2B",
        images:[
            "200_All.webp"
        ],
        timetable:[
            {station:"熊本", time:"1348"},
            {station:"平成", time:"1352/1353"},
            {station:"南熊本", time:"1354/1355"},
            {station:"新水前寺", time:"1357/1358"},
            {station:"水前寺", time:"1359/1400"},
            {station:"東海学園前", time:"1403"},
            {station:"竜田口", time:"1405/1406"},
            {station:"武蔵塚", time:"1412"},
            {station:"光の森", time:"1415/1516"},
            {station:"三里木", time:"1418/1419"},
            {station:"原水", time:"1423"},
            {station:"肥後大津", time:"1428/1453"},
            {station:"瀬田", time:"1459"},
            {station:"立野", time:"1507/1511"},
            {station:"赤水", time:"1527/1528"},
            {station:"市ノ川", time:"1531/1532"},
            {station:"内牧", time:"1531/1532"},
            {station:"阿蘇", time:"1541/1552"},
            {station:"いこいの村", time:"1555"},
            {station:"宮地", time:"1558"}
        ],
    },
};

function searchTrain() {

    const no = document.getElementById("trainNo").value.toUpperCase();
    const result = document.getElementById("result");

    if (!trains[no]) {
        result.innerHTML = "<p>列車番号が見つかりません。</p>";
        return;
    }

    const train = trains[no];

    // 画像を並べる
    let imageHtml = "";

    train.images.forEach(function(image) {
        imageHtml += `<img src="${image}" class="trainImage">`;
    });

    // HTMLを作成
    let html = `
        <h2>${no}</h2>

        <div class="detail">

            <div class="imageArea">
                ${imageHtml}
            </div>

            <div class="info">
                <h3>形式</h3>
                <p>${train.type}</p>
            </div>

        </div>

        <table>
    `;

    // 時刻表
    train.timetable.forEach(function(stop) {
        html += `
            <tr>
                <td>${stop.station}</td>
                <td>${stop.time}</td>
            </tr>
        `;
    });

    html += "</table>";

    result.innerHTML = html;

}

document.getElementById("trainNo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchTrain();
    }
});

function findNearbyStation() {

    const gpsResult = document.getElementById("gpsResult");

    if (!navigator.geolocation) {
        gpsResult.innerHTML = "<p>このブラウザはGPSに対応していません。</p>";
        return;
    }

    gpsResult.innerHTML = "<p>現在地を取得しています...</p>";

    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // 最寄り駅を探す
            let nearestStation = null;
            let nearestDistance = Infinity;

            for (const stationName in stations) {

                const station = stations[stationName];

                const distance = calculateDistance(
                    latitude,
                    longitude,
                    station.latitude,
                    station.longitude
                );

                if (distance < nearestDistance) {
                    nearestDistance = distance;
                    nearestStation = stationName;
                }
            }

            if (!nearestStation) {
                gpsResult.innerHTML = "<p>駅が見つかりませんでした。</p>";
                return;
            }

            // 最寄り駅の列車を取得
            const stationData = stations[nearestStation];

            const now = new Date();

            const currentTime =
                now.getHours() * 60 +
                now.getMinutes();

            // 現在時刻より後の列車だけ取得
            const nextTrains = stationData.timetable
                .filter(function(train) {

                    const timeParts = train.time.split(":");

                    const trainTime =
                        Number(timeParts[0]) * 60 +
                        Number(timeParts[1]);

                    return trainTime >= currentTime;

                })
                .slice(0, 2);

            // 表示
            let html = `
                <h3>最寄り駅</h3>
                <p>
                    <strong>${nearestStation}</strong>
                    （約${Math.round(nearestDistance)}m）
                </p>
            `;

            if (nextTrains.length === 0) {

                html += "<p>本日の営業は終了しております。</p>";

            } else {

                html += "<h3>次の列車</h3>";

                nextTrains.forEach(function(train, index) {

                    html += `
                        <div class="nextTrain">
                            <strong>${index + 1}本目</strong><br>
                            列番：${train.trainNo}<br>
                            発車時刻：${train.time}<br>
                            行先：${train.destination}<br>
                            備考: ${train.note}
                        </div>
                    `;

                });

            }

            gpsResult.innerHTML = html;

        },

        function(error) {

            gpsResult.innerHTML =
                "<p>現在地を取得できませんでした。</p>";

        }

    );

}

function calculateDistance(lat1, lon1, lat2, lon2) {

    const R = 6371000;

    const rad = Math.PI / 180;

    const dLat = (lat2 - lat1) * rad;
    const dLon = (lon2 - lon1) * rad;

    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * rad) *
        Math.cos(lat2 * rad) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
    );

    return R * c;
}

const stations = {

    "熊本駅": {

        latitude: 32.7898,
        longitude: 130.6887,

        timetable: [
//鹿児島本線　博多方面
            {
                trainNo: "320M",
                time: "5:27",
                destination: "大牟田",
                note: ""
            },

            {
                trainNo: "324M",
                time: "5:54",
                destination: "大牟田",
                note: ""
            },

            {
                trainNo: "5320M",
                time: "6:04",
                destination: "大牟田",
                note: ""
            },

            {
                trainNo: "326M",
                time: "6:54",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "5322M",
                time: "7:11",
                destination: "長洲",
                note: ""
            },

            {
                trainNo: "5324M",
                time: "7:29",
                destination: "鳥栖",
                note: ""
            },

            {
                trainNo: "328M",
                time: "7:49",
                destination: "植木",
                note: ""
            },

            {
                trainNo: "5326M",
                time: "8:01",
                destination: "長洲",
                note: ""
            },

            {
                trainNo: "試9120",
                time: "8:10",
                destination: "小総車",
                note: "疎開車KK入場試運転"
            },

            {
                trainNo: "5328M",
                time: "8:19",
                destination: "大牟田",
                note: ""
            },

            {
                trainNo: "332M",
                time: "8:30",
                destination: "鳥栖",
                note: ""
            },

            {
                trainNo: "4320M",
                time: "8:45",
                destination: "鳥栖",
                note: "区間快速　大牟田～鳥栖間快速"
            },

            {
                trainNo: "334M",
                time: "9:10",
                destination: "大牟田",
                note: ""
            },

            {
                trainNo: "5330M",
                time: "9:27",
                destination: "玉名",
                note: ""
            },

            {
                trainNo: "5332M",
                time: "9:53",
                destination: "鳥栖",
                note: ""
            },

            {
                trainNo: "5334M",
                time: "10:14",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "5336M",
                time: "10:46",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "5338M",
                time: "11:12",
                destination: "玉名",
                note: ""
            },

            {
                trainNo: "5340M",
                time: "11:44",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "342M",
                time: "12:14",
                destination: "玉名",
                note: ""
            },

            {
                trainNo: "試9320D",
                time: "12:38",
                destination: "博多",
                note: "BE220検測"
            },


            {
                trainNo: "5342M",
                time: "12:46",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "5344M",
                time: "13:17",
                destination: "玉名",
                note: ""
            },

            {
                trainNo: "試9142D",
                time: "13:32",
                destination:"鳥栖",
                note: "DEC741検測"
            },

            {
                trainNo: "5346M",
                time: "13:48",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "5348M",
                time: "14:18",
                destination: "玉名",
                note: ""
            },

            {
                trainNo: "5350M",
                time: "14:46",
                destination: "鳥栖",
                note: ""
            },

            {
                trainNo: "356M",
                time: "15:23",
                destination: "鳥栖",
                note: ""
            },

            {
                trainNo: "358M",
                time: "15:58",
                destination: "門司港",
                note: "区間快速　二日市～福間間快速"
            },
            
            {
                trainNo: "5352M",
                time: "16:21",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "5354M",
                time: "16:48",
                destination: "植木",
                note: ""
            },

            {
                trainNo: "5356M",
                time: "17:07",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "5358M",
                time: "17:34",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "366M",
                time: "18:09",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "5360M",
                time: "18:37",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "370M",
                time: "19:04",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "372M",
                time: "19:26",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "5362M",
                time: "20:07",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "378M",
                time: "20:43",
                destination: "鳥栖",
                note: ""
            },

            {
                trainNo: "380M",
                time: "21:23",
                destination: "玉名",
                note: ""
            },

            {
                trainNo: "5364M",
                time: "21:51",
                destination: "博多",
                note: "鳥栖にて2両増結"
            },

            {
                trainNo: "5366M",
                time: "22:31",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "5368M",
                time: "23:36",
                destination: "大牟田",
                note: "熊本駅を発車する玉名方面の最終列車です。"
            },

//鹿児島本線　八代方面(おれんじ鉄道直通列車は除外)
            {
                trainNo: "6321M",
                time: "5:59",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "6323M",
                time: "6:30",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "6325M",
                time: "6:44",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "6327M",
                time: "7:12",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5321M",
                time: "7:27",
                destination: "有佐",
                note: ""
            },

            {
                trainNo: "6329M",
                time: "7:42",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5323M",
                time: "8:01",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5325M",
                time: "8:27",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5327M",
                time: "8:48",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5329M",
                time: "9:06",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5331M",
                time: "9:39",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5333M",
                time: "10:14",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5335M",
                time: "10:41",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "6331M",
                time: "11:09",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5337M",
                time: "11:40",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "6333M",
                time: "12:14",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5339M",
                time: "12:33",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5341M",
                time: "12:56",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5343M",
                time: "13:29",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5345M",
                time: "13:59",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5347M",
                time: "14:27",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5349M",
                time: "14:54",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5351M",
                time: "15:33",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "6335M",
                time: "15:57",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5353M",
                time: "16:22",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5355M",
                time: "16:47",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5357M",
                time: "17:11",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "5359M",
                time: "17:31",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "6337M",
                time: "17:50",
                destination: "八代",
                note: ""
            },

            {
                trainNo: "6339M",
                time: "18:10",
                destination: "八代",
                note: ""
            },
        ]

    },

    "西熊本駅": {

        latitude: 32.76263888,
        longitude: 130.68305555,

        timetable: [
            //鹿児島本線　博多方面　豊肥本線　水前寺、武蔵塚方面
            {
                trainNo: "6320M",
                time: "5:42",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "5320M",
                time: "6:14",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "6322M",
                time: "6:32",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "6324M",
                time: "6:48",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "5322M",
                time: "7:02",
                destination: "長洲",
                note: ""
            },

            {
                trainNo: "6326M",
                time: "7:13",
                destination: "肥後大津",
                note: ""
            },

            {
                trainNo: "5324M",
                time: "7:21",
                destination: "鳥栖",
                note: ""
            },

            {
                trainNo: "6328M",
                time: "7:34",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "5326M",
                time: "7:47",
                destination: "長洲",
                note: ""
            },

            {
                trainNo: "5328M",
                time: "8:01",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "6330M",
                time: "8:24",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "4320M",
                time: "8:38",
                destination: "鳥栖",
                note: "区間快速　大牟田～鳥栖間快速"
            },

            {
                trainNo: "6322M",
                time: "8:59",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "5330M",
                time: "9:21",
                destination: "玉名",
                note: ""
            },

            {
                trainNo: "5332M",
                time: "9:44",
                destination: "鳥栖",
                note: ""
            },

            {
                trainNo: "5334M",
                time: "10:06",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "5336M",
                time: "10:34",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "5338M",
                time: "11:00",
                destination: "玉名",
                note: ""
            },

            {
                trainNo: "5340M",
                time: "11:31",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "6334M",
                time: "12:02",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "5342M",
                time: "12:40",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "5344M",
                time: "13:10",
                destination: "玉名",
                note: ""
            },

            {
                trainNo: "5346M",
                time: "13:38",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "5348M",
                time: "14:03",
                destination: "玉名",
                note: ""
            },

            {
                trainNo: "5350M",
                time: "14:34",
                destination: "鳥栖",
                note: ""
            },

            {
                trainNo: "6336M",
                time: "15:18",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "6338M",
                time: "15:46",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "5352M",
                time: "16:12",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "5354M",
                time: "16:40",
                destination: "植木",
                note: ""
            },

            {
                trainNo: "5356M",
                time: "17:01",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "5358M",
                time: "17:23",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "6340M",
                time: "17:50",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "6342M",
                time: "18:09",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "5360M",
                time: "18:31",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "6344M",
                time: "18:49",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "6348M",
                time: "19:28",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "6350M",
                time: "19:45",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "5362M",
                time: "20:01",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "6352M",
                time: "20:22",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "6354M",
                time: "20:50",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "6356M",
                time: "21:14",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "5364M",
                time: "21:44",
                destination: "博多",
                note: ""
            },

            {
                trainNo: "5366M",
                time: "22:26",
                destination: "銀水",
                note: ""
            },

            {
                trainNo: "6358M",
                time: "22:59",
                destination: "熊本",
                note: ""
            },

            {
                trainNo: "5368M",
                time: "23:30",
                destination: "大牟田",
                note: "西熊本駅を発車する玉名方面の最終列車です。"
            },
        ]

    },

    "川尻駅": {

        latitude: 32.7420,
        longitude: 130.6820,

        timetable: [

            {
                trainNo: "1234M",
                time: "10:20",
                destination: "八代"
            },

            {
                trainNo: "1236M",
                time: "10:35",
                destination: "八代"
            }

        ]

    }

};

// ==============================
// 運行情報
// ==============================

// normal = 平常運転
// delay = 遅延
// stop = 運転見合わせ

const operationInfo = {
    status: "stop",

    text: "地震の影響により、宇土駅～八代駅間で運転を見合わせています。",

    update: "最終更新：9月2日 17:23"
};


function showOperationInfo() {

    const box = document.getElementById("operationInfo");
    const title = document.getElementById("operationTitle");
    const text = document.getElementById("operationText");
    const update = document.getElementById("operationUpdate");

    // いったん色のクラスを削除
    box.classList.remove("normal", "delay", "stop");


    // 平常運転
    if (operationInfo.status === "normal") {

        box.classList.add("normal");

        title.textContent = "平常運転";

    }


    // 遅延
    else if (operationInfo.status === "delay") {

        box.classList.add("delay");

        title.textContent = "遅延";

    }


    // 運転見合わせ
    else if (operationInfo.status === "stop") {

        box.classList.add("stop");

        title.textContent = "運転見合わせ";

    }


    text.textContent = operationInfo.text;

    update.textContent = operationInfo.update;
}


// ページを開いたときに表示
showOperationInfo();

window.onload = function() {

    document.getElementById("trainNo").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchTrain();
        }
    });

    document.getElementById("password").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            login();
        }
    });

};

function login() {

    const id = document.getElementById("userId").value;
    const pass = document.getElementById("password").value;

    if (users[id] === pass) {

        document.getElementById("login").style.display = "none";
        document.getElementById("main").style.display = "block";

        document.getElementById("trainNo").focus();

    } else {

        alert("IDまたはパスワードが違います。");

    }
}

const users = {
    // 予備　定期的に変更することをおすすめします。
    "admin": "8165",
    "admin": "8146",
    "admin": "4099",
    "admin": "4096",
    "admin": "8174",
    "admin": "3140",
    "admin": "8158",
    "admin": "1485",
    "admin": "7681",
    //設定されたユーザーIDとパスワードをここに追加してください。
    "hikaru": "4099",
    "jr817": "vt520"
};

