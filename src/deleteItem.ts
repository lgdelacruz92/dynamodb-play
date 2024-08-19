import AWS from "aws-sdk";

const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });
const deleteItem = async () => {
  const params: AWS.DynamoDB.DocumentClient.DeleteItemInput = {
    TableName: "Movies",
    Key: {
      Year: 2023,
      Title: "The Great Adventure",
    },
  };

  try {
    const result = await docClient.delete(params).promise();
    console.log("Item Deleted:", result);
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};

deleteItem();
