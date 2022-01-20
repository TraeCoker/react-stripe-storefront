const API = 'http://localhost:3000';

type Opts = {
    /**Requests other than default 'POST' */
    method?: string,
    /**Optional body for 'POST' and 'PATCH' requests */
    body?: {},
};

export async function fetchFromAPI(endpointURL: string, opts?: Opts): Promise<any> {
    const { method, body } = {method: 'POST', body: null, ...opts };

    const res = await fetch(`${API}/${endpointURL}`, {
        method,
        ...(body && { body: JSON.stringify(body) }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    return res.json();
}