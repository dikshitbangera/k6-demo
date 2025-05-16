import http from 'k6/http';
import { check } from 'k6';


export default function () {

    const baseUrl = 'https://test.k6.io';

    const response = http.get(baseUrl);

    const success = check(response, {'status is 200': (r) => r.status === 200 });
    
    }

export const options = {
    scenarios: {
        my_scenario: {
            executor: 'constant-arrival-rate',
            rate: 2,
            timeUnit: '1s',
            duration: '10s',
            preAllocatedVUs: 10,
            maxVUs: 100,
        },
    },
};
