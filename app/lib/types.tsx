export interface ClipDate {
    id: number;
    source: string;
    date: string;
    clipCount: number;
    outageStatus: string;
}

export interface Clip {
    id: number;     // The DB side id for that row
    source: string; // The source of the clip i.e. "Sanders County Sheriff's Office"
    date: string;   // Returns ISO format date YYYY-MM-DD
    time: string;   // Time the clip was uploaded
}

export interface LoadingScreenProps {
    loadingText: string;
}

export interface AudioPlayerProps {
    url: string;
}

export interface PaginationProps {
    setCurrentItems: React.Dispatch<React.SetStateAction<any[]>>;
    items: any[];
    tableRowRef: React.RefObject<HTMLTableRowElement>;
}