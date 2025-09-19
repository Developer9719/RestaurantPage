// console.log("Test. Script is running.");
/**
 * This is the webpack entry point. It uses exported functions from pageLoad.js and imports it here to display the 
 * page dynamically.
 * 
 * Basically the connection points for all scripts
 */

// Imports the function from the file
import { skeletonWebsite } from "./skeleton"; 
import { homepageContent } from "./homepage";
import { menu } from "./menu"
import { contact } from "./contact"

// Runs the function 
skeletonWebsite(); 
homepageContent();
menu();
contact();