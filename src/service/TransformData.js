class TransformData {

    static trend(trendData) {
        const data = {
            date: [],
            prediction: [],
            close: [],
            rmse: [],
            upper_band: [],
            lower_band: []
        };
        trendData.data.map(point => {
            data.date.push(point.date);
            data.prediction.push(point.prediction);
            data.close.push(point.close);
            data.rmse.push(point.rmse);
            data.upper_band.push(point.upper_band);
            data.lower_band.push(point.lower_band);
        });
        return data;
    };

    static residualPlot(residualData) {
        const data = {
            date: [],
            residual: []
        };
        residualData.data.map(point => {
            data.date.push(point.date);
            data.residual.push(point.residual);
        });
        return data;
    }

    static btcRolling(residualData) {
        const data = {
            date: [],
            sharpe: []
        };
        residualData.data.map(point => {
            data.date.push(point.date);
            data.sharpe.push(point.sharpe_ratio_annualized);
        });
        return data;
    }

    static scatteredPlots(residualData) {
        const captions = [
            'EUREX_FDAX1_FW',
            'CME_SP1_FW',
            'CME_YM1_FW',
            'CME_NK1_FW',
            'LIFFE_Z1_FW',
            'CME_GC1_FW',
            'CME_SI1_FW',
            'CME_PL1_FW',
            'ICE_T1_FW',
            'ICE_M1_FW'
        ]
        let data = {};
        captions.map(item => {
            data = {
                ...data,
                [item]: {
                    scatter: {
                        x: [],
                        y: []
                    },
                    regression: {
                        x: [],
                        y: [],
                        ciX: [],
                        ciY: []
                    },
                    histogram_X: {
                        bins: [],
                        y: []
                    },
                    histogram_y: {
                        bins: [],
                        y: []
                    }
                }
            }
        })
        // const data = {
        //     EUREX_FDAX1_FW: {
        //         scatter: {
        //             x: [],
        //             y: []
        //         },
        //
        //     },
        //     // x: [],
        //     // y: [],
        //     // xRegression: [],
        //     // yRegression: [],
        //     // ciRegression: [],
        //     // ci2Regression: [],
        //     // xhistogramX: [],
        //     // yhistogramX: [],
        //     // xhistogramY: [],
        //     // yhistogramY: [],
        // };
        //
        captions.map(item => {
            residualData.data[item].scatter.map(point => {
                data[item].scatter.x.push(point.X);
                data[item].scatter.y.push(point.y);
            })
            residualData.data[item].regression.map(point => {
                data[item].regression.x.push(point.X);
                data[item].regression.y.push(point.y_pred);
                data[item].regression.ciX.push(point.ci[0]);
                data[item].regression.ciY.push(point.ci[1]);
            })
            residualData.data[item].histogram_X.map(point => {
                data[item].histogram_X.bins.push(point.bins);
                data[item].histogram_X.y.push(point.y);
            })
            residualData.data[item].histogram_y.map(point => {
                data[item].histogram_y.bins.push(point.bins);
                data[item].histogram_y.y.push(point.y);
            })
        })

        // residualData.data.EUREX_FDAX1_FW.scatter.map(point => {
        //     data.x.push(point.X);
        //     data.y.push(point.y);
        // });
        // residualData.data.EUREX_FDAX1_FW.regression.map(point => {
        //     data.xRegression.push(point.X);
        //     data.yRegression.push(point.y_pred);
        //     data.ciRegression.push(point.ci[0]);
        //     data.ci2Regression.push(point.ci[1]);
        // });
        // residualData.data.EUREX_FDAX1_FW.histogram_X.map(point => {
        //     data.xhistogramX.push(point.bins);
        //     data.yhistogramX.push(point.y);
        // });
        // residualData.data.EUREX_FDAX1_FW.histogram_y.map(point => {
        //     data.xhistogramY.push(point.bins);
        //     data.yhistogramY.push(point.y);
        // });
        return data;
    }

    static rollingCorrelations(residualData) {
        const dataRolling = {
            date: [],
            corr_EUREX_FDAX1_FW: [],
            corr_CME_YM1_FW: [],
            corr_CME_NK1_FW: [],
            corr_LIFFE_Z1_FW: [],
            corr_CME_GC1_FW: [],
            corr_CME_SI1_FW: [],
            corr_CME_PL1_FW: [],
            corr_ICE_T1_FW: [],
            corr_ICE_M1_FW: [],
            corr_CME_SP1_FW: [],
        };

        residualData.data.map(point => {
            dataRolling.corr_EUREX_FDAX1_FW.push(point.corr_EUREX_FDAX1_FW);
            dataRolling.corr_CME_YM1_FW.push(point.corr_CME_YM1_FW);
            dataRolling.corr_CME_NK1_FW.push(point.corr_CME_NK1_FW);
            dataRolling.corr_LIFFE_Z1_FW.push(point.corr_LIFFE_Z1_FW);
            dataRolling.corr_CME_GC1_FW.push(point.corr_CME_GC1_FW);
            dataRolling.corr_CME_PL1_FW.push(point.corr_CME_PL1_FW);
            dataRolling.corr_CME_SI1_FW.push(point.corr_CME_SI1_FW);
            dataRolling.corr_ICE_T1_FW.push(point.corr_ICE_T1_FW);
            dataRolling.corr_ICE_M1_FW.push(point.corr_ICE_M1_FW);
            dataRolling.corr_CME_SP1_FW.push(point.corr_CME_SP1_FW);
            dataRolling.date.push(point.date);
        });
        return dataRolling;
    }

    static graph3d1(residualData) {
        const data = {
            x: [],
            y: [],
            z: [],
            price: []
        };
        residualData.data.map(point => {
            data.x.push(point[0]);
            data.y.push(point[1]);
            data.z.push(point[2]);
            data.price.push(point[3]);
        });
        return data;
    }

    static costOfProduction(residualData) {
        const data = {
            date: [],
            min: [],
            guess: []
        };
        residualData.data.map(point => {
            data.date.push(point.date);
            data.min.push(point.cost_of_production_min);
            data.guess.push(point.cost_of_production_guess);
        });
        return data;
    }

    static metricsSurface(residualData) {
        const data = {
            price: residualData.price,
            calls: [],
            puts: [],
            delta: [],
            last_updated: residualData.last_updated,
            xcalls: [],
            ycalls: [],
            zcalls: [],
            xputs: [],
            yputs: [],
            zputs: [],
            xDiff: [],
            yDiff: [],
            zDiff: [],
        };
        let callArr = JSON.parse(residualData.calls);
        let putsArr = JSON.parse(residualData.puts);

        callArr.map(point => {
            data.calls.push([point.x, point.y, point.z]);
            data.xcalls.push(point.x);
            data.ycalls.push(point.y);
            data.zcalls.push(point.z);

            data.xDiff.push(point.x - putsArr[0].x);
            data.yDiff.push(point.y - putsArr[0].y);
            data.zDiff.push(point.z - putsArr[0].z);
        });

        putsArr.map(point => {
            data.puts.push([point.x, point.y, point.z]);
            data.xputs.push(point.x);
            data.yputs.push(point.y);
            data.zputs.push(point.z);
        });

        JSON.parse(residualData.all).map(point => {
            data.delta.push([point.x, point.y, point.z]);
        });
        return data;
    }

    static rollingEnthropy(residualData) {
        const data = {
            date: [],
            value: []
        };
        residualData.data.map(point => {
            data.date.push(point.date);
            data.value.push(point.value);
        });
        return data;
    }

    static rollingNetFlow(residualData) {
        const data = {
            date: [],
            day_7: [],
            day_14: [],
            day_30: [],
        };
        residualData.data.map(point => {
            data.date.push(point.f_date);
            data.day_7.push(point.rolling_7);
            data.day_14.push(point.rolling_14);
            data.day_30.push(point.rolling_30);
        });
        return data;
    }

    static hurstExponent(residualData) {
        const data = {
            date: [],
            val: [],
        };
        residualData.data.map(point => {
            data.date.push(point.date);
            data.val.push(point.val);
        });
        return data;
    }

    static substitutionRate(residualData, index) {
        const data = {
            [index]: {
                date: [],
                index: []
            },
        };
        residualData.data.map(point => {
            data[index].date.push(point.date);
            data[index].index.push(point[`${index}_rate`]);
        });
        return data;
    }

    static substitutionRateCorr(residualData, index) {
        const data = {
            [index]: {
                btc: [],
                index: []
            },
        };
        residualData.data.map(point => {
            data[index].index.push(point.BTC);
            data[index].btc.push(point[index]);
        });
        return data;
    }

    static rollingMads(residualData) {
        const data = {
            date: [],
            val: [],
        };
        residualData.data.slice(residualData.data.length - 90).map(point => {
            data.date.push(point.date);
            data.val.push(point.val);
        });
        return data;
    }

    static MadsDist(residualData) {
        const data = {
            mads: {
                accuracy: [],
                index: [],
                error: [],
            }
        };
        residualData.data.map(point => {
            data.mads.accuracy.push(point.accuracy);
            data.mads.index.push(point.index);
            data.mads.error.push(point.error);
        });
        return data;
    }

    static TasDist(residualData) {
        const data = {
            tas: {
                accuracy: [],
                index: [],
                error: [],
            }
        };
        residualData.data.map(point => {
            data.tas.accuracy.push(point.accuracy);
            data.tas.index.push(point.index);
            data.tas.error.push(point.error);
        });
        return data;
    }

    static efficiencyIndex(residualData) {
        const data = {
            bins: [],
            frecuencies: [],
        };
        residualData.data.map(point => {
            data.date.push(point.date);
            data.val.push(point.val);
        });
        return data;
    }

    static hodlerDistribution(residualData) {
        const data = {
            price: residualData.price,
            calls: [],
            puts: [],
            delta: [],
            last_updated: residualData.last_updated
        };
        JSON.parse(residualData.calls).map(point => {
            data.calls.push([point.x, point.y, point.z]);
        });
        JSON.parse(residualData.puts).map(point => {
            data.puts.push([point.x, point.y, point.z]);
        });
        JSON.parse(residualData.all).map(point => {
            data.delta.push([point.x, point.y, point.z]);
        });
        return data;
    }

    static impliedVolatility(residualData) {
        const data = {
            calls: {
                x: [],
                y: []
            },
            puts: {
                x: [],
                y: []
            },
            delta: {
                x: [],
                y: []
            },
        };
        JSON.parse(residualData.calls).slice(JSON.parse(residualData.calls).length - 90).map(point => {
            data.calls.y.push(point.calls);
            data.calls.x.push(point.date);
        });
        JSON.parse(residualData.puts).slice(JSON.parse(residualData.puts).length - 90).map(point => {
            data.puts.y.push(point.puts);
            data.puts.x.push(point.date);
        });
        JSON.parse(residualData.delta).slice(JSON.parse(residualData.delta).length - 90).map(point => {
            data.delta.y.push(point.delta);
            data.delta.x.push(point.date);
        });

        return data;
    }

    static residualHistogram(residualData) {
        return {
            bins: residualData.data.bins,
            frecuencies: residualData.data.frecuencies
        };
    }

    static qqPlot(qqPlotData) {
        return {
            z_actual: qqPlotData.data.z_actual,
            z_theorical: qqPlotData.data.z_theorical,
            line: qqPlotData.line
        }
    }

    static probabilityPlot(probabilityData) {
        return {
            prob_theorical: probabilityData.data.prob_theorical,
            prob_actual: probabilityData.data.prob_actual,
            line: probabilityData.line
        }
    }

    static performanceBenchmark(residualData) {
        const data = {
            date: [],
            btc_cum_perf: [],
            zt_cum_perf: [],
            PctDrawdown: [],
            month: [],
            Y2017: [],
            Y2018: [],
            Y2019: [],
            Y2020: [],
            Y2021: [],
            month_month_corr: [],
            stats: residualData.data.stats
        };
        residualData.data.perf_plot.map(point => {
            data.date.push(point.date);
            data.btc_cum_perf.push(point.btc_cum_perf);
            data.zt_cum_perf.push(point.zt_cum_perf);
            data.PctDrawdown.push(point.PctDrawdown);
        });
        residualData.data.month_year_plot.map(point => {
            data.Y2017.push(point['2017']);
            data.Y2018.push(point['2018']);
            data.Y2019.push(point['2019']);
            data.Y2020.push(point['2020']);
            data.Y2021.push(point['2021']);
            data.month.push(point.month);
        });
        residualData.data.month_month_corr.map(point => {
            data.month_month_corr.push([point['1'],point['2'],point['3'],point['4'],point['5'],point['6'],point['7'],point['8'],point['9'],
                point['10'],point['11'],point['12']]);
        });
        return data;
    }


    static autocorrelation(residualData) {
        const data = {
            corr: [],
            confint: [],
            confint_1: [],
            confint_2: [],
            lags: []
        };
        residualData.data.map(point => {
            data.lags.push(point.lags);
            data.corr.push(point.corr);
            data.confint.push(point.confint);
            data.confint_1.push(point.confint[0]);
            data.confint_2.push(point.confint[1]);
        });
        return data;
    }

    static seasonalDecompose(residualData) {
        const data = {
            date: [],
            seasonal: [],
            trend: [],
            resid: []
        };
        residualData.data.map(point => {
            data.date.push(point.date);
            data.seasonal.push(point.seasonal);
            data.trend.push(point.trend);
            data.resid.push(point.resid);
        });
        return data;
    }

    static governingEquations(residualData, eq) {
        const data = {
            [`eq_${eq}`]: {
                date: [],
                equation: []
            }
        };
        residualData.data.map(point => {
            data[`eq_${eq}`].date.push(point.date);
            data[`eq_${eq}`].equation.push(point.equation);
        });
        return data;
    }

    static governingEquationsGreeks(residualData, greek) {
        const data = {
            [greek]: {
                date: [],
                equation: []
            }
        };
        residualData.data.map(point => {
            data[greek].date.push(point.date);
            data[greek].equation.push(point.equation);
        });
        return data;
    }

}

export default TransformData;
