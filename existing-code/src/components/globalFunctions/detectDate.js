export const _today = new Date();

export const lastWeek = () => {
  let todayForWeek = new Date();
  let lastWeek = todayForWeek.getDate() - 7;
  return new Date(todayForWeek.setDate(lastWeek));
};

export const lastMonths = () => {
  let todayForMonth = new Date();
  let lastMonth = todayForMonth.getMonth() - 1;
  return new Date(todayForMonth.setMonth(lastMonth));
};

export const lastQuarterYear = () => {
  let todayForQuarterYear = new Date();
  let lastQuarterYear = todayForQuarterYear.getMonth() - 3;
  return new Date(todayForQuarterYear.setMonth(lastQuarterYear));
};

export const lastHalfYear = () => {
  let todayForHalfYear = new Date();
  let lastHalfYear = todayForHalfYear.getMonth() - 6;
  return new Date(todayForHalfYear.setMonth(lastHalfYear));
};

export const lastYear = () => {
  let todayForYear = new Date();
  let lastYear = todayForYear.getFullYear() - 1;
  return new Date(todayForYear.setFullYear(lastYear));
};
