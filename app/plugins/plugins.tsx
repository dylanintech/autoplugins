import Card from './card';


export default function Plugins() {
    const data = 
    [
        {
            name: 'Twitter',
            description: 'AutoGPT is capable of retrieving Twitter posts and other related content by accessing the Twitter platform via the v1.1 API using Tweepy.',
            firstParty: true,
            link: 'https://github.com/Significant-Gravitas/Auto-GPT-Plugins/tree/master/src/autogpt_plugins/twitter',
            contributors: 
            [
                {
                    username: 'https://github.com/desojo',
                    pfp: 'https://avatars.githubusercontent.com/u/17620345?v=4'
                }, 
                {
                    username:'https://github.com/BillSchumacher', 
                    pfp:'https://avatars.githubusercontent.com/u/34168009?v=4'
                },
                {
                    username:'https://github.com/hdkiller', 
                    pfp: 'https://avatars.githubusercontent.com/u/10578603?v=4'
                },
                {
                    username:'https://github.com/collijk', 
                    pfp: 'https://avatars.githubusercontent.com/u/6313865?v=4'
                },
                {
                    username:'https://github.com/ntindle',
                    pfp: 'https://avatars.githubusercontent.com/u/8845353?v=4'
                }
            ],
        },
        {
            name: 'Email',
            description: 'Revolutionize email management with the Auto-GPT Email Plugin, leveraging AI to automate drafting and intelligent replies.',
            firstParty: true,
            link: 'https://github.com/Significant-Gravitas/Auto-GPT-Plugins/tree/master/src/autogpt_plugins/email',
            contributors: 
            [
                {
                    username:'https://github.com/ntindle',
                    pfp: 'https://avatars.githubusercontent.com/u/8845353?v=4'
                },
                {
                    username: 'https://github.com/riensen',
                    pfp: 'https://avatars.githubusercontent.com/u/3340218?v=4'
                }
            ]
        },
        {
            name: 'SceneX',
            description: 'Explore image storytelling beyond pixels with the Auto-GPT SceneX Plugin.',
            firstParty: true,
            link: 'https://github.com/Significant-Gravitas/Auto-GPT-Plugins/tree/master/src/autogpt_plugins/scenex',
            contributors: 
            [
                {
                    username:'https://github.com/ntindle',
                    pfp: 'https://avatars.githubusercontent.com/u/8845353?v=4'
                },
                {
                    username: 'https://github.com/hanxiao',
                    pfp: 'https://avatars.githubusercontent.com/u/2041322?v=4',
                },
                {
                    username: 'https://github.com/delgermurun',
                    pfp: 'https://avatars.githubusercontent.com/u/492616?v=4'
                }
            ]
        },
        {
            name: 'Bing Search',
            description: 'This search plugin integrates Bing search engines into Auto-GPT.',
            firstParty: true,
            link: 'https://github.com/Significant-Gravitas/Auto-GPT-Plugins/tree/master/src/autogpt_plugins/bing_search',
            contributors: 
            [
                {
                    username:'https://github.com/ntindle',
                    pfp: 'https://avatars.githubusercontent.com/u/8845353?v=4'
                },
                {
                    username: 'https://github.com/ForestLinSen',
                    pfp: 'https://avatars.githubusercontent.com/u/41566276?v=4'
                }
            ]
        },
        {
            name: 'News Search',
            description: 'This search plugin integrates News Articles searches, using the NewsAPI aggregator into Auto-GPT.',
            firstParty: true,
            link: 'https://github.com/Significant-Gravitas/Auto-GPT-Plugins/tree/master/src/autogpt_plugins/news_search',
            contributors: 
            [
                {
                    username:'https://github.com/ntindle',
                    pfp: 'https://avatars.githubusercontent.com/u/8845353?v=4'
                },
                {
                    username: 'https://github.com/PalAditya',
                    pfp: 'https://avatars.githubusercontent.com/u/25523604?v=4'
                }
            ]
        },
        {
            name: 'Wikipedia Search',
            description: 'This allows AutoGPT to use Wikipedia directly.',
            firstParty: true,
            link: 'https://github.com/Significant-Gravitas/Auto-GPT-Plugins/tree/master/src/autogpt_plugins/wikipedia_search',
            contributors: 
            [
                {
                    username:'https://github.com/ntindle',
                    pfp: 'https://avatars.githubusercontent.com/u/8845353?v=4'
                },
                {
                    username: 'https://github.com/pierluigi-failla',
                    pfp: 'https://avatars.githubusercontent.com/u/3326829?v=4'
                }
            ]
        },
        {
            name: 'API tools',
            description: '	This allows AutoGPT to make API calls of various kinds.',
            firstParty: true,
            link: 'https://github.com/Significant-Gravitas/Auto-GPT-Plugins/tree/master/src/autogpt_plugins/api_tools',
            contributors: 
            [
                {
                    username: 'https://github.com/sidewaysthought',
                    pfp: 'https://avatars.githubusercontent.com/u/92705102?v=4'
                }
            ]
        },
        {
            name: 'Random values',
            description: 'Enable AutoGPT to generate various random numbers and strings.',
            firstParty: true,
            link: 'https://github.com/Significant-Gravitas/Auto-GPT-Plugins/tree/master/src/autogpt_plugins/random_values',
            contributors: [
                {
                    username: 'https://github.com/h4ck3rk3y',
                    pfp: 'https://avatars.githubusercontent.com/u/6670312?v=4'
                },
                {
                    username:'https://github.com/ntindle',
                    pfp: 'https://avatars.githubusercontent.com/u/8845353?v=4'
                },
                {
                    username: 'https://github.com/sidewaysthought',
                    pfp: 'https://avatars.githubusercontent.com/u/92705102?v=4'
                }
            ]
        },
        {
            name: 'System Information',
            description: 'This plugin adds an extra line to the prompt, serving as a hint for the AI to use shell commands likely supported by the current system.',
            firstParty: false,
            link: 'https://github.com/hdkiller/Auto-GPT-SystemInfo',
            contributors: 
            [
                {
                    username:'https://github.com/hdkiller', 
                    pfp: 'https://avatars.githubusercontent.com/u/10578603?v=4'
                },
                {
                    username: 'https://github.com/Brian-Webster',
                    pfp: 'https://avatars.githubusercontent.com/u/3356598?v=4'
                }
            ]
        },
        {
            name: 'Notion',
            description: 'Notion plugin for Auto-GPT',
            firstParty: false,
            link: 'https://github.com/doutv/Auto-GPT-Notion',
            contributors: 
            [
                {
                    username: 'https://github.com/doutv',
                    pfp: 'https://avatars.githubusercontent.com/u/20609724?v=4'
                }
            ]
        },
        {
            name: 'Metatrader',
            description: 'A software tool that enables traders to connect their MetaTrader 4 or 5 trading account to Auto-GPT.',
            firstParty: false,
            link: 'https://github.com/isaiahbjork/Auto-GPT-MetaTrader-Plugin',
            contributors: [
                {
                    username: 'https://github.com/isaiahbjork',
                    pfp: 'https://avatars.githubusercontent.com/u/95888118?v=4'
                },
                {
                    username: 'https://github.com/bigguyjones',
                    pfp: 'https://avatars.githubusercontent.com/u/95013639?v=4'
                }
            ]
        },
        {
            name: 'Telegram',
            description: 'A smoothly working Telegram bot that gives you all the messages you would normally get through the Terminal.',
            firstParty: false,
            link: 'https://github.com/Wladastic/Auto-GPT-Telegram-Plugin',
            contributors: [
                {
                    username: 'https://github.com/Wladastic',
                    pfp: 'https://avatars.githubusercontent.com/u/11997278?v=4'
                }
            ]
        },
        {
            name: 'Google analytics',
            description: 'Connect your Google Analytics Account to Auto-GPT.',
            firstParty: false,
            link: 'https://github.com/isaiahbjork/Auto-GPT-Google-Analytics-Plugin',
            contributors: [
                {
                    username: 'https://github.com/isaiahbjork',
                    pfp: 'https://avatars.githubusercontent.com/u/95888118?v=4'
                }
            ]
        },
        {
            name: 'Youtube',
            description: 'Various YouTube features including downloading and understanding',
            firstParty: false,
            link: 'https://github.com/jpetzke/AutoGPT-YouTube',
            contributors: 
            [
                {
                    username: 'https://github.com/jpetzke',
                    pfp: 'https://avatars.githubusercontent.com/u/54205956?v=4'
                }
            ]
        },
        {
            name: 'Mastodon',
            description: 'Simple Mastodon plugin to send toots through a Mastodon account',
            firstParty: false,
            link: 'https://github.com/ppetermann/AutoGPTMastodonPlugin',
            contributors: 
            [
                {
                    username: 'https://github.com/ppetermann',
                    pfp: 'https://avatars.githubusercontent.com/u/69334?v=4'
                }
            ]
        },
        {
            name: 'TIDB Serverless',
            description: 'Connect your TiDB Serverless database to Auto-GPT, enable get query results from database',
            firstParty: false,
            link: 'https://github.com/pingcap/Auto-GPT-TiDB-Serverless-Plugin',
            contributors: 
            [
                {
                    username: 'https://github.com/wd0517?tab=overview&from=2023-05-01&to=2023-05-10',
                    pfp: 'https://avatars.githubusercontent.com/u/10102304?v=4'
                }
            ]
        },
{
    name: 'Weather',
    description: 'A simple weather plugin wrapping around python-weather',
    firstParty: false,
    link: 'https://github.com/ppetermann/Auto-GPT-WeatherPlugin',
    contributors: 
            [
                {
                    username: 'https://github.com/ppetermann',
                    pfp: 'https://avatars.githubusercontent.com/u/69334?v=4'
                }
            ]
},
{
    name: 'Spoonacular',
    description: 'Find recipe insiprations using Auto-GPT',
    firstParty: false,
    link: 'https://github.com/minfenglu/Auto-GPT-Spoonacular-Plugin',
    contributors: 
    [
        {
            username: 'https://github.com/minfenglu',
            pfp: 'https://avatars.githubusercontent.com/u/42948406?v=4'
        }
    ]
},
{
    name: 'WolframAlpha',
    description: 'Access to WolframAlpha to do math and get accurate information',
    firstParty: false,
    link: 'https://github.com/gravelBridge/AutoGPT-WolframAlpha',
    contributors: 
    [
        {
            username: 'https://github.com/gravelBridge',
            pfp: 'https://avatars.githubusercontent.com/u/107640947?v=4',
        }
    ]
},
{
    name: 'Discord',
    description: 'Interact with your Auto-GPT instance through Discord',
    firstParty: false,
    link: 'https://github.com/gravelBridge/AutoGPT-Discord',
    contributors: 
    [
        {
            username: 'https://github.com/gravelBridge',
            pfp: 'https://avatars.githubusercontent.com/u/107640947?v=4',
        }
    ]
},
{
    name: 'BingAI',
    description: 'Enable Auto-GPT to fetch information via BingAI, saving time, API requests while maintaining accuracy. This does not remove the need for OpenAI API keys',
    firstParty: false,
    link: 'https://github.com/gravelBridge/AutoGPT-BingAI',
    contributors: [
        {
            username: 'https://github.com/gravelBridge',
            pfp: 'https://avatars.githubusercontent.com/u/107640947?v=4',
        }
    ]
},
{
    name: 'Web-Interaction',
    description: 'Enable Auto-GPT to fully interact with websites! Allows Auto-GPT to click elements, input text, and scroll',
    firstParty: false,
    link: 'https://github.com/gravelBridge/AutoGPT-Web-Interaction',
    contributors: [
        {
            username: 'https://github.com/gravelBridge',
            pfp: 'https://avatars.githubusercontent.com/u/107640947?v=4',
        },
        {
            username: 'https://github.com/BaseInfinity',
            pfp: 'https://avatars.githubusercontent.com/u/1424113?v=4'
        }
    ]
},
{
    name: 'Dolly AutoGPT Cloner',
    description: 'A way to compose & run multiple Auto-GPT processes that cooperate, till core has multi-agent support',
    firstParty: false,
    link: 'https://github.com/lc0rp/Auto-GPT-Dolly-Plugin',
    contributors: 
    [
        {
            username: 'https://github.com/lc0rp',
            pfp: 'https://avatars.githubusercontent.com/u/2609441?v=4',
        },
        {
            username: 'https://github.com/ppetermann',
            pfp: 'https://avatars.githubusercontent.com/u/69334?v=4'
        }
    ]
},
{
    name: 'AutoGPT User Input Request',
    description: 'Allow AutoGPT to specifically request user input in continous mode',
    firstParty: false,
    link: 'https://github.com/HFrovinJensen/Auto-GPT-User-Input-Plugin',
    contributors: [
        {
            username: 'https://github.com/HFrovinJensen',
            pfp: 'https://avatars.githubusercontent.com/u/122442242?v=4'
        }
    ]
},
{
    name: 'Alpaca-Trading',
    description: 'Trade stocks and crypto, paper or live with Auto-GPT',
    firstParty: false,
    link: 'https://github.com/danikhan632/Auto-GPT-AlpacaTrader-Plugin',
    contributors: [
        {
            username: 'https://github.com/danikhan632',
            pfp: 'https://avatars.githubusercontent.com/u/48022006?v=4'
        }
    ]
},
{
    name: 'iMessage',
    description: 'Send and Get iMessages using Auto-GPT',
    firstParty: false,
    link: 'https://github.com/danikhan632/Auto-GPT-Messages-Plugin',
    contributors: [
        {
            username: 'https://github.com/danikhan632',
            pfp: 'https://avatars.githubusercontent.com/u/48022006?v=4'
        }
    ]
},
{
    name: 'Crypto',
    description: 'Trade crypto with Auto-GPT',
    firstParty: false,
    link: 'https://github.com/isaiahbjork/Auto-GPT-Crypto-Plugin',
    contributors: [
        {
            username: 'https://github.com/isaiahbjork',
            pfp: 'https://avatars.githubusercontent.com/u/95888118?v=4'
        }
    ]
},
{
    name: 'Instagram',
    description: 'Instagram access',
    firstParty: false,
    link: 'https://github.com/jpetzke/AutoGPT-Instagram',
    contributors: [
        {
            username: 'https://github.com/jpetzke',
            pfp: 'https://avatars.githubusercontent.com/u/54205956?v=4'
        }
    ]
},

    ]

    return (
        <div className='grid gap-6 grid-cols-3 grid-rows-3'>
            {data.map((plugin) => (
                <Card key={plugin.name} name={plugin.name} description={plugin.description} firstParty={plugin.firstParty} github={plugin.link} contributers={plugin.contributors} />
            ))}
        </div>
    )
}