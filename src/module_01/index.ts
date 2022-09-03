import primitive_types from './01-primitive_types';
import enums from './02-enums';
import any_and_unknown from './03-any_unknown';
import union_and_intersection from './04-union_and_intersection';
import collection_types from './05-collection_types';

export const module_01 = function () {
  primitive_types();
  enums();
  any_and_unknown();
  union_and_intersection();
  collection_types();
};
