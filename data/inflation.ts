import { parseISO } from "date-fns";
import { TypeInflation } from "../types/data/inflation";

export const Inflation: Array<TypeInflation> = [
  {
    date: "2022-08-01",
    value: 15.32,
    change: 0.56,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2022-07-01",
    value: 14.96,
    change: 0.89,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2022-06-01",
    value: 15.05,
    change: 0.76,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2022-05-01",
    value: 14.19,
    change: 1.18,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2022-04-01",
    value: 13.76,
    change: 3.74,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2022-03-01",
    value: 10.15,
    change: 1.88,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2022-02-01",
    value: 8.53,
    change: 0.58,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2022-01-01",
    value: 8.35,
    change: 1.48,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2021-12-01",
    value: 8.19,
    change: 0.71,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2021-11-01",
    value: 7.8,
    change: 0,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2021-10-01",
    value: 7.94,
    change: 1.78,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2021-09-01",
    value: 6.29,
    change: 0.84,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2021-08-01",
    value: 5.25,
    change: 0.24,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2021-07-01",
    value: 4.95,
    change: 0.97,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2021-06-01",
    value: 3.94,
    change: 0.27,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2021-05-01",
    value: 3.75,
    change: 0.53,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2021-04-01",
    value: 3.24,
    change: 0.45,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2021-03-01",
    value: 3.05,
    change: 0.38,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2021-02-01",
    value: 3.16,
    change: 0.41,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2021-01-01",
    value: 2.99,
    change: 1.33,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2020-12-01",
    value: 2.06,
    change: 0.34,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2020-11-01",
    value: 2.14,
    change: 0.13,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2020-10-01",
    value: 2.24,
    change: 0.22,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2020-09-01",
    value: 2.45,
    change: -0.14,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2020-08-01",
    value: 2.68,
    change: -0.05,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2020-07-01",
    value: 2.8,
    change: 0,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2020-06-01",
    value: 2.58,
    change: 0.08,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2020-05-01",
    value: 2.26,
    change: 0.05,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2020-04-01",
    value: 2.68,
    change: 0.26,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2020-03-01",
    value: 3.05,
    change: 0.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2020-02-01",
    value: 3.05,
    change: 0.25,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2020-01-01",
    value: 3.6,
    change: 0.41,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2019-12-01",
    value: 4.04,
    change: 0.42,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2019-11-01",
    value: 3.77,
    change: 0.23,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2019-10-01",
    value: 3.4,
    change: 0.43,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2019-09-01",
    value: 3.49,
    change: 0.09,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2019-08-01",
    value: 3.89,
    change: 0.06,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2019-07-01",
    value: 4.12,
    change: -0.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2019-06-01",
    value: 3.84,
    change: -0.23,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2019-05-01",
    value: 4.1,
    change: 0.46,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2019-04-01",
    value: 4.11,
    change: 0.61,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2019-03-01",
    value: 4.03,
    change: 0.49,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2019-02-01",
    value: 3.83,
    change: 0.79,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2019-01-01",
    value: 3.32,
    change: 0.83,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2018-12-01",
    value: 3.27,
    change: 0.16,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2018-11-01",
    value: 3.43,
    change: -0.13,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2018-10-01",
    value: 4.25,
    change: 0.52,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2018-09-01",
    value: 5.03,
    change: 0.47,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2018-08-01",
    value: 5.06,
    change: 0.28,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2018-07-01",
    value: 4.56,
    change: -0.48,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2018-06-01",
    value: 5.4,
    change: 0.02,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2018-05-01",
    value: 5.41,
    change: 0.47,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2018-04-01",
    value: 5.22,
    change: 0.54,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2018-03-01",
    value: 4.95,
    change: 0.29,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2018-02-01",
    value: 4.72,
    change: 0.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2018-01-01",
    value: 4.32,
    change: 0.78,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2017-12-01",
    value: 3.32,
    change: 0.32,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2017-11-01",
    value: 3.23,
    change: 0.66,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2017-10-01",
    value: 2.63,
    change: 1.28,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2017-09-01",
    value: 1.77,
    change: 0.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2017-08-01",
    value: 1.15,
    change: -0.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2017-07-01",
    value: 1.17,
    change: 0.32,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2017-06-01",
    value: 0.85,
    change: 0.04,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2017-05-01",
    value: 0.64,
    change: 0.28,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2017-04-01",
    value: 0.61,
    change: 0.28,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2017-03-01",
    value: 0.18,
    change: 0.08,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2017-02-01",
    value: 0.2,
    change: -0.09,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2017-01-01",
    value: 0.05,
    change: -0.19,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2016-12-01",
    value: -0.54,
    change: 0.24,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2016-11-01",
    value: -0.67,
    change: 0.07,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2016-10-01",
    value: -0.43,
    change: 0.43,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2016-09-01",
    value: -0.57,
    change: -0.11,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2016-08-01",
    value: -0.71,
    change: 0.07,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2016-07-01",
    value: -0.78,
    change: 0.24,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2016-06-01",
    value: -0.7,
    change: -0.17,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2016-05-01",
    value: -3.46,
    change: 0.25,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2016-04-01",
    value: -3.25,
    change: -0.15,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2016-03-01",
    value: -2.98,
    change: 0.1,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2016-02-01",
    value: -2.68,
    change: -0.24,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2016-01-01",
    value: -2.13,
    change: -0.78,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2015-12-01",
    value: -0.93,
    change: 0.11,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2015-11-01",
    value: -1.14,
    change: 0.31,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2015-10-01",
    value: -1.45,
    change: 0.28,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2015-09-01",
    value: -1.61,
    change: 0.26,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2015-08-01",
    value: -1.87,
    change: -0.51,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2015-07-01",
    value: -1.67,
    change: -0.17,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2015-06-01",
    value: -1.55,
    change: -2.95,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2015-05-01",
    value: 1.16,
    change: 0.47,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2015-04-01",
    value: 0.65,
    change: 0.13,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2015-03-01",
    value: 0.79,
    change: 0.41,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2015-02-01",
    value: 0.4,
    change: 0.33,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2015-01-01",
    value: 0.41,
    change: 0.43,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2014-12-01",
    value: 0.83,
    change: -0.1,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2014-11-01",
    value: 1.26,
    change: -0.19,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2014-10-01",
    value: 1.44,
    change: 0.19,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2014-09-01",
    value: 1.54,
    change: 0.12,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2014-08-01",
    value: 0.84,
    change: -0.31,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2014-07-01",
    value: 0.95,
    change: -0.05,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2014-06-01",
    value: 0.66,
    change: -0.27,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2014-05-01",
    value: 0.94,
    change: -0.04,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2014-04-01",
    value: 1.21,
    change: 0.27,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2014-03-01",
    value: 1.04,
    change: 0.03,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2014-02-01",
    value: 1.39,
    change: 0.33,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2014-01-01",
    value: 1.06,
    change: 0.85,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2013-12-01",
    value: 1.55,
    change: 0.33,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2013-11-01",
    value: 1.83,
    change: -0.01,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2013-10-01",
    value: 1.88,
    change: 0.29,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2013-09-01",
    value: 1.88,
    change: -0.57,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2013-08-01",
    value: 3.67,
    change: -0.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2013-07-01",
    value: 3.88,
    change: -0.34,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2013-06-01",
    value: 5.37,
    change: 0.01,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2013-05-01",
    value: 5.32,
    change: 0.23,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2013-04-01",
    value: 5.29,
    change: 0.11,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2013-03-01",
    value: 5.25,
    change: 0.04,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2013-02-01",
    value: 5.65,
    change: 0.34,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2013-01-01",
    value: 5.97,
    change: 1.34,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2012-12-01",
    value: 4.95,
    change: 0.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2012-11-01",
    value: 4.56,
    change: 0.04,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2012-10-01",
    value: 4.96,
    change: 0.29,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2012-09-01",
    value: 5.33,
    change: 1.18,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2012-08-01",
    value: 3.88,
    change: 0.51,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2012-07-01",
    value: 3,
    change: 0.59,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2012-06-01",
    value: 2.04,
    change: -0.04,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2012-05-01",
    value: 1.79,
    change: 0.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2012-04-01",
    value: 1.8,
    change: 0.07,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2012-03-01",
    value: 2.4,
    change: 0.42,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2012-02-01",
    value: 2.59,
    change: 0.64,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2012-01-01",
    value: 2.72,
    change: 0.36,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2011-12-01",
    value: 3.14,
    change: 0.23,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2011-11-01",
    value: 3.44,
    change: 0.42,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2011-10-01",
    value: 3.55,
    change: 0.64,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2011-09-01",
    value: 3.45,
    change: -0.21,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2011-08-01",
    value: 3.67,
    change: -0.35,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2011-07-01",
    value: 4.85,
    change: -0.35,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2011-06-01",
    value: 7.93,
    change: -0.29,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2011-05-01",
    value: 8.41,
    change: 0.21,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2011-04-01",
    value: 8.34,
    change: 0.66,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2011-03-01",
    value: 8.01,
    change: 0.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2011-02-01",
    value: 7.6,
    change: 0.77,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2011-01-01",
    value: 6.99,
    change: 0.77,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2010-12-01",
    value: 8.3,
    change: 0.53,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2010-11-01",
    value: 7.73,
    change: 0.52,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2010-10-01",
    value: 7.88,
    change: 0.55,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2010-09-01",
    value: 7.77,
    change: 0.56,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2010-08-01",
    value: 7.58,
    change: 0.23,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2010-07-01",
    value: 7.14,
    change: 2.58,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2010-06-01",
    value: 4.58,
    change: 0.16,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2010-05-01",
    value: 4.42,
    change: 0.15,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2010-04-01",
    value: 4.28,
    change: 0.35,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2010-03-01",
    value: 4.2,
    change: 0.22,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2010-02-01",
    value: 4.49,
    change: 0.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2010-01-01",
    value: 5.2,
    change: 1.68,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2009-12-01",
    value: 4.74,
    change: 0.32,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2009-11-01",
    value: 4.65,
    change: 0.67,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2009-10-01",
    value: 4.3,
    change: 0.44,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2009-09-01",
    value: 4.94,
    change: 0.39,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2009-08-01",
    value: 4.96,
    change: -0.19,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2009-07-01",
    value: 5.06,
    change: -0.07,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2009-06-01",
    value: 5.86,
    change: 0.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2009-05-01",
    value: 5.95,
    change: 0.01,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2009-04-01",
    value: 6.45,
    change: 0.27,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2009-03-01",
    value: 6.71,
    change: 0.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2009-02-01",
    value: 6.89,
    change: 0.88,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2009-01-01",
    value: 6.71,
    change: 1.24,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2008-12-01",
    value: 6.3,
    change: 0.23,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2008-11-01",
    value: 6.74,
    change: 0.32,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2008-10-01",
    value: 7.39,
    change: 1.06,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2008-09-01",
    value: 8.45,
    change: 0.4,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2008-08-01",
    value: 8.02,
    change: -0.09,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2008-07-01",
    value: 9.04,
    change: 0.69,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2008-06-01",
    value: 8.61,
    change: 0.28,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2008-05-01",
    value: 8.31,
    change: 0.49,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2008-04-01",
    value: 8.62,
    change: 0.52,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2008-03-01",
    value: 8.63,
    change: 0.67,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2008-02-01",
    value: 7.97,
    change: 0.7,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2008-01-01",
    value: 7.26,
    change: 0.86,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2007-12-01",
    value: 6.57,
    change: 0.64,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2007-11-01",
    value: 6.67,
    change: 0.93,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2007-10-01",
    value: 6.84,
    change: 0.97,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2007-09-01",
    value: 6.03,
    change: 1.08,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2007-08-01",
    value: 4.96,
    change: 0.86,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2007-07-01",
    value: 3.99,
    change: 0.29,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2007-06-01",
    value: 3.8,
    change: 0.14,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2007-05-01",
    value: 3.81,
    change: 0.64,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2007-04-01",
    value: 3.77,
    change: 0.52,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2007-03-01",
    value: 3.66,
    change: 0.07,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2007-02-01",
    value: 3.81,
    change: 0.04,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2007-01-01",
    value: 4.01,
    change: 0.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2006-12-01",
    value: 4.87,
    change: 0.74,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2006-11-01",
    value: 4.1,
    change: 1.09,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2006-10-01",
    value: 4.8,
    change: 0.21,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2006-09-01",
    value: 5.48,
    change: 0.05,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2006-08-01",
    value: 6.02,
    change: -0.07,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2006-07-01",
    value: 6.21,
    change: 0.11,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2006-06-01",
    value: 7.11,
    change: 0.15,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2006-05-01",
    value: 7.26,
    change: 0.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2006-04-01",
    value: 6.92,
    change: 0.42,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2006-03-01",
    value: 8.41,
    change: 0.21,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2006-02-01",
    value: 8.49,
    change: 0.24,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2006-01-01",
    value: 8.89,
    change: 1.03,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2005-12-01",
    value: 8.6,
    change: 0.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2005-11-01",
    value: 8.7,
    change: 1.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2005-10-01",
    value: 8.1,
    change: 0.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2005-09-01",
    value: 8.5,
    change: 0.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2005-08-01",
    value: 8.9,
    change: 0.1,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2005-07-01",
    value: 9.3,
    change: 1,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2005-06-01",
    value: 9.7,
    change: 0.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2005-05-01",
    value: 10,
    change: 0.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2005-04-01",
    value: 10,
    change: 1.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2005-03-01",
    value: 8.7,
    change: 0.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2005-02-01",
    value: 8.9,
    change: 0.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2005-01-01",
    value: 8.9,
    change: 0.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2004-12-01",
    value: 9.3,
    change: 0.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2004-11-01",
    value: 9.9,
    change: 0.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2004-10-01",
    value: 0.8,
    change: 1.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2004-09-01",
    value: 11.1,
    change: 0.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2004-08-01",
    value: 12.4,
    change: 0.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2004-07-01",
    value: 12.1,
    change: 1.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2004-06-01",
    value: 12,
    change: 0.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2004-05-01",
    value: 12.3,
    change: 0.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2004-04-01",
    value: 12.5,
    change: 0.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2004-03-01",
    value: 13.1,
    change: 0.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2004-02-01",
    value: 13.7,
    change: 0.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2004-01-01",
    value: 13.9,
    change: 1.1,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2003-12-01",
    value: 14.1,
    change: 1.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2003-11-01",
    value: 14.5,
    change: 1.4,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2003-10-01",
    value: 15.8,
    change: 1.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2003-09-01",
    value: 15.9,
    change: 2.1,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2003-08-01",
    value: 14.2,
    change: 0.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2003-07-01",
    value: 13.9,
    change: 1.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2003-06-01",
    value: 14,
    change: 0.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2003-05-01",
    value: 14.4,
    change: 0.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2003-04-01",
    value: 16,
    change: 1.1,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2003-03-01",
    value: 17.1,
    change: 1.1,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2003-02-01",
    value: 20.3,
    change: 0.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2003-01-01",
    value: 16.6,
    change: 1.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2002-12-01",
    value: 17.8,
    change: 1.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2002-11-01",
    value: 18.6,
    change: 2.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2002-10-01",
    value: 18.8,
    change: 1.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2002-09-01",
    value: 19.8,
    change: 0.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2002-08-01",
    value: 21.3,
    change: 0.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2002-07-01",
    value: 23,
    change: 0.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2002-06-01",
    value: 24,
    change: 1.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2002-05-01",
    value: 24.5,
    change: 1.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2002-04-01",
    value: 24.4,
    change: 2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2002-03-01",
    value: 25.1,
    change: 0.4,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2002-02-01",
    value: 27.2,
    change: 1.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2002-01-01",
    value: 28.6,
    change: 2.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2001-12-01",
    value: 30.3,
    change: 2.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2001-11-01",
    value: 30.7,
    change: 2.7,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2001-10-01",
    value: 30.8,
    change: 2.4,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2001-09-01",
    value: 31.2,
    change: 1.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2001-08-01",
    value: 32.4,
    change: 2.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2001-07-01",
    value: 31.8,
    change: 1.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2001-06-01",
    value: 35.7,
    change: 1.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2001-05-01",
    value: 37.4,
    change: 1.7,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2001-04-01",
    value: 37.5,
    change: 2.7,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2001-03-01",
    value: 40.3,
    change: 2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2001-02-01",
    value: 40,
    change: 2.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2001-01-01",
    value: 39.9,
    change: 3.7,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2000-12-01",
    value: 40.7,
    change: 2.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2000-11-01",
    value: 41.3,
    change: 2.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2000-10-01",
    value: 42.9,
    change: 2.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2000-09-01",
    value: 44.9,
    change: 2.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2000-08-01",
    value: 45.4,
    change: 1.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2000-07-01",
    value: 44.5,
    change: 4.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2000-06-01",
    value: 40.9,
    change: 2.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2000-05-01",
    value: 44,
    change: 1.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2000-04-01",
    value: 48.9,
    change: 4.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2000-03-01",
    value: 49,
    change: 1.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2000-02-01",
    value: 55.7,
    change: 2.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "2000-01-01",
    value: 56.8,
    change: 4.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1999-12-01",
    value: 54.8,
    change: 2.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1999-11-01",
    value: 53.7,
    change: 4,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1999-10-01",
    value: 50.6,
    change: 4.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1999-09-01",
    value: 50.2,
    change: 3.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1999-08-01",
    value: 49.5,
    change: 1.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1999-07-01",
    value: 48.6,
    change: 1.7,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1999-06-01",
    value: 48.2,
    change: 5.1,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1999-05-01",
    value: 42.8,
    change: 5.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1999-04-01",
    value: 38.7,
    change: 4.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1999-03-01",
    value: 35.8,
    change: 6.4,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1999-02-01",
    value: 32.5,
    change: 2.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1999-01-01",
    value: 38.1,
    change: 3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1998-12-01",
    value: 40.6,
    change: 2.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1998-11-01",
    value: 43.8,
    change: 1.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1998-10-01",
    value: 47.1,
    change: 3.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1998-09-01",
    value: 50.8,
    change: 2.7,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1998-08-01",
    value: 51.7,
    change: 0.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1998-07-01",
    value: 56,
    change: 1.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1998-06-01",
    value: 55,
    change: 1.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1998-05-01",
    value: 56.6,
    change: 2.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1998-04-01",
    value: 59.6,
    change: 2.7,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1998-03-01",
    value: 66.1,
    change: 3.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1998-02-01",
    value: 109.3,
    change: 7.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1998-01-01",
    value: 131.9,
    change: 4.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1997-12-01",
    value: 151.4,
    change: 4.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1997-11-01",
    value: 165.4,
    change: 4.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1997-10-01",
    value: 169.2,
    change: 6.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1997-09-01",
    value: 161.4,
    change: 3.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1997-08-01",
    value: 159.1,
    change: 3.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1997-07-01",
    value: 159.8,
    change: 0.7,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1997-06-01",
    value: 177.4,
    change: 2.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1997-05-01",
    value: 174,
    change: 4.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1997-04-01",
    value: 176.8,
    change: 6.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1997-03-01",
    value: 164,
    change: 30.7,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1997-02-01",
    value: 105.4,
    change: 18.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1997-01-01",
    value: 76.3,
    change: 13.7,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1996-12-01",
    value: 56.9,
    change: 10.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1996-11-01",
    value: 47.4,
    change: 5.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1996-10-01",
    value: 45.1,
    change: 3.4,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1996-09-01",
    value: 45.3,
    change: 2.4,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1996-08-01",
    value: 44.2,
    change: 3.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1996-07-01",
    value: 40.3,
    change: 7.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1996-06-01",
    value: 33.8,
    change: 1,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1996-05-01",
    value: 34.2,
    change: 5.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1996-04-01",
    value: 28.7,
    change: 1.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1996-03-01",
    value: 28.3,
    change: 1.7,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1996-02-01",
    value: 27.3,
    change: 1.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1996-01-01",
    value: 26.7,
    change: 1.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1995-12-01",
    value: 27.8,
    change: 3.7,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1995-11-01",
    value: 25.8,
    change: 4.1,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1995-10-01",
    value: 24.3,
    change: 3.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1995-09-01",
    value: 25.3,
    change: 1.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1995-08-01",
    value: 28.2,
    change: 1,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1995-07-01",
    value: 29.2,
    change: 2.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1995-06-01",
    value: 28,
    change: 1.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1995-05-01",
    value: 29.6,
    change: 1.1,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1995-04-01",
    value: 34.6,
    change: 1.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1995-03-01",
    value: 40.4,
    change: 0.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1995-02-01",
    value: 50.7,
    change: 1.4,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1995-01-01",
    value: 57.3,
    change: 2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1994-12-01",
    value: 61.7,
    change: 2.1,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1994-11-01",
    value: 70.1,
    change: 2.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1994-10-01",
    value: 88.8,
    change: 4.4,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1994-09-01",
    value: 110.4,
    change: 3.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1994-08-01",
    value: 124.6,
    change: 1.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1994-07-01",
    value: 144.5,
    change: 1.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1994-06-01",
    value: 172.5,
    change: 2.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1994-05-01",
    value: 180.2,
    change: 5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1994-04-01",
    value: 248.1,
    change: 6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1994-03-01",
    value: 261.2,
    change: 8.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1994-02-01",
    value: 264.1,
    change: 5.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1994-01-01",
    value: 272.1,
    change: 4.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1993-12-01",
    value: 295.5,
    change: 7.4,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1993-11-01",
    value: 317,
    change: 4.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1993-10-01",
    value: 314.6,
    change: 16.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1993-09-01",
    value: 290.6,
    change: 10.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1993-08-01",
    value: 287.8,
    change: 10.8,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1993-07-01",
    value: 261.7,
    change: 13.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1993-06-01",
    value: 229.7,
    change: 5.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1993-05-01",
    value: 225.9,
    change: 30.4,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1993-04-01",
    value: 180.1,
    change: 10,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1993-03-01",
    value: 166.5,
    change: 9.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1993-02-01",
    value: 168.7,
    change: 8.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1993-01-01",
    value: 179.2,
    change: 11.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1992-12-01",
    value: 199.2,
    change: 13.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1992-11-01",
    value: 200.5,
    change: 13.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1992-10-01",
    value: 193.5,
    change: 9.6,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1992-09-01",
    value: 195.7,
    change: 10.1,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1992-08-01",
    value: 188.2,
    change: 3.4,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1992-07-01",
    value: 209.9,
    change: 3.2,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1992-06-01",
    value: 228.9,
    change: 4.3,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1992-05-01",
    value: 221.6,
    change: 12.1,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1992-04-01",
    value: 201.5,
    change: 4.7,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1992-03-01",
    value: 264.4,
    change: 10,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1992-02-01",
    value: 253.1,
    change: 12.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1992-01-01",
    value: 236,
    change: 19.5,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1991-12-01",
    value: 222.8,
    change: 13.7,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1991-11-01",
    value: 216.9,
    change: 10.9,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
  {
    date: "1991-10-01",
    value: 252.6,
    change: 10.4,
    source: {
      value: "http://statistici.insse.ro/",
      type: "link",
      label: "statistici.insse.ro",
    },
  },
].sort(function (a: any, b: any) {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return (parseISO(a.date) as any) - (parseISO(b.date) as any);
}) as Array<TypeInflation>;
