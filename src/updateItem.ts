import AWS from "aws-sdk";

const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });

const updateItem = async () => {
  const params: AWS.DynamoDB.DocumentClient.UpdateItemInput = {
    TableName: "Movies",
    Key: {
      Year: 2023,
      Title: "The Great Adventure",
    },
    UpdateExpression: "set Genre = :g",
    ExpressionAttributeValues: {
      ":g": "Adventure",
    },
    ReturnValues: "UPDATED_NEW",
  };

  try {
    const result = await docClient.update(params).promise();
    console.log("Item Updated:", result.Attributes);
  } catch (error) {
    console.error("Error updating item:", error);
  }
};

updateItem();
