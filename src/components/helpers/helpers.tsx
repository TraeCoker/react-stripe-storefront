const API = 'http://localhost:3000';

type Opts = {
    /**Requests other than default 'POST' */
    method?: string,
    /**Optional body for 'POST' and 'PATCH' requests */
    body?: {},
};

export async function fetchFromApi(endpointURL: string, opts?: Opts): Promise<JSON> {
    const { method, body } = {method: 'POST', body: null, ...opts };

    const res = await fetch(`${API}/${endpointURL}`, {
        ...(body && { body: JSON.stringify(body) }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    return res.json();
}