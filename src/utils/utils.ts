import dayjs from 'dayjs';

// %======================== utils ========================% //
const capitalize = (value: string) => value[0].toUpperCase() + value.slice(1);

const humanizeTime = (value: string | null | undefined, format: string): string => value ? dayjs(value).format(format) : '';

export { capitalize, humanizeTime };
