import krakenRest from '../kraken.js';
import type { Int, OrderSide, OrderType, Str, OrderBook, Order, Trade, Ticker, OHLCV } from '../base/types.js';
import Client from '../base/ws/Client.js';
export default class kraken extends krakenRest {
    describe(): any;
    createOrderWs(symbol: string, type: OrderType, side: OrderSide, amount: number, price?: number, params?: {}): Promise<Order>;
    handleCreateEditOrder(client: any, message: any): void;
    editOrderWs(id: string, symbol: string, type: OrderType, side: OrderSide, amount: number, price?: number, params?: {}): Promise<Order>;
    cancelOrdersWs(ids: string[], symbol?: Str, params?: {}): Promise<any>;
    cancelOrderWs(id: string, symbol?: Str, params?: {}): Promise<Order>;
    handleCancelOrder(client: any, message: any): void;
    cancelAllOrdersWs(symbol?: Str, params?: {}): Promise<any>;
    handleCancelAllOrders(client: any, message: any): void;
    handleTicker(client: any, message: any, subscription: any): void;
    handleTrades(client: Client, message: any, subscription: any): void;
    handleOHLCV(client: Client, message: any, subscription: any): void;
    requestId(): any;
    watchPublic(name: any, symbol: any, params?: {}): Promise<any>;
    watchTicker(symbol: string, params?: {}): Promise<Ticker>;
    watchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    watchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    watchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    loadMarkets(reload?: boolean, params?: {}): Promise<import("../base/types.js").Dictionary<import("../base/types.js").MarketInterface>>;
    watchHeartbeat(params?: {}): Promise<any>;
    handleHeartbeat(client: Client, message: any): void;
    handleOrderBook(client: Client, message: any, subscription: any): void;
    formatNumber(n: any, length: any): string;
    handleDeltas(bookside: any, deltas: any, timestamp?: any): any;
    handleSystemStatus(client: Client, message: any): any;
    authenticate(params?: {}): Promise<string>;
    watchPrivate(name: any, symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<any>;
    watchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    handleMyTrades(client: Client, message: any, subscription?: any): void;
    parseWsTrade(trade: any, market?: any): {
        id: string;
        order: string;
        info: any;
        timestamp: number;
        datetime: string;
        symbol: any;
        type: string;
        side: string;
        takerOrMaker: any;
        price: number;
        amount: number;
        cost: any;
        fee: any;
    };
    watchOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    handleOrders(client: Client, message: any, subscription?: any): void;
    parseWsOrder(order: any, market?: any): Order;
    handleSubscriptionStatus(client: Client, message: any): void;
    handleErrorMessage(client: Client, message: any): boolean;
    handleMessage(client: Client, message: any): any;
}
