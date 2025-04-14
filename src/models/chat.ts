
export type HeaderSummaryMap = {
    header: string;
    summaries: string[];
};

export interface DeepSearchProps {
    sections: HeaderSummaryMap[];
    onSectionClick?: (header: string) => void;
}
