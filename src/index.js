// console.log("Test. Script is running.");
/**
 * This is the webpack entry point. It uses exported functions from pageLoad.js and imports it here to display the 
 * page dynamically.
 * 
 */

import { loadPage } from "./pageLoad.js";
import "./content.js";

loadPage();