import service from "./config";

const getData = () => {
  return service.get("/items");
};

const postData = (todo) => {
  return service.post("/items", todo);
};

const deleteData = (id) => {
  return service.delete(`/items/${id}`);
};

const editData = (id, todo) => {
  return service.put(`/items/${id}`, todo);
};

export { getData, postData, deleteData, editData };
