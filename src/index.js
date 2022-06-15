import _ from 'lodash'

const lang = {}
const todo = {}

function t(k, def, def2) {
  let args = null
  if (_.isObject(def)) {
    args = def
    def = def2
  }
  
  let result = _.get(lang, k, null)
  if (result === null) {
    todo[k] = result
    result = def || k
  }
  
  if (args) {
    try {
      result = _.template(result)(args)
    } catch (e) {
      console.log(e)
    }
  }
  return result
}

function _t(k, d1, d2) {
  let str = t(k, d1, d2)
  return { __html: str }
}

function init(obj) {
  Object.assign(lang, obj)
}

function getTodo() {
  return Object.keys(todo).sort().reduce(
    (obj, key) => { 
      obj[key] = todo[key]; 
      return obj;
    }, 
    {}
  );
}

export { init, t, _t, getTodo }
