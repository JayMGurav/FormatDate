interface ParseDate {
    date: string;
    time: string;
}
declare function formatDate(date: Date): ParseDate;
export default formatDate;
