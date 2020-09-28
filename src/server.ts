import { app } from "./app";
import { sequelize } from "./config/database";

app.listen(process.env.PORT || 3333, () => {

    sequelize.authenticate().then(async() => {
        try {
            await sequelize.sync({force: false});
        } catch(error) {
            console.log(error.message);
        }
    });  
});