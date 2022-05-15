import { sayHello } from "./modules/utils";
import _ from "lodash";
import { sayTs } from "./modules/utils-ts";
import "./style.css";

const container = '<div class="red">111</div>';

const arr = _.concat([1, 2, 3], 4, [5, 6]);

sayHello("Hello Rollup!" + arr);
sayTs("Hello Ts!");
