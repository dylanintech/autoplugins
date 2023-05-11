'use client';

import { Leaderboard } from "flywheel-leaderboard";

export default function Board() {
    const data = 
    [
        {
            name: 'Twitter',
            commits: 8,
        },
        {
            name: 'Email',
            commits: 23,
        },
        {
            name: 'SceneX',
            commits: 4,
        },
        {
            name: 'Bing Search',
            commits: 6,
        },
        {
            name: 'News Search',
            commits: 10,
        },
        {
            name: 'Wikipedia Search',
            commits: 2,
        },
        {
            name: 'API tools',
            commits: 2,
        },
        {
            name: 'Random values',
            commits: 6,
        },
        {
            name: 'System Information',
            commits: 16,
        },
        {
            name: 'Notion',
            commits: 37,
        },
        {
            name: 'MetaTrader',
            commits: 74,
        },
        {
            name: 'Telegram',
            commits: 34,
        },
        {
            name: 'Google analytics',
            commits: 44,
        },
        {
            name: 'Youtube',
            commits: 35,
        },
        {
            name: 'Mastodon',
            commits: 10,
        },
        {
            name: 'TIDB Serverless',
            commits: 1,
        },
        {
            name: 'Weather',
            commits: 2,
        },
        {
            name: 'Spoonacular',
            commits: 3,
        },
        {
            name: 'WolframAlpha',
            commits: 7,
        },
        {
            name: 'Discord',
            commits: 13,
        },
        {
            name: 'BingAI',
            commits: 7,
        },
        {
            name: 'Web-Interaction',
            commits: 16,
        },
        {
            name: 'Dolly AutoGPT Cloner',
            commits: 14,
        },
        {
            name: 'AutoGPT User Input Request',
            commits: 6,
        },
        {
            name: 'Alpaca-Trading',
            commits: 10,
        },
        {
            name: 'iMessage',
            commits: 16,
        },
        {
            name: 'Crypto',
            commits: 49,
        },
        {
            name: 'Instagram',
            commits: 8,
        },
        {
            name: 'auto planner',
            commits: 33,
        },
    ]

    return (
        <div className="mt-4">
            <h1 className="text-black font-mono">activity leaderboard (based on no. of commits as of may 11)</h1>
            <Leaderboard items={data} id="name" scoringMetric="commits" cell1="commits" theme="purple" className="max-w-2xl shadow-lg" />
        </div>
    )
}