# Honours research project instrument: Load-shedding schedules

A research instrument created as part of my research into the user experience of various technqiues for displaying load-shedding schedules in South Africa

## About the research:

Honours research project investigating the levels of usability presented by various techniques for displaying load-shedding schedules. Involved the development and statistical evaluation of 5 primary load-shedding display techniques. The background, theory, results, analysis and discussion of the project was presented in the form of a 75 page thesis presented in partial fulfillment of the Honours degree in Socio-Informatics.

### Tech Stack:

The site was built using Python and Django as a backend, with HTML, CSS (Bootstrap) and Javasfript with some JQuery on the front end. 

5 load-shedding schedules are displayed. The information is scraped from a endpoint for Eskom. An algorithm then works out based on the time of day, teh day of teh week and teh current area as well as the current stage which areas are affected at particular times. This information is then used on some of the schedules.

The first schedule simply displays schedules as tables as per normal. The second schedule also emplys teh table technique, but only for the current stage and it hightlights the zones currently affected. The third schedule turns the information into a text format. The fourth schedule interactiviely asks the user to select their zone or type it in - displaying only the information relevant to them about their particular zone at the current time and date. The final method displays the information on a map created with Google Maps API. This map was created using the SVG coordinates to represent the areas affected as map overlays. The colours of the overlays change depending on the time and stage of load-shedding. 

A seperate research project investigated this map based technique and is viewable here:

http://dl.acm.org/citation.cfm?id=2815782.2815784 (Published as part of the SOuth African Insititue of Computer Science and Information technology 2015 Conference)
