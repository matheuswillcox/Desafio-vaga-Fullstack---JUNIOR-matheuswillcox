import AppDataSource from "./data-source";
import  app from "./app";

const init = () => {
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!");
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err);
    });

  app.listen(3001);
};

init();
