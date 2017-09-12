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
 };

 return {
   get,
   set
 };
})();

module.exports = sgtFields;
