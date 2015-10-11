export interface IStat {
    stad: string;
    stat: string;
}
export declare class Stat implements IStat {
    stad: string;
    stat: string;
    constructor(stad: string, stat: string);
}
