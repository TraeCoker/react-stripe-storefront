const API = 'http://localhost:3000';

type Opts = {
    method?: string,
    body?: {},
};

export async function fetchFromApi(endpointURL: string, opts?: Opts) {
    const { method, body } = {method: 'POST', body: null, ...opts };

    
}