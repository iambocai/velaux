import { get } from './request';
import { repository } from './productionLink';
import { getDomain } from '../utils/common';

const baseURLOject = getDomain();
const baseURL = baseURLOject.APIBASE;

export function getChartValues(params: {
  url: string;
  repoType: string;
  chart: string;
  version: string;
}) {
  const url =
    baseURL + repository + '/charts/' + params.chart + '/versions/' + params.version + '/values';
  return get(url, { params: { repoUrl: params.url, repoType: params.repoType } }).then(
    (res) => res,
  );
}

export function getCharts(params: { url: string; repoType: string }) {
  const url = baseURL + repository + '/charts';
  return get(url, { params: { repoUrl: params.url, repoType: params.repoType } }).then(
    (res) => res,
  );
}

export function getChartVersions(params: { url: string; repoType: string; chart: string }) {
  const url = baseURL + repository + '/charts/' + params.chart + '/versions';
  return get(url, { params: { repoUrl: params.url, repoType: params.repoType } }).then(
    (res) => res,
  );
}