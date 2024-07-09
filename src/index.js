import nx from '@jswork/next';

// logic react components
import ife from '@jswork/react-if-else';
import rcm from '@jswork/react-condition-manager';
import rsm from '@jswork/react-status-manager';
import list from '@jswork/react-list';


nx.$rc = { ife, rcm, rsm, list };

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = nx.$rc;
}

export default nx.$rc;
