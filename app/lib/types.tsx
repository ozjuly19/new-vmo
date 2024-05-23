// Represents a clip date with its associated properties
export interface ClipDate {
    id: number; // Unique identifier for the clip date
    source: string; // The source of the clip date
    date: string; // The date of the clip in ISO format (YYYY-MM-DD)
    clipCount: number; // The number of clips associated with this date
    outageStatus: string; // The status of the outage associated with this clip date
}

// Represents a clip with its associated properties
export interface Clip {
    id: number; // Unique identifier for the clip
    source: string; // The source of the clip, e.g., "Sanders County Sheriff's Office"
    date: string; // The date of the clip in ISO format (YYYY-MM-DD)
    time: string; // The time the clip was uploaded
}

// Represents the properties for the loading screen
export interface LoadingScreenProps {
    loadingText: string; // The text to display while loading
}

// Represents the properties for the audio player
export interface AudioPlayerProps {
    url: string; // The URL of the audio to play
}

// Represents the properties for the pagination component
export interface PaginationProps {
    setCurrentItems: React.Dispatch<React.SetStateAction<any[]>>; // Function to set the current items
    items: any[]; // The items to paginate
    tableRowRef: React.RefObject<HTMLTableRowElement>; // Reference to the table row element
}
