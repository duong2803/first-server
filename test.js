const ccxt = require('ccxt')
const main = async () => {
    const Binance = new ccxt.binance();
    const olhcv = await Binance.fetchOHLCV('USDT/VND')
    Binance.fetch
    console.log(olhcv);
}

main()

[
    {
        "symbol": "ETHBTC",
        "price": "0.07689800"
    },
    {
        "symbol": "LTCBTC",
        "price": "0.00473000"
    },
    {
        "symbol": "BNBBTC",
        "price": "0.01603700"
    },
    {
        "symbol": "NEOBTC",
        "price": "0.00040000"
    },
    {
        "symbol": "QTUMETH",
        "price": "0.00154800"
    },
    {
        "symbol": "EOSETH",
        "price": "0.00070500"
    },
    {
        "symbol": "SNTETH",
        "price": "0.00001608"
    },
    {
        "symbol": "BNTETH",
        "price": "0.00026900"
    },
    {
        "symbol": "BCCBTC",
        "price": "0.07908100"
    },
    {
        "symbol": "GASBTC",
        "price": "0.00012330"
    },
    {
        "symbol": "BNBETH",
        "price": "0.20850000"
    },
    {
        "symbol": "BTCUSDT",
        "price": "17340.35000000"
    },
    {
        "symbol": "ETHUSDT",
        "price": "1333.32000000"
    },
    {
        "symbol": "HSRBTC",
        "price": "0.00041400"
    },
    {
        "symbol": "OAXETH",
        "price": "0.00017780"
    },
    {
        "symbol": "DNTETH",
        "price": "0.00002801"
    },
    {
        "symbol": "MCOETH",
        "price": "0.00577200"
    },
    {
        "symbol": "ICNETH",
        "price": "0.00166300"
    },
    {
        "symbol": "MCOBTC",
        "price": "0.00021140"
    },
    {
        "symbol": "WTCBTC",
        "price": "0.00001138"
    },
    {
        "symbol": "WTCETH",
        "price": "0.00023700"
    },
    {
        "symbol": "LRCBTC",
        "price": "0.00001288"
    },
    {
        "symbol": "LRCETH",
        "price": "0.00016729"
    },
    {
        "symbol": "QTUMBTC",
        "price": "0.00011940"
    },
    {
        "symbol": "YOYOBTC",
        "price": "0.00000008"
    },
    {
        "symbol": "OMGBTC",
        "price": "0.00006610"
    },
    {
        "symbol": "OMGETH",
        "price": "0.00085300"
    },
    {
        "symbol": "ZRXBTC",
        "price": "0.00000987"
    },
    {
        "symbol": "ZRXETH",
        "price": "0.00012830"
    },
    {
        "symbol": "STRATBTC",
        "price": "0.00003085"
    },
    {
        "symbol": "STRATETH",
        "price": "0.00105300"
    },
    {
        "symbol": "SNGLSBTC",
        "price": "0.00000013"
    },
    {
        "symbol": "SNGLSETH",
        "price": "0.00005306"
    },
    {
        "symbol": "BQXBTC",
        "price": "0.00008703"
    },
    {
        "symbol": "BQXETH",
        "price": "0.00126350"
    },
    {
        "symbol": "KNCBTC",
        "price": "0.00003120"
    },
    {
        "symbol": "KNCETH",
        "price": "0.00040430"
    },
    {
        "symbol": "FUNBTC",
        "price": "0.00000029"
    },
    {
        "symbol": "FUNETH",
        "price": "0.00000470"
    },
    {
        "symbol": "SNMBTC",
        "price": "0.00003239"
    },
    {
        "symbol": "SNMETH",
        "price": "0.00004986"
    },
    {
        "symbol": "NEOETH",
        "price": "0.00519000"
    },
    {
        "symbol": "IOTABTC",
        "price": "0.00001089"
    },
    {
        "symbol": "IOTAETH",
        "price": "0.00014030"
    },
    {
        "symbol": "LINKBTC",
        "price": "0.00035450"
    },
    {
        "symbol": "LINKETH",
        "price": "0.00461400"
    },
    {
        "symbol": "XVGBTC",
        "price": "0.00000015"
    },
    {
        "symbol": "XVGETH",
        "price": "0.00000208"
    },
    {
        "symbol": "SALTBTC",
        "price": "0.00004250"
    },
    {
        "symbol": "SALTETH",
        "price": "0.00113800"
    },
    {
        "symbol": "MDABTC",
        "price": "0.00000382"
    },
    {
        "symbol": "MDAETH",
        "price": "0.00181150"
    },
    {
        "symbol": "MTLBTC",
        "price": "0.00004281"
    },
    {
        "symbol": "MTLETH",
        "price": "0.00055680"
    },
    {
        "symbol": "SUBBTC",
        "price": "0.00000457"
    },
    {
        "symbol": "SUBETH",
        "price": "0.00012334"
    },
    {
        "symbol": "EOSBTC",
        "price": "0.00005420"
    },
    {
        "symbol": "SNTBTC",
        "price": "0.00000123"
    },
    {
        "symbol": "ETCETH",
        "price": "0.01555000"
    },
    {
        "symbol": "ETCBTC",
        "price": "0.00119500"
    },
    {
        "symbol": "MTHBTC",
        "price": "0.00000023"
    },
    {
        "symbol": "MTHETH",
        "price": "0.00004135"
    },
    {
        "symbol": "ENGBTC",
        "price": "0.00006200"
    },
    {
        "symbol": "ENGETH",
        "price": "0.00186480"
    },
    {
        "symbol": "DNTBTC",
        "price": "0.00000186"
    },
    {
        "symbol": "ZECBTC",
        "price": "0.00252500"
    },
    {
        "symbol": "ZECETH",
        "price": "0.03288000"
    },
    {
        "symbol": "BNTBTC",
        "price": "0.00002070"
    },
    {
        "symbol": "ASTBTC",
        "price": "0.00000504"
    },
    {
        "symbol": "ASTETH",
        "price": "0.00006960"
    },
    {
        "symbol": "DASHBTC",
        "price": "0.00285800"
    },
    {
        "symbol": "DASHETH",
        "price": "0.03727000"
    },
    {
        "symbol": "OAXBTC",
        "price": "0.00000779"
    },
    {
        "symbol": "ICNBTC",
        "price": "0.00005742"
    },
    {
        "symbol": "BTGBTC",
        "price": "0.00091300"
    },
    {
        "symbol": "BTGETH",
        "price": "0.05274500"
    },
    {
        "symbol": "EVXBTC",
        "price": "0.00000274"
    },
    {
        "symbol": "EVXETH",
        "price": "0.00062490"
    },
    {
        "symbol": "REQBTC",
        "price": "0.00000524"
    },
    {
        "symbol": "REQETH",
        "price": "0.00004995"
    },
    {
        "symbol": "VIBBTC",
        "price": "0.00000416"
    },
    {
        "symbol": "VIBETH",
        "price": "0.00005392"
    },
    {
        "symbol": "HSRETH",
        "price": "0.01247400"
    },
    {
        "symbol": "TRXBTC",
        "price": "0.00000317"
    },
    {
        "symbol": "TRXETH",
        "price": "0.00004127"
    },
    {
        "symbol": "POWRBTC",
        "price": "0.00000770"
    },
    {
        "symbol": "POWRETH",
        "price": "0.00010010"
    },
    {
        "symbol": "ARKBTC",
        "price": "0.00001679"
    },
    {
        "symbol": "ARKETH",
        "price": "0.00104600"
    },
    {
        "symbol": "YOYOETH",
        "price": "0.00005828"
    },
    {
        "symbol": "XRPBTC",
        "price": "0.00002050"
    },
    {
        "symbol": "XRPETH",
        "price": "0.00026660"
    },
    {
        "symbol": "MODBTC",
        "price": "0.00004280"
    },
    {
        "symbol": "MODETH",
        "price": "0.00116700"
    },
    {
        "symbol": "ENJBTC",
        "price": "0.00001695"
    },
    {
        "symbol": "ENJETH",
        "price": "0.00022010"
    },
    {
        "symbol": "STORJBTC",
        "price": "0.00001646"
    },
    {
        "symbol": "STORJETH",
        "price": "0.00029910"
    },
    {
        "symbol": "BNBUSDT",
        "price": "278.00000000"
    },
    {
        "symbol": "VENBNB",
        "price": "0.14920000"
    },
    {
        "symbol": "YOYOBNB",
        "price": "0.00059800"
    },
    {
        "symbol": "POWRBNB",
        "price": "0.00385000"
    },
    {
        "symbol": "VENBTC",
        "price": "0.00013928"
    },
    {
        "symbol": "VENETH",
        "price": "0.00325194"
    },
    {
        "symbol": "KMDBTC",
        "price": "0.00001164"
    },
    {
        "symbol": "KMDETH",
        "price": "0.00020970"
    },
    {
        "symbol": "NULSBNB",
        "price": "0.01257000"
    },
    {
        "symbol": "RCNBTC",
        "price": "0.00000074"
    },
    {
        "symbol": "RCNETH",
        "price": "0.00037604"
    },
    {
        "symbol": "RCNBNB",
        "price": "0.00347300"
    },
    {
        "symbol": "NULSBTC",
        "price": "0.00001144"
    },
    {
        "symbol": "NULSETH",
        "price": "0.00051926"
    },
    {
        "symbol": "RDNBTC",
        "price": "0.00000447"
    },
    {
        "symbol": "RDNETH",
        "price": "0.00071530"
    },
    {
        "symbol": "RDNBNB",
        "price": "0.00623000"
    },
    {
        "symbol": "XMRBTC",
        "price": "0.00914500"
    },
    {
        "symbol": "XMRETH",
        "price": "0.11888000"
    },
    {
        "symbol": "DLTBNB",
        "price": "0.00240000"
    },
    {
        "symbol": "WTCBNB",
        "price": "0.00180500"
    },
    {
        "symbol": "DLTBTC",
        "price": "0.00000071"
    },
    {
        "symbol": "DLTETH",
        "price": "0.00016807"
    },
    {
        "symbol": "AMBBTC",
        "price": "0.00000082"
    },
    {
        "symbol": "AMBETH",
        "price": "0.00004100"
    },
    {
        "symbol": "AMBBNB",
        "price": "0.00068500"
    },
    {
        "symbol": "BCCETH",
        "price": "2.47246000"
    },
    {
        "symbol": "BCCUSDT",
        "price": "448.70000000"
    },
    {
        "symbol": "BCCBNB",
        "price": "54.29000000"
    },
    {
        "symbol": "BATBTC",
        "price": "0.00001139"
    },
    {
        "symbol": "BATETH",
        "price": "0.00014640"
    },
    {
        "symbol": "BATBNB",
        "price": "0.00183100"
    },
    {
        "symbol": "BCPTBTC",
        "price": "0.00000048"
    },
    {
        "symbol": "BCPTETH",
        "price": "0.00008181"
    },
    {
        "symbol": "BCPTBNB",
        "price": "0.00116200"
    },
    {
        "symbol": "ARNBTC",
        "price": "0.00000761"
    },
    {
        "symbol": "ARNETH",
        "price": "0.00029362"
    },
    {
        "symbol": "GVTBTC",
        "price": "0.00001792"
    },
    {
        "symbol": "GVTETH",
        "price": "0.00384600"
    },
    {
        "symbol": "CDTBTC",
        "price": "0.00000317"
    },
    {
        "symbol": "CDTETH",
        "price": "0.00005119"
    },
    {
        "symbol": "GXSBTC",
        "price": "0.00004581"
    },
    {
        "symbol": "GXSETH",
        "price": "0.00062460"
    },
    {
        "symbol": "NEOUSDT",
        "price": "6.92000000"
    },
    {
        "symbol": "NEOBNB",
        "price": "0.02490000"
    },
    {
        "symbol": "POEBTC",
        "price": "0.00000005"
    },
    {
        "symbol": "POEETH",
        "price": "0.00000664"
    },
    {
        "symbol": "QSPBTC",
        "price": "0.00000076"
    },
    {
        "symbol": "QSPETH",
        "price": "0.00002249"
    },
    {
        "symbol": "QSPBNB",
        "price": "0.00052350"
    },
    {
        "symbol": "BTSBTC",
        "price": "0.00000054"
    },
    {
        "symbol": "BTSETH",
        "price": "0.00009498"
    },
    {
        "symbol": "BTSBNB",
        "price": "0.00144800"
    },
    {
        "symbol": "XZCBTC",
        "price": "0.00013550"
    },
    {
        "symbol": "XZCETH",
        "price": "0.00310000"
    },
    {
        "symbol": "XZCBNB",
        "price": "0.26750000"
    },
    {
        "symbol": "LSKBTC",
        "price": "0.00004360"
    },
    {
        "symbol": "LSKETH",
        "price": "0.00056900"
    },
    {
        "symbol": "LSKBNB",
        "price": "0.06494000"
    },
    {
        "symbol": "TNTBTC",
        "price": "0.00000261"
    },
    {
        "symbol": "TNTETH",
        "price": "0.00000920"
    },
    {
        "symbol": "FUELBTC",
        "price": "0.00000026"
    },
    {
        "symbol": "FUELETH",
        "price": "0.00002221"
    },
    {
        "symbol": "MANABTC",
        "price": "0.00002364"
    },
    {
        "symbol": "MANAETH",
        "price": "0.00030800"
    },
    {
        "symbol": "BCDBTC",
        "price": "0.00001351"
    },
    {
        "symbol": "BCDETH",
        "price": "0.00251000"
    },
    {
        "symbol": "DGDBTC",
        "price": "0.00393100"
    },
    {
        "symbol": "DGDETH",
        "price": "0.19260000"
    },
    {
        "symbol": "IOTABNB",
        "price": "0.00067800"
    },
    {
        "symbol": "ADXBTC",
        "price": "0.00000708"
    },
    {
        "symbol": "ADXETH",
        "price": "0.00009210"
    },
    {
        "symbol": "ADXBNB",
        "price": "0.00492900"
    },
    {
        "symbol": "ADABTC",
        "price": "0.00001826"
    },
    {
        "symbol": "ADAETH",
        "price": "0.00023750"
    },
    {
        "symbol": "PPTBTC",
        "price": "0.00001855"
    },
    {
        "symbol": "PPTETH",
        "price": "0.00141000"
    },
    {
        "symbol": "CMTBTC",
        "price": "0.00000028"
    },
    {
        "symbol": "CMTETH",
        "price": "0.00000625"
    },
    {
        "symbol": "CMTBNB",
        "price": "0.00057700"
    },
    {
        "symbol": "XLMBTC",
        "price": "0.00000460"
    },
    {
        "symbol": "XLMETH",
        "price": "0.00006000"
    },
    {
        "symbol": "XLMBNB",
        "price": "0.00028740"
    },
    {
        "symbol": "CNDBTC",
        "price": "0.00000006"
    },
    {
        "symbol": "CNDETH",
        "price": "0.00002599"
    },
    {
        "symbol": "CNDBNB",
        "price": "0.00033990"
    },
    {
        "symbol": "LENDBTC",
        "price": "0.00004512"
    },
    {
        "symbol": "LENDETH",
        "price": "0.00137174"
    },
    {
        "symbol": "WABIBTC",
        "price": "0.00000617"
    },
    {
        "symbol": "WABIETH",
        "price": "0.00040308"
    },
    {
        "symbol": "WABIBNB",
        "price": "0.00024130"
    },
    {
        "symbol": "LTCETH",
        "price": "0.06149000"
    },
    {
        "symbol": "LTCUSDT",
        "price": "82.03000000"
    },
    {
        "symbol": "LTCBNB",
        "price": "0.29500000"
    },
    {
        "symbol": "TNBBTC",
        "price": "0.00000007"
    },
    {
        "symbol": "TNBETH",
        "price": "0.00000752"
    },
    {
        "symbol": "WAVESBTC",
        "price": "0.00009220"
    },
    {
        "symbol": "WAVESETH",
        "price": "0.00119900"
    },
    {
        "symbol": "WAVESBNB",
        "price": "0.00577000"
    },
    {
        "symbol": "GTOBTC",
        "price": "0.00000077"
    },
    {
        "symbol": "GTOETH",
        "price": "0.00003197"
    },
    {
        "symbol": "GTOBNB",
        "price": "0.00035200"
    },
    {
        "symbol": "ICXBTC",
        "price": "0.00000929"
    },
    {
        "symbol": "ICXETH",
        "price": "0.00011790"
    },
    {
        "symbol": "ICXBNB",
        "price": "0.00465400"
    },
    {
        "symbol": "OSTBTC",
        "price": "0.00000032"
    },
    {
        "symbol": "OSTETH",
        "price": "0.00000225"
    },
    {
        "symbol": "OSTBNB",
        "price": "0.00052500"
    },
    {
        "symbol": "ELFBTC",
        "price": "0.00000979"
    },
    {
        "symbol": "ELFETH",
        "price": "0.00012800"
    },
    {
        "symbol": "AIONBTC",
        "price": "0.00000172"
    },
    {
        "symbol": "AIONETH",
        "price": "0.00002645"
    },
    {
        "symbol": "AIONBNB",
        "price": "0.00261300"
    },
    {
        "symbol": "NEBLBTC",
        "price": "0.00008168"
    },
    {
        "symbol": "NEBLBNB",
        "price": "0.01356000"
    },
    {
        "symbol": "BRDBTC",
        "price": "0.00000127"
    },
    {
        "symbol": "BRDETH",
        "price": "0.00001688"
    },
    {
        "symbol": "BRDBNB",
        "price": "0.00247000"
    },
    {
        "symbol": "MCOBNB",
        "price": "0.26837000"
    },
    {
        "symbol": "EDOBTC",
        "price": "0.00005609"
    },
    {
        "symbol": "EDOETH",
        "price": "0.00226600"
    },
    {
        "symbol": "WINGSBTC",
        "price": "0.00001193"
    },
    {
        "symbol": "WINGSETH",
        "price": "0.00033460"
    },
    {
        "symbol": "NAVBTC",
        "price": "0.00000277"
    },
    {
        "symbol": "NAVETH",
        "price": "0.00011870"
    },
    {
        "symbol": "NAVBNB",
        "price": "0.00423700"
    },
    {
        "symbol": "LUNBTC",
        "price": "0.00008510"
    },
    {
        "symbol": "LUNETH",
        "price": "0.00489100"
    },
    {
        "symbol": "TRIGBTC",
        "price": "0.00001980"
    },
    {
        "symbol": "TRIGETH",
        "price": "0.00059400"
    },
    {
        "symbol": "TRIGBNB",
        "price": "0.01218000"
    },
    {
        "symbol": "APPCBTC",
        "price": "0.00000055"
    },
    {
        "symbol": "APPCETH",
        "price": "0.00014600"
    },
    {
        "symbol": "APPCBNB",
        "price": "0.00189100"
    },
    {
        "symbol": "VIBEBTC",
        "price": "0.00000042"
    },
    {
        "symbol": "VIBEETH",
        "price": "0.00005720"
    },
    {
        "symbol": "RLCBTC",
        "price": "0.00008153"
    },
    {
        "symbol": "RLCETH",
        "price": "0.00105900"
    },
    {
        "symbol": "RLCBNB",
        "price": "0.03344000"
    },
    {
        "symbol": "INSBTC",
        "price": "0.00000618"
    },
    {
        "symbol": "INSETH",
        "price": "0.00050100"
    },
    {
        "symbol": "PIVXBTC",
        "price": "0.00001162"
    },
    {
        "symbol": "PIVXBNB",
        "price": "0.01660000"
    },
    {
        "symbol": "IOSTBTC",
        "price": "0.00000045"
    },
    {
        "symbol": "IOSTETH",
        "price": "0.00000590"
    },
    {
        "symbol": "CHATBTC",
        "price": "0.00000195"
    },
    {
        "symbol": "CHATETH",
        "price": "0.00006585"
    },
    {
        "symbol": "STEEMBTC",
        "price": "0.00000912"
    },
    {
        "symbol": "STEEMETH",
        "price": "0.00011880"
    },
    {
        "symbol": "STEEMBNB",
        "price": "0.00448000"
    },
    {
        "symbol": "NANOBTC",
        "price": "0.00006280"
    },
    {
        "symbol": "NANOETH",
        "price": "0.00090500"
    },
    {
        "symbol": "NANOBNB",
        "price": "0.05589000"
    },
    {
        "symbol": "VIABTC",
        "price": "0.00000681"
    },
    {
        "symbol": "VIAETH",
        "price": "0.00085600"
    },
    {
        "symbol": "VIABNB",
        "price": "0.00958000"
    },
    {
        "symbol": "BLZBTC",
        "price": "0.00000329"
    },
    {
        "symbol": "BLZETH",
        "price": "0.00004159"
    },
    {
        "symbol": "BLZBNB",
        "price": "0.00062190"
    },
    {
        "symbol": "AEBTC",
        "price": "0.00000292"
    },
    {
        "symbol": "AEETH",
        "price": "0.00021900"
    },
    {
        "symbol": "AEBNB",
        "price": "0.00777000"
    },
    {
        "symbol": "RPXBTC",
        "price": "0.00000224"
    },
    {
        "symbol": "RPXETH",
        "price": "0.00005449"
    },
    {
        "symbol": "RPXBNB",
        "price": "0.00145700"
    },
    {
        "symbol": "NCASHBTC",
        "price": "0.00000005"
    },
    {
        "symbol": "NCASHETH",
        "price": "0.00000013"
    },
    {
        "symbol": "NCASHBNB",
        "price": "0.00006790"
    },
    {
        "symbol": "POABTC",
        "price": "0.00000041"
    },
    {
        "symbol": "POAETH",
        "price": "0.00004891"
    },
    {
        "symbol": "POABNB",
        "price": "0.00092100"
    },
    {
        "symbol": "ZILBTC",
        "price": "0.00000142"
    },
    {
        "symbol": "ZILETH",
        "price": "0.00001838"
    },
    {
        "symbol": "ZILBNB",
        "price": "0.00008820"
    },
    {
        "symbol": "ONTBTC",
        "price": "0.00000990"
    },
    {
        "symbol": "ONTETH",
        "price": "0.00012870"
    },
    {
        "symbol": "ONTBNB",
        "price": "0.00246200"
    },
    {
        "symbol": "STORMBTC",
        "price": "0.00000035"
    },
    {
        "symbol": "STORMETH",
        "price": "0.00001398"
    },
    {
        "symbol": "STORMBNB",
        "price": "0.00006550"
    },
    {
        "symbol": "QTUMBNB",
        "price": "0.09597000"
    },
    {
        "symbol": "QTUMUSDT",
        "price": "2.06900000"
    },
    {
        "symbol": "XEMBTC",
        "price": "0.00000192"
    },
    {
        "symbol": "XEMETH",
        "price": "0.00003593"
    },
    {
        "symbol": "XEMBNB",
        "price": "0.00244100"
    },
    {
        "symbol": "WANBTC",
        "price": "0.00000974"
    },
    {
        "symbol": "WANETH",
        "price": "0.00012750"
    },
    {
        "symbol": "WANBNB",
        "price": "0.00181000"
    },
    {
        "symbol": "WPRBTC",
        "price": "0.00000027"
    },
    {
        "symbol": "WPRETH",
        "price": "0.00004020"
    },
    {
        "symbol": "QLCBTC",
        "price": "0.00000176"
    },
    {
        "symbol": "QLCETH",
        "price": "0.00000603"
    },
    {
        "symbol": "SYSBTC",
        "price": "0.00000631"
    },
    {
        "symbol": "SYSETH",
        "price": "0.00011047"
    },
    {
        "symbol": "SYSBNB",
        "price": "0.00163500"
    },
    {
        "symbol": "QLCBNB",
        "price": "0.00092200"
    },
    {
        "symbol": "GRSBTC",
        "price": "0.00001649"
    },
    {
        "symbol": "GRSETH",
        "price": "0.00076455"
    },
    {
        "symbol": "ADAUSDT",
        "price": "0.31680000"
    },
    {
        "symbol": "ADABNB",
        "price": "0.00113900"
    },
    {
        "symbol": "CLOAKBTC",
        "price": "0.00015550"
    },
    {
        "symbol": "CLOAKETH",
        "price": "0.00414200"
    },
    {
        "symbol": "GNTBTC",
        "price": "0.00000678"
    },
    {
        "symbol": "GNTETH",
        "price": "0.00022071"
    },
    {
        "symbol": "GNTBNB",
        "price": "0.00243900"
    },
    {
        "symbol": "LOOMBTC",
        "price": "0.00000252"
    },
    {
        "symbol": "LOOMETH",
        "price": "0.00003231"
    },
    {
        "symbol": "LOOMBNB",
        "price": "0.00088500"
    },
    {
        "symbol": "XRPUSDT",
        "price": "0.35540000"
    },
    {
        "symbol": "BCNBTC",
        "price": "0.00000022"
    },
    {
        "symbol": "BCNETH",
        "price": "0.00000707"
    },
    {
        "symbol": "BCNBNB",
        "price": "0.00002000"
    },
    {
        "symbol": "REPBTC",
        "price": "0.00034130"
    },
    {
        "symbol": "REPBNB",
        "price": "0.44670000"
    },
    {
        "symbol": "BTCTUSD",
        "price": "19446.02000000"
    },
    {
        "symbol": "TUSDBTC",
        "price": "0.00025971"
    },
    {
        "symbol": "ETHTUSD",
        "price": "1336.59000000"
    },
    {
        "symbol": "TUSDETH",
        "price": "0.00762097"
    },
    {
        "symbol": "TUSDBNB",
        "price": "0.06777000"
    },
    {
        "symbol": "ZENBTC",
        "price": "0.00052300"
    },
    {
        "symbol": "ZENETH",
        "price": "0.00679000"
    },
    {
        "symbol": "ZENBNB",
        "price": "0.03290000"
    },
    {
        "symbol": "SKYBTC",
        "price": "0.00000829"
    },
    {
        "symbol": "SKYETH",
        "price": "0.00222000"
    },
    {
        "symbol": "SKYBNB",
        "price": "0.03022000"
    },
    {
        "symbol": "EOSUSDT",
        "price": "0.94100000"
    },
    {
        "symbol": "EOSBNB",
        "price": "0.00338000"
    },
    {
        "symbol": "CVCBTC",
        "price": "0.00000566"
    },
    {
        "symbol": "CVCETH",
        "price": "0.00009930"
    },
    {
        "symbol": "CVCBNB",
        "price": "0.00211200"
    },
    {
        "symbol": "THETABTC",
        "price": "0.00004700"
    },
    {
        "symbol": "THETAETH",
        "price": "0.00061100"
    },
    {
        "symbol": "THETABNB",
        "price": "0.00293000"
    },
    {
        "symbol": "XRPBNB",
        "price": "0.00127900"
    },
    {
        "symbol": "TUSDUSDT",
        "price": "0.99990000"
    },
    {
        "symbol": "IOTAUSDT",
        "price": "0.18820000"
    },
    {
        "symbol": "XLMUSDT",
        "price": "0.07990000"
    },
    {
        "symbol": "IOTXBTC",
        "price": "0.00000144"
    },
    {
        "symbol": "IOTXETH",
        "price": "0.00001880"
    },
    {
        "symbol": "QKCBTC",
        "price": "0.00000046"
    },
    {
        "symbol": "QKCETH",
        "price": "0.00000603"
    },
    {
        "symbol": "AGIBTC",
        "price": "0.00000668"
    },
    {
        "symbol": "AGIETH",
        "price": "0.00007363"
    },
    {
        "symbol": "AGIBNB",
        "price": "0.00077200"
    },
    {
        "symbol": "NXSBTC",
        "price": "0.00000284"
    },
    {
        "symbol": "NXSETH",
        "price": "0.00077300"
    },
    {
        "symbol": "NXSBNB",
        "price": "0.01087000"
    },
    {
        "symbol": "ENJBNB",
        "price": "0.00105900"
    },
    {
        "symbol": "DATABTC",
        "price": "0.00000143"
    },
    {
        "symbol": "DATAETH",
        "price": "0.00002034"
    },
    {
        "symbol": "ONTUSDT",
        "price": "0.17160000"
    },
    {
        "symbol": "TRXBNB",
        "price": "0.00019780"
    },
    {
        "symbol": "TRXUSDT",
        "price": "0.05500000"
    },
    {
        "symbol": "ETCUSDT",
        "price": "20.72000000"
    },
    {
        "symbol": "ETCBNB",
        "price": "0.07460000"
    },
    {
        "symbol": "ICXUSDT",
        "price": "0.16080000"
    },
    {
        "symbol": "SCBTC",
        "price": "0.00000017"
    },
    {
        "symbol": "SCETH",
        "price": "0.00000187"
    },
    {
        "symbol": "NPXSBTC",
        "price": "0.00000003"
    },
    {
        "symbol": "NPXSETH",
        "price": "0.00000345"
    },
    {
        "symbol": "VENUSDT",
        "price": "0.00010000"
    },
    {
        "symbol": "KEYBTC",
        "price": "0.00000013"
    },
    {
        "symbol": "KEYETH",
        "price": "0.00000229"
    },
    {
        "symbol": "NASBTC",
        "price": "0.00000228"
    },
    {
        "symbol": "NASETH",
        "price": "0.00004047"
    },
    {
        "symbol": "NASBNB",
        "price": "0.02337000"
    },
    {
        "symbol": "MFTBTC",
        "price": "0.00000008"
    },
    {
        "symbol": "MFTETH",
        "price": "0.00000433"
    },
    {
        "symbol": "MFTBNB",
        "price": "0.00001485"
    },
    {
        "symbol": "DENTBTC",
        "price": "0.00000004"
    },
    {
        "symbol": "DENTETH",
        "price": "0.00000055"
    },
    {
        "symbol": "ARDRBTC",
        "price": "0.00000404"
    },
    {
        "symbol": "ARDRETH",
        "price": "0.00018870"
    },
    {
        "symbol": "ARDRBNB",
        "price": "0.00316800"
    },
    {
        "symbol": "NULSUSDT",
        "price": "0.19870000"
    },
    {
        "symbol": "HOTBTC",
        "price": "0.00000002"
    },
    {
        "symbol": "HOTETH",
        "price": "0.00000118"
    },
    {
        "symbol": "VETBTC",
        "price": "0.00000103"
    },
    {
        "symbol": "VETETH",
        "price": "0.00001338"
    },
    {
        "symbol": "VETUSDT",
        "price": "0.01785000"
    },
    {
        "symbol": "VETBNB",
        "price": "0.00006430"
    },
    {
        "symbol": "DOCKBTC",
        "price": "0.00000092"
    },
    {
        "symbol": "DOCKETH",
        "price": "0.00003283"
    },
    {
        "symbol": "POLYBTC",
        "price": "0.00001384"
    },
    {
        "symbol": "POLYBNB",
        "price": "0.00145900"
    },
    {
        "symbol": "PHXBTC",
        "price": "0.00000180"
    },
    {
        "symbol": "PHXETH",
        "price": "0.00005617"
    },
    {
        "symbol": "PHXBNB",
        "price": "0.00045600"
    },
    {
        "symbol": "HCBTC",
        "price": "0.00002000"
    },
    {
        "symbol": "HCETH",
        "price": "0.00513400"
    },
    {
        "symbol": "GOBTC",
        "price": "0.00000043"
    },
    {
        "symbol": "GOBNB",
        "price": "0.00069230"
    },
    {
        "symbol": "PAXBTC",
        "price": "0.00025175"
    },
    {
        "symbol": "PAXBNB",
        "price": "0.20121000"
    },
    {
        "symbol": "PAXUSDT",
        "price": "0.99960000"
    },
    {
        "symbol": "PAXETH",
        "price": "0.00888047"
    },
    {
        "symbol": "RVNBTC",
        "price": "0.00000123"
    },
    {
        "symbol": "DCRBTC",
        "price": "0.00113900"
    },
    {
        "symbol": "DCRBNB",
        "price": "0.78100000"
    },
    {
        "symbol": "USDCBNB",
        "price": "0.21755000"
    },
    {
        "symbol": "MITHBTC",
        "price": "0.00000080"
    },
    {
        "symbol": "MITHBNB",
        "price": "0.00004410"
    },
    {
        "symbol": "BCHABCBTC",
        "price": "0.02933000"
    },
    {
        "symbol": "BCHSVBTC",
        "price": "0.01117900"
    },
    {
        "symbol": "BCHABCUSDT",
        "price": "220.08000000"
    },
    {
        "symbol": "BCHSVUSDT",
        "price": "58.90000000"
    },
    {
        "symbol": "BNBPAX",
        "price": "495.10000000"
    },
    {
        "symbol": "BTCPAX",
        "price": "51529.15000000"
    },
    {
        "symbol": "ETHPAX",
        "price": "3904.41000000"
    },
    {
        "symbol": "XRPPAX",
        "price": "0.88960000"
    },
    {
        "symbol": "EOSPAX",
        "price": "2.58450000"
    },
    {
        "symbol": "XLMPAX",
        "price": "0.04221000"
    },
    {
        "symbol": "RENBTC",
        "price": "0.00000392"
    },
    {
        "symbol": "RENBNB",
        "price": "0.00458500"
    },
    {
        "symbol": "BNBTUSD",
        "price": "283.40000000"
    },
    {
        "symbol": "XRPTUSD",
        "price": "0.44160000"
    },
    {
        "symbol": "EOSTUSD",
        "price": "4.11590000"
    },
    {
        "symbol": "XLMTUSD",
        "price": "0.06833000"
    },
    {
        "symbol": "BNBUSDC",
        "price": "283.30000000"
    },
    {
        "symbol": "BTCUSDC",
        "price": "19440.48000000"
    },
    {
        "symbol": "ETHUSDC",
        "price": "1338.12000000"
    },
    {
        "symbol": "XRPUSDC",
        "price": "0.44090000"
    },
    {
        "symbol": "EOSUSDC",
        "price": "1.15300000"
    },
    {
        "symbol": "XLMUSDC",
        "price": "0.04970000"
    },
    {
        "symbol": "USDCUSDT",
        "price": "0.99990000"
    },
    {
        "symbol": "ADATUSD",
        "price": "0.43510000"
    },
    {
        "symbol": "TRXTUSD",
        "price": "0.05986000"
    },
    {
        "symbol": "NEOTUSD",
        "price": "11.81800000"
    },
    {
        "symbol": "TRXXRP",
        "price": "0.15466000"
    },
    {
        "symbol": "XZCXRP",
        "price": "20.79200000"
    },
    {
        "symbol": "PAXTUSD",
        "price": "0.99950000"
    },
    {
        "symbol": "USDCTUSD",
        "price": "1.00000000"
    },
    {
        "symbol": "USDCPAX",
        "price": "1.00020000"
    },
    {
        "symbol": "LINKUSDT",
        "price": "6.15000000"
    },
    {
        "symbol": "LINKTUSD",
        "price": "28.87000000"
    },
    {
        "symbol": "LINKPAX",
        "price": "3.98340000"
    },
    {
        "symbol": "LINKUSDC",
        "price": "7.77900000"
    },
    {
        "symbol": "WAVESUSDT",
        "price": "1.59800000"
    },
    {
        "symbol": "WAVESTUSD",
        "price": "1.07200000"
    },
    {
        "symbol": "WAVESPAX",
        "price": "0.80290000"
    },
    {
        "symbol": "WAVESUSDC",
        "price": "1.20360000"
    },
    {
        "symbol": "BCHABCTUSD",
        "price": "220.20000000"
    },
    {
        "symbol": "BCHABCPAX",
        "price": "221.20000000"
    },
    {
        "symbol": "BCHABCUSDC",
        "price": "220.30000000"
    },
    {
        "symbol": "BCHSVTUSD",
        "price": "59.17000000"
    },
    {
        "symbol": "BCHSVPAX",
        "price": "58.18000000"
    },
    {
        "symbol": "BCHSVUSDC",
        "price": "57.50000000"
    },
    {
        "symbol": "LTCTUSD",
        "price": "150.10000000"
    },
    {
        "symbol": "LTCPAX",
        "price": "171.13000000"
    },
    {
        "symbol": "LTCUSDC",
        "price": "53.22000000"
    },
    {
        "symbol": "TRXPAX",
        "price": "0.07661000"
    },
    {
        "symbol": "TRXUSDC",
        "price": "0.05982000"
    },
    {
        "symbol": "BTTBTC",
        "price": "0.00000005"
    },
    {
        "symbol": "BTTBNB",
        "price": "0.00000573"
    },
    {
        "symbol": "BTTUSDT",
        "price": "0.00277700"
    },
    {
        "symbol": "BNBUSDS",
        "price": "22.27880000"
    },
    {
        "symbol": "BTCUSDS",
        "price": "9604.59000000"
    },
    {
        "symbol": "USDSUSDT",
        "price": "0.99680000"
    },
    {
        "symbol": "USDSPAX",
        "price": "1.00020000"
    },
    {
        "symbol": "USDSTUSD",
        "price": "1.00000000"
    },
    {
        "symbol": "USDSUSDC",
        "price": "1.00000000"
    },
    {
        "symbol": "BTTPAX",
        "price": "0.00038660"
    },
    {
        "symbol": "BTTTUSD",
        "price": "0.00277000"
    },
    {
        "symbol": "BTTUSDC",
        "price": "0.00277600"
    },
    {
        "symbol": "ONGBNB",
        "price": "0.00545000"
    },
    {
        "symbol": "ONGBTC",
        "price": "0.00001336"
    },
    {
        "symbol": "ONGUSDT",
        "price": "0.23170000"
    },
    {
        "symbol": "HOTBNB",
        "price": "0.00000862"
    },
    {
        "symbol": "HOTUSDT",
        "price": "0.00157700"
    },
    {
        "symbol": "ZILUSDT",
        "price": "0.02453000"
    },
    {
        "symbol": "ZRXBNB",
        "price": "0.01045000"
    },
    {
        "symbol": "ZRXUSDT",
        "price": "0.17140000"
    },
    {
        "symbol": "FETBNB",
        "price": "0.00055900"
    },
    {
        "symbol": "FETBTC",
        "price": "0.00000896"
    },
    {
        "symbol": "FETUSDT",
        "price": "0.15520000"
    },
    {
        "symbol": "BATUSDT",
        "price": "0.19790000"
    },
    {
        "symbol": "XMRBNB",
        "price": "0.57050000"
    },
    {
        "symbol": "XMRUSDT",
        "price": "158.50000000"
    },
    {
        "symbol": "ZECBNB",
        "price": "0.15840000"
    },
    {
        "symbol": "ZECUSDT",
        "price": "43.80000000"
    },
    {
        "symbol": "ZECPAX",
        "price": "42.10000000"
    },
    {
        "symbol": "ZECTUSD",
        "price": "51.48000000"
    },
    {
        "symbol": "ZECUSDC",
        "price": "55.80000000"
    },
    {
        "symbol": "IOSTUSDT",
        "price": "0.00788000"
    },
    {
        "symbol": "CELRBNB",
        "price": "0.00003997"
    },
    {
        "symbol": "CELRBTC",
        "price": "0.00000064"
    },
    {
        "symbol": "CELRUSDT",
        "price": "0.01109000"
    },
    {
        "symbol": "ADAPAX",
        "price": "0.03257000"
    },
    {
        "symbol": "ADAUSDC",
        "price": "0.43520000"
    },
    {
        "symbol": "NEOPAX",
        "price": "11.12200000"
    },
    {
        "symbol": "NEOUSDC",
        "price": "28.27000000"
    },
    {
        "symbol": "DASHBNB",
        "price": "0.17830000"
    },
    {
        "symbol": "DASHUSDT",
        "price": "49.65000000"
    },
    {
        "symbol": "NANOUSDT",
        "price": "2.22400000"
    },
    {
        "symbol": "OMGBNB",
        "price": "0.03938000"
    },
    {
        "symbol": "OMGUSDT",
        "price": "1.14700000"
    },
    {
        "symbol": "THETAUSDT",
        "price": "0.81400000"
    },
    {
        "symbol": "ENJUSDT",
        "price": "0.29430000"
    },
    {
        "symbol": "MITHUSDT",
        "price": "0.00345000"
    },
    {
        "symbol": "MATICBNB",
        "price": "0.00308500"
    },
    {
        "symbol": "MATICBTC",
        "price": "0.00004946"
    },
    {
        "symbol": "MATICUSDT",
        "price": "0.85790000"
    },
    {
        "symbol": "ATOMBNB",
        "price": "0.04008000"
    },
    {
        "symbol": "ATOMBTC",
        "price": "0.00064260"
    },
    {
        "symbol": "ATOMUSDT",
        "price": "11.15000000"
    },
    {
        "symbol": "ATOMUSDC",
        "price": "12.91200000"
    },
    {
        "symbol": "ATOMPAX",
        "price": "3.17800000"
    },
    {
        "symbol": "ATOMTUSD",
        "price": "2.59800000"
    },
    {
        "symbol": "ETCUSDC",
        "price": "4.71000000"
    },
    {
        "symbol": "ETCPAX",
        "price": "4.83800000"
    },
    {
        "symbol": "ETCTUSD",
        "price": "3.79500000"
    },
    {
        "symbol": "BATUSDC",
        "price": "0.63130000"
    },
    {
        "symbol": "BATPAX",
        "price": "0.25560000"
    },
    {
        "symbol": "BATTUSD",
        "price": "0.22220000"
    },
    {
        "symbol": "PHBBNB",
        "price": "0.00013700"
    },
    {
        "symbol": "PHBBTC",
        "price": "0.00003672"
    },
    {
        "symbol": "PHBUSDC",
        "price": "0.00587000"
    },
    {
        "symbol": "PHBTUSD",
        "price": "0.22900000"
    },
    {
        "symbol": "PHBPAX",
        "price": "0.00639000"
    },
    {
        "symbol": "TFUELBNB",
        "price": "0.00012590"
    },
    {
        "symbol": "TFUELBTC",
        "price": "0.00000212"
    },
    {
        "symbol": "TFUELUSDT",
        "price": "0.03670000"
    },
    {
        "symbol": "TFUELUSDC",
        "price": "0.00356500"
    },
    {
        "symbol": "TFUELTUSD",
        "price": "0.00307700"
    },
    {
        "symbol": "TFUELPAX",
        "price": "0.00348700"
    },
    {
        "symbol": "ONEBNB",
        "price": "0.00004370"
    },
    {
        "symbol": "ONEBTC",
        "price": "0.00000071"
    },
    {
        "symbol": "ONEUSDT",
        "price": "0.01214000"
    },
    {
        "symbol": "ONETUSD",
        "price": "0.00472000"
    },
    {
        "symbol": "ONEPAX",
        "price": "0.00496000"
    },
    {
        "symbol": "ONEUSDC",
        "price": "0.00520000"
    },
    {
        "symbol": "FTMBNB",
        "price": "0.00087780"
    },
    {
        "symbol": "FTMBTC",
        "price": "0.00001407"
    },
    {
        "symbol": "FTMUSDT",
        "price": "0.24400000"
    },
    {
        "symbol": "FTMTUSD",
        "price": "0.01095000"
    },
    {
        "symbol": "FTMPAX",
        "price": "0.01028000"
    },
    {
        "symbol": "FTMUSDC",
        "price": "0.01107000"
    },
    {
        "symbol": "BTCBBTC",
        "price": "1.00000000"
    },
    {
        "symbol": "BCPTTUSD",
        "price": "0.02606000"
    },
    {
        "symbol": "BCPTPAX",
        "price": "0.02761000"
    },
    {
        "symbol": "BCPTUSDC",
        "price": "0.02728000"
    },
    {
        "symbol": "ALGOBNB",
        "price": "0.00073100"
    },
    {
        "symbol": "ALGOBTC",
        "price": "0.00001174"
    },
    {
        "symbol": "ALGOUSDT",
        "price": "0.20340000"
    },
    {
        "symbol": "ALGOTUSD",
        "price": "1.01700000"
    },
    {
        "symbol": "ALGOPAX",
        "price": "0.20390000"
    },
    {
        "symbol": "ALGOUSDC",
        "price": "0.23800000"
    },
    {
        "symbol": "USDSBUSDT",
        "price": "0.99970000"
    },
    {
        "symbol": "USDSBUSDS",
        "price": "0.99990000"
    },
    {
        "symbol": "GTOUSDT",
        "price": "0.01233000"
    },
    {
        "symbol": "GTOPAX",
        "price": "0.01361000"
    },
    {
        "symbol": "GTOTUSD",
        "price": "0.01236000"
    },
    {
        "symbol": "GTOUSDC",
        "price": "0.01196000"
    },
    {
        "symbol": "ERDBNB",
        "price": "0.00083273"
    },
    {
        "symbol": "ERDBTC",
        "price": "0.00000168"
    },
    {
        "symbol": "ERDUSDT",
        "price": "0.01971000"
    },
    {
        "symbol": "ERDPAX",
        "price": "0.00125270"
    },
    {
        "symbol": "ERDUSDC",
        "price": "0.00135730"
    },
    {
        "symbol": "DOGEBNB",
        "price": "0.00015270"
    },
    {
        "symbol": "DOGEBTC",
        "price": "0.00000448"
    },
    {
        "symbol": "DOGEUSDT",
        "price": "0.07753000"
    },
    {
        "symbol": "DOGEPAX",
        "price": "0.00216820"
    },
    {
        "symbol": "DOGEUSDC",
        "price": "0.00212770"
    },
    {
        "symbol": "DUSKBNB",
        "price": "0.00118000"
    },
    {
        "symbol": "DUSKBTC",
        "price": "0.00000533"
    },
    {
        "symbol": "DUSKUSDT",
        "price": "0.09240000"
    },
    {
        "symbol": "DUSKUSDC",
        "price": "0.01790000"
    },
    {
        "symbol": "DUSKPAX",
        "price": "0.01890000"
    },
    {
        "symbol": "BGBPUSDC",
        "price": "1.39000000"
    },
    {
        "symbol": "ANKRBNB",
        "price": "0.00007530"
    },
    {
        "symbol": "ANKRBTC",
        "price": "0.00000120"
    },
    {
        "symbol": "ANKRUSDT",
        "price": "0.02088000"
    },
    {
        "symbol": "ANKRTUSD",
        "price": "0.00212800"
    },
    {
        "symbol": "ANKRPAX",
        "price": "0.00209300"
    },
    {
        "symbol": "ANKRUSDC",
        "price": "0.00209700"
    },
    {
        "symbol": "ONTPAX",
        "price": "0.84510000"
    },
    {
        "symbol": "ONTUSDC",
        "price": "0.57080000"
    },
    {
        "symbol": "WINBNB",
        "price": "0.00000028"
    },
    {
        "symbol": "WINBTC",
        "price": "0.00000001"
    },
    {
        "symbol": "WINUSDT",
        "price": "0.00007630"
    },
    {
        "symbol": "WINUSDC",
        "price": "0.00009730"
    },
    {
        "symbol": "COSBNB",
        "price": "0.00001690"
    },
    {
        "symbol": "COSBTC",
        "price": "0.00000027"
    },
    {
        "symbol": "COSUSDT",
        "price": "0.00469000"
    },
    {
        "symbol": "TUSDBTUSD",
        "price": "0.99750000"
    },
    {
        "symbol": "NPXSUSDT",
        "price": "0.00703010"
    },
    {
        "symbol": "NPXSUSDC",
        "price": "0.00017020"
    },
    {
        "symbol": "COCOSBNB",
        "price": "0.00197400"
    },
    {
        "symbol": "COCOSBTC",
        "price": "0.00000003"
    },
    {
        "symbol": "COCOSUSDT",
        "price": "0.54780000"
    },
    {
        "symbol": "MTLUSDT",
        "price": "0.74400000"
    },
    {
        "symbol": "TOMOBNB",
        "price": "0.03255000"
    },
    {
        "symbol": "TOMOBTC",
        "price": "0.00001703"
    },
    {
        "symbol": "TOMOUSDT",
        "price": "0.29540000"
    },
    {
        "symbol": "TOMOUSDC",
        "price": "0.36700000"
    },
    {
        "symbol": "PERLBNB",
        "price": "0.00007180"
    },
    {
        "symbol": "PERLBTC",
        "price": "0.00000113"
    },
    {
        "symbol": "PERLUSDC",
        "price": "0.02447000"
    },
    {
        "symbol": "PERLUSDT",
        "price": "0.01454000"
    },
    {
        "symbol": "DENTUSDT",
        "price": "0.00072500"
    },
    {
        "symbol": "MFTUSDT",
        "price": "0.00525400"
    },
    {
        "symbol": "KEYUSDT",
        "price": "0.00305300"
    },
    {
        "symbol": "STORMUSDT",
        "price": "0.00339700"
    },
    {
        "symbol": "DOCKUSDT",
        "price": "0.01580000"
    },
    {
        "symbol": "WANUSDT",
        "price": "0.16860000"
    },
    {
        "symbol": "FUNUSDT",
        "price": "0.00627000"
    },
    {
        "symbol": "CVCUSDT",
        "price": "0.09780000"
    },
    {
        "symbol": "BTTTRX",
        "price": "0.03945000"
    },
    {
        "symbol": "WINTRX",
        "price": "0.00138700"
    },
    {
        "symbol": "CHZBNB",
        "price": "0.00041590"
    },
    {
        "symbol": "CHZBTC",
        "price": "0.00000666"
    },
    {
        "symbol": "CHZUSDT",
        "price": "0.11570000"
    },
    {
        "symbol": "BANDBNB",
        "price": "0.02248000"
    },
    {
        "symbol": "BANDBTC",
        "price": "0.00009470"
    },
    {
        "symbol": "BANDUSDT",
        "price": "1.64500000"
    },
    {
        "symbol": "BNBBUSD",
        "price": "278.20000000"
    },
    {
        "symbol": "BTCBUSD",
        "price": "17339.41000000"
    },
    {
        "symbol": "BUSDUSDT",
        "price": "1.00010000"
    },
    {
        "symbol": "BEAMBNB",
        "price": "0.02177000"
    },
    {
        "symbol": "BEAMBTC",
        "price": "0.00000716"
    },
    {
        "symbol": "BEAMUSDT",
        "price": "0.10910000"
    },
    {
        "symbol": "XTZBNB",
        "price": "0.00300400"
    },
    {
        "symbol": "XTZBTC",
        "price": "0.00004836"
    },
    {
        "symbol": "XTZUSDT",
        "price": "0.83900000"
    },
    {
        "symbol": "RENUSDT",
        "price": "0.06804500"
    },
    {
        "symbol": "RVNUSDT",
        "price": "0.02145000"
    },
    {
        "symbol": "HCUSDT",
        "price": "0.84230000"
    },
    {
        "symbol": "HBARBNB",
        "price": "0.00016280"
    },
    {
        "symbol": "HBARBTC",
        "price": "0.00000261"
    },
    {
        "symbol": "HBARUSDT",
        "price": "0.04520000"
    },
    {
        "symbol": "NKNBNB",
        "price": "0.00074700"
    },
    {
        "symbol": "NKNBTC",
        "price": "0.00000518"
    },
    {
        "symbol": "NKNUSDT",
        "price": "0.08970000"
    },
    {
        "symbol": "XRPBUSD",
        "price": "0.35540000"
    },
    {
        "symbol": "ETHBUSD",
        "price": "1333.24000000"
    },
    {
        "symbol": "BCHABCBUSD",
        "price": "220.16000000"
    },
    {
        "symbol": "LTCBUSD",
        "price": "82.02000000"
    },
    {
        "symbol": "LINKBUSD",
        "price": "6.14600000"
    },
    {
        "symbol": "ETCBUSD",
        "price": "20.72000000"
    },
    {
        "symbol": "STXBNB",
        "price": "0.00085100"
    },
    {
        "symbol": "STXBTC",
        "price": "0.00001359"
    },
    {
        "symbol": "STXUSDT",
        "price": "0.23600000"
    },
    {
        "symbol": "KAVABNB",
        "price": "0.00270000"
    },
    {
        "symbol": "KAVABTC",
        "price": "0.00004320"
    },
    {
        "symbol": "KAVAUSDT",
        "price": "0.75200000"
    },
    {
        "symbol": "BUSDNGN",
        "price": "462.64000000"
    },
    {
        "symbol": "BNBNGN",
        "price": "43608.00000000"
    },
    {
        "symbol": "BTCNGN",
        "price": "25941597.00000000"
    },
    {
        "symbol": "ARPABNB",
        "price": "0.00010460"
    },
    {
        "symbol": "ARPABTC",
        "price": "0.00000168"
    },
    {
        "symbol": "ARPAUSDT",
        "price": "0.02914000"
    },
    {
        "symbol": "TRXBUSD",
        "price": "0.05501000"
    },
    {
        "symbol": "EOSBUSD",
        "price": "0.94100000"
    },
    {
        "symbol": "IOTXUSDT",
        "price": "0.02507000"
    },
    {
        "symbol": "RLCUSDT",
        "price": "1.41400000"
    },
    {
        "symbol": "MCOUSDT",
        "price": "2.74400000"
    },
    {
        "symbol": "XLMBUSD",
        "price": "0.07990000"
    },
    {
        "symbol": "ADABUSD",
        "price": "0.31670000"
    },
    {
        "symbol": "CTXCBNB",
        "price": "0.00412200"
    },
    {
        "symbol": "CTXCBTC",
        "price": "0.00001122"
    },
    {
        "symbol": "CTXCUSDT",
        "price": "0.19450000"
    },
    {
        "symbol": "BCHBNB",
        "price": "0.38600000"
    },
    {
        "symbol": "BCHBTC",
        "price": "0.00617000"
    },
    {
        "symbol": "BCHUSDT",
        "price": "107.00000000"
    },
    {
        "symbol": "BCHUSDC",
        "price": "114.80000000"
    },
    {
        "symbol": "BCHTUSD",
        "price": "630.00000000"
    },
    {
        "symbol": "BCHPAX",
        "price": "617.72000000"
    },
    {
        "symbol": "BCHBUSD",
        "price": "107.00000000"
    },
    {
        "symbol": "BTCRUB",
        "price": "1234000.00000000"
    },
    {
        "symbol": "ETHRUB",
        "price": "94824.00000000"
    },
    {
        "symbol": "XRPRUB",
        "price": "25.21000000"
    },
    {
        "symbol": "BNBRUB",
        "price": "19790.33000000"
    },
    {
        "symbol": "TROYBNB",
        "price": "0.00001060"
    },
    {
        "symbol": "TROYBTC",
        "price": "0.00000018"
    },
    {
        "symbol": "TROYUSDT",
        "price": "0.00263200"
    },
    {
        "symbol": "BUSDRUB",
        "price": "71.15000000"
    },
    {
        "symbol": "QTUMBUSD",
        "price": "2.06200000"
    },
    {
        "symbol": "VETBUSD",
        "price": "0.01784000"
    },
    {
        "symbol": "VITEBNB",
        "price": "0.00070700"
    },
    {
        "symbol": "VITEBTC",
        "price": "0.00000118"
    },
    {
        "symbol": "VITEUSDT",
        "price": "0.02046000"
    },
    {
        "symbol": "FTTBNB",
        "price": "0.00513000"
    },
    {
        "symbol": "FTTBTC",
        "price": "0.00008560"
    },
    {
        "symbol": "FTTUSDT",
        "price": "1.43220000"
    },
    {
        "symbol": "BTCTRY",
        "price": "330378.00000000"
    },
    {
        "symbol": "BNBTRY",
        "price": "5296.00000000"
    },
    {
        "symbol": "BUSDTRY",
        "price": "19.05000000"
    },
    {
        "symbol": "ETHTRY",
        "price": "25403.00000000"
    },
    {
        "symbol": "XRPTRY",
        "price": "6.77000000"
    },
    {
        "symbol": "USDTTRY",
        "price": "19.05000000"
    },
    {
        "symbol": "USDTRUB",
        "price": "71.17000000"
    },
    {
        "symbol": "BTCEUR",
        "price": "16141.56000000"
    },
    {
        "symbol": "ETHEUR",
        "price": "1241.12000000"
    },
    {
        "symbol": "BNBEUR",
        "price": "258.70000000"
    },
    {
        "symbol": "XRPEUR",
        "price": "0.33070000"
    },
    {
        "symbol": "EURBUSD",
        "price": "1.07420000"
    },
    {
        "symbol": "EURUSDT",
        "price": "1.07440000"
    },
    {
        "symbol": "OGNBNB",
        "price": "0.00038300"
    },
    {
        "symbol": "OGNBTC",
        "price": "0.00000579"
    },
    {
        "symbol": "OGNUSDT",
        "price": "0.10040000"
    },
    {
        "symbol": "DREPBNB",
        "price": "0.00009380"
    },
    {
        "symbol": "DREPBTC",
        "price": "0.00001792"
    },
    {
        "symbol": "DREPUSDT",
        "price": "0.31130000"
    },
    {
        "symbol": "BULLUSDT",
        "price": "1370.28000000"
    },
    {
        "symbol": "BULLBUSD",
        "price": "1368.56000000"
    },
    {
        "symbol": "BEARUSDT",
        "price": "11.16000000"
    },
    {
        "symbol": "BEARBUSD",
        "price": "11.14000000"
    },
    {
        "symbol": "ETHBULLUSDT",
        "price": "79.18000000"
    },
    {
        "symbol": "ETHBULLBUSD",
        "price": "78.46000000"
    },
    {
        "symbol": "ETHBEARUSDT",
        "price": "12.20000000"
    },
    {
        "symbol": "ETHBEARBUSD",
        "price": "12.24000000"
    },
    {
        "symbol": "TCTBNB",
        "price": "0.00041860"
    },
    {
        "symbol": "TCTBTC",
        "price": "0.00000016"
    },
    {
        "symbol": "TCTUSDT",
        "price": "0.00312000"
    },
    {
        "symbol": "WRXBNB",
        "price": "0.00053400"
    },
    {
        "symbol": "WRXBTC",
        "price": "0.00000854"
    },
    {
        "symbol": "WRXUSDT",
        "price": "0.14820000"
    },
    {
        "symbol": "ICXBUSD",
        "price": "0.16090000"
    },
    {
        "symbol": "BTSUSDT",
        "price": "0.00922000"
    },
    {
        "symbol": "BTSBUSD",
        "price": "0.01930000"
    },
    {
        "symbol": "LSKUSDT",
        "price": "0.75600000"
    },
    {
        "symbol": "BNTUSDT",
        "price": "0.35900000"
    },
    {
        "symbol": "BNTBUSD",
        "price": "0.35900000"
    },
    {
        "symbol": "LTOBNB",
        "price": "0.00248000"
    },
    {
        "symbol": "LTOBTC",
        "price": "0.00000430"
    },
    {
        "symbol": "LTOUSDT",
        "price": "0.07450000"
    },
    {
        "symbol": "ATOMBUSD",
        "price": "11.13900000"
    },
    {
        "symbol": "DASHBUSD",
        "price": "49.61000000"
    },
    {
        "symbol": "NEOBUSD",
        "price": "6.92000000"
    },
    {
        "symbol": "WAVESBUSD",
        "price": "1.59800000"
    },
    {
        "symbol": "XTZBUSD",
        "price": "0.83900000"
    },
    {
        "symbol": "EOSBULLUSDT",
        "price": "3.85000000"
    },
    {
        "symbol": "EOSBULLBUSD",
        "price": "3.90000000"
    },
    {
        "symbol": "EOSBEARUSDT",
        "price": "30.21000000"
    },
    {
        "symbol": "EOSBEARBUSD",
        "price": "29.81000000"
    },
    {
        "symbol": "XRPBULLUSDT",
        "price": "8.74000000"
    },
    {
        "symbol": "XRPBULLBUSD",
        "price": "8.78000000"
    },
    {
        "symbol": "XRPBEARUSDT",
        "price": "548.55000000"
    },
    {
        "symbol": "XRPBEARBUSD",
        "price": "547.33000000"
    },
    {
        "symbol": "BATBUSD",
        "price": "0.19780000"
    },
    {
        "symbol": "ENJBUSD",
        "price": "0.29380000"
    },
    {
        "symbol": "NANOBUSD",
        "price": "2.22500000"
    },
    {
        "symbol": "ONTBUSD",
        "price": "0.17120000"
    },
    {
        "symbol": "RVNBUSD",
        "price": "0.02144000"
    },
    {
        "symbol": "STRATBUSD",
        "price": "0.49150000"
    },
    {
        "symbol": "STRATBNB",
        "price": "0.01900000"
    },
    {
        "symbol": "STRATUSDT",
        "price": "0.49040000"
    },
    {
        "symbol": "AIONBUSD",
        "price": "0.07210000"
    },
    {
        "symbol": "AIONUSDT",
        "price": "0.02983000"
    },
    {
        "symbol": "MBLBNB",
        "price": "0.00001202"
    },
    {
        "symbol": "MBLBTC",
        "price": "0.00000005"
    },
    {
        "symbol": "MBLUSDT",
        "price": "0.00250000"
    },
    {
        "symbol": "COTIBNB",
        "price": "0.00023290"
    },
    {
        "symbol": "COTIBTC",
        "price": "0.00000373"
    },
    {
        "symbol": "COTIUSDT",
        "price": "0.06460000"
    },
    {
        "symbol": "ALGOBUSD",
        "price": "0.20340000"
    },
    {
        "symbol": "BTTBUSD",
        "price": "0.00277800"
    },
    {
        "symbol": "TOMOBUSD",
        "price": "0.29550000"
    },
    {
        "symbol": "XMRBUSD",
        "price": "158.50000000"
    },
    {
        "symbol": "ZECBUSD",
        "price": "43.80000000"
    },
    {
        "symbol": "BNBBULLUSDT",
        "price": "57.21000000"
    },
    {
        "symbol": "BNBBULLBUSD",
        "price": "58.37000000"
    },
    {
        "symbol": "BNBBEARUSDT",
        "price": "58.61000000"
    },
    {
        "symbol": "BNBBEARBUSD",
        "price": "57.21000000"
    },
    {
        "symbol": "STPTBNB",
        "price": "0.00067000"
    },
    {
        "symbol": "STPTBTC",
        "price": "0.00000171"
    },
    {
        "symbol": "STPTUSDT",
        "price": "0.02965000"
    },
    {
        "symbol": "BTCZAR",
        "price": "299243.00000000"
    },
    {
        "symbol": "ETHZAR",
        "price": "22991.00000000"
    },
    {
        "symbol": "BNBZAR",
        "price": "5000.00000000"
    },
    {
        "symbol": "USDTZAR",
        "price": "14.02300000"
    },
    {
        "symbol": "BUSDZAR",
        "price": "17.26000000"
    },
    {
        "symbol": "BTCBKRW",
        "price": "42029197.00000000"
    },
    {
        "symbol": "ETHBKRW",
        "price": "1277799.00000000"
    },
    {
        "symbol": "BNBBKRW",
        "price": "44687.00000000"
    },
    {
        "symbol": "WTCUSDT",
        "price": "0.19740000"
    },
    {
        "symbol": "DATABUSD",
        "price": "0.02482000"
    },
    {
        "symbol": "DATAUSDT",
        "price": "0.02479000"
    },
    {
        "symbol": "XZCUSDT",
        "price": "4.44600000"
    },
    {
        "symbol": "SOLBNB",
        "price": "0.05980000"
    },
    {
        "symbol": "SOLBTC",
        "price": "0.00095710"
    },
    {
        "symbol": "SOLUSDT",
        "price": "16.60000000"
    },
    {
        "symbol": "SOLBUSD",
        "price": "16.60000000"
    },
    {
        "symbol": "BTCIDRT",
        "price": "693891182.00"
    },
    {
        "symbol": "BNBIDRT",
        "price": "4286985.00"
    },
    {
        "symbol": "USDTIDRT",
        "price": "15631.00"
    },
    {
        "symbol": "BUSDIDRT",
        "price": "14389.00"
    },
    {
        "symbol": "CTSIBTC",
        "price": "0.00000656"
    },
    {
        "symbol": "CTSIUSDT",
        "price": "0.11400000"
    },
    {
        "symbol": "CTSIBNB",
        "price": "0.00041000"
    },
    {
        "symbol": "CTSIBUSD",
        "price": "0.11400000"
    },
    {
        "symbol": "HIVEBNB",
        "price": "0.00429000"
    },
    {
        "symbol": "HIVEBTC",
        "price": "0.00001659"
    },
    {
        "symbol": "HIVEUSDT",
        "price": "0.28790000"
    },
    {
        "symbol": "CHRBNB",
        "price": "0.00044630"
    },
    {
        "symbol": "CHRBTC",
        "price": "0.00000715"
    },
    {
        "symbol": "CHRUSDT",
        "price": "0.12400000"
    },
    {
        "symbol": "BTCUPUSDT",
        "price": "2.86700000"
    },
    {
        "symbol": "BTCDOWNUSDT",
        "price": "0.04025900"
    },
    {
        "symbol": "GXSUSDT",
        "price": "1.79230000"
    },
    {
        "symbol": "ARDRUSDT",
        "price": "0.07010000"
    },
    {
        "symbol": "ERDBUSD",
        "price": "0.01966100"
    },
    {
        "symbol": "LENDUSDT",
        "price": "0.51431000"
    },
    {
        "symbol": "HBARBUSD",
        "price": "0.04530000"
    },
    {
        "symbol": "MATICBUSD",
        "price": "0.85780000"
    },
    {
        "symbol": "WRXBUSD",
        "price": "0.14810000"
    },
    {
        "symbol": "ZILBUSD",
        "price": "0.02452000"
    },
    {
        "symbol": "MDTBNB",
        "price": "0.00073720"
    },
    {
        "symbol": "MDTBTC",
        "price": "0.00000126"
    },
    {
        "symbol": "MDTUSDT",
        "price": "0.02172000"
    },
    {
        "symbol": "STMXBTC",
        "price": "0.00000024"
    },
    {
        "symbol": "STMXETH",
        "price": "0.00000292"
    },
    {
        "symbol": "STMXUSDT",
        "price": "0.00406900"
    },
    {
        "symbol": "KNCBUSD",
        "price": "0.54000000"
    },
    {
        "symbol": "KNCUSDT",
        "price": "0.54100000"
    },
    {
        "symbol": "REPBUSD",
        "price": "13.67300000"
    },
    {
        "symbol": "REPUSDT",
        "price": "4.73000000"
    },
    {
        "symbol": "LRCBUSD",
        "price": "0.22310000"
    },
    {
        "symbol": "LRCUSDT",
        "price": "0.22320000"
    },
    {
        "symbol": "IQBNB",
        "price": "0.00002243"
    },
    {
        "symbol": "IQBUSD",
        "price": "0.00463000"
    },
    {
        "symbol": "PNTBTC",
        "price": "0.00000864"
    },
    {
        "symbol": "PNTUSDT",
        "price": "0.13940000"
    },
    {
        "symbol": "BTCGBP",
        "price": "14217.27000000"
    },
    {
        "symbol": "ETHGBP",
        "price": "1092.90000000"
    },
    {
        "symbol": "XRPGBP",
        "price": "0.29150000"
    },
    {
        "symbol": "BNBGBP",
        "price": "227.90000000"
    },
    {
        "symbol": "GBPBUSD",
        "price": "1.21900000"
    },
    {
        "symbol": "DGBBTC",
        "price": "0.00000050"
    },
    {
        "symbol": "DGBBUSD",
        "price": "0.00875000"
    },
    {
        "symbol": "BTCUAH",
        "price": "691471.00000000"
    },
    {
        "symbol": "USDTUAH",
        "price": "39.91000000"
    },
    {
        "symbol": "COMPBTC",
        "price": "0.00205300"
    },
    {
        "symbol": "COMPBNB",
        "price": "5.71900000"
    },
    {
        "symbol": "COMPBUSD",
        "price": "35.58000000"
    },
    {
        "symbol": "COMPUSDT",
        "price": "35.59000000"
    },
    {
        "symbol": "BTCBIDR",
        "price": "270728631.00"
    },
    {
        "symbol": "ETHBIDR",
        "price": "20812585.00"
    },
    {
        "symbol": "BNBBIDR",
        "price": "4343169.00"
    },
    {
        "symbol": "BUSDBIDR",
        "price": "15615.00"
    },
    {
        "symbol": "USDTBIDR",
        "price": "15609.00"
    },
    {
        "symbol": "BKRWUSDT",
        "price": "0.00084530"
    },
    {
        "symbol": "BKRWBUSD",
        "price": "0.00084550"
    },
    {
        "symbol": "SCUSDT",
        "price": "0.00250000"
    },
    {
        "symbol": "ZENUSDT",
        "price": "9.09000000"
    },
    {
        "symbol": "SXPBTC",
        "price": "0.00001302"
    },
    {
        "symbol": "SXPBNB",
        "price": "0.00081200"
    },
    {
        "symbol": "SXPBUSD",
        "price": "0.22590000"
    },
    {
        "symbol": "SNXBTC",
        "price": "0.00010290"
    },
    {
        "symbol": "SNXBNB",
        "price": "0.00637000"
    },
    {
        "symbol": "SNXBUSD",
        "price": "1.78200000"
    },
    {
        "symbol": "SNXUSDT",
        "price": "1.78300000"
    },
    {
        "symbol": "ETHUPUSDT",
        "price": "3.21500000"
    },
    {
        "symbol": "ETHDOWNUSDT",
        "price": "0.73970000"
    },
    {
        "symbol": "ADAUPUSDT",
        "price": "0.34800000"
    },
    {
        "symbol": "ADADOWNUSDT",
        "price": "0.00429000"
    },
    {
        "symbol": "LINKUPUSDT",
        "price": "0.00584000"
    },
    {
        "symbol": "LINKDOWNUSDT",
        "price": "0.00291200"
    },
    {
        "symbol": "VTHOBNB",
        "price": "0.00000673"
    },
    {
        "symbol": "VTHOBUSD",
        "price": "0.00071800"
    },
    {
        "symbol": "VTHOUSDT",
        "price": "0.00097800"
    },
    {
        "symbol": "DCRBUSD",
        "price": "16.03500000"
    },
    {
        "symbol": "DGBUSDT",
        "price": "0.00875000"
    },
    {
        "symbol": "GBPUSDT",
        "price": "1.22000000"
    },
    {
        "symbol": "STORJBUSD",
        "price": "0.28560000"
    },
    {
        "symbol": "SXPUSDT",
        "price": "0.22580000"
    },
    {
        "symbol": "IRISBNB",
        "price": "0.00166200"
    },
    {
        "symbol": "IRISBTC",
        "price": "0.00000080"
    },
    {
        "symbol": "IRISBUSD",
        "price": "0.06080000"
    },
    {
        "symbol": "MKRBNB",
        "price": "6.90300000"
    },
    {
        "symbol": "MKRBTC",
        "price": "0.03660000"
    },
    {
        "symbol": "MKRUSDT",
        "price": "634.00000000"
    },
    {
        "symbol": "MKRBUSD",
        "price": "633.00000000"
    },
    {
        "symbol": "DAIBNB",
        "price": "0.04876000"
    },
    {
        "symbol": "DAIBTC",
        "price": "0.00008966"
    },
    {
        "symbol": "DAIUSDT",
        "price": "1.01890000"
    },
    {
        "symbol": "DAIBUSD",
        "price": "1.01810000"
    },
    {
        "symbol": "RUNEBNB",
        "price": "0.00526000"
    },
    {
        "symbol": "RUNEBTC",
        "price": "0.00008430"
    },
    {
        "symbol": "RUNEBUSD",
        "price": "1.46400000"
    },
    {
        "symbol": "MANABUSD",
        "price": "0.41000000"
    },
    {
        "symbol": "DOGEBUSD",
        "price": "0.07752000"
    },
    {
        "symbol": "LENDBUSD",
        "price": "0.51530000"
    },
    {
        "symbol": "ZRXBUSD",
        "price": "0.17100000"
    },
    {
        "symbol": "DCRUSDT",
        "price": "19.70000000"
    },
    {
        "symbol": "STORJUSDT",
        "price": "0.28550000"
    },
    {
        "symbol": "XRPBKRW",
        "price": "319.76000000"
    },
    {
        "symbol": "ADABKRW",
        "price": "327.55000000"
    },
    {
        "symbol": "BTCAUD",
        "price": "24981.66000000"
    },
    {
        "symbol": "ETHAUD",
        "price": "1921.69000000"
    },
    {
        "symbol": "AUDBUSD",
        "price": "0.69390000"
    },
    {
        "symbol": "FIOBNB",
        "price": "0.00017080"
    },
    {
        "symbol": "FIOBTC",
        "price": "0.00000165"
    },
    {
        "symbol": "FIOBUSD",
        "price": "0.02840000"
    },
    {
        "symbol": "BNBUPUSDT",
        "price": "36.08000000"
    },
    {
        "symbol": "BNBDOWNUSDT",
        "price": "0.01840000"
    },
    {
        "symbol": "XTZUPUSDT",
        "price": "0.00255100"
    },
    {
        "symbol": "XTZDOWNUSDT",
        "price": "2.60010000"
    },
    {
        "symbol": "AVABNB",
        "price": "0.00218800"
    },
    {
        "symbol": "AVABTC",
        "price": "0.00003289"
    },
    {
        "symbol": "AVABUSD",
        "price": "0.57000000"
    },
    {
        "symbol": "USDTBKRW",
        "price": "1125.00000000"
    },
    {
        "symbol": "BUSDBKRW",
        "price": "1097.18000000"
    },
    {
        "symbol": "IOTABUSD",
        "price": "0.18850000"
    },
    {
        "symbol": "MANAUSDT",
        "price": "0.40990000"
    },
    {
        "symbol": "XRPAUD",
        "price": "0.51180000"
    },
    {
        "symbol": "BNBAUD",
        "price": "401.30000000"
    },
    {
        "symbol": "AUDUSDT",
        "price": "0.69390000"
    },
    {
        "symbol": "BALBNB",
        "price": "0.42580000"
    },
    {
        "symbol": "BALBTC",
        "price": "0.00032560"
    },
    {
        "symbol": "BALBUSD",
        "price": "5.63600000"
    },
    {
        "symbol": "YFIBNB",
        "price": "82.19000000"
    },
    {
        "symbol": "YFIBTC",
        "price": "0.33900000"
    },
    {
        "symbol": "YFIBUSD",
        "price": "5878.00000000"
    },
    {
        "symbol": "YFIUSDT",
        "price": "5877.00000000"
    },
    {
        "symbol": "BLZBUSD",
        "price": "0.05680000"
    },
    {
        "symbol": "KMDBUSD",
        "price": "0.46760000"
    },
    {
        "symbol": "BALUSDT",
        "price": "5.64100000"
    },
    {
        "symbol": "BLZUSDT",
        "price": "0.05700000"
    },
    {
        "symbol": "IRISUSDT",
        "price": "0.01386000"
    },
    {
        "symbol": "KMDUSDT",
        "price": "0.20170000"
    },
    {
        "symbol": "BTCDAI",
        "price": "17353.92000000"
    },
    {
        "symbol": "ETHDAI",
        "price": "1333.59000000"
    },
    {
        "symbol": "BNBDAI",
        "price": "277.20000000"
    },
    {
        "symbol": "USDTDAI",
        "price": "1.00050000"
    },
    {
        "symbol": "BUSDDAI",
        "price": "1.00010000"
    },
    {
        "symbol": "JSTBNB",
        "price": "0.00021850"
    },
    {
        "symbol": "JSTBTC",
        "price": "0.00000121"
    },
    {
        "symbol": "JSTBUSD",
        "price": "0.02099000"
    },
    {
        "symbol": "JSTUSDT",
        "price": "0.02102000"
    },
    {
        "symbol": "SRMBNB",
        "price": "0.00084000"
    },
    {
        "symbol": "SRMBTC",
        "price": "0.00001523"
    },
    {
        "symbol": "SRMBUSD",
        "price": "0.17659000"
    },
    {
        "symbol": "SRMUSDT",
        "price": "0.24442000"
    },
    {
        "symbol": "ANTBNB",
        "price": "0.00844000"
    },
    {
        "symbol": "ANTBTC",
        "price": "0.00013513"
    },
    {
        "symbol": "ANTBUSD",
        "price": "2.34300000"
    },
    {
        "symbol": "ANTUSDT",
        "price": "2.34500000"
    },
    {
        "symbol": "CRVBNB",
        "price": "0.00687000"
    },
    {
        "symbol": "CRVBTC",
        "price": "0.00003787"
    },
    {
        "symbol": "CRVBUSD",
        "price": "0.65800000"
    },
    {
        "symbol": "CRVUSDT",
        "price": "0.65700000"
    },
    {
        "symbol": "SANDBNB",
        "price": "0.00190100"
    },
    {
        "symbol": "SANDBTC",
        "price": "0.00003049"
    },
    {
        "symbol": "SANDUSDT",
        "price": "0.52860000"
    },
    {
        "symbol": "SANDBUSD",
        "price": "0.52850000"
    },
    {
        "symbol": "OCEANBNB",
        "price": "0.00075800"
    },
    {
        "symbol": "OCEANBTC",
        "price": "0.00001220"
    },
    {
        "symbol": "OCEANBUSD",
        "price": "0.21120000"
    },
    {
        "symbol": "OCEANUSDT",
        "price": "0.21120000"
    },
    {
        "symbol": "NMRBTC",
        "price": "0.00081300"
    },
    {
        "symbol": "NMRBUSD",
        "price": "14.08000000"
    },
    {
        "symbol": "NMRUSDT",
        "price": "14.10000000"
    },
    {
        "symbol": "DOTBNB",
        "price": "0.01787000"
    },
    {
        "symbol": "DOTBTC",
        "price": "0.00028640"
    },
    {
        "symbol": "DOTBUSD",
        "price": "4.96500000"
    },
    {
        "symbol": "DOTUSDT",
        "price": "4.96600000"
    },
    {
        "symbol": "LUNABNB",
        "price": "0.00000019"
    },
    {
        "symbol": "LUNABTC",
        "price": "0.00000001"
    },
    {
        "symbol": "LUNABUSD",
        "price": "1.54460000"
    },
    {
        "symbol": "LUNAUSDT",
        "price": "1.54420000"
    },
    {
        "symbol": "IDEXBTC",
        "price": "0.00000235"
    },
    {
        "symbol": "IDEXBUSD",
        "price": "0.04066000"
    },
    {
        "symbol": "RSRBNB",
        "price": "0.00001219"
    },
    {
        "symbol": "RSRBTC",
        "price": "0.00000016"
    },
    {
        "symbol": "RSRBUSD",
        "price": "0.00339000"
    },
    {
        "symbol": "RSRUSDT",
        "price": "0.00339000"
    },
    {
        "symbol": "PAXGBNB",
        "price": "6.71700000"
    },
    {
        "symbol": "PAXGBTC",
        "price": "0.10751000"
    },
    {
        "symbol": "PAXGBUSD",
        "price": "1863.00000000"
    },
    {
        "symbol": "PAXGUSDT",
        "price": "1862.00000000"
    },
    {
        "symbol": "WNXMBNB",
        "price": "0.17350000"
    },
    {
        "symbol": "WNXMBTC",
        "price": "0.00067200"
    },
    {
        "symbol": "WNXMBUSD",
        "price": "22.16500000"
    },
    {
        "symbol": "WNXMUSDT",
        "price": "8.87000000"
    },
    {
        "symbol": "TRBBNB",
        "price": "0.51700000"
    },
    {
        "symbol": "TRBBTC",
        "price": "0.00076300"
    },
    {
        "symbol": "TRBBUSD",
        "price": "13.24000000"
    },
    {
        "symbol": "TRBUSDT",
        "price": "13.24000000"
    },
    {
        "symbol": "ETHNGN",
        "price": "805670.00000000"
    },
    {
        "symbol": "DOTBIDR",
        "price": "72297.00"
    },
    {
        "symbol": "LINKAUD",
        "price": "8.83600000"
    },
    {
        "symbol": "SXPAUD",
        "price": "1.86800000"
    },
    {
        "symbol": "BZRXBNB",
        "price": "0.00514000"
    },
    {
        "symbol": "BZRXBTC",
        "price": "0.00000463"
    },
    {
        "symbol": "BZRXBUSD",
        "price": "0.21640000"
    },
    {
        "symbol": "BZRXUSDT",
        "price": "0.21560000"
    },
    {
        "symbol": "WBTCBTC",
        "price": "1.00120000"
    },
    {
        "symbol": "WBTCETH",
        "price": "13.01000000"
    },
    {
        "symbol": "SUSHIBNB",
        "price": "0.00400000"
    },
    {
        "symbol": "SUSHIBTC",
        "price": "0.00006420"
    },
    {
        "symbol": "SUSHIBUSD",
        "price": "1.11200000"
    },
    {
        "symbol": "SUSHIUSDT",
        "price": "1.11200000"
    },
    {
        "symbol": "YFIIBNB",
        "price": "4.42000000"
    },
    {
        "symbol": "YFIIBTC",
        "price": "0.07249000"
    },
    {
        "symbol": "YFIIBUSD",
        "price": "1192.00000000"
    },
    {
        "symbol": "YFIIUSDT",
        "price": "1245.90000000"
    },
    {
        "symbol": "KSMBNB",
        "price": "0.09080000"
    },
    {
        "symbol": "KSMBTC",
        "price": "0.00150500"
    },
    {
        "symbol": "KSMBUSD",
        "price": "26.09000000"
    },
    {
        "symbol": "KSMUSDT",
        "price": "26.08000000"
    },
    {
        "symbol": "EGLDBNB",
        "price": "0.12710000"
    },
    {
        "symbol": "EGLDBTC",
        "price": "0.00203700"
    },
    {
        "symbol": "EGLDBUSD",
        "price": "35.32000000"
    },
    {
        "symbol": "EGLDUSDT",
        "price": "35.34000000"
    },
    {
        "symbol": "DIABNB",
        "price": "0.00381300"
    },
    {
        "symbol": "DIABTC",
        "price": "0.00001760"
    },
    {
        "symbol": "DIABUSD",
        "price": "0.30600000"
    },
    {
        "symbol": "DIAUSDT",
        "price": "0.30500000"
    },
    {
        "symbol": "RUNEUSDT",
        "price": "1.46400000"
    },
    {
        "symbol": "FIOUSDT",
        "price": "0.02850000"
    },
    {
        "symbol": "UMABTC",
        "price": "0.00009820"
    },
    {
        "symbol": "UMAUSDT",
        "price": "1.70800000"
    },
    {
        "symbol": "EOSUPUSDT",
        "price": "0.21130000"
    },
    {
        "symbol": "EOSDOWNUSDT",
        "price": "0.00036650"
    },
    {
        "symbol": "TRXUPUSDT",
        "price": "0.03854000"
    },
    {
        "symbol": "TRXDOWNUSDT",
        "price": "1.13900000"
    },
    {
        "symbol": "XRPUPUSDT",
        "price": "0.08790000"
    },
    {
        "symbol": "XRPDOWNUSDT",
        "price": "0.00027510"
    },
    {
        "symbol": "DOTUPUSDT",
        "price": "0.09600000"
    },
    {
        "symbol": "DOTDOWNUSDT",
        "price": "16.73700000"
    },
    {
        "symbol": "SRMBIDR",
        "price": "26748.00"
    },
    {
        "symbol": "ONEBIDR",
        "price": "119.92"
    },
    {
        "symbol": "LINKTRY",
        "price": "117.20000000"
    },
    {
        "symbol": "USDTNGN",
        "price": "746.50000000"
    },
    {
        "symbol": "BELBNB",
        "price": "0.00156800"
    },
    {
        "symbol": "BELBTC",
        "price": "0.00002520"
    },
    {
        "symbol": "BELBUSD",
        "price": "0.43400000"
    },
    {
        "symbol": "BELUSDT",
        "price": "0.43500000"
    },
    {
        "symbol": "WINGBNB",
        "price": "0.04865000"
    },
    {
        "symbol": "WINGBTC",
        "price": "0.00033300"
    },
    {
        "symbol": "SWRVBNB",
        "price": "0.00150400"
    },
    {
        "symbol": "SWRVBUSD",
        "price": "0.56490000"
    },
    {
        "symbol": "WINGBUSD",
        "price": "5.77000000"
    },
    {
        "symbol": "WINGUSDT",
        "price": "5.77000000"
    },
    {
        "symbol": "LTCUPUSDT",
        "price": "0.48010000"
    },
    {
        "symbol": "LTCDOWNUSDT",
        "price": "2.22790000"
    },
    {
        "symbol": "LENDBKRW",
        "price": "579.46000000"
    },
    {
        "symbol": "SXPEUR",
        "price": "0.20900000"
    },
    {
        "symbol": "CREAMBNB",
        "price": "0.07230000"
    },
    {
        "symbol": "CREAMBUSD",
        "price": "11.70000000"
    },
    {
        "symbol": "UNIBNB",
        "price": "0.02125000"
    },
    {
        "symbol": "UNIBTC",
        "price": "0.00034070"
    },
    {
        "symbol": "UNIBUSD",
        "price": "5.90700000"
    },
    {
        "symbol": "UNIUSDT",
        "price": "5.90700000"
    },
    {
        "symbol": "NBSBTC",
        "price": "0.00000031"
    },
    {
        "symbol": "NBSUSDT",
        "price": "0.00166000"
    },
    {
        "symbol": "OXTBTC",
        "price": "0.00000412"
    },
    {
        "symbol": "OXTUSDT",
        "price": "0.07180000"
    },
    {
        "symbol": "SUNBTC",
        "price": "0.00071100"
    },
    {
        "symbol": "SUNUSDT",
        "price": "0.00519000"
    },
    {
        "symbol": "AVAXBNB",
        "price": "0.04470000"
    },
    {
        "symbol": "AVAXBTC",
        "price": "0.00071610"
    },
    {
        "symbol": "AVAXBUSD",
        "price": "12.42000000"
    },
    {
        "symbol": "AVAXUSDT",
        "price": "12.43000000"
    },
    {
        "symbol": "HNTBTC",
        "price": "0.00023570"
    },
    {
        "symbol": "HNTUSDT",
        "price": "4.67000000"
    },
    {
        "symbol": "BAKEBNB",
        "price": "0.00054300"
    },
    {
        "symbol": "BURGERBNB",
        "price": "0.00202000"
    },
    {
        "symbol": "SXPBIDR",
        "price": "19956.00"
    },
    {
        "symbol": "LINKBKRW",
        "price": "16948.99000000"
    },
    {
        "symbol": "FLMBNB",
        "price": "0.00333000"
    },
    {
        "symbol": "FLMBTC",
        "price": "0.00000479"
    },
    {
        "symbol": "FLMBUSD",
        "price": "0.23210000"
    },
    {
        "symbol": "FLMUSDT",
        "price": "0.08290000"
    },
    {
        "symbol": "SCRTBTC",
        "price": "0.00003864"
    },
    {
        "symbol": "SCRTETH",
        "price": "0.00050220"
    },
    {
        "symbol": "CAKEBNB",
        "price": "0.01235000"
    },
    {
        "symbol": "CAKEBUSD",
        "price": "3.43000000"
    },
    {
        "symbol": "SPARTABNB",
        "price": "0.00006570"
    },
    {
        "symbol": "UNIUPUSDT",
        "price": "1.05500000"
    },
    {
        "symbol": "UNIDOWNUSDT",
        "price": "2.17200000"
    },
    {
        "symbol": "ORNBTC",
        "price": "0.00004630"
    },
    {
        "symbol": "ORNUSDT",
        "price": "0.80400000"
    },
    {
        "symbol": "TRXNGN",
        "price": "20.71000000"
    },
    {
        "symbol": "SXPTRY",
        "price": "4.30000000"
    },
    {
        "symbol": "UTKBTC",
        "price": "0.00000463"
    },
    {
        "symbol": "UTKUSDT",
        "price": "0.08040000"
    },
    {
        "symbol": "XVSBNB",
        "price": "0.01600000"
    },
    {
        "symbol": "XVSBTC",
        "price": "0.00025550"
    },
    {
        "symbol": "XVSBUSD",
        "price": "4.44000000"
    },
    {
        "symbol": "XVSUSDT",
        "price": "4.43000000"
    },
    {
        "symbol": "ALPHABNB",
        "price": "0.00029900"
    },
    {
        "symbol": "ALPHABTC",
        "price": "0.00000485"
    },
    {
        "symbol": "ALPHABUSD",
        "price": "0.08450000"
    },
    {
        "symbol": "ALPHAUSDT",
        "price": "0.08450000"
    },
    {
        "symbol": "VIDTBTC",
        "price": "0.00000171"
    },
    {
        "symbol": "VIDTBUSD",
        "price": "0.02945000"
    },
    {
        "symbol": "AAVEBNB",
        "price": "0.22160000"
    },
    {
        "symbol": "BTCBRL",
        "price": "91660.00000000"
    },
    {
        "symbol": "USDTBRL",
        "price": "5.28600000"
    },
    {
        "symbol": "AAVEBTC",
        "price": "0.00355100"
    },
    {
        "symbol": "AAVEETH",
        "price": "0.04620000"
    },
    {
        "symbol": "AAVEBUSD",
        "price": "61.60000000"
    },
    {
        "symbol": "AAVEUSDT",
        "price": "61.70000000"
    },
    {
        "symbol": "AAVEBKRW",
        "price": "164167.00000000"
    },
    {
        "symbol": "NEARBNB",
        "price": "0.00604900"
    },
    {
        "symbol": "NEARBTC",
        "price": "0.00009692"
    },
    {
        "symbol": "NEARBUSD",
        "price": "1.68100000"
    },
    {
        "symbol": "NEARUSDT",
        "price": "1.68100000"
    },
    {
        "symbol": "SXPUPUSDT",
        "price": "0.17426000"
    },
    {
        "symbol": "SXPDOWNUSDT",
        "price": "0.08950000"
    },
    {
        "symbol": "DOTBKRW",
        "price": "13514.98000000"
    },
    {
        "symbol": "SXPGBP",
        "price": "0.40800000"
    },
    {
        "symbol": "FILBNB",
        "price": "0.01386000"
    },
    {
        "symbol": "FILBTC",
        "price": "0.00022250"
    },
    {
        "symbol": "FILBUSD",
        "price": "3.85900000"
    },
    {
        "symbol": "FILUSDT",
        "price": "3.86000000"
    },
    {
        "symbol": "FILUPUSDT",
        "price": "0.15150000"
    },
    {
        "symbol": "FILDOWNUSDT",
        "price": "0.00076660"
    },
    {
        "symbol": "YFIUPUSDT",
        "price": "0.11690000"
    },
    {
        "symbol": "YFIDOWNUSDT",
        "price": "0.90090000"
    },
    {
        "symbol": "INJBNB",
        "price": "0.00523000"
    },
    {
        "symbol": "INJBTC",
        "price": "0.00008380"
    },
    {
        "symbol": "INJBUSD",
        "price": "1.45500000"
    },
    {
        "symbol": "INJUSDT",
        "price": "1.45400000"
    },
    {
        "symbol": "AERGOBTC",
        "price": "0.00000550"
    },
    {
        "symbol": "AERGOBUSD",
        "price": "0.09550000"
    },
    {
        "symbol": "LINKEUR",
        "price": "5.72100000"
    },
    {
        "symbol": "ONEBUSD",
        "price": "0.01215000"
    },
    {
        "symbol": "EASYETH",
        "price": "0.00623000"
    },
    {
        "symbol": "AUDIOBTC",
        "price": "0.00000914"
    },
    {
        "symbol": "AUDIOBUSD",
        "price": "0.15850000"
    },
    {
        "symbol": "AUDIOUSDT",
        "price": "0.15840000"
    },
    {
        "symbol": "CTKBNB",
        "price": "0.00281800"
    },
    {
        "symbol": "CTKBTC",
        "price": "0.00004519"
    },
    {
        "symbol": "CTKBUSD",
        "price": "0.78300000"
    },
    {
        "symbol": "CTKUSDT",
        "price": "0.78300000"
    },
    {
        "symbol": "BCHUPUSDT",
        "price": "0.07240000"
    },
    {
        "symbol": "BCHDOWNUSDT",
        "price": "0.22470000"
    },
    {
        "symbol": "BOTBTC",
        "price": "0.04906000"
    },
    {
        "symbol": "BOTBUSD",
        "price": "2783.23000000"
    },
    {
        "symbol": "ETHBRL",
        "price": "7049.54000000"
    },
    {
        "symbol": "DOTEUR",
        "price": "4.62300000"
    },
    {
        "symbol": "AKROBTC",
        "price": "0.00000013"
    },
    {
        "symbol": "AKROUSDT",
        "price": "0.00310000"
    },
    {
        "symbol": "KP3RBNB",
        "price": "0.24140000"
    },
    {
        "symbol": "KP3RBUSD",
        "price": "67.15000000"
    },
    {
        "symbol": "AXSBNB",
        "price": "0.02690000"
    },
    {
        "symbol": "AXSBTC",
        "price": "0.00043100"
    },
    {
        "symbol": "AXSBUSD",
        "price": "7.48000000"
    },
    {
        "symbol": "AXSUSDT",
        "price": "7.47000000"
    },
    {
        "symbol": "HARDBNB",
        "price": "0.00054700"
    },
    {
        "symbol": "HARDBTC",
        "price": "0.00000877"
    },
    {
        "symbol": "HARDBUSD",
        "price": "0.15180000"
    },
    {
        "symbol": "HARDUSDT",
        "price": "0.15190000"
    },
    {
        "symbol": "BNBBRL",
        "price": "1469.00000000"
    },
    {
        "symbol": "LTCEUR",
        "price": "76.39000000"
    },
    {
        "symbol": "RENBTCBTC",
        "price": "0.99310000"
    },
    {
        "symbol": "RENBTCETH",
        "price": "16.29900000"
    },
    {
        "symbol": "DNTBUSD",
        "price": "0.03600000"
    },
    {
        "symbol": "DNTUSDT",
        "price": "0.03600000"
    },
    {
        "symbol": "SLPETH",
        "price": "0.00000169"
    },
    {
        "symbol": "ADAEUR",
        "price": "0.29470000"
    },
    {
        "symbol": "LTCNGN",
        "price": "78132.00000000"
    },
    {
        "symbol": "CVPETH",
        "price": "0.00025860"
    },
    {
        "symbol": "CVPBUSD",
        "price": "0.34450000"
    },
    {
        "symbol": "STRAXBTC",
        "price": "0.00002445"
    },
    {
        "symbol": "STRAXETH",
        "price": "0.00031880"
    },
    {
        "symbol": "STRAXBUSD",
        "price": "0.42400000"
    },
    {
        "symbol": "STRAXUSDT",
        "price": "0.42400000"
    },
    {
        "symbol": "FORBTC",
        "price": "0.00000096"
    },
    {
        "symbol": "FORBUSD",
        "price": "0.01666000"
    },
    {
        "symbol": "UNFIBNB",
        "price": "0.02654000"
    },
    {
        "symbol": "UNFIBTC",
        "price": "0.00024050"
    },
    {
        "symbol": "UNFIBUSD",
        "price": "4.17500000"
    },
    {
        "symbol": "UNFIUSDT",
        "price": "4.17300000"
    },
    {
        "symbol": "FRONTETH",
        "price": "0.00033040"
    },
    {
        "symbol": "FRONTBUSD",
        "price": "0.18710000"
    },
    {
        "symbol": "BCHABUSD",
        "price": "43.64100000"
    },
    {
        "symbol": "ROSEBTC",
        "price": "0.00000234"
    },
    {
        "symbol": "ROSEBUSD",
        "price": "0.04067000"
    },
    {
        "symbol": "ROSEUSDT",
        "price": "0.04069000"
    },
    {
        "symbol": "AVAXTRY",
        "price": "236.60000000"
    },
    {
        "symbol": "BUSDBRL",
        "price": "5.28500000"
    },
    {
        "symbol": "AVAUSDT",
        "price": "0.57100000"
    },
    {
        "symbol": "SYSBUSD",
        "price": "0.10950000"
    },
    {
        "symbol": "XEMUSDT",
        "price": "0.03140000"
    },
    {
        "symbol": "HEGICETH",
        "price": "0.00001647"
    },
    {
        "symbol": "HEGICBUSD",
        "price": "0.02120000"
    },
    {
        "symbol": "AAVEUPUSDT",
        "price": "0.60080000"
    },
    {
        "symbol": "AAVEDOWNUSDT",
        "price": "0.00467300"
    },
    {
        "symbol": "PROMBNB",
        "price": "0.01453000"
    },
    {
        "symbol": "PROMBUSD",
        "price": "4.05000000"
    },
    {
        "symbol": "XRPBRL",
        "price": "1.87800000"
    },
    {
        "symbol": "XRPNGN",
        "price": "214.17000000"
    },
    {
        "symbol": "SKLBTC",
        "price": "0.00000145"
    },
    {
        "symbol": "SKLBUSD",
        "price": "0.02523000"
    },
    {
        "symbol": "SKLUSDT",
        "price": "0.02523000"
    },
    {
        "symbol": "BCHEUR",
        "price": "99.30000000"
    },
    {
        "symbol": "YFIEUR",
        "price": "5431.00000000"
    },
    {
        "symbol": "ZILBIDR",
        "price": "383.00"
    },
    {
        "symbol": "SUSDBTC",
        "price": "0.00002065"
    },
    {
        "symbol": "SUSDETH",
        "price": "0.00052700"
    },
    {
        "symbol": "SUSDUSDT",
        "price": "0.99600000"
    },
    {
        "symbol": "COVERETH",
        "price": "0.06373000"
    },
    {
        "symbol": "COVERBUSD",
        "price": "193.60000000"
    },
    {
        "symbol": "GLMBTC",
        "price": "0.00001125"
    },
    {
        "symbol": "GLMETH",
        "price": "0.00015020"
    },
    {
        "symbol": "GHSTETH",
        "price": "0.00081750"
    },
    {
        "symbol": "GHSTBUSD",
        "price": "1.00100000"
    },
    {
        "symbol": "SUSHIUPUSDT",
        "price": "0.00471400"
    },
    {
        "symbol": "SUSHIDOWNUSDT",
        "price": "37.37000000"
    },
    {
        "symbol": "XLMUPUSDT",
        "price": "0.02430000"
    },
    {
        "symbol": "XLMDOWNUSDT",
        "price": "4.30400000"
    },
    {
        "symbol": "LINKBRL",
        "price": "32.48000000"
    },
    {
        "symbol": "LINKNGN",
        "price": "11772.00000000"
    },
    {
        "symbol": "LTCRUB",
        "price": "5829.20000000"
    },
    {
        "symbol": "TRXTRY",
        "price": "1.04720000"
    },
    {
        "symbol": "XLMEUR",
        "price": "0.07430000"
    },
    {
        "symbol": "DFETH",
        "price": "0.00007020"
    },
    {
        "symbol": "DFBUSD",
        "price": "0.04100000"
    },
    {
        "symbol": "GRTBTC",
        "price": "0.00000417"
    },
    {
        "symbol": "GRTETH",
        "price": "0.00005410"
    },
    {
        "symbol": "GRTUSDT",
        "price": "0.07220000"
    },
    {
        "symbol": "JUVBTC",
        "price": "0.00016270"
    },
    {
        "symbol": "JUVBUSD",
        "price": "2.83000000"
    },
    {
        "symbol": "JUVUSDT",
        "price": "2.83000000"
    },
    {
        "symbol": "PSGBTC",
        "price": "0.00033350"
    },
    {
        "symbol": "PSGBUSD",
        "price": "5.77000000"
    },
    {
        "symbol": "PSGUSDT",
        "price": "5.80000000"
    },
    {
        "symbol": "BUSDBVND",
        "price": "23720.00"
    },
    {
        "symbol": "USDTBVND",
        "price": "23710.00"
    },
    {
        "symbol": "1INCHBTC",
        "price": "0.00002452"
    },
    {
        "symbol": "1INCHUSDT",
        "price": "0.42700000"
    },
    {
        "symbol": "REEFBTC",
        "price": "0.00000014"
    },
    {
        "symbol": "REEFUSDT",
        "price": "0.00258400"
    },
    {
        "symbol": "OGBTC",
        "price": "0.00014240"
    },
    {
        "symbol": "OGUSDT",
        "price": "2.47200000"
    },
    {
        "symbol": "ATMBTC",
        "price": "0.00014790"
    },
    {
        "symbol": "ATMUSDT",
        "price": "2.57000000"
    },
    {
        "symbol": "ASRBTC",
        "price": "0.00014520"
    },
    {
        "symbol": "ASRUSDT",
        "price": "2.52900000"
    },
    {
        "symbol": "CELOBTC",
        "price": "0.00003166"
    },
    {
        "symbol": "CELOUSDT",
        "price": "0.54900000"
    },
    {
        "symbol": "RIFBTC",
        "price": "0.00000269"
    },
    {
        "symbol": "RIFUSDT",
        "price": "0.04670000"
    },
    {
        "symbol": "CHZTRY",
        "price": "2.20300000"
    },
    {
        "symbol": "XLMTRY",
        "price": "1.52000000"
    },
    {
        "symbol": "LINKGBP",
        "price": "5.07300000"
    },
    {
        "symbol": "GRTEUR",
        "price": "0.06700000"
    },
    {
        "symbol": "BTCSTBTC",
        "price": "0.00033100"
    },
    {
        "symbol": "BTCSTBUSD",
        "price": "1.16000000"
    },
    {
        "symbol": "BTCSTUSDT",
        "price": "5.35000000"
    },
    {
        "symbol": "TRUBTC",
        "price": "0.00000173"
    },
    {
        "symbol": "TRUBUSD",
        "price": "0.53570000"
    },
    {
        "symbol": "TRUUSDT",
        "price": "0.03010000"
    },
    {
        "symbol": "DEXEETH",
        "price": "0.00183200"
    },
    {
        "symbol": "DEXEBUSD",
        "price": "2.45300000"
    },
    {
        "symbol": "EOSEUR",
        "price": "0.87600000"
    },
    {
        "symbol": "LTCBRL",
        "price": "433.00000000"
    },
    {
        "symbol": "USDCBUSD",
        "price": "0.99990000"
    },
    {
        "symbol": "TUSDBUSD",
        "price": "0.99990000"
    },
    {
        "symbol": "PAXBUSD",
        "price": "1.00000000"
    },
    {
        "symbol": "CKBBTC",
        "price": "0.00000015"
    },
    {
        "symbol": "CKBBUSD",
        "price": "0.00322000"
    },
    {
        "symbol": "CKBUSDT",
        "price": "0.00322000"
    },
    {
        "symbol": "TWTBTC",
        "price": "0.00008750"
    },
    {
        "symbol": "TWTBUSD",
        "price": "1.51660000"
    },
    {
        "symbol": "TWTUSDT",
        "price": "1.51650000"
    },
    {
        "symbol": "FIROBTC",
        "price": "0.00009930"
    },
    {
        "symbol": "FIROETH",
        "price": "0.00133300"
    },
    {
        "symbol": "FIROUSDT",
        "price": "1.72600000"
    },
    {
        "symbol": "BETHETH",
        "price": "0.97080000"
    },
    {
        "symbol": "DOGEEUR",
        "price": "0.07216000"
    },
    {
        "symbol": "DOGETRY",
        "price": "1.47700000"
    },
    {
        "symbol": "DOGEAUD",
        "price": "0.11182000"
    },
    {
        "symbol": "DOGEBRL",
        "price": "0.41000000"
    },
    {
        "symbol": "DOTNGN",
        "price": "10716.00000000"
    },
    {
        "symbol": "PROSETH",
        "price": "0.00034350"
    },
    {
        "symbol": "LITBTC",
        "price": "0.00004582"
    },
    {
        "symbol": "LITBUSD",
        "price": "0.79300000"
    },
    {
        "symbol": "LITUSDT",
        "price": "0.79300000"
    },
    {
        "symbol": "BTCVAI",
        "price": "56876.40000000"
    },
    {
        "symbol": "BUSDVAI",
        "price": "1.01300000"
    },
    {
        "symbol": "SFPBTC",
        "price": "0.00002443"
    },
    {
        "symbol": "SFPBUSD",
        "price": "0.42400000"
    },
    {
        "symbol": "SFPUSDT",
        "price": "0.42400000"
    },
    {
        "symbol": "DOGEGBP",
        "price": "0.06354000"
    },
    {
        "symbol": "DOTTRY",
        "price": "94.60000000"
    },
    {
        "symbol": "FXSBTC",
        "price": "0.00033092"
    },
    {
        "symbol": "FXSBUSD",
        "price": "5.72300000"
    },
    {
        "symbol": "DODOBTC",
        "price": "0.00000608"
    },
    {
        "symbol": "DODOBUSD",
        "price": "0.10520000"
    },
    {
        "symbol": "DODOUSDT",
        "price": "0.10550000"
    },
    {
        "symbol": "FRONTBTC",
        "price": "0.00001082"
    },
    {
        "symbol": "EASYBTC",
        "price": "0.00029250"
    },
    {
        "symbol": "CAKEBTC",
        "price": "0.00019780"
    },
    {
        "symbol": "CAKEUSDT",
        "price": "3.43100000"
    },
    {
        "symbol": "BAKEBUSD",
        "price": "0.15080000"
    },
    {
        "symbol": "UFTETH",
        "price": "0.00022250"
    },
    {
        "symbol": "UFTBUSD",
        "price": "0.29610000"
    },
    {
        "symbol": "1INCHBUSD",
        "price": "0.42700000"
    },
    {
        "symbol": "BANDBUSD",
        "price": "1.64400000"
    },
    {
        "symbol": "GRTBUSD",
        "price": "0.07220000"
    },
    {
        "symbol": "IOSTBUSD",
        "price": "0.00786000"
    },
    {
        "symbol": "OMGBUSD",
        "price": "1.14400000"
    },
    {
        "symbol": "REEFBUSD",
        "price": "0.00258400"
    },
    {
        "symbol": "ACMBTC",
        "price": "0.00014670"
    },
    {
        "symbol": "ACMBUSD",
        "price": "2.54100000"
    },
    {
        "symbol": "ACMUSDT",
        "price": "2.54200000"
    },
    {
        "symbol": "AUCTIONBTC",
        "price": "0.00025240"
    },
    {
        "symbol": "AUCTIONBUSD",
        "price": "4.39000000"
    },
    {
        "symbol": "PHABTC",
        "price": "0.00000710"
    },
    {
        "symbol": "PHABUSD",
        "price": "0.12330000"
    },
    {
        "symbol": "DOTGBP",
        "price": "4.06900000"
    },
    {
        "symbol": "ADATRY",
        "price": "6.03000000"
    },
    {
        "symbol": "ADABRL",
        "price": "1.67400000"
    },
    {
        "symbol": "ADAGBP",
        "price": "0.25870000"
    },
    {
        "symbol": "TVKBTC",
        "price": "0.00000190"
    },
    {
        "symbol": "TVKBUSD",
        "price": "0.03310000"
    },
    {
        "symbol": "BADGERBTC",
        "price": "0.00013630"
    },
    {
        "symbol": "BADGERBUSD",
        "price": "2.35000000"
    },
    {
        "symbol": "BADGERUSDT",
        "price": "2.35000000"
    },
    {
        "symbol": "FISBTC",
        "price": "0.00002356"
    },
    {
        "symbol": "FISBUSD",
        "price": "0.40720000"
    },
    {
        "symbol": "FISUSDT",
        "price": "0.40700000"
    },
    {
        "symbol": "DOTBRL",
        "price": "26.21000000"
    },
    {
        "symbol": "ADAAUD",
        "price": "0.45640000"
    },
    {
        "symbol": "HOTTRY",
        "price": "0.02999000"
    },
    {
        "symbol": "EGLDEUR",
        "price": "32.88000000"
    },
    {
        "symbol": "OMBTC",
        "price": "0.00000176"
    },
    {
        "symbol": "OMBUSD",
        "price": "0.03050000"
    },
    {
        "symbol": "OMUSDT",
        "price": "0.03050000"
    },
    {
        "symbol": "PONDBTC",
        "price": "0.00000047"
    },
    {
        "symbol": "PONDBUSD",
        "price": "0.00802000"
    },
    {
        "symbol": "PONDUSDT",
        "price": "0.00803000"
    },
    {
        "symbol": "DEGOBTC",
        "price": "0.00009497"
    },
    {
        "symbol": "DEGOBUSD",
        "price": "1.64600000"
    },
    {
        "symbol": "DEGOUSDT",
        "price": "1.64600000"
    },
    {
        "symbol": "AVAXEUR",
        "price": "11.57000000"
    },
    {
        "symbol": "BTTTRY",
        "price": "0.03783000"
    },
    {
        "symbol": "CHZBRL",
        "price": "0.60800000"
    },
    {
        "symbol": "UNIEUR",
        "price": "5.51900000"
    },
    {
        "symbol": "ALICEBTC",
        "price": "0.00007130"
    },
    {
        "symbol": "ALICEBUSD",
        "price": "1.23800000"
    },
    {
        "symbol": "ALICEUSDT",
        "price": "1.23700000"
    },
    {
        "symbol": "CHZBUSD",
        "price": "0.11570000"
    },
    {
        "symbol": "CHZEUR",
        "price": "0.10760000"
    },
    {
        "symbol": "CHZGBP",
        "price": "0.09470000"
    },
    {
        "symbol": "BIFIBNB",
        "price": "2.77700000"
    },
    {
        "symbol": "BIFIBUSD",
        "price": "373.10000000"
    },
    {
        "symbol": "LINABTC",
        "price": "0.00000032"
    },
    {
        "symbol": "LINABUSD",
        "price": "0.00567900"
    },
    {
        "symbol": "LINAUSDT",
        "price": "0.00568300"
    },
    {
        "symbol": "ADARUB",
        "price": "22.48000000"
    },
    {
        "symbol": "ENJBRL",
        "price": "1.55400000"
    },
    {
        "symbol": "ENJEUR",
        "price": "0.27400000"
    },
    {
        "symbol": "MATICEUR",
        "price": "0.79820000"
    },
    {
        "symbol": "NEOTRY",
        "price": "131.60000000"
    },
    {
        "symbol": "PERPBTC",
        "price": "0.00002372"
    },
    {
        "symbol": "PERPBUSD",
        "price": "0.41136000"
    },
    {
        "symbol": "PERPUSDT",
        "price": "0.41132000"
    },
    {
        "symbol": "RAMPBTC",
        "price": "0.00000273"
    },
    {
        "symbol": "RAMPBUSD",
        "price": "0.05210000"
    },
    {
        "symbol": "RAMPUSDT",
        "price": "0.05240000"
    },
    {
        "symbol": "SUPERBTC",
        "price": "0.00000519"
    },
    {
        "symbol": "SUPERBUSD",
        "price": "0.08970000"
    },
    {
        "symbol": "SUPERUSDT",
        "price": "0.08980000"
    },
    {
        "symbol": "CFXBTC",
        "price": "0.00000137"
    },
    {
        "symbol": "CFXBUSD",
        "price": "0.02390000"
    },
    {
        "symbol": "CFXUSDT",
        "price": "0.02400000"
    },
    {
        "symbol": "ENJGBP",
        "price": "0.24170000"
    },
    {
        "symbol": "EOSTRY",
        "price": "17.90000000"
    },
    {
        "symbol": "LTCGBP",
        "price": "67.15000000"
    },
    {
        "symbol": "LUNAEUR",
        "price": "0.00006000"
    },
    {
        "symbol": "RVNTRY",
        "price": "0.40840000"
    },
    {
        "symbol": "THETAEUR",
        "price": "0.75800000"
    },
    {
        "symbol": "XVGBUSD",
        "price": "0.00278000"
    },
    {
        "symbol": "EPSBTC",
        "price": "0.00000499"
    },
    {
        "symbol": "EPSBUSD",
        "price": "0.16790000"
    },
    {
        "symbol": "EPSUSDT",
        "price": "0.16790000"
    },
    {
        "symbol": "AUTOBTC",
        "price": "0.01372000"
    },
    {
        "symbol": "AUTOBUSD",
        "price": "238.20000000"
    },
    {
        "symbol": "AUTOUSDT",
        "price": "238.00000000"
    },
    {
        "symbol": "TKOBTC",
        "price": "0.00001407"
    },
    {
        "symbol": "TKOBIDR",
        "price": "3808.62"
    },
    {
        "symbol": "TKOBUSD",
        "price": "0.24410000"
    },
    {
        "symbol": "TKOUSDT",
        "price": "0.24410000"
    },
    {
        "symbol": "PUNDIXETH",
        "price": "0.00025880"
    },
    {
        "symbol": "PUNDIXUSDT",
        "price": "0.34200000"
    },
    {
        "symbol": "BTTBRL",
        "price": "0.01553000"
    },
    {
        "symbol": "BTTEUR",
        "price": "0.00243600"
    },
    {
        "symbol": "HOTEUR",
        "price": "0.00147000"
    },
    {
        "symbol": "WINEUR",
        "price": "0.00007070"
    },
    {
        "symbol": "TLMBTC",
        "price": "0.00000079"
    },
    {
        "symbol": "TLMBUSD",
        "price": "0.01370000"
    },
    {
        "symbol": "TLMUSDT",
        "price": "0.01370000"
    },
    {
        "symbol": "1INCHUPUSDT",
        "price": "0.06570300"
    },
    {
        "symbol": "1INCHDOWNUSDT",
        "price": "0.00614800"
    },
    {
        "symbol": "BTGBUSD",
        "price": "17.62000000"
    },
    {
        "symbol": "BTGUSDT",
        "price": "17.65000000"
    },
    {
        "symbol": "HOTBUSD",
        "price": "0.00157700"
    },
    {
        "symbol": "BNBUAH",
        "price": "11086.00000000"
    },
    {
        "symbol": "ONTTRY",
        "price": "3.26500000"
    },
    {
        "symbol": "VETEUR",
        "price": "0.01661000"
    },
    {
        "symbol": "VETGBP",
        "price": "0.01488000"
    },
    {
        "symbol": "WINBRL",
        "price": "0.00040200"
    },
    {
        "symbol": "MIRBTC",
        "price": "0.00000838"
    },
    {
        "symbol": "MIRBUSD",
        "price": "0.13190000"
    },
    {
        "symbol": "MIRUSDT",
        "price": "0.14168000"
    },
    {
        "symbol": "BARBTC",
        "price": "0.00022020"
    },
    {
        "symbol": "BARBUSD",
        "price": "3.82000000"
    },
    {
        "symbol": "BARUSDT",
        "price": "3.82000000"
    },
    {
        "symbol": "FORTHBTC",
        "price": "0.00017680"
    },
    {
        "symbol": "FORTHBUSD",
        "price": "3.05000000"
    },
    {
        "symbol": "FORTHUSDT",
        "price": "3.06000000"
    },
    {
        "symbol": "CAKEGBP",
        "price": "2.71400000"
    },
    {
        "symbol": "DOGERUB",
        "price": "5.52100000"
    },
    {
        "symbol": "HOTBRL",
        "price": "0.03750000"
    },
    {
        "symbol": "WRXEUR",
        "price": "0.57460000"
    },
    {
        "symbol": "EZBTC",
        "price": "0.00001351"
    },
    {
        "symbol": "EZETH",
        "price": "0.00017500"
    },
    {
        "symbol": "BAKEUSDT",
        "price": "0.15090000"
    },
    {
        "symbol": "BURGERBUSD",
        "price": "0.55900000"
    },
    {
        "symbol": "BURGERUSDT",
        "price": "0.55800000"
    },
    {
        "symbol": "SLPBUSD",
        "price": "0.00227000"
    },
    {
        "symbol": "SLPUSDT",
        "price": "0.00227000"
    },
    {
        "symbol": "TRXAUD",
        "price": "0.09810000"
    },
    {
        "symbol": "TRXEUR",
        "price": "0.05121000"
    },
    {
        "symbol": "VETTRY",
        "price": "0.34000000"
    },
    {
        "symbol": "SHIBUSDT",
        "price": "0.00000890"
    },
    {
        "symbol": "SHIBBUSD",
        "price": "0.00000891"
    },
    {
        "symbol": "ICPBTC",
        "price": "0.00024700"
    },
    {
        "symbol": "ICPBNB",
        "price": "0.01541000"
    },
    {
        "symbol": "ICPBUSD",
        "price": "4.28300000"
    },
    {
        "symbol": "ICPUSDT",
        "price": "4.28200000"
    },
    {
        "symbol": "SHIBEUR",
        "price": "0.00000829"
    },
    {
        "symbol": "SHIBRUB",
        "price": "0.00057730"
    },
    {
        "symbol": "ETCEUR",
        "price": "19.27000000"
    },
    {
        "symbol": "ETCBRL",
        "price": "202.40000000"
    },
    {
        "symbol": "DOGEBIDR",
        "price": "1211.00"
    },
    {
        "symbol": "ARBTC",
        "price": "0.00044560"
    },
    {
        "symbol": "ARBNB",
        "price": "0.02776000"
    },
    {
        "symbol": "ARBUSD",
        "price": "7.73000000"
    },
    {
        "symbol": "ARUSDT",
        "price": "7.73000000"
    },
    {
        "symbol": "POLSBTC",
        "price": "0.00002163"
    },
    {
        "symbol": "POLSBNB",
        "price": "0.00134800"
    },
    {
        "symbol": "POLSBUSD",
        "price": "0.37500000"
    },
    {
        "symbol": "POLSUSDT",
        "price": "0.37400000"
    },
    {
        "symbol": "MDXBTC",
        "price": "0.00000428"
    },
    {
        "symbol": "MDXBNB",
        "price": "0.00061900"
    },
    {
        "symbol": "MDXBUSD",
        "price": "0.07410000"
    },
    {
        "symbol": "MDXUSDT",
        "price": "0.07430000"
    },
    {
        "symbol": "MASKBNB",
        "price": "0.00945000"
    },
    {
        "symbol": "MASKBUSD",
        "price": "2.62700000"
    },
    {
        "symbol": "MASKUSDT",
        "price": "2.62600000"
    },
    {
        "symbol": "LPTBTC",
        "price": "0.00028450"
    },
    {
        "symbol": "LPTBNB",
        "price": "0.01777000"
    },
    {
        "symbol": "LPTBUSD",
        "price": "4.94000000"
    },
    {
        "symbol": "LPTUSDT",
        "price": "4.94000000"
    },
    {
        "symbol": "ETHUAH",
        "price": "53168.00000000"
    },
    {
        "symbol": "MATICBRL",
        "price": "4.53300000"
    },
    {
        "symbol": "SOLEUR",
        "price": "15.46000000"
    },
    {
        "symbol": "SHIBBRL",
        "price": "0.00004702"
    },
    {
        "symbol": "AGIXBTC",
        "price": "0.00000382"
    },
    {
        "symbol": "ICPEUR",
        "price": "3.98000000"
    },
    {
        "symbol": "MATICGBP",
        "price": "0.70360000"
    },
    {
        "symbol": "SHIBTRY",
        "price": "0.00016960"
    },
    {
        "symbol": "MATICBIDR",
        "price": "13374.00"
    },
    {
        "symbol": "MATICRUB",
        "price": "61.22000000"
    },
    {
        "symbol": "NUBTC",
        "price": "0.00001240"
    },
    {
        "symbol": "NUBNB",
        "price": "0.00126770"
    },
    {
        "symbol": "NUBUSD",
        "price": "0.54530000"
    },
    {
        "symbol": "NUUSDT",
        "price": "0.54360000"
    },
    {
        "symbol": "XVGUSDT",
        "price": "0.00278000"
    },
    {
        "symbol": "RLCBUSD",
        "price": "1.78300000"
    },
    {
        "symbol": "CELRBUSD",
        "price": "0.01110000"
    },
    {
        "symbol": "ATMBUSD",
        "price": "2.56000000"
    },
    {
        "symbol": "ZENBUSD",
        "price": "9.09000000"
    },
    {
        "symbol": "FTMBUSD",
        "price": "0.24410000"
    },
    {
        "symbol": "THETABUSD",
        "price": "0.81400000"
    },
    {
        "symbol": "WINBUSD",
        "price": "0.00007630"
    },
    {
        "symbol": "KAVABUSD",
        "price": "0.75000000"
    },
    {
        "symbol": "XEMBUSD",
        "price": "0.09630000"
    },
    {
        "symbol": "ATABTC",
        "price": "0.00000583"
    },
    {
        "symbol": "ATABNB",
        "price": "0.00036900"
    },
    {
        "symbol": "ATABUSD",
        "price": "0.10090000"
    },
    {
        "symbol": "ATAUSDT",
        "price": "0.10090000"
    },
    {
        "symbol": "GTCBTC",
        "price": "0.00008440"
    },
    {
        "symbol": "GTCBNB",
        "price": "0.01860000"
    },
    {
        "symbol": "GTCBUSD",
        "price": "1.46400000"
    },
    {
        "symbol": "GTCUSDT",
        "price": "1.46200000"
    },
    {
        "symbol": "TORNBTC",
        "price": "0.00023980"
    },
    {
        "symbol": "TORNBNB",
        "price": "0.09058000"
    },
    {
        "symbol": "TORNBUSD",
        "price": "4.12000000"
    },
    {
        "symbol": "TORNUSDT",
        "price": "4.06000000"
    },
    {
        "symbol": "MATICTRY",
        "price": "16.33900000"
    },
    {
        "symbol": "ETCGBP",
        "price": "26.54000000"
    },
    {
        "symbol": "SOLGBP",
        "price": "13.58000000"
    },
    {
        "symbol": "BAKEBTC",
        "price": "0.00000870"
    },
    {
        "symbol": "COTIBUSD",
        "price": "0.06430000"
    },
    {
        "symbol": "KEEPBTC",
        "price": "0.00001432"
    },
    {
        "symbol": "KEEPBNB",
        "price": "0.00145070"
    },
    {
        "symbol": "KEEPBUSD",
        "price": "0.62600000"
    },
    {
        "symbol": "KEEPUSDT",
        "price": "0.62510000"
    },
    {
        "symbol": "SOLTRY",
        "price": "316.30000000"
    },
    {
        "symbol": "RUNEGBP",
        "price": "1.19700000"
    },
    {
        "symbol": "SOLBRL",
        "price": "87.30000000"
    },
    {
        "symbol": "SCBUSD",
        "price": "0.00250000"
    },
    {
        "symbol": "CHRBUSD",
        "price": "0.12400000"
    },
    {
        "symbol": "STMXBUSD",
        "price": "0.00407000"
    },
    {
        "symbol": "HNTBUSD",
        "price": "1.95000000"
    },
    {
        "symbol": "FTTBUSD",
        "price": "1.19950000"
    },
    {
        "symbol": "DOCKBUSD",
        "price": "0.01582000"
    },
    {
        "symbol": "ADABIDR",
        "price": "4938.00"
    },
    {
        "symbol": "ERNBNB",
        "price": "0.00677000"
    },
    {
        "symbol": "ERNBUSD",
        "price": "1.88300000"
    },
    {
        "symbol": "ERNUSDT",
        "price": "1.88000000"
    },
    {
        "symbol": "KLAYBTC",
        "price": "0.00001000"
    },
    {
        "symbol": "KLAYBNB",
        "price": "0.00062500"
    },
    {
        "symbol": "KLAYBUSD",
        "price": "0.17360000"
    },
    {
        "symbol": "KLAYUSDT",
        "price": "0.17400000"
    },
    {
        "symbol": "RUNEEUR",
        "price": "1.35700000"
    },
    {
        "symbol": "MATICAUD",
        "price": "1.23420000"
    },
    {
        "symbol": "DOTRUB",
        "price": "353.10000000"
    },
    {
        "symbol": "UTKBUSD",
        "price": "0.08020000"
    },
    {
        "symbol": "IOTXBUSD",
        "price": "0.02509000"
    },
    {
        "symbol": "PHAUSDT",
        "price": "0.12340000"
    },
    {
        "symbol": "SOLRUB",
        "price": "1182.00000000"
    },
    {
        "symbol": "RUNEAUD",
        "price": "17.40400000"
    },
    {
        "symbol": "BUSDUAH",
        "price": "39.89000000"
    },
    {
        "symbol": "BONDBTC",
        "price": "0.00020520"
    },
    {
        "symbol": "BONDBNB",
        "price": "0.02969000"
    },
    {
        "symbol": "BONDBUSD",
        "price": "3.54900000"
    },
    {
        "symbol": "BONDUSDT",
        "price": "3.55000000"
    },
    {
        "symbol": "MLNBTC",
        "price": "0.00115400"
    },
    {
        "symbol": "MLNBNB",
        "price": "0.09880000"
    },
    {
        "symbol": "MLNBUSD",
        "price": "20.02000000"
    },
    {
        "symbol": "MLNUSDT",
        "price": "20.03000000"
    },
    {
        "symbol": "GRTTRY",
        "price": "1.37700000"
    },
    {
        "symbol": "CAKEBRL",
        "price": "69.72000000"
    },
    {
        "symbol": "ICPRUB",
        "price": "4589.00000000"
    },
    {
        "symbol": "DOTAUD",
        "price": "7.14900000"
    },
    {
        "symbol": "AAVEBRL",
        "price": "1792.00000000"
    },
    {
        "symbol": "EOSAUD",
        "price": "6.55500000"
    },
    {
        "symbol": "DEXEUSDT",
        "price": "2.45300000"
    },
    {
        "symbol": "LTOBUSD",
        "price": "0.07470000"
    },
    {
        "symbol": "ADXBUSD",
        "price": "0.12280000"
    },
    {
        "symbol": "QUICKBTC",
        "price": "0.00280100"
    },
    {
        "symbol": "QUICKBNB",
        "price": "0.42200000"
    },
    {
        "symbol": "QUICKBUSD",
        "price": "48.80000000"
    },
    {
        "symbol": "C98USDT",
        "price": "0.18250000"
    },
    {
        "symbol": "C98BUSD",
        "price": "0.18250000"
    },
    {
        "symbol": "C98BNB",
        "price": "0.00065300"
    },
    {
        "symbol": "C98BTC",
        "price": "0.00001053"
    },
    {
        "symbol": "CLVBTC",
        "price": "0.00000330"
    },
    {
        "symbol": "CLVBNB",
        "price": "0.00020610"
    },
    {
        "symbol": "CLVBUSD",
        "price": "0.05715000"
    },
    {
        "symbol": "CLVUSDT",
        "price": "0.05702000"
    },
    {
        "symbol": "QNTBTC",
        "price": "0.00704300"
    },
    {
        "symbol": "QNTBNB",
        "price": "0.44150000"
    },
    {
        "symbol": "QNTBUSD",
        "price": "122.10000000"
    },
    {
        "symbol": "QNTUSDT",
        "price": "122.00000000"
    },
    {
        "symbol": "FLOWBTC",
        "price": "0.00004626"
    },
    {
        "symbol": "FLOWBNB",
        "price": "0.00288600"
    },
    {
        "symbol": "FLOWBUSD",
        "price": "0.80500000"
    },
    {
        "symbol": "FLOWUSDT",
        "price": "0.80400000"
    },
    {
        "symbol": "XECBUSD",
        "price": "0.00002572"
    },
    {
        "symbol": "AXSBRL",
        "price": "39.50000000"
    },
    {
        "symbol": "AXSAUD",
        "price": "10.79000000"
    },
    {
        "symbol": "TVKUSDT",
        "price": "0.03310000"
    },
    {
        "symbol": "MINABTC",
        "price": "0.00002793"
    },
    {
        "symbol": "MINABNB",
        "price": "0.00173500"
    },
    {
        "symbol": "MINABUSD",
        "price": "0.48400000"
    },
    {
        "symbol": "MINAUSDT",
        "price": "0.48400000"
    },
    {
        "symbol": "RAYBNB",
        "price": "0.00059400"
    },
    {
        "symbol": "RAYBUSD",
        "price": "0.16500000"
    },
    {
        "symbol": "RAYUSDT",
        "price": "0.16560000"
    },
    {
        "symbol": "FARMBTC",
        "price": "0.00186400"
    },
    {
        "symbol": "FARMBNB",
        "price": "0.15150000"
    },
    {
        "symbol": "FARMBUSD",
        "price": "32.20000000"
    },
    {
        "symbol": "FARMUSDT",
        "price": "32.20000000"
    },
    {
        "symbol": "ALPACABTC",
        "price": "0.00001511"
    },
    {
        "symbol": "ALPACABNB",
        "price": "0.00094400"
    },
    {
        "symbol": "ALPACABUSD",
        "price": "0.26150000"
    },
    {
        "symbol": "ALPACAUSDT",
        "price": "0.26100000"
    },
    {
        "symbol": "TLMTRY",
        "price": "0.26090000"
    },
    {
        "symbol": "QUICKUSDT",
        "price": "48.60000000"
    },
    {
        "symbol": "ORNBUSD",
        "price": "0.80400000"
    },
    {
        "symbol": "MBOXBTC",
        "price": "0.00002369"
    },
    {
        "symbol": "MBOXBNB",
        "price": "0.00147500"
    },
    {
        "symbol": "MBOXBUSD",
        "price": "0.41100000"
    },
    {
        "symbol": "MBOXUSDT",
        "price": "0.41100000"
    },
    {
        "symbol": "VGXBTC",
        "price": "0.00002524"
    },
    {
        "symbol": "VGXETH",
        "price": "0.00034800"
    },
    {
        "symbol": "FORUSDT",
        "price": "0.01669000"
    },
    {
        "symbol": "REQUSDT",
        "price": "0.09100000"
    },
    {
        "symbol": "GHSTUSDT",
        "price": "1.00100000"
    },
    {
        "symbol": "TRURUB",
        "price": "2.14000000"
    },
    {
        "symbol": "FISBRL",
        "price": "2.18500000"
    },
    {
        "symbol": "WAXPUSDT",
        "price": "0.04920000"
    },
    {
        "symbol": "WAXPBUSD",
        "price": "0.04910000"
    },
    {
        "symbol": "WAXPBNB",
        "price": "0.00017670"
    },
    {
        "symbol": "WAXPBTC",
        "price": "0.00000284"
    },
    {
        "symbol": "TRIBEBTC",
        "price": "0.00000743"
    },
    {
        "symbol": "TRIBEBNB",
        "price": "0.00143100"
    },
    {
        "symbol": "TRIBEBUSD",
        "price": "0.20570000"
    },
    {
        "symbol": "TRIBEUSDT",
        "price": "0.20180000"
    },
    {
        "symbol": "GNOUSDT",
        "price": "92.00000000"
    },
    {
        "symbol": "GNOBUSD",
        "price": "304.10000000"
    },
    {
        "symbol": "GNOBNB",
        "price": "0.86500000"
    },
    {
        "symbol": "GNOBTC",
        "price": "0.00562400"
    },
    {
        "symbol": "ARPATRY",
        "price": "0.55300000"
    },
    {
        "symbol": "PROMBTC",
        "price": "0.00023360"
    },
    {
        "symbol": "MTLBUSD",
        "price": "0.74200000"
    },
    {
        "symbol": "OGNBUSD",
        "price": "0.10040000"
    },
    {
        "symbol": "XECUSDT",
        "price": "0.00002574"
    },
    {
        "symbol": "C98BRL",
        "price": "0.96500000"
    },
    {
        "symbol": "SOLAUD",
        "price": "23.90000000"
    },
    {
        "symbol": "XRPBIDR",
        "price": "5547.00"
    },
    {
        "symbol": "POLYBUSD",
        "price": "0.27000000"
    },
    {
        "symbol": "ELFUSDT",
        "price": "0.16970000"
    },
    {
        "symbol": "DYDXUSDT",
        "price": "1.33500000"
    },
    {
        "symbol": "DYDXBUSD",
        "price": "1.33700000"
    },
    {
        "symbol": "DYDXBNB",
        "price": "0.00479500"
    },
    {
        "symbol": "DYDXBTC",
        "price": "0.00007700"
    },
    {
        "symbol": "ELFBUSD",
        "price": "0.16980000"
    },
    {
        "symbol": "POLYUSDT",
        "price": "0.26960000"
    },
    {
        "symbol": "IDEXUSDT",
        "price": "0.04067000"
    },
    {
        "symbol": "VIDTUSDT",
        "price": "0.02941000"
    },
    {
        "symbol": "SOLBIDR",
        "price": "259522.00"
    },
    {
        "symbol": "AXSBIDR",
        "price": "116011.00"
    },
    {
        "symbol": "BTCUSDP",
        "price": "19435.03000000"
    },
    {
        "symbol": "ETHUSDP",
        "price": "1344.37000000"
    },
    {
        "symbol": "BNBUSDP",
        "price": "282.09000000"
    },
    {
        "symbol": "USDPBUSD",
        "price": "1.00000000"
    },
    {
        "symbol": "USDPUSDT",
        "price": "0.99970000"
    },
    {
        "symbol": "GALAUSDT",
        "price": "0.04499000"
    },
    {
        "symbol": "GALABUSD",
        "price": "0.04499000"
    },
    {
        "symbol": "GALABNB",
        "price": "0.00016174"
    },
    {
        "symbol": "GALABTC",
        "price": "0.00000259"
    },
    {
        "symbol": "FTMBIDR",
        "price": "3413.00"
    },
    {
        "symbol": "ALGOBIDR",
        "price": "20095.00"
    },
    {
        "symbol": "CAKEAUD",
        "price": "25.61000000"
    },
    {
        "symbol": "KSMAUD",
        "price": "234.80000000"
    },
    {
        "symbol": "WAVESRUB",
        "price": "1190.49000000"
    },
    {
        "symbol": "SUNBUSD",
        "price": "0.00519000"
    },
    {
        "symbol": "ILVUSDT",
        "price": "43.39000000"
    },
    {
        "symbol": "ILVBUSD",
        "price": "43.40000000"
    },
    {
        "symbol": "ILVBNB",
        "price": "0.15610000"
    },
    {
        "symbol": "ILVBTC",
        "price": "0.00250400"
    },
    {
        "symbol": "RENBUSD",
        "price": "0.06808700"
    },
    {
        "symbol": "YGGUSDT",
        "price": "0.19930000"
    },
    {
        "symbol": "YGGBUSD",
        "price": "0.19960000"
    },
    {
        "symbol": "YGGBNB",
        "price": "0.00071600"
    },
    {
        "symbol": "YGGBTC",
        "price": "0.00001148"
    },
    {
        "symbol": "STXBUSD",
        "price": "0.23600000"
    },
    {
        "symbol": "SYSUSDT",
        "price": "0.10960000"
    },
    {
        "symbol": "DFUSDT",
        "price": "0.04100000"
    },
    {
        "symbol": "SOLUSDC",
        "price": "33.68000000"
    },
    {
        "symbol": "ARPARUB",
        "price": "2.06000000"
    },
    {
        "symbol": "LTCUAH",
        "price": "3269.00000000"
    },
    {
        "symbol": "FETBUSD",
        "price": "0.15520000"
    },
    {
        "symbol": "ARPABUSD",
        "price": "0.02908000"
    },
    {
        "symbol": "LSKBUSD",
        "price": "0.75400000"
    },
    {
        "symbol": "AVAXBIDR",
        "price": "266752.00"
    },
    {
        "symbol": "ALICEBIDR",
        "price": "29103.00"
    },
    {
        "symbol": "FIDAUSDT",
        "price": "0.33770000"
    },
    {
        "symbol": "FIDABUSD",
        "price": "0.33810000"
    },
    {
        "symbol": "FIDABNB",
        "price": "0.00543000"
    },
    {
        "symbol": "FIDABTC",
        "price": "0.00001940"
    },
    {
        "symbol": "DENTBUSD",
        "price": "0.00072600"
    },
    {
        "symbol": "FRONTUSDT",
        "price": "0.18710000"
    },
    {
        "symbol": "CVPUSDT",
        "price": "0.34400000"
    },
    {
        "symbol": "AGLDBTC",
        "price": "0.00001616"
    },
    {
        "symbol": "AGLDBNB",
        "price": "0.00190000"
    },
    {
        "symbol": "AGLDBUSD",
        "price": "0.27900000"
    },
    {
        "symbol": "AGLDUSDT",
        "price": "0.28000000"
    },
    {
        "symbol": "RADBTC",
        "price": "0.00009260"
    },
    {
        "symbol": "RADBNB",
        "price": "0.00582000"
    },
    {
        "symbol": "RADBUSD",
        "price": "1.60500000"
    },
    {
        "symbol": "RADUSDT",
        "price": "1.61100000"
    },
    {
        "symbol": "UNIAUD",
        "price": "34.47000000"
    },
    {
        "symbol": "HIVEBUSD",
        "price": "0.28790000"
    },
    {
        "symbol": "STPTBUSD",
        "price": "0.02977000"
    },
    {
        "symbol": "BETABTC",
        "price": "0.00000420"
    },
    {
        "symbol": "BETABNB",
        "price": "0.00026160"
    },
    {
        "symbol": "BETABUSD",
        "price": "0.07283000"
    },
    {
        "symbol": "BETAUSDT",
        "price": "0.07282000"
    },
    {
        "symbol": "SHIBAUD",
        "price": "0.00001277"
    },
    {
        "symbol": "RAREBTC",
        "price": "0.00000594"
    },
    {
        "symbol": "RAREBNB",
        "price": "0.00069100"
    },
    {
        "symbol": "RAREBUSD",
        "price": "0.10300000"
    },
    {
        "symbol": "RAREUSDT",
        "price": "0.10300000"
    },
    {
        "symbol": "AVAXBRL",
        "price": "65.70000000"
    },
    {
        "symbol": "AVAXAUD",
        "price": "17.95000000"
    },
    {
        "symbol": "LUNAAUD",
        "price": "0.00009000"
    },
    {
        "symbol": "TROYBUSD",
        "price": "0.00263400"
    },
    {
        "symbol": "AXSETH",
        "price": "0.00560000"
    },
    {
        "symbol": "FTMETH",
        "price": "0.00018260"
    },
    {
        "symbol": "SOLETH",
        "price": "0.01247000"
    },
    {
        "symbol": "SSVBTC",
        "price": "0.00080020"
    },
    {
        "symbol": "SSVETH",
        "price": "0.01039500"
    },
    {
        "symbol": "LAZIOTRY",
        "price": "61.55900000"
    },
    {
        "symbol": "LAZIOEUR",
        "price": "3.01040000"
    },
    {
        "symbol": "LAZIOBTC",
        "price": "0.00018555"
    },
    {
        "symbol": "LAZIOUSDT",
        "price": "3.23680000"
    },
    {
        "symbol": "CHESSBTC",
        "price": "0.00001107"
    },
    {
        "symbol": "CHESSBNB",
        "price": "0.00188500"
    },
    {
        "symbol": "CHESSBUSD",
        "price": "0.19100000"
    },
    {
        "symbol": "CHESSUSDT",
        "price": "0.19100000"
    },
    {
        "symbol": "FTMAUD",
        "price": "0.35210000"
    },
    {
        "symbol": "FTMBRL",
        "price": "1.29000000"
    },
    {
        "symbol": "SCRTBUSD",
        "price": "0.67200000"
    },
    {
        "symbol": "ADXUSDT",
        "price": "0.12280000"
    },
    {
        "symbol": "AUCTIONUSDT",
        "price": "4.40000000"
    },
    {
        "symbol": "CELOBUSD",
        "price": "0.54900000"
    },
    {
        "symbol": "FTMRUB",
        "price": "17.35000000"
    },
    {
        "symbol": "NUAUD",
        "price": "0.76900000"
    },
    {
        "symbol": "NURUB",
        "price": "41.13000000"
    },
    {
        "symbol": "REEFTRY",
        "price": "0.04930000"
    },
    {
        "symbol": "REEFBIDR",
        "price": "162.00"
    },
    {
        "symbol": "SHIBDOGE",
        "price": "0.00011480"
    },
    {
        "symbol": "DARUSDT",
        "price": "0.13359000"
    },
    {
        "symbol": "DARBUSD",
        "price": "0.13369000"
    },
    {
        "symbol": "DARBNB",
        "price": "0.00048094"
    },
    {
        "symbol": "DARBTC",
        "price": "0.00000771"
    },
    {
        "symbol": "BNXBTC",
        "price": "0.00419300"
    },
    {
        "symbol": "BNXBNB",
        "price": "0.26020000"
    },
    {
        "symbol": "BNXBUSD",
        "price": "72.50000000"
    },
    {
        "symbol": "BNXUSDT",
        "price": "72.70000000"
    },
    {
        "symbol": "RGTUSDT",
        "price": "14.44000000"
    },
    {
        "symbol": "RGTBTC",
        "price": "0.00037960"
    },
    {
        "symbol": "RGTBUSD",
        "price": "14.46000000"
    },
    {
        "symbol": "RGTBNB",
        "price": "0.03997000"
    },
    {
        "symbol": "LAZIOBUSD",
        "price": "3.23590000"
    },
    {
        "symbol": "OXTBUSD",
        "price": "0.07150000"
    },
    {
        "symbol": "MANATRY",
        "price": "7.82000000"
    },
    {
        "symbol": "ALGORUB",
        "price": "14.48000000"
    },
    {
        "symbol": "SHIBUAH",
        "price": "0.00079300"
    },
    {
        "symbol": "LUNABIDR",
        "price": "0.88"
    },
    {
        "symbol": "AUDUSDC",
        "price": "0.64770000"
    },
    {
        "symbol": "MOVRBTC",
        "price": "0.00038020"
    },
    {
        "symbol": "MOVRBNB",
        "price": "0.15520000"
    },
    {
        "symbol": "MOVRBUSD",
        "price": "6.59000000"
    },
    {
        "symbol": "MOVRUSDT",
        "price": "6.59000000"
    },
    {
        "symbol": "CITYBTC",
        "price": "0.00024910"
    },
    {
        "symbol": "CITYBNB",
        "price": "0.01555000"
    },
    {
        "symbol": "CITYBUSD",
        "price": "4.32000000"
    },
    {
        "symbol": "CITYUSDT",
        "price": "4.33000000"
    },
    {
        "symbol": "ENSBTC",
        "price": "0.00071700"
    },
    {
        "symbol": "ENSBNB",
        "price": "0.04463000"
    },
    {
        "symbol": "ENSBUSD",
        "price": "12.38000000"
    },
    {
        "symbol": "ENSUSDT",
        "price": "12.40000000"
    },
    {
        "symbol": "SANDETH",
        "price": "0.00039550"
    },
    {
        "symbol": "DOTETH",
        "price": "0.00372400"
    },
    {
        "symbol": "MATICETH",
        "price": "0.00064340"
    },
    {
        "symbol": "ANKRBUSD",
        "price": "0.02090000"
    },
    {
        "symbol": "SANDTRY",
        "price": "10.07000000"
    },
    {
        "symbol": "MANABRL",
        "price": "2.17000000"
    },
    {
        "symbol": "KP3RUSDT",
        "price": "67.06000000"
    },
    {
        "symbol": "QIUSDT",
        "price": "0.00710000"
    },
    {
        "symbol": "QIBUSD",
        "price": "0.00709000"
    },
    {
        "symbol": "QIBNB",
        "price": "0.00009910"
    },
    {
        "symbol": "QIBTC",
        "price": "0.00000040"
    },
    {
        "symbol": "PORTOBTC",
        "price": "0.00015506"
    },
    {
        "symbol": "PORTOUSDT",
        "price": "2.69200000"
    },
    {
        "symbol": "PORTOTRY",
        "price": "51.26000000"
    },
    {
        "symbol": "PORTOEUR",
        "price": "2.50290000"
    },
    {
        "symbol": "POWRUSDT",
        "price": "0.13370000"
    },
    {
        "symbol": "POWRBUSD",
        "price": "0.13340000"
    },
    {
        "symbol": "AVAXETH",
        "price": "0.00931000"
    },
    {
        "symbol": "SLPTRY",
        "price": "0.04290000"
    },
    {
        "symbol": "FISTRY",
        "price": "8.87000000"
    },
    {
        "symbol": "LRCTRY",
        "price": "4.25000000"
    },
    {
        "symbol": "CHRETH",
        "price": "0.00009300"
    },
    {
        "symbol": "FISBIDR",
        "price": "9124.00"
    },
    {
        "symbol": "VGXUSDT",
        "price": "0.30900000"
    },
    {
        "symbol": "GALAETH",
        "price": "0.00003364"
    },
    {
        "symbol": "JASMYUSDT",
        "price": "0.00402400"
    },
    {
        "symbol": "JASMYBUSD",
        "price": "0.00402500"
    },
    {
        "symbol": "JASMYBNB",
        "price": "0.00001446"
    },
    {
        "symbol": "JASMYBTC",
        "price": "0.00000023"
    },
    {
        "symbol": "AMPBTC",
        "price": "0.00000020"
    },
    {
        "symbol": "AMPBNB",
        "price": "0.00003999"
    },
    {
        "symbol": "AMPBUSD",
        "price": "0.00349000"
    },
    {
        "symbol": "AMPUSDT",
        "price": "0.00349000"
    },
    {
        "symbol": "PLABTC",
        "price": "0.00000933"
    },
    {
        "symbol": "PLABNB",
        "price": "0.00058500"
    },
    {
        "symbol": "PLABUSD",
        "price": "0.16200000"
    },
    {
        "symbol": "PLAUSDT",
        "price": "0.16300000"
    },
    {
        "symbol": "PYRBTC",
        "price": "0.00018660"
    },
    {
        "symbol": "PYRBUSD",
        "price": "3.24000000"
    },
    {
        "symbol": "PYRUSDT",
        "price": "3.25000000"
    },
    {
        "symbol": "RNDRBTC",
        "price": "0.00002550"
    },
    {
        "symbol": "RNDRUSDT",
        "price": "0.44200000"
    },
    {
        "symbol": "RNDRBUSD",
        "price": "0.44200000"
    },
    {
        "symbol": "ALCXBTC",
        "price": "0.00086000"
    },
    {
        "symbol": "ALCXBUSD",
        "price": "14.90000000"
    },
    {
        "symbol": "ALCXUSDT",
        "price": "15.00000000"
    },
    {
        "symbol": "SANTOSBTC",
        "price": "0.00026798"
    },
    {
        "symbol": "SANTOSUSDT",
        "price": "4.64600000"
    },
    {
        "symbol": "SANTOSBRL",
        "price": "24.52000000"
    },
    {
        "symbol": "SANTOSTRY",
        "price": "88.52000000"
    },
    {
        "symbol": "MCBTC",
        "price": "0.00001626"
    },
    {
        "symbol": "MCBUSD",
        "price": "0.28100000"
    },
    {
        "symbol": "MCUSDT",
        "price": "0.28100000"
    },
    {
        "symbol": "BELTRY",
        "price": "8.29000000"
    },
    {
        "symbol": "COCOSBUSD",
        "price": "0.54800000"
    },
    {
        "symbol": "DENTTRY",
        "price": "0.01383000"
    },
    {
        "symbol": "ENJTRY",
        "price": "5.59000000"
    },
    {
        "symbol": "NEORUB",
        "price": "487.00000000"
    },
    {
        "symbol": "SANDAUD",
        "price": "0.76160000"
    },
    {
        "symbol": "SLPBIDR",
        "price": "32.30"
    },
    {
        "symbol": "ANYBTC",
        "price": "0.00026020"
    },
    {
        "symbol": "ANYBUSD",
        "price": "12.33000000"
    },
    {
        "symbol": "ANYUSDT",
        "price": "12.30000000"
    },
    {
        "symbol": "BICOBTC",
        "price": "0.00001656"
    },
    {
        "symbol": "BICOBUSD",
        "price": "0.28700000"
    },
    {
        "symbol": "BICOUSDT",
        "price": "0.28700000"
    },
    {
        "symbol": "FLUXBTC",
        "price": "0.00003085"
    },
    {
        "symbol": "FLUXBUSD",
        "price": "0.53400000"
    },
    {
        "symbol": "FLUXUSDT",
        "price": "0.53400000"
    },
    {
        "symbol": "ALICETRY",
        "price": "23.49000000"
    },
    {
        "symbol": "FXSUSDT",
        "price": "5.71900000"
    },
    {
        "symbol": "GALABRL",
        "price": "0.23710000"
    },
    {
        "symbol": "GALATRY",
        "price": "0.86000000"
    },
    {
        "symbol": "LUNATRY",
        "price": "29.41000000"
    },
    {
        "symbol": "REQBUSD",
        "price": "0.09080000"
    },
    {
        "symbol": "SANDBRL",
        "price": "2.79000000"
    },
    {
        "symbol": "MANABIDR",
        "price": "10781.00"
    },
    {
        "symbol": "SANDBIDR",
        "price": "6598.00"
    },
    {
        "symbol": "VOXELBTC",
        "price": "0.00001031"
    },
    {
        "symbol": "VOXELBNB",
        "price": "0.00064080"
    },
    {
        "symbol": "VOXELBUSD",
        "price": "0.17840000"
    },
    {
        "symbol": "VOXELUSDT",
        "price": "0.17850000"
    },
    {
        "symbol": "COSBUSD",
        "price": "0.00470000"
    },
    {
        "symbol": "CTXCBUSD",
        "price": "0.19450000"
    },
    {
        "symbol": "FTMTRY",
        "price": "4.65400000"
    },
    {
        "symbol": "MANABNB",
        "price": "0.00155000"
    },
    {
        "symbol": "MINATRY",
        "price": "9.23000000"
    },
    {
        "symbol": "XTZTRY",
        "price": "15.91000000"
    },
    {
        "symbol": "HIGHBTC",
        "price": "0.00005401"
    },
    {
        "symbol": "HIGHBUSD",
        "price": "0.93600000"
    },
    {
        "symbol": "HIGHUSDT",
        "price": "0.94000000"
    },
    {
        "symbol": "CVXBTC",
        "price": "0.00019840"
    },
    {
        "symbol": "CVXBUSD",
        "price": "3.45300000"
    },
    {
        "symbol": "CVXUSDT",
        "price": "3.45200000"
    },
    {
        "symbol": "PEOPLEBTC",
        "price": "0.00000134"
    },
    {
        "symbol": "PEOPLEBUSD",
        "price": "0.02309000"
    },
    {
        "symbol": "PEOPLEUSDT",
        "price": "0.02307000"
    },
    {
        "symbol": "OOKIBUSD",
        "price": "0.00330000"
    },
    {
        "symbol": "OOKIUSDT",
        "price": "0.00330000"
    },
    {
        "symbol": "COCOSTRY",
        "price": "10.44000000"
    },
    {
        "symbol": "GXSBNB",
        "price": "0.00453800"
    },
    {
        "symbol": "LINKBNB",
        "price": "0.02213000"
    },
    {
        "symbol": "LUNAETH",
        "price": "0.00000003"
    },
    {
        "symbol": "MDTBUSD",
        "price": "0.02174000"
    },
    {
        "symbol": "NULSBUSD",
        "price": "0.19840000"
    },
    {
        "symbol": "SPELLBTC",
        "price": "0.00000012"
    },
    {
        "symbol": "SPELLUSDT",
        "price": "0.00060090"
    },
    {
        "symbol": "SPELLBUSD",
        "price": "0.00060100"
    },
    {
        "symbol": "USTBTC",
        "price": "0.00002476"
    },
    {
        "symbol": "USTBUSD",
        "price": "0.06762946"
    },
    {
        "symbol": "USTUSDT",
        "price": "0.24577900"
    },
    {
        "symbol": "JOEBTC",
        "price": "0.00000864"
    },
    {
        "symbol": "JOEBUSD",
        "price": "0.14980000"
    },
    {
        "symbol": "JOEUSDT",
        "price": "0.14980000"
    },
    {
        "symbol": "ATOMETH",
        "price": "0.00835300"
    },
    {
        "symbol": "DUSKBUSD",
        "price": "0.09210000"
    },
    {
        "symbol": "EGLDETH",
        "price": "0.02653000"
    },
    {
        "symbol": "ICPETH",
        "price": "0.00320000"
    },
    {
        "symbol": "LUNABRL",
        "price": "0.00030000"
    },
    {
        "symbol": "LUNAUST",
        "price": "0.00004900"
    },
    {
        "symbol": "NEARETH",
        "price": "0.00125900"
    },
    {
        "symbol": "ROSEBNB",
        "price": "0.00015340"
    },
    {
        "symbol": "VOXELETH",
        "price": "0.00020220"
    },
    {
        "symbol": "ALICEBNB",
        "price": "0.00445000"
    },
    {
        "symbol": "ATOMTRY",
        "price": "212.30000000"
    },
    {
        "symbol": "ETHUST",
        "price": "8239.72000000"
    },
    {
        "symbol": "GALAAUD",
        "price": "0.06515000"
    },
    {
        "symbol": "LRCBNB",
        "price": "0.00080100"
    },
    {
        "symbol": "ONEETH",
        "price": "0.00000912"
    },
    {
        "symbol": "OOKIBNB",
        "price": "0.00001491"
    },
    {
        "symbol": "ACHBTC",
        "price": "0.00000049"
    },
    {
        "symbol": "ACHBUSD",
        "price": "0.00840000"
    },
    {
        "symbol": "ACHUSDT",
        "price": "0.00839000"
    },
    {
        "symbol": "IMXBTC",
        "price": "0.00002777"
    },
    {
        "symbol": "IMXBUSD",
        "price": "0.48100000"
    },
    {
        "symbol": "IMXUSDT",
        "price": "0.48100000"
    },
    {
        "symbol": "GLMRBTC",
        "price": "0.00001954"
    },
    {
        "symbol": "GLMRBUSD",
        "price": "0.33890000"
    },
    {
        "symbol": "GLMRUSDT",
        "price": "0.33850000"
    },
    {
        "symbol": "ATOMBIDR",
        "price": "307866.00"
    },
    {
        "symbol": "DYDXETH",
        "price": "0.00159100"
    },
    {
        "symbol": "FARMETH",
        "price": "0.03152000"
    },
    {
        "symbol": "FORBNB",
        "price": "0.00009710"
    },
    {
        "symbol": "ICPTRY",
        "price": "81.60000000"
    },
    {
        "symbol": "JASMYETH",
        "price": "0.00000302"
    },
    {
        "symbol": "LINABNB",
        "price": "0.00007811"
    },
    {
        "symbol": "OOKIETH",
        "price": "0.00000247"
    },
    {
        "symbol": "ROSEETH",
        "price": "0.00003040"
    },
    {
        "symbol": "UMABUSD",
        "price": "1.70400000"
    },
    {
        "symbol": "UNIETH",
        "price": "0.00442000"
    },
    {
        "symbol": "XTZETH",
        "price": "0.00062700"
    },
    {
        "symbol": "LOKABTC",
        "price": "0.00002201"
    },
    {
        "symbol": "LOKABNB",
        "price": "0.00137220"
    },
    {
        "symbol": "LOKABUSD",
        "price": "0.38170000"
    },
    {
        "symbol": "LOKAUSDT",
        "price": "0.38150000"
    },
    {
        "symbol": "ATOMBRL",
        "price": "58.51000000"
    },
    {
        "symbol": "BNBUST",
        "price": "1129.30000000"
    },
    {
        "symbol": "CRVETH",
        "price": "0.00049200"
    },
    {
        "symbol": "HIGHBNB",
        "price": "0.00338300"
    },
    {
        "symbol": "NEARRUB",
        "price": "119.80000000"
    },
    {
        "symbol": "ROSETRY",
        "price": "0.77500000"
    },
    {
        "symbol": "SCRTUSDT",
        "price": "0.67100000"
    },
    {
        "symbol": "API3BTC",
        "price": "0.00007260"
    },
    {
        "symbol": "API3BUSD",
        "price": "1.25600000"
    },
    {
        "symbol": "API3USDT",
        "price": "1.25900000"
    },
    {
        "symbol": "BTTCUSDT",
        "price": "0.00000066"
    },
    {
        "symbol": "BTTCUSDC",
        "price": "0.00000078"
    },
    {
        "symbol": "BTTCTRY",
        "price": "0.00001245"
    },
    {
        "symbol": "ACABTC",
        "price": "0.00000660"
    },
    {
        "symbol": "ACABUSD",
        "price": "0.11410000"
    },
    {
        "symbol": "ACAUSDT",
        "price": "0.11400000"
    },
    {
        "symbol": "ANCBTC",
        "price": "0.00000186"
    },
    {
        "symbol": "ANCBUSD",
        "price": "0.03630000"
    },
    {
        "symbol": "ANCUSDT",
        "price": "0.03151000"
    },
    {
        "symbol": "BDOTDOT",
        "price": "0.74010000"
    },
    {
        "symbol": "XNOBTC",
        "price": "0.00004233"
    },
    {
        "symbol": "XNOETH",
        "price": "0.00055040"
    },
    {
        "symbol": "XNOBUSD",
        "price": "0.73200000"
    },
    {
        "symbol": "XNOUSDT",
        "price": "0.73300000"
    },
    {
        "symbol": "COSTRY",
        "price": "0.08950000"
    },
    {
        "symbol": "KAVAETH",
        "price": "0.00056400"
    },
    {
        "symbol": "MCBNB",
        "price": "0.00100900"
    },
    {
        "symbol": "ONETRY",
        "price": "0.23200000"
    },
    {
        "symbol": "WOOBTC",
        "price": "0.00000870"
    },
    {
        "symbol": "WOOBNB",
        "price": "0.00054300"
    },
    {
        "symbol": "WOOBUSD",
        "price": "0.15110000"
    },
    {
        "symbol": "WOOUSDT",
        "price": "0.15090000"
    },
    {
        "symbol": "CELRETH",
        "price": "0.00000789"
    },
    {
        "symbol": "PEOPLEBNB",
        "price": "0.00008301"
    },
    {
        "symbol": "SLPBNB",
        "price": "0.00000884"
    },
    {
        "symbol": "SPELLBNB",
        "price": "0.00000404"
    },
    {
        "symbol": "SPELLTRY",
        "price": "0.01144000"
    },
    {
        "symbol": "TFUELBUSD",
        "price": "0.03670000"
    },
    {
        "symbol": "AXSTRY",
        "price": "142.30000000"
    },
    {
        "symbol": "DARTRY",
        "price": "2.54000000"
    },
    {
        "symbol": "NEARTRY",
        "price": "32.01000000"
    },
    {
        "symbol": "IDEXBNB",
        "price": "0.00014650"
    },
    {
        "symbol": "ALPINEEUR",
        "price": "2.01740000"
    },
    {
        "symbol": "ALPINETRY",
        "price": "41.50000000"
    },
    {
        "symbol": "ALPINEUSDT",
        "price": "2.17060000"
    },
    {
        "symbol": "ALPINEBTC",
        "price": "0.00012507"
    },
    {
        "symbol": "TUSDT",
        "price": "0.01740000"
    },
    {
        "symbol": "TBUSD",
        "price": "0.01750000"
    },
    {
        "symbol": "API3BNB",
        "price": "0.00533000"
    },
    {
        "symbol": "BETAETH",
        "price": "0.00005470"
    },
    {
        "symbol": "INJTRY",
        "price": "27.65000000"
    },
    {
        "symbol": "TLMBNB",
        "price": "0.00010990"
    },
    {
        "symbol": "ASTRBUSD",
        "price": "0.04200000"
    },
    {
        "symbol": "ASTRUSDT",
        "price": "0.04190000"
    },
    {
        "symbol": "API3TRY",
        "price": "24.00000000"
    },
    {
        "symbol": "GLMRBNB",
        "price": "0.00122000"
    },
    {
        "symbol": "MBOXTRY",
        "price": "7.81000000"
    },
    {
        "symbol": "NBTBIDR",
        "price": "72.90"
    },
    {
        "symbol": "NBTUSDT",
        "price": "0.00453000"
    },
    {
        "symbol": "GMTBTC",
        "price": "0.00001851"
    },
    {
        "symbol": "GMTBNB",
        "price": "0.00115400"
    },
    {
        "symbol": "GMTBUSD",
        "price": "0.32090000"
    },
    {
        "symbol": "GMTUSDT",
        "price": "0.32090000"
    },
    {
        "symbol": "ANCBNB",
        "price": "0.00012880"
    },
    {
        "symbol": "ATOMEUR",
        "price": "10.35800000"
    },
    {
        "symbol": "GALAEUR",
        "price": "0.04192000"
    },
    {
        "symbol": "KSMETH",
        "price": "0.02114000"
    },
    {
        "symbol": "UMATRY",
        "price": "32.50000000"
    },
    {
        "symbol": "KDABTC",
        "price": "0.00005630"
    },
    {
        "symbol": "KDABUSD",
        "price": "0.97800000"
    },
    {
        "symbol": "KDAUSDT",
        "price": "0.97600000"
    },
    {
        "symbol": "APEUSDT",
        "price": "4.69600000"
    },
    {
        "symbol": "APEBUSD",
        "price": "4.69700000"
    },
    {
        "symbol": "APEBTC",
        "price": "0.00027081"
    },
    {
        "symbol": "ALPINEBUSD",
        "price": "2.16770000"
    },
    {
        "symbol": "LUNAGBP",
        "price": "0.00005000"
    },
    {
        "symbol": "NEAREUR",
        "price": "1.56700000"
    },
    {
        "symbol": "TWTTRY",
        "price": "28.88000000"
    },
    {
        "symbol": "WAVESEUR",
        "price": "1.49100000"
    },
    {
        "symbol": "APEEUR",
        "price": "4.37800000"
    },
    {
        "symbol": "APEGBP",
        "price": "3.30500000"
    },
    {
        "symbol": "APETRY",
        "price": "89.40000000"
    },
    {
        "symbol": "BSWUSDT",
        "price": "0.18680000"
    },
    {
        "symbol": "BSWBUSD",
        "price": "0.18700000"
    },
    {
        "symbol": "BSWBNB",
        "price": "0.00067120"
    },
    {
        "symbol": "APEBNB",
        "price": "0.01693000"
    },
    {
        "symbol": "GMTBRL",
        "price": "1.70100000"
    },
    {
        "symbol": "GMTETH",
        "price": "0.00024070"
    },
    {
        "symbol": "JASMYTRY",
        "price": "0.07655000"
    },
    {
        "symbol": "SANTOSBUSD",
        "price": "4.64600000"
    },
    {
        "symbol": "APEAUD",
        "price": "6.83100000"
    },
    {
        "symbol": "BIFIUSDT",
        "price": "373.10000000"
    },
    {
        "symbol": "GMTEUR",
        "price": "0.29850000"
    },
    {
        "symbol": "IMXBNB",
        "price": "0.00173000"
    },
    {
        "symbol": "RUNEETH",
        "price": "0.00109800"
    },
    {
        "symbol": "AVAXGBP",
        "price": "10.15000000"
    },
    {
        "symbol": "MULTIBTC",
        "price": "0.00027900"
    },
    {
        "symbol": "MULTIBUSD",
        "price": "4.83000000"
    },
    {
        "symbol": "MULTIUSDT",
        "price": "4.82000000"
    },
    {
        "symbol": "APEETH",
        "price": "0.00351900"
    },
    {
        "symbol": "BSWETH",
        "price": "0.00014000"
    },
    {
        "symbol": "FILTRY",
        "price": "73.36000000"
    },
    {
        "symbol": "FTMEUR",
        "price": "0.22740000"
    },
    {
        "symbol": "GMTGBP",
        "price": "0.26340000"
    },
    {
        "symbol": "ZILTRY",
        "price": "0.46700000"
    },
    {
        "symbol": "GMTTRY",
        "price": "6.11000000"
    },
    {
        "symbol": "WAVESTRY",
        "price": "30.40000000"
    },
    {
        "symbol": "BTCUST",
        "price": "121179.88000000"
    },
    {
        "symbol": "ASTRBTC",
        "price": "0.00000242"
    },
    {
        "symbol": "ASTRETH",
        "price": "0.00003108"
    },
    {
        "symbol": "BSWTRY",
        "price": "3.54000000"
    },
    {
        "symbol": "FTTETH",
        "price": "0.00114100"
    },
    {
        "symbol": "FUNBNB",
        "price": "0.00002250"
    },
    {
        "symbol": "PORTOBUSD",
        "price": "2.69500000"
    },
    {
        "symbol": "STEEMUSDT",
        "price": "0.15850000"
    },
    {
        "symbol": "ZILEUR",
        "price": "0.02063000"
    },
    {
        "symbol": "APEBRL",
        "price": "24.84000000"
    },
    {
        "symbol": "AUDIOTRY",
        "price": "3.01700000"
    },
    {
        "symbol": "BTTCBUSD",
        "price": "0.00000065"
    },
    {
        "symbol": "GMTAUD",
        "price": "0.46300000"
    },
    {
        "symbol": "MBLBUSD",
        "price": "0.00249800"
    },
    {
        "symbol": "MOBUSDT",
        "price": "0.91200000"
    },
    {
        "symbol": "MOBBUSD",
        "price": "0.91200000"
    },
    {
        "symbol": "MOBBTC",
        "price": "0.00005258"
    },
    {
        "symbol": "NEXOUSDT",
        "price": "0.74000000"
    },
    {
        "symbol": "NEXOBUSD",
        "price": "0.73800000"
    },
    {
        "symbol": "NEXOBTC",
        "price": "0.00004261"
    },
    {
        "symbol": "REIUSDT",
        "price": "0.02310000"
    },
    {
        "symbol": "REIBNB",
        "price": "0.00008450"
    },
    {
        "symbol": "REIETH",
        "price": "0.00001928"
    },
    {
        "symbol": "GALUSDT",
        "price": "1.27700000"
    },
    {
        "symbol": "GALBUSD",
        "price": "1.27500000"
    },
    {
        "symbol": "GALBNB",
        "price": "0.00457500"
    },
    {
        "symbol": "GALBTC",
        "price": "0.00007364"
    },
    {
        "symbol": "JASMYEUR",
        "price": "0.00374400"
    },
    {
        "symbol": "KNCBNB",
        "price": "0.00194500"
    },
    {
        "symbol": "SHIBGBP",
        "price": "0.00000696"
    },
    {
        "symbol": "GALEUR",
        "price": "1.20700000"
    },
    {
        "symbol": "GALTRY",
        "price": "24.30000000"
    },
    {
        "symbol": "LDOBUSD",
        "price": "1.89100000"
    },
    {
        "symbol": "LDOUSDT",
        "price": "1.88900000"
    },
    {
        "symbol": "LDOBTC",
        "price": "0.00010896"
    },
    {
        "symbol": "ENSTRY",
        "price": "236.00000000"
    },
    {
        "symbol": "DAREUR",
        "price": "0.12422000"
    },
    {
        "symbol": "DARETH",
        "price": "0.00010140"
    },
    {
        "symbol": "ALGOETH",
        "price": "0.00015300"
    },
    {
        "symbol": "ALGOTRY",
        "price": "3.87300000"
    },
    {
        "symbol": "GALETH",
        "price": "0.00095500"
    },
    {
        "symbol": "EPXUSDT",
        "price": "0.00030500"
    },
    {
        "symbol": "EPXBUSD",
        "price": "0.00030600"
    },
    {
        "symbol": "RUNETRY",
        "price": "27.89000000"
    },
    {
        "symbol": "GALBRL",
        "price": "6.74000000"
    },
    {
        "symbol": "STEEMBUSD",
        "price": "0.15790000"
    },
    {
        "symbol": "CVCBUSD",
        "price": "0.08180000"
    },
    {
        "symbol": "REIBUSD",
        "price": "0.02310000"
    },
    {
        "symbol": "DREPBUSD",
        "price": "0.31100000"
    },
    {
        "symbol": "AKROBUSD",
        "price": "0.00310000"
    },
    {
        "symbol": "PUNDIXBUSD",
        "price": "0.34300000"
    },
    {
        "symbol": "LUNCBUSD",
        "price": "0.00017000"
    },
    {
        "symbol": "USTCBUSD",
        "price": "0.02153941"
    },
    {
        "symbol": "OPBTC",
        "price": "0.00007304"
    },
    {
        "symbol": "OPBUSD",
        "price": "1.26700000"
    },
    {
        "symbol": "OPUSDT",
        "price": "1.26700000"
    },
    {
        "symbol": "OGBUSD",
        "price": "2.47100000"
    },
    {
        "symbol": "KEYBUSD",
        "price": "0.00305200"
    },
    {
        "symbol": "ASRBUSD",
        "price": "2.53200000"
    },
    {
        "symbol": "FIROBUSD",
        "price": "1.72300000"
    },
    {
        "symbol": "NKNBUSD",
        "price": "0.08970000"
    },
    {
        "symbol": "OPBNB",
        "price": "0.00456300"
    },
    {
        "symbol": "OPEUR",
        "price": "1.19200000"
    },
    {
        "symbol": "GTOBUSD",
        "price": "0.01996000"
    },
    {
        "symbol": "SNXETH",
        "price": "0.00132600"
    },
    {
        "symbol": "WBTCBUSD",
        "price": "17361.59000000"
    },
    {
        "symbol": "BELETH",
        "price": "0.00032430"
    },
    {
        "symbol": "LITETH",
        "price": "0.00058840"
    },
    {
        "symbol": "LEVERUSDT",
        "price": "0.00192700"
    },
    {
        "symbol": "LEVERBUSD",
        "price": "0.00192800"
    },
    {
        "symbol": "BURGERETH",
        "price": "0.00041900"
    },
    {
        "symbol": "PEOPLEETH",
        "price": "0.00001724"
    },
    {
        "symbol": "UNFIETH",
        "price": "0.00313000"
    },
    {
        "symbol": "BONDETH",
        "price": "0.00267700"
    },
    {
        "symbol": "STORJTRY",
        "price": "5.43000000"
    },
    {
        "symbol": "OPETH",
        "price": "0.00095000"
    },
    {
        "symbol": "ETCTRY",
        "price": "394.60000000"
    },
    {
        "symbol": "WINGETH",
        "price": "0.00432700"
    },
    {
        "symbol": "FILETH",
        "price": "0.00288800"
    },
    {
        "symbol": "GLMBUSD",
        "price": "0.19550000"
    },
    {
        "symbol": "SSVBUSD",
        "price": "13.88000000"
    },
    {
        "symbol": "STGBTC",
        "price": "0.00002208"
    },
    {
        "symbol": "STGBUSD",
        "price": "0.38260000"
    },
    {
        "symbol": "STGUSDT",
        "price": "0.38430000"
    },
    {
        "symbol": "ANKRTRY",
        "price": "0.39830000"
    },
    {
        "symbol": "ARKBUSD",
        "price": "0.25430000"
    },
    {
        "symbol": "BETHBUSD",
        "price": "1293.60000000"
    },
    {
        "symbol": "LOOMBUSD",
        "price": "0.04368000"
    },
    {
        "symbol": "SNMBUSD",
        "price": "0.56120000"
    },
    {
        "symbol": "AMBBUSD",
        "price": "0.01422000"
    },
    {
        "symbol": "LUNCUSDT",
        "price": "0.00016999"
    },
    {
        "symbol": "PHBBUSD",
        "price": "0.63610000"
    },
    {
        "symbol": "GASBUSD",
        "price": "2.13700000"
    },
    {
        "symbol": "NEBLBUSD",
        "price": "1.41800000"
    },
    {
        "symbol": "PROSBUSD",
        "price": "0.45800000"
    },
    {
        "symbol": "VIBBUSD",
        "price": "0.07228000"
    },
    {
        "symbol": "GMXBTC",
        "price": "0.00247500"
    },
    {
        "symbol": "GMXBUSD",
        "price": "42.91000000"
    },
    {
        "symbol": "GMXUSDT",
        "price": "42.94000000"
    },
    {
        "symbol": "AGIXBUSD",
        "price": "0.06624000"
    },
    {
        "symbol": "NEBLUSDT",
        "price": "1.41800000"
    },
    {
        "symbol": "SNTBUSD",
        "price": "0.02147000"
    },
    {
        "symbol": "POLYXBTC",
        "price": "0.00000756"
    },
    {
        "symbol": "POLYXBUSD",
        "price": "0.13100000"
    },
    {
        "symbol": "POLYXUSDT",
        "price": "0.13120000"
    },
    {
        "symbol": "APTBTC",
        "price": "0.00029671"
    },
    {
        "symbol": "APTUSDT",
        "price": "5.14320000"
    },
    {
        "symbol": "APTBUSD",
        "price": "5.14230000"
    },
    {
        "symbol": "BTCPLN",
        "price": "76090.00000000"
    },
    {
        "symbol": "ETHPLN",
        "price": "5843.00000000"
    },
    {
        "symbol": "BUSDPLN",
        "price": "4.38700000"
    },
    {
        "symbol": "APTEUR",
        "price": "4.78500000"
    },
    {
        "symbol": "APTTRY",
        "price": "97.90000000"
    },
    {
        "symbol": "APTBRL",
        "price": "27.10000000"
    },
    {
        "symbol": "QKCBUSD",
        "price": "0.00804700"
    },
    {
        "symbol": "OSMOBTC",
        "price": "0.00004362"
    },
    {
        "symbol": "OSMOUSDT",
        "price": "0.75700000"
    },
    {
        "symbol": "OSMOBUSD",
        "price": "0.75600000"
    },
    {
        "symbol": "HFTBTC",
        "price": "0.00001868"
    },
    {
        "symbol": "HFTBUSD",
        "price": "0.32390000"
    },
    {
        "symbol": "HFTUSDT",
        "price": "0.32390000"
    },
    {
        "symbol": "ARPAETH",
        "price": "0.00002195"
    },
    {
        "symbol": "PHBUSDT",
        "price": "0.63700000"
    },
    {
        "symbol": "VITEBUSD",
        "price": "0.02045000"
    },
    {
        "symbol": "HOOKBTC",
        "price": "0.00008492"
    },
    {
        "symbol": "HOOKUSDT",
        "price": "1.47010000"
    },
    {
        "symbol": "HOOKBUSD",
        "price": "1.47000000"
    },
    {
        "symbol": "HOOKBNB",
        "price": "0.00533940"
    },
    {
        "symbol": "MAGICBTC",
        "price": "0.00003181"
    },
    {
        "symbol": "MAGICBUSD",
        "price": "0.55350000"
    },
    {
        "symbol": "MAGICUSDT",
        "price": "0.55390000"
    },
    {
        "symbol": "BUSDRON",
        "price": "4.60500000"
    }
]