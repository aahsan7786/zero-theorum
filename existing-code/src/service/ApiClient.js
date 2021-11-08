import TransformData from "./TransformData";

const _baseURI = 'https://satoshiscore.net';
// const _baseURI = process.env.REACT_APP_API_URL;
// const _token = process.env.REACT_APP_API_TOKEN;
const _token = 'b962c604470dd3c484f245810b57098026fffa21';
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default class ApiClient {

    async getSources(url) {

        const response = await fetch(`${_baseURI}/api${url}`, {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'Authorization': `Token ${_token}`,
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Could don't fetch ${url} received ${response.status}`);
        }

        let body = await response.text();

        body = body.replaceAll('NaN', 0);

        return JSON.parse(body);

    }

    getTrend = async (startFrom) => {
        const data = await this.getSources(`/trend?start_date=${startFrom}`);
        return TransformData.trend(data);
    };

    getResidual = async (startFrom, finishedTo) => {
        const data = await this.getSources(`/residual?start_date=${startFrom}`);
        return TransformData.residualPlot(data);
    };

    getResidualHistogram = async (startFrom) => {
        const data = await this.getSources(`/residual-histogram?range=${startFrom}`);
        return TransformData.residualHistogram(data);
    };

    getQqPlot = async () => {
        const data = await this.getSources('/qqplot');
        return TransformData.qqPlot(data);
    };

    getProbPlot = async () => {
        const data = await this.getSources('/ppplot');
        return TransformData.probabilityPlot(data);
    };

    getMetric = async (startFrom) => {
        return await this.getSources(`/metricbox?start_date=${startFrom}`);
    };

    getMetricCallsSurface = async () => {
        const data = await this.getSources('/volatility-surface');
        return TransformData.metricsSurface(data);
    };

    getImpliedVolatility = async () => {
        const data = await this.getSources('/iv-history');
        // return  await this.getSources('/iv-history');
        return TransformData.impliedVolatility(data);
    };

    get3D1 = async () => {
        const data = await this.getSources('/3D-1');
        // return  await this.getSources('/3D-1');
        return TransformData.graph3d1(data);
    };

    get3D2 = async () => {
        const data = await this.getSources('/3D-2');
        // return  await this.getSources('/3D-1');
        return TransformData.graph3d1(data);
    };

    get3D3 = async () => {
        const data = await this.getSources('/3D-3');
        // return  await this.getSources('/3D-1');
        return TransformData.graph3d1(data);
    };

    getBTCReturnDistribution = async (range) => {
        const data = await this.getSources(`/btc-return-histogram?range=${range}`);
        return TransformData.residualHistogram(data);
    };

    getBTCRolling = async (startFrom, finishedTo) => {
        const data = await this.getSources(`/btc-rolling-sharpe?start_date=${startFrom}`);
        return TransformData.btcRolling(data);
    };

    getCostOfProduction = async (startDate) => {
        const data = await this.getSources(`/btc-cost-of-production?start_date=${startDate}`);
        return TransformData.costOfProduction(data);
    };

    getScatteredPlots = async () => {
        const data = await this.getSources(`/raw-values-corr?start_date=2021-01-01`);
        return TransformData.scatteredPlots(data);
    };

    getRollingCorrelations = async (startFrom) => {
        const data = await this.getSources(`/rolling-correlation?start_date=2021-01-01`);
        return TransformData.rollingCorrelations(data);
    };

    getHodlerDistribution = async (range) => {
        return await this.getSources(`/btc-holder-dist?range=${range}`);
        // return  await this.getSources(`/btc-holder-dist?range=${range}`);
    };

    getRollingEnthropy = async (startFrom) => {
        const data = await this.getSources(`/btc-rolling-enthropy?start_date=${startFrom}`);
        return TransformData.rollingEnthropy(data);
    };

    getExchangeInOutFlow = async (range) => {
        let rangeFormat;
        range === 1 ? rangeFormat = '2D' : range === 6 ? rangeFormat = '8D' : rangeFormat = '1M'
        return await this.getSources(`/exchanges-in-out?range=${rangeFormat}`);
    };

    getRollingNetFlow = async (startFrom) => {
        const data = await this.getSources(`/exchanges-in-out-rolling?start_date=${startFrom}`);
        return TransformData.rollingNetFlow(data);
    };

    getHurstExponent = async (startFrom) => {
        const data = await this.getSources(`/hurst-exponent?start_date=${startFrom}`);
        return TransformData.hurstExponent(data);
    };

    getSubstitutionRate = async (startDate, index, tf) => {
        const data = await this.getSources(`/substitution-rate?start_date=${startDate}&index=${index}&tf=${tf}`);
        return TransformData.substitutionRate(data, index);
    };

    getSubstitutionRateCorr = async (startDate, index, tf) => {
        const data = await this.getSources(`/substitution-rate-corr?start_date=${startDate}&index=${index}&tf=${tf}`);
        return TransformData.substitutionRateCorr(data, index);
    };

    getEfficiencyIndex = async (range) => {
        return await this.getSources(`/efficiency-index?range=${range}`);
    };

    getRollingMads = async (startFrom = "2019-01-01", tf) => {
        const data = await this.getSources(`/rolling-tas?start_date=${startFrom}`);
        return TransformData.rollingMads(data);
    };

    getMadsDist = async (startDate = "2019-01-01") => {
        const data = await this.getSources(`/mads-dist?start_date=${startDate}`);
        

        return TransformData.MadsDist(data);
    };

    getTasDist = async (startDate = "2019-01-01") => {

        const data = await this.getSources(`/tas-dist?start_date=${startDate}`);
        return TransformData.TasDist(data);
    };

    getPerformanceBenchmark = async () => {
        const data = await this.getSources(`/simulator`);
        return TransformData.performanceBenchmark(data);
    };

    getAutocorrelation = async () => {
        const data = await this.getSources(`/auto-correlation`);
        return TransformData.autocorrelation(data);
    };

    getPartialAutoCorrelation = async () => {
        const data = await this.getSources(`/partial-auto-correlation`);
        return TransformData.autocorrelation(data);
    };

    getSeasonalDecompose = async () => {
        const data = await this.getSources(`/seasonal-decompose`);
        return TransformData.seasonalDecompose(data);
    };

    getGoverningEquations = async (eq, start_date, tf) => {
        const data = await this.getSources(`/governing-equations?eq=${eq}&start_date=${start_date}&tf=${tf}`);
        return TransformData.governingEquations(data, eq);
    };

    getGoverningEquationsGreeks = async (start_date, index, greek, tf) => {
        const data = await this.getSources(`/governing-equations-greeks?start_date=${start_date}&index=${index}&greek=${greek}&tf=${tf}`);
        return TransformData.governingEquationsGreeks(data, greek);
    };

    getDiscord = async () => {
        return await fetch('https://discord.com/api/guilds/878488514507997225/widget.json', {
            method: 'GET',
        }).then(r => r.json());
    };

}
