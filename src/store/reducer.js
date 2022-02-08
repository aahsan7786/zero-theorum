import {combineReducers} from "redux";
import {trendReducer} from "./charts/trend/reducer";
import {residualPlotReducer} from "./charts/residualPlot/reducer";
import {btcRollingReducer} from "./charts/btcRolling/reducer";
import {metricsCallSurfaceReducer} from "./charts/metricsCallsSurface/reducer";
import {graph3d1Reducer} from "./charts/3d1/reducer";
import {graph3d2Reducer} from "./charts/3d2/reducer";
import {graph3d3Reducer} from "./charts/3d3/reducer";
import {impliedVolatilityReducer} from "./charts/impliedVolatility/reducer";
import {costOfProductionReducer} from "./charts/costOfProduction/reducer";
import {residualHisReducer} from "./charts/residualHistogram/reducer";
import {btcReturnDisReducer} from "./charts/BTCReturnDistribution/reducer";
import {qqPlotReducer} from "./charts/qqPlot/reducer";
import {probabilityPlotReducer} from "./charts/probabilityPlot/reducer";
import {quantNavReducer} from "./quant-nav/reducer";
import {metricReducer} from "./metric-box/reducer";
import {researchReducer} from "./research/reducer";
import {forecastReducer} from "./forecast/reducer";
import {modalReducer} from "./modal/reducer";
import {dataReducer} from "./data/reducer";
import {faqReducer} from "./faq/reducer";
import {scatteredPlotsReducer} from "./charts/scatteredPlots/reducer";
import {rollingCorrelationsReducer} from "./charts/rollingCorrelations/reducer";
import {hodlerDistributionReducer} from "./charts/hodlerDistribution/reducer";
import {rollingEnthropyReducer} from "./charts/rollingEnthropy/reducer";
import {exchangeInOutFlowReducer} from "./charts/exchangeInOutFlow/reducer";
import {rollingNetFlowReducer} from "./charts/rollingNetFlow/reducer";
import {hurstExponentReducer} from "./charts/hurstExponent/reducer";
import {efficiencyIndexReducer} from "./charts/efficiencyIndex/reducer";
import {rollingMadsReducer} from "./charts/rollingMads/reducer";
import {madsDistReducer} from "./charts/madsDist/reducer";
import {performanceBenchmarkReducer} from "./charts/performanceBenchmark/reducer";
import {autoCorrelationReducer} from "./charts/autocorrelation/reducer";
import {partialAutoCorrelationReducer} from "./charts/partialAutoCorrelation/reducer";
import {seasonalDecomposeReducer} from "./charts/seasonalDecompose/reducer";
import {substitutionRateReducer} from "./charts/substitutionRate/reducer";
import {substitutionRateCorrReducer} from "./charts/substitutionRateCorr/reducer";
import {governingEquationsReducer} from "./charts/governingEquations/reducer";
import {governingEquationsGreeksReducer} from "./charts/governingEquationsGreeks/reducer";
import {cookiesReducer} from "./cookies/reducer";
import {ztLearnerReducer} from "./ztLearner/reducer";
import {hoursReducer} from "./header-hours/reducer";
import {discordReducer} from "./discord/reducer";
import {resourcesReducer} from "./resources/reducer";
import {pdfReducer} from "./pdf/reducer";
import {userReducer} from "./user/reducer";
export default combineReducers({
  quantNavReducer,
  trendReducer,
  residualPlotReducer,
  btcRollingReducer,
  residualHisReducer,
  btcReturnDisReducer,
  qqPlotReducer,
  probabilityPlotReducer,
  metricReducer,
  researchReducer,
  faqReducer,
  modalReducer,
  dataReducer,
  forecastReducer,
  metricsCallSurfaceReducer,
  impliedVolatilityReducer,
  costOfProductionReducer,
  graph3d1Reducer,
  graph3d2Reducer,
  graph3d3Reducer,
  scatteredPlotsReducer,
  rollingCorrelationsReducer,
  hodlerDistributionReducer,
  rollingEnthropyReducer,
  exchangeInOutFlowReducer,
  rollingNetFlowReducer,
  hurstExponentReducer,
  efficiencyIndexReducer,
  rollingMadsReducer,
  madsDistReducer,
  performanceBenchmarkReducer,
  autoCorrelationReducer,
  partialAutoCorrelationReducer,
  seasonalDecomposeReducer,
  substitutionRateReducer,
  substitutionRateCorrReducer,
  governingEquationsReducer,
  governingEquationsGreeksReducer,
  cookiesReducer,
  ztLearnerReducer,
  hoursReducer,
  discordReducer,
  resourcesReducer,
  pdfReducer,
  userReducer,
});
