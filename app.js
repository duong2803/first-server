const ccxt = require('ccxt')
const express = require('express')
const cors = require('cors')

const app = express()
const Binance = new ccxt.binance()
const Upbit = new ccxt.upbit()

app.use(cors())

app.get('/home', (req, res) => {

    res.write(`<h1> 
    BTC
    XRP
    DOGE
    ETH
    </h1>`)
    res.end()
})


app.get('/api/price/binance/:coin', async (req, res) => {

    try {
        const { coin } = req.params

        const ohlcv = await Binance.fetchOHLCV(`${coin}/USDT`, '1m', undefined, 1)
        if (!ohlcv) {
            return res.status(404).json({ "status": "Failed" })
        }
        const price = ohlcv[0][1]

        return res.status(200).json({ "status": "Success", "price": price })
    } catch (error) {
        return res.status(404).json({ "status": "Failed", "msg": `${error}` })
    }

})


app.get('/api/price/upbit/:coin', async (req, res) => {

    try {
        const { coin } = req.params

        const data = await fetch(`https://api.upbit.com/v1/candles/minutes/1?market=USDT-${coin}`)
        const ohlcv = await data.json()
        if (!ohlcv) {
            return res.status(404).json({ "status": "Failed" })
        }
        const { opening_price: price } = ohlcv[0]

        return res.status(200).json({ "status": "Success", "price": price })
    } catch (error) {
        return res.status(404).json({ "status": "Failed", "msg": `${error}` })
    }

})

const start = async () => {

    app.listen(8080, () => {
        console.log("Server is running on port 8080");
    })

}

start()