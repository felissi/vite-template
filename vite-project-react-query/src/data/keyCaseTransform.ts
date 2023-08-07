import _, { extend } from "lodash"
function _recursionProcess<TJSON extends object>(
  json: TJSON,
  processor: (_: string) => string
) {
  return _.reduce(
    json,
    (result, val, key) => ({
      ...result,
      [processor(key)] = _.isObject(val) ? _recursionProcess(val, processor):val
    }),
    {}
  )
}
export function camelCase(json: object) {
  return _recursionProcess(json, _.camelCase)
}
export function snakeCase(json: object) {
  return _recursionProcess(json, _.snakeCase)
}
