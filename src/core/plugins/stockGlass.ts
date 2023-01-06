import axios from "axios"
import type { IApiResponse } from "../types/types";

export async function getStockGlass(symbol: string) {
    try {
        const res = await axios({
            method: 'get',
            url: '/binance.api/api/v3/depth',
            params: {
                symbol,
                limit: 1000,
            }
        });
        return res.data as IApiResponse;
    } catch {
        return undefined;
    }
}

export async function subStockGlass(symbol: string) {
    try {
        const socket = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLocaleLowerCase()}@depth@1000ms`);
        const ws = new Promise<typeof socket>((res, req) => {
            while (true) {
                if (socket.readyState === 1) {
                    res(socket);
                    return;
                } else {
                    setTimeout(() => { }, 50);
                }
            }
        })
        return ws;
    } catch (err) {
        return undefined;
    }
}