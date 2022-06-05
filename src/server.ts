import { serverHttp } from './http';

import './websocket';

serverHttp.listen(3000, () => {
  console.log('Server started on port 3000');
});
