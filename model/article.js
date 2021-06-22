import { getDataFromDocs } from "../js/utils.js";
let response = await firebase.firestore().collection("article-id").get();
let d = getDataFromDocs(response.docs);
console.log(d);

export async function getArticleByID(id) {
  return d.find(function (item) {
    return item.id == id;
  });
}
