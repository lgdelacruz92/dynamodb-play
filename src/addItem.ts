import AWS from "aws-sdk";

const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });

const addItem = async () => {
  const params: AWS.DynamoDB.DocumentClient.PutItemInput = {
    TableName: "Movies",
    Item: {
      Year: 2023,
      Title: "The Great Adventure 2",
      Genre: "Adventure",
    },
  };

  try {
    const result = await docClient.put(params).promise();
    console.log("Item Added:", result);
  } catch (error) {
    console.error("Error adding item:", error);
  }
};

addItem();
