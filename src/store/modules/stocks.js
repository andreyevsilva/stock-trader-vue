import stocks from '@/data/stocks.js'

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        },
        randomStocks(state){
            state.stocks.forEach(stock => {
                // - 0.45, dando uma leve tendencia de alta nas ações
                stock.price = Math.round(stock.price * (1 + Math.random() - 0.45))
            })
        }
    },
    actions: {
        buyStock({ commit }, order) {
            commit('buyStock', order)
        },
        initStocks({ commit }) {
            commit('setStocks', stocks)
        },
        randomStocks({commit}){
            commit('randomStocks')
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}