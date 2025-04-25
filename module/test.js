// 1st import 
import { admin } from "./admin.js";
admin.name = "1st import";

// 2nd import
import { admin as admin1 } from "./admin.js";
alert(admin1.name); // it changes the default admin name from to 1st import
// so even if we import multiple times, it is evaluated once and refrence the same object


