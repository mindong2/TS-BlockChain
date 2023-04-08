import { init, exit } from "./myPackage";
const hello = () => "hi";

init({
  debug: true,
  url: "www",
});

exit(1);
