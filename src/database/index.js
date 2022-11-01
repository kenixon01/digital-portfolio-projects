//connects the database to the server
const { ApolloServer, gql } = require('apollo-server');
const { MongoClient, ObjectID } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();
const { DB_URI, DB_NAME} = process.env;

//defining the different types in the schema
const typeDefs = gql`
    type Query {
      getProject(name: String!): Project
    }
    
    #defining what a item is in our database
    type Project{
      id: ID!,
      name: String!,
      url: String!
      description: String!
    }
    
    type Mutation {
      createProject(name: String!, url: String!, description: String!): Project!
    }
`;

const resolvers = {
  Query:  {
    getProject: async (_, { name }, { db }) => {
      return await db.collection('Projects').findOne( { name });
    },

  },
  Mutation: {  
  createProject: async(_, { name, url, description } , { db }) => {
    const project = {
      name,
      url,
      description
    }
    
    const result = await db.collection('Projects').insert(project);

    return result.ops[0]
  },

  },

  Project: {
    id: ({ _id, id }) => _id || id,
  }
} 
    

const start = async () => {
  const client = new MongoClient('mongodb+srv://admin:admin@myportfolio.alwkvu1.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });
  await client.connect();
  const db = client.db('Digital+Portfolio'); // defines the database
  //we wait to connect the sever untill  we connect to the database we will start the server
  //we need a connection to the server in order to have access to the data

  const context = {
    db,
  }
  const server = new ApolloServer({
      typeDefs,
      resolvers,
      context,
      introspection: true
  }); 
  
  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
      console.log(`🚀  Server ready at ${url + 'knportfolio'}`);
  });
}

start();