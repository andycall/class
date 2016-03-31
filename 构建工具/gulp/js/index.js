'use strict';

var _marked = [makeSimpleGenerator].map(regeneratorRuntime.mark);

function makeSimpleGenerator(array) {
  var nextIndex;
  return regeneratorRuntime.wrap(function makeSimpleGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          nextIndex = 0;

        case 1:
          if (!(nextIndex < array.length)) {
            _context.next = 6;
            break;
          }

          _context.next = 4;
          return array[nextIndex++];

        case 4:
          _context.next = 1;
          break;

        case 6:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}

var gen = makeSimpleGenerator(['yo', 'ya']);

gen.next().value; // 'yo'
gen.next().value; // 'ya'
gen.next().done; // true