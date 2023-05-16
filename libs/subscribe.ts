import { mutate } from 'swr';

const GRAPHQL_ENDPOINT_WS = 'ws://regular-monarch-92.hasura.app/v1/graphql';

const headers = {
  'Content-Type': 'application/json',
  'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_ADMIN,
};

const subscribe = async (...args: any[]) => {
  if (typeof window !== 'undefined') {
    const ws = new WebSocket(GRAPHQL_ENDPOINT_WS, 'graphql-ws');
    const init_msg = {
      type: 'connection_init',
      payload: { headers },
    };
    ws.onopen = (event) => {
      ws.send(JSON.stringify(init_msg));
      const msg = {
        id: '1',
        type: 'start',
        payload: {
          variables:{},
          extensions: {},
          operationName: null,
          query: args[0],
        },
      };
      ws.send(JSON.stringify(msg));
    };
    ws.onmessage = (data) => {
      const finalData = JSON.parse(data.data);
      if (finalData.type === 'data') {
        mutate('subscription', finalData.payload.data, false);
        return finalData.payload.data;
      }
    };
  }
};

export default subscribe;
