/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

    MAX_PUSH_ONE_MINUTE : 5,
    SLEEP_TIME : 65000,
    
    SWITCH : {
        weather : true,
        holidaytts : true,
        birthdayMessage : true,
        courseSchedule : true,
    },

    IS_SHOW_COLOR : true,
    LITERARY_PREFERENCE: '',

    USERS : [{
        name : '昔一西',
        id : 'okZMZ6qePLmRdNps4vMuqKrE4lAU',
        useTemplateId : 'xo28CXSldg_UpEKziHGKzI-ZNOsxUDUV1FlRzKoMZnw',

        province : '浙江',
        city : '金华',

        horoscopeDate : '01-16',

        openUrl : 'https://chris7mas.github.io/',

        festivals:[
            {
                type : '生日', name : '余老师', year : '1998', date : '01-16',
            },
            {
                type : '节日', name : '暂定日程1', year : '1900', date : '09-02',
            }
        ],

        customizedDateList : [
            { keyword : 'love_day', date : '2021-11-01'}
        ],

        courseSchedule : {
            benchmark:{
                date: '2023-09-02',
                isOdd : false
            },

            courses:{
                //单周课表
                odd : [
                    [
                        '3-4；马克思主义原理；博雅B502',
                    ],
                    [
                        '1-2；马克思主义原理；博雅B502'
                    ],
                    [
                        //5-8周
                        //'3-4；形策；博闻B322'
                    ],
                    [
                        //2-16周
                        //'5-6；马原；博雅B502',
                        //'7-8；马原：博雅B502'
                    ],
                    [],

                    [//周六
                    ],
                    []

                ]
            }
        }

    },
            {
        name : 'Menth.Pan',
        id : 'okZMZ6pv_GPQ4MjgC6qXafqR-cwg',
        useTemplateId : 'xo28CXSldg_UpEKziHGKzI-ZNOsxUDUV1FlRzKoMZnw',

        province : '浙江',
        city : '金华',

        horoscopeDate : '01-16',

        openUrl : 'https://chris7mas.github.io/',

        festivals:[
            {
                type : '生日', name : '余老师', year : '1998', date : '01-16',
            },
            {
                type : '节日', name : '暂定日程1', year : '1900', date : '09-02',
            }
        ],

        customizedDateList : [
            { keyword : 'love_day', date : '2021-11-01'}
        ],

        courseSchedule : {
            benchmark:{
                date: '2023-09-02',
                isOdd : false
            },

            courses:{
                //单周课表
                odd : [
                    [
                        '3-4；马克思主义原理；博雅B502',
                    ],
                    [
                        '1-2；马克思主义原理；博雅B502'
                    ],
                    [
                        //5-8周
                        //'3-4；形策；博闻B322'
                    ],
                    [
                        //2-16周
                        //'5-6；马原；博雅B502',
                        //'7-8；马原：博雅B502'
                    ],
                    [],

                    [//周六
                    ],
                    []

                ]
            }
        }

    }],

    CALLBACK_TEMPLATE_ID: 'zIaqFtqzbOJgX0lXkIVNcZbosh84sJ6S6M92KYFyQXM',

    CALLBACK_USERS: [
      {
        name: 'Menth.Pan',
        id: 'okZMZ6pv_GPQ4MjgC6qXafqR-cwg',
      }
    ],


}

module.exports = USER_CONFIG
