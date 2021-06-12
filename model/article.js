import data from "../js/dataIndex.js";
export async function getArticleByID(id) {
  return data.find(function (item) {
    return item.id == id;
  });
}
