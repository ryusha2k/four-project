export interface IURL {
    path: string;
    title: string;
    target?: '_blank' | '_self' | '_top' | '_parent';
    onlyOwner?: boolean;
}

export const enum URLNames {
    mint = 'mint',
    releaseDate = 'releaseDate',
    roadmap = 'roadmap',
    team = 'team'
}

export const URLConfig: { [name in URLNames]: IURL } = {
    [URLNames.mint]: {
        path: '/mint',
        title: 'Mint',
    },
    [URLNames.releaseDate]: {
        path: '#release-date',
        title: 'Release Date',
    },
    [URLNames.roadmap]: {
        path: '#roadmap',
        title: 'Roadmap',
    },
    [URLNames.team]: {
        path: '#team',
        title: 'The Team',
    }
}

export const InternalURLS: Array<URLNames> = [
    URLNames.mint,
]

export const ScrollURLS: Array<URLNames> = [
    URLNames.roadmap,
    URLNames.releaseDate,
    URLNames.team,
]

export const ExternalURLS: Array<URLNames> = []
