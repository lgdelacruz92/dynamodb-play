import AWS from "aws-sdk";

const docClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-1" });
const queryItems = async () => {
  const params: AWS.DynamoDB.DocumentClient.QueryInput = {
    TableName: "Movies",
    KeyConditionExpression: "#yr = :year",
    ExpressionAttributeNames: {
      "#yr": "Year",
    },
    ExpressionAttributeValues: {
      ":year": 2023,
    },
  };

  try {
    const result = await docClient.query(params).promise();
    console.log("Query Result:", result.Items);
  } catch (error) {
    console.error("Error querying items:", error);
  }
};

queryItems();
