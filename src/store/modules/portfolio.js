export default{
    state:{
        funds:10000,//Saldo em conta
        stocks:[]//ações
    },
    mutations:{
        buyStock(state,order){
            /**
             * verificar se o usuário já possui ações do determinado tipo
             */
            const record = state.stocks.find(element => element.id == order.id)
            //caso já exista ele apena modifica a quantidade de ações e não insere uma nova
            if(record){
                record.quantity += order.quantity
            }else{
                state.stocks.push(order)
            }

            state.funds -= order.price * order.quantity
        },
        //Vender uma ação
        sellStock(state,order){
            /**
             * verificar se o usuário já possui as ações, para que possa vender
             */
            const record = state.stocks.find(element => element.id == order.id)
            if(record.quantity > order.quantity){
                record.quantity -= order.quantity
            }else{
                state.stocks.splice(state.stocks.indexOf(record),1)
            }

            state.funds += order.price * order.quantity

        },
        setPortfolio(state,portfolio){
            state.funds = portfolio.funds
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
        },
    },
    actions:{
        sellStock({commit},order){
            commit('sellStock',order)
        }
    },
    getters:{
        stockPortfolio(state,getters){
            return state.stocks.map(stock => {
                const record = getters.stocks.find(element => element.id == stock.id)
                return{
                    id:stock.id,
                    quantity:stock.quantity,
                    name:record.name,
                    price: record.price
                }
            })
        },
        funds(state) {
            return state.funds
        }
    }
}