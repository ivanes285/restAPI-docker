import { app } from "./app.js";
import  colors from "colors";
import morgan from "morgan";
import routv1 from "./routes/index.js";

app.use(morgan("dev"));

app.use(routv1)


app.listen(3000, () => {
console.log( `Server Listening on port 3000! ${colors.blue('http://localhost:3000')}`)
});



