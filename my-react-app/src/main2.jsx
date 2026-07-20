import { createRoot } from 'react-dom/client';

import WithoutFragments from './WithoutFragments.jsx';
import WithFragments from './WithFragments.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <div>
    <WithoutFragments />
    <WithFragments />
  </div>
);
