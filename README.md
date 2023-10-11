# cityfans-frontend
## The front-end code for the cityfans web project

This is mostly vanilla. Using Sass and Gulp to enhance output performance.

### For distribution (app)
- *CSS*: These files are inside `html/app/assets/css/phoenix.css` and are minified and concatened based on the source files written in Sass.
- *JS*: These files are inside `html/app/assets/js/all.js` and are minified and concatened based on the source files written in vanilla JS.
- *Images*: The files under `html/app/assets/img/ui` are for UI details and shouldn’t be replaced or deleted, whereas `html/app/assets/img/content` are just for mocking up and can be replaced by images coming from our database. This includes videos.
 
### For development (src)
- *CSS*: These files are inside `html/src/assets/css/` and use the `.scss` extension, combined in one after running `gulp`
- *JS*: These files are inside `html/src/assets/js/` and are minified and concatened after running `gulp`

### Pages
The `html` pages are on the root of the folder `html` and point to the files inside `html/app/…`.