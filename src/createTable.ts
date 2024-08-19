import AWS from "aws-sdk";

// Configure DynamoDB
const dynamodb = new AWS.DynamoDB({ region: "us-east-1" });

const createTable = async () => {
  const params: AWS.DynamoDB.CreateTableInput = {
    TableName: "Movies",
    KeySchema: [
      { AttributeName: "Year", KeyType: "HASH" }, // Partition Key
      { AttributeName: "Title", KeyType: "RANGE" }, // Sort Key
    ],
    AttributeDefinitions: [
      { AttributeName: "Year", AttributeType: "N" },
      { AttributeName: "Title", AttributeType: "S" },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5,
    },
  };

  try {
    const result = await dynamodb.createTable(params).promise();
    console.log("Table Created:", result);
  } catch (error) {
    console.error("Error creating table:", error);
  }
};

createTable();
