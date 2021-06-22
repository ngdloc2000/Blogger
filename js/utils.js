export function getDataFromDoc(doc) {
  return doc.data();
}
/**
 *
 * @param {Array} docs
 * @returns {Array}
 */

export function getDataFromDocs(docs) {
  return docs.map(function (doc) {
    return getDataFromDoc(doc);
  });
}
