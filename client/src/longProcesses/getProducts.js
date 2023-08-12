/* eslint-disable no-restricted-globals */
import { listPageSize } from "../utils/constants";

self.onmessage = (e) => {
    const data = JSON.parse(e.data);

    if (data.action !== 'getData') {
        return;
    }
        const { products, thePageNumber } = data;
        const items = products.slice(
          (data.thePageNumber - 1) * listPageSize,
          data.thePageNumber * listPageSize
        );
        const response = {
            loading: false,
            list: items,
            page: thePageNumber + 1,
        };

        self.postMessage(JSON.stringify(response));
}

export { };