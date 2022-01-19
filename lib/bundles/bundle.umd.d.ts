declare class QueryService {
    fetch: any;
    context: object;
    constructor(fetch: any);
    asJson(url: string): any;
}

export { QueryService as default };
