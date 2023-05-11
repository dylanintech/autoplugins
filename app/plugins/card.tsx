'use client';

interface PropContributors {
    username: string,
    pfp: string
}

interface Props {
    name: string,
    description: string,
    firstParty: boolean,
    github: string,
    contributers: PropContributors[]
}

export default function Card(props: Props) {
    return (
        <div className='flex flex-col gap-2 border-2 rounded-lg p-2 border-none shadow-lg hover:shadow-xl'>

            <div className="flex flex-row items-center gap-2">
                <a className="underline text-black" href={props.github} target="none">{props.name}</a>
                <div className="rounded-md bg-slate-500 p-1">
                    {props.firstParty ? <p className='font-mono text-center text-xs'>first party</p> : <p className='font-mono text-center text-xs'>third party</p>}
                </div>
            </div>

            <p className="text-slate-500 font-mono">{props.description}</p>

            <div className="flex flex-row items-center">
                <p className="text-slate-500 font-mono">built by</p>
                {props.contributers.map((contributer) => {
                    return <a key={contributer.username} href={contributer.username} target="none"><img className="rounded-full w-10 h-10 mx-1 hover:shadow-lg " src={contributer.pfp}></img></a>
                })}
            </div>

        </div>
    )
}