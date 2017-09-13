const sgtFields = (() => {
 const get = (object, key) => {
   if (!key || typeof key !== 'string') {
     return undefined;
   }
   const keys = key.split('.');
   return keys.reduce((previous, current) => {
     if (previous && current) {
       return previous[current];
     }
     return undefined;
   }, object);
 };

 const set = (object, key, value) => {
   if (!key || typeof key !== 'string') {
     return object;
   }
   let actual;
   const keys = key.split('.').reverse();
   const result = keys.reduce((previous, current) => {
     actual = current;
     if (Object.keys(previous).length === 0 && current) {
       previous[current] = value;
       return previous;
     }
     let returnLast = {};
     returnLast[current] = previous;
     return returnLast;
   }, {});
   object[actual] = result[actual];
   return object;
 };

 return {
   get,
   set
 };
})();

module.exports = sgtFields;
