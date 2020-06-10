import { serviceApi as http } from './api';

const listRateBallInSweepatakes = () => http.get(`/analizer`);
const listRateBallCousinInSweepatakes = () => http.get(`/analizer/cousin`);
const listAllPeriodBallInSweepatakes = (payload) => http.get(`/analizer/period-ball/${payload}`);
const listAllPeriodAllBallInSweepatakes = () => http.get(`/analizer/period-balls`);

export default {
    listRateBallInSweepatakes,
    listRateBallCousinInSweepatakes,
    listAllPeriodBallInSweepatakes,
    listAllPeriodAllBallInSweepatakes,

}