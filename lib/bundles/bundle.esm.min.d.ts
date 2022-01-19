declare class QueryService {
    fetch: any;
    context: object;
    constructor(fetch: any);
    asJson(url: string): any;
}

declare function extract(jsonld: object[], uri: string): any;
//# sourceMappingURL=index.d.ts.map

export { QueryService, extract };
