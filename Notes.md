# Notes

1. I've decided to use styled-components instead the classical method of style={{}}, for try a new plugin and learn new stuff, also its a good way to use pure css

## To do the database products populate
1. I downloaded a GameStop database from: https://data.world/crawlfeeds/gamestop-products-list-dataset

2. Curate the data using Regex replaces to clean HTML tags, duplicated urls...

3. Finally I created populate.sql. Using excel to build INSERT INTO sentences, grabbing only the data I wanted for each column

## Warnings

1. @material-ui/core/Tooltip has an internal warning about deprecated function `react-dom.development.js:86 Warning: findDOMNode is deprecated in StrictMode`. I studied the warning and I reach the conclusion its not serious, but if we want to make disappear this warning I sugest this options; 
	* Create a pure html/css tooltip but it causes problems with the slider; because it´s from @material-ui/core/.
	* Don´t use custom tooltip, but big prices are going to be weird.
	* Update the library to @mui5, I didn't try this option for the moment.