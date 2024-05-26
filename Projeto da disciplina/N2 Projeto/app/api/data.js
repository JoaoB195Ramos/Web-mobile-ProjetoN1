// app/api/data.js
export default async function handler(req, res) {
    const { method } = req;
  
    switch (method) {
      case "GET":
        const getData = await fetch("http://localhost:3001/items");
        const items = await getData.json();
        res.status(200).json(items);
        break;
      case "POST":
        const newItem = req.body;
        const postData = await fetch("http://localhost:3001/items", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newItem),
        });
        const createdItem = await postData.json();
        res.status(201).json(createdItem);
        break;
      case "PUT":
        const updateItem = req.body;
        const putData = await fetch(
          `http://localhost:3001/items/${updateItem.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateItem),
          },
        );
        const updatedItem = await putData.json();
        res.status(200).json(updatedItem);
        break;
      case "DELETE":
        const { id } = req.body;
        await fetch(`http://localhost:3001/items/${id}`, {
          method: "DELETE",
        });
        res.status(204).end();
        break;
      default:
        res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
  