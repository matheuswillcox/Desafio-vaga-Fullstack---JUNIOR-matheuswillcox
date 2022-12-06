import { DataSource } from "typeorm";
import * as dotenv from "dotenv";


const AppDataSource =
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/*.ts"],
        synchronize: true,
      })
    : new DataSource({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "1234",
        database: "postgres",
        synchronize: false,
        logging: true,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      });


export default AppDataSource;
