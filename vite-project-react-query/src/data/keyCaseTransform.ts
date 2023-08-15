/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import _ from "lodash"
function _recursionProcess<T>(
  json: object | T[],
  processor: (_: string) => string
): any {
  return _.reduce(
    json,
    (result, val, key) =>
      _.set(
        result,
        processor(key),
        _.isObject(val) ? _recursionProcess(val, processor) : val
      ),
    _.isArray(json) ? [] : {}
  )
}
export function camelCase(json: object) {
  return _recursionProcess(json, (x) => _.camelCase(x))
}
export function snakeCase(json: object) {
  return _recursionProcess(json, _.snakeCase)
}
