export interface IWebSocketResponse {
    e: string,
    E: number,
    s: string,
    U: number,
    u: number,
    b: Array<Array<string>>,
    a: Array<Array<string>>,
}

export interface IApiResponse {
    lastUpdateId: number,
    bids: Array<Array<string>>,
    asks: Array<Array<string>>,
}