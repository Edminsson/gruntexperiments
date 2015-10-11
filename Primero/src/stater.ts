export interface IStat {
    stad: string;
    stat: string;
}

export class Stat implements IStat {
    stad: string;
    stat: string;
    constructor(stad: string, stat: string) {
        this.stad = stad;
        this.stat = stat;
    }
}